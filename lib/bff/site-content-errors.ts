// Pure error projection shared by the BFF and adversarial contract tests.
export type EditorialOperation="siteContentRead"|"siteContentUpdate"|"siteLogoUpload"|"siteLogoPreview";
export function isEditorialOperation(value:string):value is EditorialOperation{return ["siteContentRead","siteContentUpdate","siteLogoUpload","siteLogoPreview"].includes(value);}
const common:Record<number,readonly string[]>={400:["invalid_request","validation_error"],401:["unauthorized"],403:["forbidden","csrf_invalid"],429:["rate_limited"],503:["service_unavailable","dependency_unavailable","site_content_configuration_mismatch"]};
function record(value:unknown):value is Record<string,unknown>{return value!==null&&typeof value==="object"&&!Array.isArray(value);}
export interface ErrorDetail{field:string;reason:string}
export function editorialDetails(operation:EditorialOperation,code:string,value:unknown):ErrorDetail[]|undefined{
  if(!Array.isArray(value)||!value.length||value.length>(code==="invalid_logo"?1:64))return;
  const details=value.filter((detail):detail is ErrorDetail=>{
    if(!record(detail)||Object.keys(detail).some(k=>!["field","reason"].includes(k))||typeof detail.field!=="string"||typeof detail.reason!=="string")return false;
    if(operation==="siteLogoUpload"&&code==="invalid_logo")return detail.field==="file"&&["invalid_image","mime_mismatch","animated_image","pixel_limit","output_too_large"].includes(detail.reason);
    if(operation!=="siteContentUpdate"||code!=="validation_error")return false;
    const fields:Record<string,string[]>={body:["required","invalid_type","unknown_field"],translations:["required","invalid_type","too_many_changes"],logoId:["invalid_type"],whiteLogoId:["invalid_type"],key:["required","invalid_type","unknown_key","duplicate_translation"],locale:["required","invalid_type","unsupported_locale"],value:["required","invalid_type","reference_required","max_length"]};
    const part=/^translations\.(?:[0-9]|[1-5][0-9]|6[0-3])\.(key|locale|value)$/.exec(detail.field)?.[1]??detail.field;
    return detail.field.length<=22&&detail.reason.length<=21&&(fields[part]?.includes(detail.reason)??false);
  }).map(({field,reason})=>({field,reason}));
  return details.length?details:undefined;
}
export function editorialError(operation:EditorialOperation,status:number,body:unknown,retry:string|null):{status:number;code:string;requestId?:string;retryAfter?:string;details?:ErrorDetail[]}{
  const generic={status:503,code:"service_unavailable"};
  if(!record(body)||!record(body.error)||typeof body.error.code!=="string"||typeof body.error.message!=="string")return generic;
  const code=body.error.code,allowed=[...(common[status]??[])];
  if(operation==="siteContentUpdate")allowed.push(...({404:["logo_candidate_unavailable"],412:["version_conflict"],428:["precondition_required"]}[status]??[]));
  if(["siteContentUpdate","siteLogoUpload"].includes(operation))allowed.push(...({413:["payload_too_large"],415:["unsupported_media_type"]}[status]??[]));
  if(operation==="siteLogoUpload"&&status===400)allowed.push("invalid_logo");
  if(operation==="siteLogoPreview"&&status===404)allowed.push("not_found");
  if(!allowed.includes(code))return generic;
  return {status,code,requestId:typeof body.error.requestId==="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(body.error.requestId)?body.error.requestId:undefined,retryAfter:status===429&&retry&&/^[1-9][0-9]{0,5}$/.test(retry)?retry:undefined,details:editorialDetails(operation,code,body.error.details)};
}
