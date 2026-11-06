import {NextResponse,type NextRequest} from "next/server";
import {backendRequest,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {mutationProof} from "@/lib/bff/csrf";
export async function POST(request:NextRequest){try{
 const proof=mutationProof(request),mime=request.headers.get("content-type")?.split(";")[0]??"";
 if(!["image/png","image/jpeg","image/webp"].includes(mime))throw new BffError(415,"unsupported_media_type");
 const reader=request.body?.getReader();if(!reader)throw new BffError(400,"invalid_request");let size=0;const chunks:Uint8Array[]=[];
 try{for(;;){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>2097152)throw new BffError(413,"payload_too_large");chunks.push(part.value);}}finally{await reader.cancel().catch(()=>undefined);}
 const response=await backendRequest("siteLogoUpload",{...proof,bytes:Buffer.concat(chunks),mime});return NextResponse.json(response.body,{status:response.status,headers:privateHeaders});
}catch(error){return failure(error);}}
