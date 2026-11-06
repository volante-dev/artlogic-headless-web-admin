import "server-only";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {BffError} from "../bff/client";
import {requiredSession} from "../bff/sync-runs";
import {boundedBytes} from "../bff/presentation";
import {resourceVersion} from "../resource-version";
import {formsOperation} from "./operations";
import type {components} from "./contract-types.generated";
export type FormIssue=components["schemas"]["FormsIssue"];
export const formsTag=/^"[A-Za-z0-9_-]{1,128}\.[A-Za-z0-9_-]{43}"$/;
export class FormsApiError extends BffError{
 constructor(status:number,code:string,readonly issues:readonly FormIssue[]=[],readonly revision:string|null=null,requestId?:string,retryAfter?:string){super(status,code,requestId,retryAfter);}
}
const codes=new Set(["invalid_form_lifecycle","notifications_disabled","notification_acknowledgment_required","notification_payload_invalid","invalid_retry_state","form_recipient_reconfirmation_required","form_recipient_ineligible","form_confirmation_email_required","forms_disabled","form_unavailable","form_closed","form_session_expired","form_in_use","form_upload_conflict","form_submission_busy","form_export_too_large","form_export_unavailable","legacy_import_required","upload_rate_limited","recipient_blocked","form_not_publishable","validation_error","invalid_request","invalid_cursor","not_found","unauthorized","forbidden","csrf_invalid","version_conflict","precondition_required","rate_limited","payload_too_large","unsupported_media_type","service_unavailable","dependency_unavailable"]);
function issueList(value:unknown):FormIssue[]{
 if(!Array.isArray(value))return [];return value.slice(0,1000).flatMap(item=>{
  if(!item||typeof item!=="object"||typeof item.path!=="string"||item.path.length>500||! /^[A-Za-z0-9_.[\]-]+$/.test(item.path)||typeof item.code!=="string"||! /^[a-z_]{1,80}$/.test(item.code))return [];
  return [{path:item.path,code:item.code,...(typeof item.locale==="string"&&/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(item.locale)?{locale:item.locale}:{}),...(typeof item.fieldId==="string"&&/^[0-9a-f-]{36}$/i.test(item.fieldId)?{fieldId:item.fieldId}:{})}];
 });
}
export async function formsServerRequest<T>(method:string,segments:readonly string[],input:{query?:URLSearchParams;body?:unknown;tag?:string;session?:string;csrf?:string;signal?:AbortSignal}={}){
 const route=formsOperation(method,segments),config=loadConfig();if(config.FORMS_ENABLED!=="true")throw new BffError(503,"forms_disabled");if(!route)throw new BffError(404,"not_found");
 const query=input.query??new URLSearchParams();for(const key of query.keys())if(!route.query.includes(key)||query.getAll(key).length!==1)throw new BffError(400,"invalid_request");if(query.toString().length>8000)throw new BffError(400,"invalid_request");
 if(route.ifMatch){if(!input.tag)throw new BffError(428,"precondition_required");if(!formsTag.test(input.tag))throw new BffError(400,"invalid_request");}
 const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":input.session??await requiredSession()});
 if(method!=="GET"){if(!input.csrf)throw new BffError(403,"csrf_invalid");headers.set("X-CSRF-Token",input.csrf);headers.set("Origin",stringValue(config,"ADMIN_ORIGIN"));}
 if(input.tag)headers.set("If-Match",input.tag);const body=input.body===undefined?undefined:JSON.stringify(input.body);if(body!==undefined){if(Buffer.byteLength(body)>1_000_000)throw new BffError(413,"payload_too_large");headers.set("Content-Type","application/json");}
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+"/v1/admin/forms"+(segments.length?"/"+segments.join("/"):"")+(query.size?"?"+query:""),{method,headers,body,cache:"no-store",redirect:"error",signal:input.signal?AbortSignal.any([input.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))]):AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
  const tag=resourceVersion(response.headers);if(response.status===204)return {data:undefined as T,tag,status:204};if(response.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(503,"dependency_unavailable");
  const value=JSON.parse((await boundedBytes(response.body,response.ok?4_400_000:262144)).toString("utf8"));
  if(!response.ok){const code=codes.has(value?.error?.code)?value.error.code:"service_unavailable",status=codes.has(value?.error?.code)&&[400,401,403,404,409,410,412,413,415,422,428,429,503].includes(response.status)?response.status:503;throw new FormsApiError(status,code,issueList(value?.error?.issues),tag&&formsTag.test(tag)?tag:null,typeof value?.error?.requestId==="string"&&/^[0-9a-f-]{36}$/i.test(value.error.requestId)?value.error.requestId:undefined,/^\d{1,6}$/.test(response.headers.get("retry-after")??"")?response.headers.get("retry-after")!:undefined);}
  if(route.tag&&(!tag||!formsTag.test(tag)))throw new BffError(503,"dependency_unavailable");return {data:value as T,tag,status:response.status};
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"dependency_unavailable");}
}
