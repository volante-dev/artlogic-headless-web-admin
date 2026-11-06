import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {presentationOperations,type PresentationOperation} from "./allowlist";
import {BffError,failure,privateHeaders,uuidPattern} from "./client";
import {mutationProof,requireEmptyBody} from "./csrf";
import {requiredSession} from "./sync-runs";
import {resourceVersion} from "../resource-version";
import {presentationError} from "./presentation-errors";
export const presentationTag=/^"presentation-[1-9][0-9]{0,19}-[a-f0-9]{64}"$/;
export const presentationAssetTag=/^"presentation-asset-[0-9a-f-]{36}-[1-9][0-9]{0,19}"$/;
export const presentationPageKeys=["home","news","artworks","exhibitions","publications","expertise","contact","artworkDetail","galerist"] as const;
export async function boundedBytes(body:ReadableStream<Uint8Array>|null,limit:number):Promise<Buffer>{
 const reader=body?.getReader();if(!reader)throw new BffError(400,"validation_error");const chunks:Uint8Array[]=[];let total=0;
 try{for(;;){const part=await reader.read();if(part.done)break;total+=part.value.byteLength;if(total>limit)throw new BffError(413,"payload_too_large");chunks.push(part.value);}return Buffer.concat(chunks);}finally{await reader.cancel().catch(()=>undefined);reader.releaseLock();}
}
function queryFor(operation:PresentationOperation,input:URLSearchParams){
 const allowed=operation==="assets"?["kind","cursor"]:[];
 for(const key of input.keys())if(!allowed.includes(key)||input.getAll(key).length!==1)throw new BffError(400,"validation_error");
 if(input.has("kind")&&!["image","video","font"].includes(input.get("kind")!))throw new BffError(400,"validation_error");if(input.has("cursor")&&!uuidPattern.test(input.get("cursor")!))throw new BffError(400,"validation_error");return input;
}
export function presentationPath(operation:PresentationOperation,params:Record<string,string>){
 return presentationOperations[operation].path.replace(/\{(\w+)\}/g,(_match,key)=>{const value=params[key];if(!value||(key==="pageKey"?!presentationPageKeys.includes(value as typeof presentationPageKeys[number]):!uuidPattern.test(value)))throw new BffError(400,"validation_error");return value;});
}
export async function presentationRequest(operation:PresentationOperation,request:NextRequest,params:Record<string,string>={}){
 const route=presentationOperations[operation],mutation=!["GET","HEAD"].includes(route.method),proof=mutation?mutationProof(request):{session:await requiredSession()},config=loadConfig();
 const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":proof.session});if("csrf" in proof)headers.set("X-CSRF-Token",proof.csrf);
 const expectsTag=mutation&&operation!=="assetCreate",tag=operation.startsWith("asset")?presentationAssetTag:presentationTag;
 if(expectsTag){const value=request.headers.get("if-match");if(!value)throw new BffError(428,"precondition_required");if(!tag.test(value))throw new BffError(400,"validation_error");headers.set("If-Match",value);}
 let body:ArrayBuffer|undefined;
 if(route.method==="DELETE")await requireEmptyBody(request);
 else if(mutation){
  const mime=request.headers.get("content-type")?.split(";")[0]??"",binary=operation==="assetUpload";
  if(binary?!["image/png","image/jpeg","image/webp","video/mp4","font/woff2"].includes(mime):mime!=="application/json")throw new BffError(415,"unsupported_media_type");
  const limit=binary?(mime==="video/mp4"?20971520:mime==="font/woff2"?2097152:10485760):operation.startsWith("assetUpload")?4096:operation==="pageSave"?8388608:operation==="footerSave"||operation==="theme"||operation==="artworkSave"?262144:16384;
  const bytes=await boundedBytes(request.body,limit);if(!binary)try{JSON.parse(bytes.toString("utf8"));}catch{throw new BffError(400,"validation_error");}
  body=new Uint8Array(bytes).buffer;headers.set("Content-Type",mime);
 }
 const query=queryFor(operation,request.nextUrl.searchParams),path=presentationPath(operation,params);
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+path+(query.size?"?"+query:""),{method:route.method,headers,body,cache:"no-store",redirect:"error",signal:AbortSignal.any([request.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))])});
  if(response.status===204)return new NextResponse(null,{status:204,headers:privateHeaders});
  if(response.headers.get("content-type")?.split(";")[0]!=="application/json"){await response.body?.cancel();throw new BffError(503,"dependency_unavailable");}
  let data:unknown;try{data=JSON.parse((await boundedBytes(response.body,response.ok?(operation==="pageRead"?10485760:2097152):65536)).toString("utf8"));}catch{throw new BffError(503,"dependency_unavailable");}
  if(!response.ok){const e=presentationError(operation,response.status,data,response.headers.get("retry-after"));throw new BffError(e.status,e.code,e.requestId,e.retryAfter,undefined,"details" in e?e.details:undefined);}
  const etag=resourceVersion(response.headers),tagRequired=["footerRead","footerSave","read","pageRead","pageSave","artworkRead","artworkSave","theme","validation","publish","restore","assetCreate","assetRead","assetUpload","assetUploadCreate","assetUploadRead","assetUploadFinalize"].includes(operation),pattern=operation.startsWith("asset")?presentationAssetTag:presentationTag;
  if(tagRequired&&(!etag||!pattern.test(etag)))throw new BffError(503,"dependency_unavailable");
  return NextResponse.json(data,{status:response.status,headers:{...privateHeaders,...(etag&&pattern.test(etag)?{ETag:etag,"X-Resource-Version":etag}:{})}});
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"dependency_unavailable");}
}
export const presentationHandler=(operation:PresentationOperation)=>(request:NextRequest,context:{params:Promise<Record<string,string>>})=>Promise.resolve(context.params).then(params=>presentationRequest(operation,request,params)).catch(failure);
