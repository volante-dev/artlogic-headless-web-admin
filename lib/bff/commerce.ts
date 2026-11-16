import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {BffError,failure,privateHeaders} from "./client";
import {requiredSession} from "./sync-runs";
import {mutationProof} from "./csrf";
import {boundedBytes} from "./presentation";
import {adminCommerceOperation,commerceServerRequest} from "../commerce/api";
export async function commerceHandler(request:NextRequest,context:{params:Promise<{path:string[]}>}){
 try{
  const path=(await context.params).path,op=adminCommerceOperation(request.method,path);if(!op)throw new BffError(404,'not_found');
  const proof=request.method==='GET'?{session:await requiredSession()}:mutationProof(request);let body:unknown;
  if(op.bodySchema){if(request.headers.get('content-type')?.split(';')[0]?.trim()!=='application/json')throw new BffError(400,'validation_failed');try{body=JSON.parse((await boundedBytes(request.body,op.bodyLimit)).toString());}catch{throw new BffError(400,'validation_failed');}}
  const result=await commerceServerRequest(request.method,path,{session:proof.session,csrf:'csrf' in proof?proof.csrf:undefined,body,tag:request.headers.get('if-match')??undefined,intent:request.headers.get('idempotency-key')??undefined,query:request.nextUrl.searchParams});
  if(op.id==='commerceAdminReadOrderDocument')return new NextResponse(new Uint8Array(result.data as Uint8Array).buffer,{headers:{...privateHeaders,'Content-Type':'text/html; charset=utf-8','Content-Disposition':'attachment; filename="document.html"'}});
  return NextResponse.json(result.data,{status:result.status,headers:{...privateHeaders,...(result.tag?{ETag:result.tag,'X-Resource-Version':result.tag}:{})}});
 }catch(error){return failure(error);}
}
