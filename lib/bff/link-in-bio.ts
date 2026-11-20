import 'server-only';
import {NextResponse,type NextRequest} from 'next/server';
import {linkInBioOperations} from '../link-in-bio/operations.generated';
import {linkInBioSchemas} from '../link-in-bio/schemas.generated';
import {linkInBioValidator,linkInBioIssues,validLinkInBio} from '../link-in-bio/contracts';
import {BffError,failure,privateHeaders,uuidPattern} from './client';
import {requiredSession} from './sync-runs';
import {mutationProof,requireEmptyBody} from './csrf';
import {boundedBytes} from './presentation';
import {resourceVersion} from '../resource-version';
import {loadConfig,stringValue,numberValue} from '../config/env';
export function linkInBioOperation(method:string,path:readonly string[]){
 if(path.length>4||path.some(p=>!p||p.length>100||/[./\\?#%]/.test(p)))return null;
 return linkInBioOperations.find(op=>{if(op.method!==method)return false;const pieces=op.path.replace('/v1/admin/link-in-bio/','').split('/');return pieces.length===path.length&&pieces.every((p,i)=>p.startsWith('{')?uuidPattern.test(path[i]!):p===path[i]);})??null;
}
export async function linkInBioServerRequest<T>(method:string,path:readonly string[],input:{session:string;csrf?:string;body?:unknown;tag?:string;key?:string;query?:URLSearchParams}){
 const op=linkInBioOperation(method,path);if(!op)throw new BffError(404,'not_found');const config=loadConfig();if(config.LINK_IN_BIO_ENABLED!=='true')throw new BffError(404,'not_found');
 const query=input.query??new URLSearchParams(),values:Record<string,string>={};for(const key of query.keys()){if(query.getAll(key).length!==1||query.get(key)!.length>4096)throw new BffError(400,'validation_failed');values[key]=query.get(key)!;}
 if(op.querySchema){const validate=linkInBioValidator(op.querySchema,true);if(!validate(values))throw new BffError(400,'validation_failed',undefined,undefined,undefined,linkInBioIssues(validate.errors));}else if(query.size)throw new BffError(400,'validation_failed');
 if(op.bodySchema){const schema=(linkInBioSchemas as Record<string,unknown>)[op.bodySchema],validate=linkInBioValidator(schema);if(!validate(input.body))throw new BffError(400,'validation_failed',undefined,undefined,undefined,linkInBioIssues(validate.errors));}else if(input.body!==undefined)throw new BffError(400,'validation_failed');
 const requestHeaders:Record<string,string>={Accept:'application/json','X-BFF-Key':stringValue(config,'BFF_SERVICE_KEY'),'X-Admin-Session':input.session};
 if(method!=='GET'){if(!input.csrf)throw new BffError(403,'csrf_invalid');requestHeaders['X-CSRF-Token']=input.csrf;requestHeaders.Origin=stringValue(config,'ADMIN_ORIGIN');}
 const matchedHeaders:Record<string,string>={};if(input.tag)matchedHeaders['if-match']=input.tag;if(input.key)matchedHeaders['idempotency-key']=input.key;
 if(op.headerSchema){const validate=linkInBioValidator(op.headerSchema);if(!validate(matchedHeaders))throw new BffError(!input.tag&&'if-match' in op.headerSchema.properties?428:412,!input.tag?'precondition_required':'revision_conflict');}
 if(input.tag)requestHeaders['If-Match']=input.tag;if(input.key)requestHeaders['Idempotency-Key']=input.key;if(input.body!==undefined)requestHeaders['Content-Type']='application/json';
 let response:Response;try{response=await fetch(stringValue(config,'BACKEND_URL').replace(/\/$/,'')+'/v1/admin/link-in-bio/'+path.join('/')+(query.size?'?'+query.toString():''),{method,headers:requestHeaders,body:input.body===undefined?undefined:JSON.stringify(input.body),redirect:'error',cache:'no-store',signal:AbortSignal.timeout(numberValue(config,'REQUEST_TIMEOUT_MS'))});}catch{throw new BffError(503,'dependency_unavailable');}
 if(op.id==='getLinkInBioAdminCapabilities'&&response.status===404){await response.body?.cancel();throw new BffError(404,'not_found');}
 if(response.headers.get('content-type')?.split(';')[0]!=='application/json')throw new BffError(503,'dependency_unavailable');
 let data:unknown;try{data=JSON.parse((await boundedBytes(response.body,2_000_000)).toString());}catch{throw new BffError(503,'dependency_unavailable');}
 const schema=(op.responseSchemas as Record<string,string|null>)[String(response.status)];if(!schema||!validLinkInBio(schema,data))throw new BffError(503,'dependency_unavailable');
 if(!response.ok){const error=(data as {error:{code:string;requestId:string;details?:{field:string;reason:string}[]}}).error;throw new BffError(response.status,error.code,error.requestId,/^\d{1,6}$/.test(response.headers.get('retry-after')??'')?response.headers.get('retry-after')!:undefined,undefined,error.details);}
 const tag=resourceVersion(response.headers);if(tag&&!/^"lib-(?:draft|account):[0-9a-f-]{36}:[0-9]+"$/i.test(tag))throw new BffError(503,'dependency_unavailable');
 if(['getLinkInBioDraft','saveLinkInBioDraft','saveLinkInBioPostTarget','saveLinkInBioPostAlt'].includes(op.id)&&!tag)throw new BffError(503,'dependency_unavailable');return {data:data as T,tag,status:response.status};
}
export async function linkInBioHandler(request:NextRequest,context:{params:Promise<{segments:string[]}>}){
 try{const path=(await context.params).segments,op=linkInBioOperation(request.method,path);if(!op)throw new BffError(404,'not_found');const proof=request.method==='GET'?{session:await requiredSession()}:mutationProof(request);let body:unknown;
  if(op.bodySchema){if(request.headers.get('content-type')?.split(';')[0]?.trim()!=='application/json')throw new BffError(400,'validation_failed');try{body=JSON.parse((await boundedBytes(request.body,65536)).toString());}catch(error){if(error instanceof BffError)throw error;throw new BffError(400,'validation_failed');}}else if(request.method!=='GET')await requireEmptyBody(request);
  const result=await linkInBioServerRequest(request.method,path,{session:proof.session,csrf:'csrf' in proof?proof.csrf:undefined,body,tag:request.headers.get('if-match')??undefined,key:request.headers.get('idempotency-key')??undefined,query:request.nextUrl.searchParams});return NextResponse.json(result.data,{status:result.status,headers:{...privateHeaders,...(result.tag?{ETag:result.tag,'X-Resource-Version':result.tag}:{})}});
 }catch(error){return failure(error);}
}
