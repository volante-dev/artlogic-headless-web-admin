import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {backendRequest,BffError,failure,privateHeaders} from "./client";
import {requiredSession} from "./sync-runs";
import {mutationProof} from "./csrf";
import {resourceVersion} from "../resource-version";
export async function catalogWorkspaceProxy(request:NextRequest,id?:string){try{
 const input=id?mutationProof(request):{session:await requiredSession()};
 let body:unknown;
 if(id){
  if(request.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(415,"unsupported_media_type");
  const reader=request.body?.getReader();if(!reader)throw new BffError(400,"invalid_request");let n=0;const chunks:Uint8Array[]=[];
  try{for(;;){const part=await reader.read();if(part.done)break;n+=part.value.byteLength;if(n>4096)throw new BffError(413,"payload_too_large");chunks.push(part.value);}try{body=JSON.parse(Buffer.concat(chunks).toString("utf8"));}catch{throw new BffError(400,"invalid_request");}}finally{await reader.cancel();}
  if(!request.headers.get("if-match"))throw new BffError(428,"precondition_required");
 }
 const query=request.nextUrl.searchParams;if(!id)for(const key of query.keys())if(!["collection","limit","publishedCursor","reserveCursor","q","publication","availability"].includes(key)||query.getAll(key).length!==1)throw new BffError(400,"invalid_request");
 const result=await backendRequest(id?"catalogPlacement":"catalogWorkspace",{...input,...(id?{params:{artworkId:id},body,ifMatch:request.headers.get("if-match")!}:{query})}),etag=resourceVersion(result.headers);
 if(!etag||!/^"artwork-catalog-[0-9a-f-]{36}-[0-9]+"$/.test(etag))throw new BffError(503,"service_unavailable");
 return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,ETag:etag,"X-Resource-Version":etag}});
}catch(e){return failure(e);}}
