import 'server-only';
import type {LibSchemas} from '../link-in-bio/client';
import {validLinkInBio} from '../link-in-bio/contracts';
import {loadConfig,stringValue,numberValue} from '../config/env';
import {BffError} from './client';
import {boundedBytes} from './presentation';
/** The ordinary BFF allowlist never permits this callback. State is consumed by its dedicated API guard/service. */
export async function completeLinkInBioOAuth(body:LibSchemas['LibOAuthCallback'],session:string){
 if(!validLinkInBio('LibOAuthCallback',body))throw new BffError(400,'oauth_state_invalid');const config=loadConfig();
 let response:Response;try{response=await fetch(stringValue(config,'BACKEND_URL').replace(/\/$/,'')+'/v1/admin/link-in-bio/instagram/callback',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json','X-BFF-Key':stringValue(config,'BFF_SERVICE_KEY'),'X-Admin-Session':session},body:JSON.stringify(body),cache:'no-store',redirect:'error',signal:AbortSignal.timeout(numberValue(config,'REQUEST_TIMEOUT_MS'))});}catch{throw new BffError(503,'dependency_unavailable');}
 let data:unknown;try{data=JSON.parse((await boundedBytes(response.body,65536)).toString());}catch{throw new BffError(503,'dependency_unavailable');}
 if(!response.ok||!validLinkInBio('LibOAuthResult',data))throw new BffError(response.ok?503:response.status,'oauth_state_invalid');return data as LibSchemas['LibOAuthResult'];
}
