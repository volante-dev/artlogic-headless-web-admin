import "server-only";
import {randomUUID} from "node:crypto";
import {NextResponse} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {contactError,isContactOperation} from "./contact-errors";
import {editorialError,isEditorialOperation,type ErrorDetail} from "./site-content-errors";
import {operations,type Operation} from "./allowlist";
import {resourceVersion} from "../resource-version";
export const privateHeaders={"Cache-Control":"private, no-store","X-Content-Type-Options":"nosniff","Referrer-Policy":"no-referrer"};
const messages:Record<number,string>={413:"La taille autorisée est dépassée.",415:"Format non pris en charge.",400:"Requête invalide.",401:"Connexion requise.",403:"Accès refusé.",404:"Ressource introuvable.",409:"Cette opération a déjà été traitée.",412:"La ressource a changé.",428:"Version requise.",429:"Trop de demandes. Réessayez plus tard.",503:"Service temporairement indisponible."};
export class BffError extends Error {
  constructor(readonly status:number,readonly code:string,readonly requestId:string=randomUUID(),readonly retryAfter?:string,readonly runId?:string,readonly details?:ErrorDetail[]){super(code);}
}
export function failure(error:unknown):NextResponse {
  const known=error instanceof BffError?error:new BffError(503,"service_unavailable");
  const response=NextResponse.json({error:{code:known.code,message:messages[known.status]??messages[503],requestId:known.requestId,...(known.details?{details:known.details}:{}),...(known.runId?{details:[{field:"runId",reason:known.runId}]}:{})}},{status:known.status,headers:privateHeaders});
  if(known.retryAfter)response.headers.set("Retry-After",known.retryAfter);return response;
}
export interface BackendInput {bytes?:Uint8Array;mime?:string;session?:string;csrf?:string;body?:unknown;params?:Record<string,string>;query?:URLSearchParams;idempotencyKey?:string;ifMatch?:string}
export const uuidPattern=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export async function backendRequest<T>(operation:Operation,input:BackendInput={}):Promise<{body:T;status:number;headers:Headers}>{
  const config=loadConfig(),route=operations[operation];
  const path=route.path.replace(/\{(\w+)\}/g,(_match,key)=>{const value=input.params?.[key];if(!value||!uuidPattern.test(value))throw new BffError(400,"invalid_request");return value;});
  // Build every header from trusted configuration/cookies. No browser headers are forwarded.
  const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY")});
  if(input.session)headers.set("X-Admin-Session",input.session);
  if(input.csrf)headers.set("X-CSRF-Token",input.csrf);
  if(input.body!==undefined)headers.set("Content-Type","application/json");
  if(input.bytes){if(operation!=="siteLogoUpload"||input.body!==undefined||!input.mime||!["image/png","image/jpeg","image/webp"].includes(input.mime))throw new BffError(415,"unsupported_media_type");if(input.bytes.byteLength>2097152)throw new BffError(413,"payload_too_large");headers.set("Content-Type",input.mime);}
  if(input.idempotencyKey){if(!uuidPattern.test(input.idempotencyKey))throw new BffError(400,"invalid_request");headers.set("Idempotency-Key",input.idempotencyKey);}
  if(input.ifMatch){
    const pattern=operation==="connectorSettingsUpdate"?/^"[1-9][0-9]{0,19}"$/:operation==="catalogPlacement"?/^"artwork-catalog-[0-9a-f-]{36}-[0-9]+"$/:operation==="catalogFormatUpdate"||operation==="catalogModeUpdate"?/^"artwork-catalog-(?:mode-)?[0-9a-f-]{36}-(?:0|[1-9][0-9]{0,18})"$/:operation==="retryContactInquiry"?/^"inquiry-[0-9a-f-]{36}-[1-9][0-9]*"$/:operation==="siteContentUpdate"?/^"site-content-[1-9][0-9]*-[a-f0-9]{64}"$/:/^"publication-[0-9]+"$/;
    if(!pattern.test(input.ifMatch))throw new BffError(400,"invalid_request");headers.set("If-Match",input.ifMatch);
  }

  try{
    const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+path+(input.query?.size?"?"+input.query.toString():""),{method:route.method,headers,body:input.bytes?new Uint8Array(input.bytes).buffer:input.body===undefined?undefined:JSON.stringify(input.body),
      cache:"no-store",redirect:"error",signal:AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
    if(response.status===204)return {body:undefined as T,status:204,headers:response.headers};
    if(isContactOperation(operation)&&response.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(503,"contact_unavailable");
    const body=await boundedJson(response,isContactOperation(operation)?262144:1048576);
    if(!response.ok){
      if(isContactOperation(operation)){const projected=contactError(operation,response.status,body,response.headers.get("retry-after"));throw new BffError(projected.status,projected.code,projected.requestId,projected.retryAfter,undefined,projected.details);}
      if(isEditorialOperation(operation)){
        if(response.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(503,"service_unavailable");
        const projected=editorialError(operation,response.status,body,response.headers.get("retry-after"));
        throw new BffError(projected.status,projected.code,projected.requestId,projected.retryAfter,undefined,projected.details);
      }
      const status=Object.hasOwn(messages,response.status)&&![413,415].includes(response.status)?response.status:503;
      const codes=new Set(["access_denied","revision_conflict","dependency_unavailable","binding_version_conflict","binding_state_conflict","invalid_request","invalid_cursor","unauthorized","forbidden","csrf_invalid","not_found","oauth_transaction_consumed","rate_limited","service_unavailable","sync_in_progress","idempotency_conflict","idempotency_expired","source_cooldown","catalog_changed","catalog_membership_changed","precondition_failed","precondition_required","artwork_unavailable","artwork_in_editorial_use"]);
      const candidateCode=typeof body?.error==="string"&&operation.startsWith("connector")?body.error:body?.error?.code;
      const code=codes.has(candidateCode)?candidateCode:"service_unavailable";
      const requestId=/^[0-9a-f-]{36}$/.test(body?.error?.requestId??"")?body.error.requestId:undefined;
      const retry=response.headers.get("retry-after"),detail=body?.error?.details;
      const runId=code==="sync_in_progress"&&Array.isArray(detail)?detail.find((v:unknown)=>typeof v==="object"&&v!==null&&"field" in v&&v.field==="runId"&&"reason" in v&&typeof v.reason==="string"&&uuidPattern.test(v.reason))?.reason:undefined;
      const usages=code==="artwork_in_editorial_use"&&Array.isArray(detail)?detail.slice(0,64).filter((value:unknown):value is ErrorDetail=>Boolean(value&&typeof value==="object"&&"field" in value&&typeof value.field==="string"&&/^\/(publications|news)\/[a-f0-9-]{36}$/i.test(value.field)&&"reason" in value&&value.reason==="active_article_reference")):undefined;
      throw new BffError(status,code,requestId,retry&&/^\d{1,6}$/.test(retry)?retry:undefined,runId,usages);
    }
    const resultHeaders=new Headers(response.headers),version=resourceVersion(response.headers);
    if(version)resultHeaders.set("ETag",version);
    return {body:body as T,status:response.status,headers:resultHeaders};
  }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,isContactOperation(operation)?"contact_unavailable":"service_unavailable");}
}
export async function backendJson<T>(operation:Operation,input:BackendInput={}):Promise<T>{return (await backendRequest<T>(operation,input)).body;}
export async function backendMedia(mediaId:string,session:string):Promise<Response>{
  if(!uuidPattern.test(mediaId))throw new BffError(400,"invalid_request");const config=loadConfig();
  try{
    const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+operations.media.path.replace("{mediaId}",mediaId),{
      headers:{Accept:"image/webp","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":session},cache:"no-store",redirect:"error",signal:AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
    if(!response.ok){await response.body?.cancel();throw new BffError(Object.hasOwn(messages,response.status)&&![413,415].includes(response.status)?response.status:503,({401:"unauthorized",403:"forbidden",404:"not_found",429:"rate_limited"} as Record<number,string>)[response.status]??"service_unavailable");}
    if(!response.body||response.headers.get("content-type")?.split(";")[0]!=="image/webp"){await response.body?.cancel();throw new Error();}
    const headers=new Headers({...privateHeaders,"Content-Type":"image/webp"}),length=response.headers.get("content-length");if(length&&/^\d+$/.test(length))headers.set("Content-Length",length);
    return new Response(response.body,{status:200,headers});
  }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"service_unavailable");}
}

