import type {ErrorDetail} from "./site-content-errors";
const codes:Record<number,string[]>={400:["invalid_composition","validation_error","invalid_request","invalid_term_merge"],401:["unauthorized"],403:["forbidden","csrf_invalid"],404:["not_found"],409:["image_groups_disabled","composition_source_conflict","composition_scope_conflict","composition_candidate_conflict","immersive_disabled","exhibitions_disabled","invalid_article_lifecycle","article_not_restorable","vocabulary_conflict","vocabulary_in_use","vocabulary_locked","idempotency_conflict","idempotency_expired","editorial_catalog_changed","slug_conflict","editorial_not_editable","editorial_not_publishable"],412:["version_conflict"],413:["payload_too_large"],415:["unsupported_media_type"],428:["precondition_required"],429:["composition_quota_exceeded","rate_limited"],503:["composition_unavailable","editorial_disabled","editorial_configuration_mismatch","dependency_unavailable","service_unavailable"]};
export function articleError(status:number,body:unknown,retry:string|null):{status:number;code:string;requestId?:string;retryAfter?:string;details?:ErrorDetail[]}{
 const generic={status:503,code:"dependency_unavailable"};
 if(!body||typeof body!=="object"||!("error" in body)||!body.error||typeof body.error!=="object")return generic;
 const error=body.error as Record<string,unknown>;
 if(typeof error.code!=="string"||!codes[status]?.includes(error.code))return generic;
 const details:ErrorDetail[]=[];
 if(["validation_error","editorial_not_publishable","slug_conflict"].includes(error.code)&&Array.isArray(error.details))for(const value of error.details.slice(0,64)){
  if(value&&typeof value==="object"&&typeof value.field==="string"&&/^[a-zA-Z0-9_.-]{1,512}$/.test(value.field)&&typeof value.reason==="string"&&/^[a-zA-Z][a-zA-Z_]{0,79}$/.test(value.reason))details.push({field:value.field,reason:value.reason});
 }
 if(error.code==="vocabulary_in_use"&&Array.isArray(error.details))for(const value of error.details.slice(0,64)){if(value&&typeof value==="object"&&typeof value.field==="string"&&/^article\.(publication|news|exhibition)$/.test(value.field)&&typeof value.reason==="string"&&/^[a-f0-9-]{36}$/i.test(value.reason))details.push({field:value.field,reason:value.reason});}
 return {status,code:error.code,requestId:typeof error.requestId==="string"&&/^[a-f0-9-]{36}$/i.test(error.requestId)?error.requestId:undefined,...(details.length?{details}:{}),retryAfter:status===429&&retry&&/^[1-9][0-9]{0,5}$/.test(retry)?retry:undefined};
}
