import type {components} from "./contract-types.generated";
import {inventoryText as t} from "./messages";
export type InventoryArtwork=components["schemas"]["InventoryArtwork"];
export type InventoryDraft=components["schemas"]["InventoryWorkDraft"];
export type InventoryMedia=components["schemas"]["InventoryMedia"];
export type InventorySelection=components["schemas"]["InventoryMediaSelection"];
export type InventoryCapabilities=components["schemas"]["InventoryCapabilities"];
export type InventoryReceipt=components["schemas"]["InventoryReceipt"];
export type InventoryRead=components["schemas"]["InventoryReadResult"];
export type InventoryPage=components["schemas"]["InventoryFindResult"];
export type ReferenceKind="artist"|"origin"|"category"|"type";
export const referencePaths={artist:"artists",origin:"origins",category:"categories",type:"types"} as const;
export interface InventoryReference{kind:ReferenceKind;id:string|number;fields:Record<string,unknown>;revision:string}
export class InventoryClientError extends Error{constructor(readonly status:number,readonly code:string){super(code);}}
export function inventoryErrorText(error:unknown){
 if(!(error instanceof InventoryClientError))return t("serviceUnavailable");
 if(error.status===401||error.status===403)return t("accessLost");if(error.code==="inventory_source_mismatch")return t("sourceMismatch");
 if(error.status===412||error.code==="inventory_cursor_stale"||error.code==="inventory_batch_stale")return t("revisionConflict");if(error.code==="inventory_media_invalid")return t("imageInvalid");
 if(error.code==="inventory_last_administrator")return t("accessLastAdmin");
 if(error.code==="inventory_commitment_conflict")return t("stockCommitmentConflict");if(error.code==="inventory_reference_in_use")return t("stockReferenceUsed");if(error.code==="inventory_cost_allocation_invalid")return t("financeOverallocated");
 if([400,413,415,422].includes(error.status))return t("invalidInput");if(error.status===0||error.status>=500)return t("uncertain");return t("serviceUnavailable");
}
export async function inventoryFetch<T>(path:string,options:{method?:string;body?:unknown;revision?:string;key?:string;csrfCookie?:string;signal?:AbortSignal}={}){
 const csrf=options.csrfCookie?decodeURIComponent(document.cookie.split(";").map(value=>value.trim()).find(value=>value.startsWith(options.csrfCookie+"="))?.slice(options.csrfCookie.length+1)??""):"";
 let response:Response;try{response=await fetch("/api/inventory"+path,{method:options.method??"GET",headers:{...(options.body!==undefined?{"Content-Type":"application/json"}:{}),...(options.revision?{"If-Match":'"'+options.revision+'"'}:{}),...(options.key?{"Idempotency-Key":options.key}:{}),...(options.csrfCookie?{"X-CSRF-Token":csrf}:{})},body:options.body===undefined?undefined:JSON.stringify(options.body),cache:"no-store",credentials:"same-origin",redirect:"error",signal:options.signal??AbortSignal.timeout(30000)});}catch{throw new InventoryClientError(0,"uncertain_response");}
 let value;try{value=await response.json();}catch{throw new InventoryClientError(0,"uncertain_response");}if(!response.ok)throw new InventoryClientError(response.status,value?.error?.code??"service_unavailable");return value as T;
}
