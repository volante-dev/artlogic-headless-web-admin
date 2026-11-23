import {test,expect} from "@playwright/test";
import {inventoryError} from "../lib/bff/inventory-errors";
test("inventory BFF projects allowed codes without upstream secrets or financial details",()=>{
 expect(inventoryError(500,{error:{code:"sql_error",message:"private",sql:"secret"}})).toEqual({status:503,code:"service_unavailable",retryable:true});
 expect(inventoryError(403,{error:{code:"inventory_finance_required",message:"secret",amount:"10000",issuer:"private"}})).toEqual({status:403,code:"inventory_finance_required",retryable:false});
 expect(inventoryError(409,{error:{code:"inventory_cursor_stale",rows:["private"]}})).toEqual({status:409,code:"inventory_cursor_stale",retryable:false});
 expect(inventoryError(412,{error:{code:"inventory_revision_conflict",before:{cost:"secret"}}})).toEqual({status:412,code:"inventory_revision_conflict",retryable:false});
});
