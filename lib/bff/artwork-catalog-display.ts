import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {backendRequest,BffError,failure,privateHeaders} from "./client";
import {requiredSession} from "./sync-runs";
import {mutationProof} from "./csrf";
import {resourceVersion} from "../resource-version";
export async function catalogDisplayProxy(request:NextRequest,artworkId?:string){try{
 const mode=!artworkId,params=artworkId?{artworkId}:undefined;
 const input=request.method==="PUT"?mutationProof(request):{session:await requiredSession()};
 let body:unknown,ifMatch:string|undefined;
 if(request.method==="PUT"){
  ifMatch=request.headers.get("if-match")??undefined;if(!ifMatch)throw new BffError(428,"precondition_required");
  if(request.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(415,"unsupported_media_type");
  const reader=request.body?.getReader();if(!reader)throw new BffError(400,"invalid_request");let bytes=0;const chunks:Uint8Array[]=[];
  try{for(;;){const c=await reader.read();if(c.done)break;bytes+=c.value.length;if(bytes>1024)throw new BffError(413,"payload_too_large");chunks.push(c.value);}try{body=JSON.parse(Buffer.concat(chunks).toString("utf8"));}catch{throw new BffError(400,"invalid_request");}}finally{await reader.cancel();}
  const field=mode?"enabled":"large";if(!body||typeof body!=="object"||Array.isArray(body)||Object.keys(body).length!==1||!(field in body)||typeof (body as Record<string,unknown>)[field]!=="boolean")throw new BffError(400,"invalid_request");
 }
 const operation=mode?(request.method==="PUT"?"catalogModeUpdate":"catalogModeRead"):(request.method==="PUT"?"catalogFormatUpdate":"catalogFormatRead");
 const result=await backendRequest(operation,{...input,params,body,ifMatch}),version=resourceVersion(result.headers);if(!version)throw new BffError(503,"service_unavailable");
 return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,ETag:version,"X-Resource-Version":version}});
}catch(e){return failure(e);}}
