// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
import {ensure} from "./rule-error.generated";
import {commerceRules} from "./rules.generated";
export const commercePolicy=commerceRules;
export const commerceUuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export function hasCommerceTextControls(value:string){return Array.from(value).some(character=>{const code=character.codePointAt(0)!;return code===127||code<=31&&![9,10,13].includes(code);});}
export function hasCommerceControls(value:string){return Array.from(value).some(character=>{const code=character.codePointAt(0)!;return code<=31||code===127;});}
export function requireCommerceId(value:string){ensure(commerceUuid.test(value),"validation_failed");return value;}
export function requireRevision(value:number){ensure(Number.isSafeInteger(value)&&value>0&&value<=2147483647,"validation_failed");return value;}
export function requireAmount(value:number,min:number=0,max:number=commerceRules.maximumCharge){ensure(Number.isSafeInteger(value)&&value>=min&&value<=max,"amount_out_of_range");return value;}
export function requireCartLines(lines:readonly {productId:string;quantity:number}[]){
 ensure(lines.length>=1&&lines.length<=commerceRules.maxCartLines,"validation_failed");
 const ids=new Set<string>();
 for(const l of lines){requireCommerceId(l.productId);ensure(!ids.has(l.productId.toLowerCase()),"validation_failed");ids.add(l.productId.toLowerCase());ensure(Number.isInteger(l.quantity)&&l.quantity>=1&&l.quantity<=commerceRules.maxQuantity,"validation_failed");}
}
export function hasNotExpired(expiresAt:string,now:string){const expiry=Date.parse(expiresAt),current=Date.parse(now);return Number.isFinite(expiry)&&Number.isFinite(current)&&expiry>current;}
