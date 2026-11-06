import {randomUUID} from "node:crypto";
import type {Operation} from "./allowlist";
const operations=new Set(["listContactInquiries","readContactInquiry","retryContactInquiry"]);
export function isContactOperation(operation:Operation){return operations.has(operation);}
const codes:Record<number,readonly string[]>={400:["validation_error","invalid_request","invalid_cursor"],401:["unauthorized"],403:["forbidden","csrf_invalid"],404:["not_found"],409:["idempotency_conflict","invalid_retry_state"],412:["version_conflict"],413:["payload_too_large"],415:["unsupported_media_type"],428:["precondition_required"],429:["rate_limited"],503:["contact_unavailable","contact_disabled"]};
export function contactError(operation:Operation,status:number,body:unknown,retry:string|null){
 const error=body&&typeof body==="object"&&"error" in body?body.error:null;
 const mutation=operation==="retryContactInquiry",allowed=[400,401,403,429,503,...(operation!=="listContactInquiries"?[404]:[]),...(mutation?[409,412,413,415,428]:[])];
 if(!error||typeof error!=="object"||!("code"in error)||typeof error.code!=="string"||!allowed.includes(status)||!codes[status]?.includes(error.code)||!mutation&&["csrf_invalid","contact_disabled"].includes(error.code))return {status:503,code:"contact_unavailable",requestId:randomUUID()};
 const requestId="requestId"in error&&typeof error.requestId==="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(error.requestId)?error.requestId:randomUUID();
 const fields=new Set(["name","email","subject","message","locale","artworkId","proof","website","acknowledgeUncertain"]),reasons=new Set(["required","invalid","too_long","unsupported","conflict"]);
 const details=error.code==="validation_error"&&"details"in error&&Array.isArray(error.details)?error.details.slice(0,10).flatMap(v=>v&&typeof v==="object"&&typeof v.field==="string"&&fields.has(v.field)&&typeof v.reason==="string"&&reasons.has(v.reason)?[{field:v.field,reason:v.reason}]:[]):undefined;
 return {status,code:error.code,requestId,retryAfter:status===429&&retry&&/^[1-9][0-9]{0,5}$/.test(retry)?retry:undefined,details};
}
