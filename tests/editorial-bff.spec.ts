import {test,expect} from "@playwright/test";
import {articleError} from "../lib/bff/editorial-errors";
test("editorial error projection refuses unknown upstream details and secrets",()=>{
 expect(articleError(500,{error:{code:"sql_error",message:"private",sql:"secret"}},null)).toEqual({status:503,code:"dependency_unavailable"});
 const value=articleError(400,{error:{code:"validation_error",requestId:"not-a-uuid",message:"private",details:[{field:"translations.fr.title",reason:"translation_required"},{field:"https://private.test/token",reason:"private"},{field:"document",reason:"Secret value=abc"}]}},null);
 expect(value).toMatchObject({status:400,code:"validation_error",details:[{field:"translations.fr.title",reason:"translation_required"}]});expect(JSON.stringify(value)).not.toMatch(/private|Secret|not-a-uuid/);
 expect(articleError(429,{error:{code:"rate_limited"}},"30").retryAfter).toBe("30");expect(articleError(429,{error:{code:"rate_limited"}},"30\r\nInjected: yes").retryAfter).toBeUndefined();
});
test("taxonomy usage links are limited to known article kinds and UUID identities",()=>{
 const id="00000000-0000-4000-8000-000000000001",result=articleError(409,{error:{code:"vocabulary_in_use",details:[{field:"article.news",reason:id},{field:"article.publication",reason:"https://private.test/secret"},{field:"article.admin",reason:id}]}},null);
 expect(result.details).toEqual([{field:"article.news",reason:id}]);expect(articleError(409,{error:{code:"vocabulary_locked"}},null).code).toBe("vocabulary_locked");
});
