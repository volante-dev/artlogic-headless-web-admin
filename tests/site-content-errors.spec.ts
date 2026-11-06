import {test,expect} from "@playwright/test";
import {editorialError} from "../lib/bff/site-content-errors";
test("filters malicious or unrelated details and enforces operation/status/code pairs",()=>{
 const envelope=(code:string,details:unknown)=>({error:{code,message:"Private upstream message",requestId:"not-a-uuid",details}});
 const result=editorialError("siteContentUpdate",400,envelope("validation_error",[{field:"translations.0.value",reason:"reference_required"},{field:"translations.64.value",reason:"max_length"},{field:"secret",reason:"private"},{field:"body",reason:"unknown_field",value:"private"}]),null);
 expect(result.details).toEqual([{field:"translations.0.value",reason:"reference_required"}]);expect(JSON.stringify(result)).not.toContain("private");expect(result.requestId).toBeUndefined();
 expect(editorialError("siteContentRead",412,envelope("version_conflict",[]),null)).toEqual({status:503,code:"service_unavailable"});
 expect(editorialError("siteContentUpdate",400,envelope("validation_error",Array(65).fill({field:"body",reason:"required"})),null).details).toBeUndefined();
 expect(editorialError("siteContentUpdate",418,envelope("secret",[]),null)).toEqual({status:503,code:"service_unavailable"});
 expect(editorialError("siteContentUpdate",503,envelope("site_content_configuration_mismatch",[]),null).code).toBe("site_content_configuration_mismatch");
 expect(editorialError("siteLogoUpload",400,envelope("invalid_logo",[{field:"file",reason:"animated_image"}]),null).details).toEqual([{field:"file",reason:"animated_image"}]);
 for(const retry of ["0","9999999","https://private","2\r\nsecret"])expect(editorialError("siteContentUpdate",429,envelope("rate_limited",[]),retry).retryAfter).toBeUndefined();
});
