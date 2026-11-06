import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {articleOperations,type ArticleOperation} from "./allowlist";
import {BffError,failure,privateHeaders,uuidPattern} from "./client";
import {mutationProof} from "./csrf";
import {requiredSession} from "./sync-runs";
import {boundedBytes} from "./presentation";
import {resourceVersion} from "../resource-version";
import {articleError} from "./editorial-errors";
export const articleTag=/^"article-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}-[1-9][0-9]{0,18}"$/i;
const resourceTags={article:articleTag,template:/^"editorial-template-[a-f0-9-]{36}-[1-9][0-9]{0,18}"$/i,vocabulary:/^"editorial-vocabulary-[a-f0-9-]{36}-[1-9][0-9]{0,18}"$/i,term:/^"editorial-term-[a-f0-9-]{36}-[1-9][0-9]{0,18}"$/i,settings:/^"editorial-settings-[1-9][0-9]{0,18}"$/};
function queryFor(operation:ArticleOperation,query:URLSearchParams){
 const keys=operation==="compositionRequests"?["cursor","limit","idempotencyKey"]:operation==="compositionProposals"?["cursor","limit"]:operation==="list"?["kind","locale","q","lifecycle","published","scheduled","completeness","sort","catalogRevision","page","pageSize"]:operation==="relatedSuggestions"?["q","limit"]:operation==="termList"?["q","page","pageSize"]:operation==="versions"||operation==="artworkUsages"||operation==="templateList"?["page","pageSize"]:[];
 for(const key of query.keys())if(!keys.includes(key)||query.getAll(key).length!==1)throw new BffError(400,"invalid_request");
 if(query.toString().length>4096)throw new BffError(400,"invalid_request");return query;
}
export async function articleRequest(operation:ArticleOperation,request:NextRequest,params:Record<string,string>={}){
 const route:{method:string;path:string;resource?:keyof typeof resourceTags;ifMatch?:boolean;idempotent?:boolean;body?:boolean;responseTag?:boolean}=articleOperations[operation],mutation=route.method!=="GET",proof=mutation?mutationProof(request):{session:await requiredSession()},config=loadConfig();
 const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":proof.session});
 if("csrf" in proof)headers.set("X-CSRF-Token",proof.csrf);
 const path=route.path.replace(/\{(\w+)\}/g,(_match,key)=>{const id=params[key];if(!id||!uuidPattern.test(id))throw new BffError(400,"invalid_request");return id;});
 if(route.ifMatch){
  const tag=request.headers.get("if-match");if(!tag)throw new BffError(428,"precondition_required");if(!route.resource||!resourceTags[route.resource].test(tag))throw new BffError(400,"invalid_request");headers.set("If-Match",tag);
 }
 if(route.idempotent){
  const key=request.headers.get("idempotency-key");if(!key||!uuidPattern.test(key))throw new BffError(400,"invalid_request");headers.set("Idempotency-Key",key);
 }
 let body:ArrayBuffer|undefined;
 if(mutation&&route.body!==false){
  if(request.headers.get("content-type")?.split(";")[0]?.trim()!=="application/json")throw new BffError(415,"unsupported_media_type");
  const bytes=await boundedBytes(request.body,operation.startsWith("composition")?Math.min(numberValue(config,"EDITORIAL_REQUEST_BYTES"),numberValue(config,"EDITORIAL_AI_MAX_BODY_BYTES")):numberValue(config,"EDITORIAL_REQUEST_BYTES"));
  try{JSON.parse(bytes.toString("utf8"));}catch{throw new BffError(400,"validation_error");}
  headers.set("Content-Type","application/json");body=new Uint8Array(bytes).buffer;
 }
 if(mutation&&route.body===false&&request.body){const bytes=await boundedBytes(request.body,operation.startsWith("composition")?Math.min(numberValue(config,"EDITORIAL_REQUEST_BYTES"),numberValue(config,"EDITORIAL_AI_MAX_BODY_BYTES")):numberValue(config,"EDITORIAL_REQUEST_BYTES"));if(bytes.length)throw new BffError(400,"invalid_request");}
 const query=queryFor(operation,request.nextUrl.searchParams);
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+path+(query.size?"?"+query:""),{method:route.method,headers,body,cache:"no-store",redirect:"error",signal:AbortSignal.any([request.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))])});
  if(response.status===204&&route.method==="DELETE"){await response.body?.cancel();return new NextResponse(null,{status:204,headers:privateHeaders});}
  if(response.headers.get("content-type")?.split(";")[0]!=="application/json"){await response.body?.cancel();throw new BffError(503,"dependency_unavailable");}
  let value:unknown;try{value=JSON.parse((await boundedBytes(response.body,response.ok?numberValue(config,"EDITORIAL_RESPONSE_BYTES"):65536)).toString("utf8"));}catch{throw new BffError(503,"dependency_unavailable");}
  if(!response.ok){const error=articleError(response.status,value,response.headers.get("retry-after"));throw new BffError(error.status,error.code,error.requestId,error.retryAfter,undefined,error.details);}
  const tag=resourceVersion(response.headers),tagPattern=route.resource?resourceTags[route.resource]:null,requiresTag=Boolean(tagPattern)&&route.responseTag!==false;
  if(requiresTag&&(!tag||!tagPattern!.test(tag)))throw new BffError(503,"dependency_unavailable");
  return NextResponse.json(value,{status:response.status,headers:{...privateHeaders,...(tag&&tagPattern?.test(tag)?{ETag:tag,"X-Resource-Version":tag}:{})}});
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"dependency_unavailable");}
}
export const articleHandler=(operation:ArticleOperation)=>(request:NextRequest,context:{params:Promise<Record<string,string>>})=>Promise.resolve(context.params).then(params=>articleRequest(operation,request,params)).catch(failure);
