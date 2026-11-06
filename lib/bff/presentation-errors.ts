import type {PresentationOperation} from "./allowlist";
import type {ErrorDetail} from "./site-content-errors";
const common:Record<number,string[]>={400:["validation_error"],401:["unauthorized"],403:["forbidden","csrf_invalid"],404:["not_found"],429:["rate_limited"],503:["dependency_unavailable","presentation_configuration_mismatch"]};
const write=new Set<PresentationOperation>(["footerSave","artworkSave","pageSave","theme","validation","publish","restore","previews","assetDelete","assetUpload","assetUploadCreate","assetUploadFinalize"]);
const reasons=new Set(["empty_footer_group","reserved_slug","invalid_slug","empty_page","required","unsupported_locale","unsupported_variant","incompatible_schema","duplicate_id","missing_required_block","invalid_placement","invalid_link","asset_not_ready","asset_not_found","poster_required","font_weight_missing","font_glyph_missing","contrast_insufficient","artwork_unavailable","aggregate_too_large","duplicate_identity","invalid_structure","invalid_size","unknown_font","unsupported_section","section_limit","required_section","artwork_target_required","invalid_asset_kind","asset_in_use"]);
const colors="background|surface|mutedSurface|inverseSurface|text|mutedText|inverseText|disabledText|accent|onAccent|link|linkHover|border|focus|selection|onSelection|error|onError|success|onSuccess|warning|onWarning";
const roles="h1|h2|h3|body|caption|navigation|button|control";
const id="[0-9a-fA-F-]{36}",page="home|news|artworks|exhibitions|publications|expertise|contact|artworkDetail|galerist";
const themeField=new RegExp("^theme(?:\\.fonts(?:\\."+id+")?|\\.colors\\.(?:"+colors+")(?:\\.(?:"+colors+")\\.(?:"+roles+")(?:\\.media)?)?|\\.typography\\.(?:"+roles+")(?:\\.(?:familyId|weight|style|minSizeRem|maxSizeRem|lineHeight|letterSpacingEm))?)?$");
const pageField=new RegExp("^pages\\.(?:"+page+")\\."+id+"\\.(?:heading|introduction|body|linkLabel|posterId|videoId|mobileVideoId|imageId|artworkIds|alt|caption|images|items|links)(?:\\.(?:[0-9]{1,2}|heading|label|body|alt|caption|imageId|destination|[a-z]{2,3}(?:-[a-z0-9]{2,8})*))?$");
const footerField=/^footer(?:\.(?:services|groups|socialLinks)\.[0-9a-fA-F-]{36}(?:\.links\.[0-9a-fA-F-]{36})?(?:\.(?:title|label|description|destination)(?:\.[a-z]{2,3}(?:-[a-z0-9]{2,8})*)?)?)?$/;
const galeristField=/^pages\.galerist\.(?:sections|settings\.(?:name|slug)\.[a-z]{2,3}(?:-[a-z0-9]{2,8})*)$/;
const inputField=/^(?:page|theme|asset|sections(?:\.[0-9]{1,2}\.(?:type|hidden|props\.[a-zA-Z.]+))?)$/;
const artworkField=/^artworks\.[0-9a-fA-F-]{36}\.description\.[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/;
export function presentationError(operation:PresentationOperation,status:number,body:unknown,retry:string|null):{status:number;code:string;requestId?:string;retryAfter?:string;details?:ErrorDetail[]}{
 const generic={status:503,code:"dependency_unavailable"};
 if(!body||typeof body!=="object"||!("error" in body)||!body.error||typeof body.error!=="object")return generic;
 const error=body.error as Record<string,unknown>,allowed=[...(common[status]??[])];
 if(operation.startsWith("assetUpload"))allowed.push(...({400:["invalid_asset"],409:["asset_state_conflict","upload_incomplete","finalization_timeout","finalization_attempts_exhausted","direct_upload_required"],410:["upload_expired"]}[status]??[]));
 if(operation.startsWith("artwork")){if(status===400)allowed.push("invalid_request");if(status===412)allowed.push("precondition_failed");if(status===503)allowed.push("service_unavailable");}
 if(write.has(operation))allowed.push(...({412:["version_conflict"],428:["precondition_required"],413:["payload_too_large"],415:["unsupported_media_type"]}[status]??[]));
 if(operation==="assetCreate")allowed.push(...({413:["payload_too_large"],415:["unsupported_media_type"]}[status]??[]));
 if(status===409)allowed.push(...(operation==="publish"?["presentation_not_publishable"]:operation==="restore"?["presentation_incompatible"]:operation==="assetDelete"?["asset_in_use","asset_state_conflict"]:operation==="assetUpload"?["asset_state_conflict"]:operation==="pageSave"?["navigation_managed_separately"]:[]));
 if(status===400&&operation==="assetUpload")allowed.push("invalid_asset");
 if(["assetContent","assetHead"].includes(operation)){if(status===400)allowed.push("invalid_range");if(status===416)allowed.push("range_not_satisfiable");}
 if(typeof error.code!=="string"||!allowed.includes(error.code))return generic;
 const details:ErrorDetail[]=[];
 if(Array.isArray(error.details)&&error.details.length<=64&&["validation_error","navigation_managed_separately","presentation_not_publishable","presentation_incompatible","asset_in_use"].includes(error.code))for(const d of error.details){
  if(d&&typeof d==="object"&&typeof d.field==="string"&&d.field.length<=240&&typeof d.reason==="string"&&reasons.has(d.reason)&&(footerField.test(d.field)||galeristField.test(d.field)||themeField.test(d.field)||pageField.test(d.field)||inputField.test(d.field)||artworkField.test(d.field)))details.push({field:d.field,reason:d.reason});
 }
 return {status,code:error.code,requestId:typeof error.requestId==="string"&&/^[0-9a-f-]{36}$/.test(error.requestId)?error.requestId:undefined,retryAfter:status===429&&retry&&/^[1-9][0-9]{0,5}$/.test(retry)?retry:undefined,...(details.length?{details}:{})};
}
