import {adminLanguageBusinessHeaders} from '../bff/language-business-headers';
import "server-only";
import {commerceSettingsIssues,safeCommerceIssues} from "./validation";
import {commerceContractIssues,validCommerceContract} from "./contracts";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {BffError} from "../bff/client";
import {boundedBytes} from "../bff/presentation";
import {commerceOperations} from "./operations.generated";
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export function adminCommerceOperation(method:string,segments:readonly string[]){
 if(segments.length>6||segments.some(s=>!s||s.length>100||/[./\\?#%]/.test(s)))return null;
 for(const op of commerceOperations){if(op.area!=='admin'||op.method!==method)continue;const pieces=op.path.replace('/v1/admin/store/','').split('/');if(pieces.length===segments.length&&pieces.every((p,i)=>p.startsWith('{')?uuid.test(segments[i]!):p===segments[i]))return {...op,resolvedPath:'/v1/admin/store/'+segments.map(encodeURIComponent).join('/')};}return null;
}
export async function commerceServerRequest<T>(method:string,segments:readonly string[],input:{session:string;csrf?:string;body?:unknown;tag?:string;intent?:string;query?:URLSearchParams}){
 const op=adminCommerceOperation(method,segments);if(!op)throw new BffError(404,'not_found');const config=loadConfig(),headers=new Headers({Accept:'application/json','x-bff-key':stringValue(config,'BFF_SERVICE_KEY'),'x-admin-session':input.session});
 if(method!=='GET'){if(!input.csrf)throw new BffError(403,'csrf_invalid');headers.set('x-csrf-token',input.csrf);headers.set('Origin',stringValue(config,'ADMIN_ORIGIN'));}
 if((op.headers as readonly string[]).includes('if-match')){if(!input.tag||!/^"[^"\r\n]{1,148}"$/.test(input.tag))throw new BffError(400,'revision_conflict');headers.set('If-Match',input.tag);}
 if((op.headers as readonly string[]).includes('idempotency-key')){if(!input.intent||!uuid.test(input.intent))throw new BffError(400,'validation_failed');headers.set('Idempotency-Key',input.intent);}
 const query=input.query??new URLSearchParams();for(const k of query.keys())if(!(op.query as readonly string[]).includes(k)||query.getAll(k).length!==1||query.get(k)!.length>1024)throw new BffError(400,'validation_failed');
 if(op.bodySchema){const issues=[...commerceContractIssues(op.bodySchema,input.body),...(op.id==='commerceAdminUpdateSettings'?commerceSettingsIssues(input.body):[])];if(issues.length){const error=new BffError(400,'validation_failed',undefined,undefined,undefined,issues.map(i=>({field:i.path,reason:i.code})));console.warn(JSON.stringify({event:'commerce.validation_rejected',operation:op.id,requestId:error.requestId,issues}));throw error;}}
 if(input.body!==undefined)headers.set('Content-Type','application/json');
 for(const [key,value]of Object.entries(await adminLanguageBusinessHeaders(op.resolvedPath,input.session)))headers.set(key,value);
 let response:Response;try{response=await fetch(stringValue(config,'BACKEND_URL').replace(/\/$/,'')+op.resolvedPath+(query.size?'?'+query.toString():''),{method,headers,body:input.body===undefined?undefined:JSON.stringify(input.body),cache:'no-store',redirect:'error',signal:AbortSignal.timeout(numberValue(config,'REQUEST_TIMEOUT_MS'))});}catch{throw new BffError(503,'provider_unavailable');}
 if(op.id==='commerceAdminDeliveryCapabilities'&&response.status===404)throw new BffError(404,'not_found');
 if(response.ok&&op.id==='commerceAdminReadOrderDocument'){if(response.headers.get('content-type')?.split(';')[0]!=='text/html')throw new BffError(503,'persistence_unavailable');return {data:new Uint8Array(await boundedBytes(response.body,5_000_000)) as T,status:response.status,tag:null};}
 if(!(op.statuses as readonly number[]).includes(response.status)||response.headers.get('content-type')?.split(';')[0]!=='application/json')throw new BffError(503,'persistence_unavailable');
 let data;try{data=JSON.parse((await boundedBytes(response.body,['commerceAdminListLegalDocuments','commerceAdminListWithdrawals','commerceAdminReadWithdrawal'].includes(op.id)?8_000_000:1_000_000)).toString());}catch{throw new BffError(503,'persistence_unavailable');}
 if(!response.ok&&!validCommerceContract('CommerceError',data))throw new BffError(503,'persistence_unavailable');
 if(!response.ok)throw new BffError(response.status,typeof data?.error?.code==='string'&&/^[a-z_]{1,100}$/.test(data.error.code)?data.error.code:'persistence_unavailable',typeof data?.error?.requestId==='string'?data.error.requestId:undefined,/^[1-9][0-9]{0,5}$/.test(response.headers.get('retry-after')??'')?response.headers.get('retry-after')!:undefined,undefined,safeCommerceIssues(data?.error?.issues).map(i=>({field:i.path,reason:i.code})));
 const schema=(op.responseSchemas as Readonly<Record<string,string|null>>)[String(response.status)];if(schema&&!validCommerceContract(schema,data))throw new BffError(503,'persistence_unavailable');
 const tag=response.headers.get('x-resource-version')??response.headers.get('etag');
 return {data:data as T,status:response.status,tag:tag&&/^"[^"\r\n]{1,148}"$/.test(tag)?tag:null};
}