async function boundedJson(response:Response,limit=1048576){
  const reader=response.body?.getReader();if(!reader)throw new Error();
  const chunks:Uint8Array[]=[];let size=0;
  try{for(;;){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>limit)throw new Error();chunks.push(part.value);}return JSON.parse(Buffer.concat(chunks).toString("utf8"));}finally{await reader.cancel().catch(()=>undefined);}
}
export async function backendSiteLogo(logoId:string,session:string):Promise<Response>{
 if(!uuidPattern.test(logoId))throw new BffError(400,"invalid_request");const config=loadConfig();
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+operations.siteLogoPreview.path.replace("{logoId}",logoId),{headers:{Accept:"image/webp, application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":session},cache:"no-store",redirect:"error",signal:AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
  if(!response.ok){if(response.headers.get("content-type")?.split(";")[0]!=="application/json"){await response.body?.cancel();throw new Error();}const error=editorialError("siteLogoPreview",response.status,await boundedJson(response),response.headers.get("retry-after"));throw new BffError(error.status,error.code,error.requestId,error.retryAfter,undefined,error.details);}
  const length=response.headers.get("content-length");if(!response.body||response.headers.get("content-type")?.split(";")[0]!=="image/webp"||length&&(!/^[0-9]+$/.test(length)||Number(length)>2097152)){await response.body?.cancel();throw new Error();}
  return new Response(response.body,{status:200,headers:{...privateHeaders,"Content-Type":"image/webp",...(length?{"Content-Length":length}:{})}});
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"service_unavailable");}
}
