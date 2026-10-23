import "server-only";
import {randomUUID} from "node:crypto";
import {NextResponse} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {operations,type Operation} from "./allowlist";
export const privateHeaders={"Cache-Control":"private, no-store","X-Content-Type-Options":"nosniff","Referrer-Policy":"no-referrer"};
const messages:Record<number,string>={400:"Requête invalide.",401:"Connexion requise.",403:"Accès refusé.",404:"Ressource introuvable.",409:"Cette opération a déjà été traitée.",412:"La ressource a changé.",428:"Version requise.",429:"Trop de demandes. Réessayez plus tard.",503:"Service temporairement indisponible."};
export class BffError extends Error {
  constructor(readonly status:number,readonly code:string,readonly requestId=randomUUID(),readonly retryAfter?:string,readonly runId?:string){super(code);}
}
export function failure(error:unknown):NextResponse {
  const known=error instanceof BffError?error:new BffError(503,"service_unavailable");
  const response=NextResponse.json({error:{code:known.code,message:messages[known.status]??messages[503],requestId:known.requestId,...(known.runId?{details:[{field:"runId",reason:known.runId}]}:{})}},{status:known.status,headers:privateHeaders});
  if(known.retryAfter)response.headers.set("Retry-After",known.retryAfter);return response;
}
export interface BackendInput {session?:string;csrf?:string;body?:unknown;params?:Record<string,string>;query?:URLSearchParams;idempotencyKey?:string;ifMatch?:string}
export const uuidPattern=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export async function backendRequest<T>(operation:Operation,input:BackendInput={}):Promise<{body:T;status:number;headers:Headers}>{
  const config=loadConfig(),route=operations[operation];
  const path=route.path.replace(/\{(\w+)\}/g,(_match,key)=>{const value=input.params?.[key];if(!value||!uuidPattern.test(value))throw new BffError(400,"invalid_request");return value;});
  // Build every header from trusted configuration/cookies. No browser headers are forwarded.
  const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY")});
  if(input.session)headers.set("X-Admin-Session",input.session);
  if(input.csrf)headers.set("X-CSRF-Token",input.csrf);
  if(input.body!==undefined)headers.set("Content-Type","application/json");
  if(input.idempotencyKey){if(!uuidPattern.test(input.idempotencyKey))throw new BffError(400,"invalid_request");headers.set("Idempotency-Key",input.idempotencyKey);}
  if(input.ifMatch){if(!/^"publication-[0-9]+"$/.test(input.ifMatch))throw new BffError(400,"invalid_request");headers.set("If-Match",input.ifMatch);}
  try{
    const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+path+(input.query?.size?"?"+input.query.toString():""),{method:route.method,headers,body:input.body===undefined?undefined:JSON.stringify(input.body),
      cache:"no-store",redirect:"error",signal:AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
    if(response.status===204)return {body:undefined as T,status:204,headers:response.headers};
    const reader=response.body?.getReader();if(!reader)throw new Error();
    const chunks:Uint8Array[]=[];let size=0;
    for(;;){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>1_048_576){await reader.cancel();throw new Error();}chunks.push(part.value);}
    const body=JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if(!response.ok){
      const status=Object.hasOwn(messages,response.status)?response.status:503;
      const codes=new Set(["invalid_request","invalid_cursor","unauthorized","forbidden","csrf_invalid","not_found","oauth_transaction_consumed","rate_limited","service_unavailable","sync_in_progress","idempotency_conflict","idempotency_expired","source_cooldown","catalog_changed","precondition_failed","precondition_required","artwork_unavailable"]);
      const code=codes.has(body?.error?.code)?body.error.code:"service_unavailable";
      const requestId=/^[0-9a-f-]{36}$/.test(body?.error?.requestId??"")?body.error.requestId:undefined;
      const retry=response.headers.get("retry-after"),detail=body?.error?.details;
      const runId=code==="sync_in_progress"&&Array.isArray(detail)?detail.find((v:unknown)=>typeof v==="object"&&v!==null&&"field" in v&&v.field==="runId"&&"reason" in v&&typeof v.reason==="string"&&uuidPattern.test(v.reason))?.reason:undefined;
      throw new BffError(status,code,requestId,retry&&/^\d{1,6}$/.test(retry)?retry:undefined,runId);
    }
    return {body:body as T,status:response.status,headers:response.headers};
  }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"service_unavailable");}
}
export async function backendJson<T>(operation:Operation,input:BackendInput={}):Promise<T>{return (await backendRequest<T>(operation,input)).body;}
export async function backendMedia(mediaId:string,session:string):Promise<Response>{
  if(!uuidPattern.test(mediaId))throw new BffError(400,"invalid_request");const config=loadConfig();
  try{
    const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+operations.media.path.replace("{mediaId}",mediaId),{
      headers:{Accept:"image/webp","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":session},cache:"no-store",redirect:"error",signal:AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
    if(!response.ok){await response.body?.cancel();throw new BffError(Object.hasOwn(messages,response.status)?response.status:503,({401:"unauthorized",403:"forbidden",404:"not_found",429:"rate_limited"} as Record<number,string>)[response.status]??"service_unavailable");}
    if(!response.body||response.headers.get("content-type")?.split(";")[0]!=="image/webp"){await response.body?.cancel();throw new Error();}
    const headers=new Headers({...privateHeaders,"Content-Type":"image/webp"}),length=response.headers.get("content-length");if(length&&/^\d+$/.test(length))headers.set("Content-Length",length);
    return new Response(response.body,{status:200,headers});
  }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"service_unavailable");}
}
