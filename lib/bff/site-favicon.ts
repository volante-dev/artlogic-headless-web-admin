import 'server-only';
import {NextResponse,type NextRequest} from 'next/server';
import {loadConfig,stringValue,numberValue} from '../config/env';
import {BffError,failure,privateHeaders} from './client';
import {mutationProof,requireEmptyBody} from './csrf';
import {requiredSession} from './sync-runs';
import {boundedBytes} from './presentation';
export async function faviconHandler(request:NextRequest){try{
 const method=request.method,proof=method==='GET'?{session:await requiredSession()}:mutationProof(request),config=loadConfig();
 if(request.nextUrl.searchParams.size)throw new BffError(400,'invalid_request');
 const headers=new Headers({'Accept':'application/json','X-BFF-Key':stringValue(config,'BFF_SERVICE_KEY'),'X-Admin-Session':proof.session});
 let body:ArrayBuffer|undefined;
 if('csrf' in proof){headers.set('X-CSRF-Token',proof.csrf);const tag=request.headers.get('if-match');if(!tag)throw new BffError(428,'precondition_required');if(!/^"favicon-(0|[1-9][0-9]{0,14})"$/.test(tag))throw new BffError(400,'invalid_request');headers.set('If-Match',tag);}
 if(method==='PUT'){
  if(request.headers.get('content-type')?.split(';')[0]!=='image/png')throw new BffError(415,'unsupported_media_type');
  const bytes=await boundedBytes(request.body,2097152);if(!bytes.length)throw new BffError(400,'invalid_logo');body=new Uint8Array(bytes).buffer;headers.set('Content-Type','image/png');
 }else if(method==='DELETE')await requireEmptyBody(request);
 let response:Response;try{response=await fetch(stringValue(config,'BACKEND_URL').replace(/\/$/,'')+'/v1/admin/site-favicon',{method,headers,body,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(numberValue(config,'REQUEST_TIMEOUT_MS'))});}catch{throw new BffError(503,'service_unavailable');}
 if(response.status===404){await response.body?.cancel();throw new BffError(404,'not_found');}
 if(response.headers.get('content-type')?.split(';')[0]!=='application/json'){await response.body?.cancel();throw new BffError(503,'service_unavailable');}
 const data=JSON.parse((await boundedBytes(response.body,16384)).toString());
 if(!response.ok){const allowed=[400,401,403,412,413,415,428,429,503],details=Array.isArray(data?.error?.details)?data.error.details.filter((d:{field?:unknown;reason?:unknown})=>d.field==='file'&&['invalid_image','animated_image'].includes(String(d.reason))):undefined;throw new BffError(allowed.includes(response.status)?response.status:503,'favicon_failed',undefined,undefined,undefined,details);}
 const etag=response.headers.get('etag');
 if(!Number.isSafeInteger(data.revision)||data.revision<0||etag!=='"favicon-'+data.revision+'"'||typeof data.configured!=='boolean')throw new BffError(503,'service_unavailable');
 if(method==='GET'&&data.previewUrl!==null){const url=new URL(data.previewUrl);if((url.protocol!=='https:'&&!(config.DATA_MODE==='mock'&&['localhost','127.0.0.1'].includes(url.hostname)))||url.username||url.password)throw new BffError(503,'service_unavailable');}
 return NextResponse.json(data,{headers:{...privateHeaders,ETag:etag,'X-Resource-Version':etag}});
}catch(error){return failure(error);}}
