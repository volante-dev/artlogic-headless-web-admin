import 'server-only';
import {Ajv2020} from 'ajv/dist/2020';
import {fullFormats} from 'ajv-formats/dist/formats';
import {loadConfig,stringValue,numberValue} from '../config/env';
import {BffError,uuidPattern} from './client';
import {requiredSession} from './sync-runs';
import {languageRoutes} from './language-schemas.generated';
import {languageAdminOperations as adminOperations,languageWorkspaceOperations,languagePreconditionOperations,languageIdempotentOperations,type AdminLanguageOperation} from './language-allowlist';
export type {AdminLanguageOperation} from './language-allowlist';
type Definition={method:string;url:string;body:object|null;query:object;params:object;responses:Record<string,object>};
const ajv=new Ajv2020({allErrors:true,strict:true});for(const [key,format]of Object.entries(fullFormats))ajv.addFormat(key,format);
const validators=new Map<string,ReturnType<typeof ajv.compile>>();
function validate(key:string,schema:object,value:unknown,output=false){let validator=validators.get(key);if(!validator){validator=ajv.compile(schema);validators.set(key,validator);}if(!validator(value))throw new BffError(output?503:400,output?'language_policy_unavailable':'validation_failed');}
export async function languageBackend<T>(operation:AdminLanguageOperation,input:{session?:string;csrf?:string;body?:unknown;ifMatch?:string;idempotencyKey?:string;params?:Record<string,string>;query?:Record<string,string|number>}={}){
 if(!adminOperations.includes(operation))throw new BffError(400,'invalid_request');
 const config=loadConfig(),definition=(languageRoutes as unknown as Record<string,Definition>)[operation]!;
 validate(operation+':params',definition.params,input.params??{});validate(operation+':query',definition.query,input.query??{});
 const path=definition.url.replace(/\{(\w+)\}/g,(_match,key)=>{const value=input.params?.[key];if(!value||!uuidPattern.test(value))throw new BffError(400,'invalid_request');return value;});
 const query=new URLSearchParams(Object.entries(input.query??{}).map(([key,value])=>[key,String(value)]));
 const headers=new Headers({Accept:'application/json','X-BFF-Key':stringValue(config,'BFF_SERVICE_KEY'),'X-Admin-Session':input.session??await requiredSession()});
 if(definition.method!=='GET'){
  if(!input.csrf)throw new BffError(403,'csrf_invalid');headers.set('X-CSRF-Token',input.csrf);headers.set('Origin',stringValue(config,'ADMIN_ORIGIN'));headers.set('Content-Type','application/json');
  if(languagePreconditionOperations.has(operation)){if(!input.ifMatch)throw new BffError(428,'precondition_required');const expected=languageWorkspaceOperations.has(operation)?new RegExp('^"language-workspace-'+input.params?.workspaceId+'-[1-9][0-9]{0,18}"$'):/^"languages-[1-9][0-9]{0,18}"$/;if(!expected.test(input.ifMatch))throw new BffError(400,'invalid_request');headers.set('If-Match',input.ifMatch);}
  if(languageIdempotentOperations.has(operation)&&!input.idempotencyKey)throw new BffError(400,'invalid_request');if(input.idempotencyKey){if(!uuidPattern.test(input.idempotencyKey))throw new BffError(400,'invalid_request');headers.set('Idempotency-Key',input.idempotencyKey);}
  if(definition.body)validate(operation+':body',definition.body,input.body);
  else if(input.body!==undefined)throw new BffError(400,'invalid_request');
 }
 const bytes=input.body===undefined?undefined:JSON.stringify(input.body),requestLimit=operation==='updateLanguageWorkspace'?1310720:65536;
 if(bytes&&Buffer.byteLength(bytes)>requestLimit)throw new BffError(413,'payload_too_large');
 try{
  const response=await fetch(stringValue(config,'BACKEND_URL').replace(/\/$/,'')+path+(query.size?'?'+query.toString():''),{method:definition.method,headers,body:bytes,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(numberValue(config,'REQUEST_TIMEOUT_MS'))});
  if(response.headers.get('content-type')?.split(';')[0]!=='application/json'){await response.body?.cancel();throw new BffError(response.status===404?404:503,'language_policy_unavailable');}
  const reader=response.body?.getReader();if(!reader)throw new BffError(503,'language_policy_unavailable');let size=0;const chunks:Uint8Array[]=[];
  let body;try{for(;;){const part=await reader.read();if(part.done)break;size+=part.value.length;if(size>(operation==='readLanguageWorkspace'?4194304:1048576))throw new BffError(503,'language_policy_unavailable');chunks.push(part.value);}body=JSON.parse(Buffer.concat(chunks).toString('utf8'));}finally{await reader.cancel().catch(()=>undefined);}
  if(!response.ok){
   const allowed=[400,401,403,404,409,412,413,415,422,428,429,503],status=allowed.includes(response.status)?response.status:503;
   const candidate=body?.error,code=typeof candidate?.code==='string'&&/^[a-z_]{1,80}$/.test(candidate.code)?candidate.code:'language_policy_unavailable';
   const details=Array.isArray(candidate?.details)?candidate.details.slice(0,64).filter((d:unknown):d is {field:string;reason:string}=>Boolean(d&&typeof d==='object'&&'field'in d&&typeof d.field==='string'&&d.field.length<=200&&'reason'in d&&typeof d.reason==='string'&&d.reason.length<=200)):undefined;
   throw new BffError(status,code,typeof candidate?.requestId==='string'&&uuidPattern.test(candidate.requestId)?candidate.requestId:undefined,undefined,undefined,details);
  }
  const schema=definition.responses[String(response.status)];if(!schema)throw new BffError(503,'language_policy_unavailable');validate(operation+':'+response.status,schema,body,true);
  if(['readAdminLanguages','createLanguage','prepareDisabledLanguage','updateLanguageLabelsAndOrder'].includes(operation)&&(!/^"languages-[1-9][0-9]{0,18}"$/.test(response.headers.get('etag')??'')||body.siteId!==stringValue(config,'SITE_ID')))throw new BffError(503,'language_policy_unavailable');
  if(languageWorkspaceOperations.has(operation)&&response.headers.get('etag')!=='"language-workspace-'+body.id+'-'+body.revision+'"')throw new BffError(503,'language_policy_unavailable');
  return {body:body as T,status:response.status,headers:new Headers(response.headers)};
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,'language_policy_unavailable');}
}

export async function readLanguageBody(request:Request,limit=65536):Promise<unknown>{
 if(request.headers.get('content-type')?.split(';')[0]!=='application/json')throw new BffError(415,'unsupported_media_type');
 const reader=request.body?.getReader();if(!reader)throw new BffError(400,'invalid_request');let size=0;const chunks:Uint8Array[]=[];
 try{for(;;){const part=await reader.read();if(part.done)break;size+=part.value.length;if(size>limit)throw new BffError(413,'payload_too_large');chunks.push(part.value);}return JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch(error){if(error instanceof BffError)throw error;throw new BffError(400,'invalid_request');}finally{await reader.cancel().catch(()=>undefined);}
}
