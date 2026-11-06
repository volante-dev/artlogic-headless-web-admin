import "server-only";
import {validNavigationResponse} from "./navigation-validation";
import {NextResponse,type NextRequest} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {BffError,failure,privateHeaders} from "./client";
import {mutationProof} from "./csrf";
import {requiredSession} from "./sync-runs";
import {boundedBytes} from "./presentation";
import {resourceVersion} from "../resource-version";
const tagPattern=/^"navigation-1-[0-9a-f-]{36}-[1-9][0-9]{0,18}"$/;
const allowed=new Set(["invalid_navigation","invalid_precondition","precondition_required","precondition_failed","version_conflict","validation_error","navigation_editing_disabled","navigation_unavailable","unauthorized","forbidden","csrf_invalid","rate_limited","invalid_request","payload_too_large","unsupported_media_type","service_unavailable","dependency_unavailable"]);
export async function navigationRequest(request:NextRequest,context=false){
 if(request.nextUrl.searchParams.size)throw new BffError(400,"invalid_request");
 const mutation=request.method==="PUT",proof=mutation?mutationProof(request):{session:await requiredSession()},config=loadConfig();
 const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":proof.session});
 let body:ArrayBuffer|undefined;
 if(mutation){
  if("csrf" in proof)headers.set("X-CSRF-Token",proof.csrf);
  const tag=request.headers.get("if-match");if(!tag)throw new BffError(428,"precondition_required");if(!tagPattern.test(tag))throw new BffError(400,"invalid_precondition");headers.set("If-Match",tag);
  if(request.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(415,"unsupported_media_type");
  const bytes=await boundedBytes(request.body,4096);try{JSON.parse(bytes.toString("utf8"));}catch{throw new BffError(400,"invalid_request");}body=new Uint8Array(bytes).buffer;headers.set("Content-Type","application/json");
 }
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+"/v1/admin/navigation"+(context?"/context":""),{method:mutation?"PUT":"GET",headers,body,cache:"no-store",redirect:"error",signal:AbortSignal.any([request.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))])});
  if(response.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(503,"dependency_unavailable");
  const data=JSON.parse((await boundedBytes(response.body,8192)).toString("utf8"));
  if(!response.ok){if(!allowed.has(data?.error?.code)||![400,401,403,409,412,413,415,428,429,503].includes(response.status))throw new BffError(503,"dependency_unavailable");throw new BffError(response.status,data.error.code);}
  const tag=resourceVersion(response.headers);if(!validNavigationResponse(data,context)||response.status!==200||!context&&(!tag||!tagPattern.test(tag)||!tag.endsWith("-"+data.revision+'"')))throw new BffError(503,"dependency_unavailable");
  return NextResponse.json(data,{headers:{...privateHeaders,...(!context&&tag?{ETag:tag,"X-Resource-Version":tag}:{})}});
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"dependency_unavailable");}
}
export const navigationHandler=(context=false)=>(request:NextRequest)=>navigationRequest(request,context).catch(failure);
