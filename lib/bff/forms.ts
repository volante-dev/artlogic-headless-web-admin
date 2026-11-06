import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {BffError,failure,privateHeaders} from "./client";
import {requiredSession} from "./sync-runs";
import {mutationProof,requireEmptyBody} from "./csrf";
import {boundedBytes} from "./presentation";
import {formsOperation} from "../forms/operations";
import {formsServerRequest,FormsApiError} from "../forms/api";
export async function formsHandler(request:NextRequest,context:{params:Promise<{segments?:string[]}>}){
 try{
  const {segments=[]}=(await context.params)??{},route=formsOperation(request.method,segments);if(!route)throw new BffError(404,"not_found");
  const proof=request.method==="GET"?{session:await requiredSession()}:mutationProof(request);let body:unknown;
  if(route.body){if(request.headers.get("content-type")?.split(";")[0]?.trim()!=="application/json")throw new BffError(415,"unsupported_media_type");const bytes=await boundedBytes(request.body,1_000_000);try{body=JSON.parse(bytes.toString("utf8"));}catch{throw new BffError(400,"validation_error");}}
  else if(request.method!=="GET")await requireEmptyBody(request);
  const result=await formsServerRequest(request.method,segments,{session:proof.session,csrf:"csrf" in proof?proof.csrf:undefined,body,tag:request.headers.get("if-match")??undefined,query:request.nextUrl.searchParams,signal:request.signal});
  if(result.status===204)return new NextResponse(null,{status:204,headers:privateHeaders});
  return NextResponse.json(result.data,{status:result.status,headers:{...privateHeaders,...(result.tag?{ETag:result.tag,"X-Resource-Version":result.tag}:{})}});
 }catch(error){
  if(error instanceof FormsApiError){const basic=await failure(error).json();return NextResponse.json({error:{...basic.error,issues:error.issues}},{status:error.status,headers:{...privateHeaders,...(error.revision?{ETag:error.revision,"X-Resource-Version":error.revision}:{}),...(error.retryAfter?{"Retry-After":error.retryAfter}:{})}});}
  return failure(error);
 }
}
