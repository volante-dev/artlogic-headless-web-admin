import {resourceVersion} from '../resource-version';
import type {components} from './contract-types.generated';
export type LibSchemas=components['schemas'];
export class LinkInBioError extends Error {constructor(readonly status:number,readonly code:string,readonly details:{field:string;reason:string}[]=[]){super(code);}}
export function linkInBioErrorMessage(error:unknown){
 const base=error instanceof LinkInBioError?error.status===412?'Le brouillon a changé dans une autre session. Votre saisie est conservée. Relisez la version enregistrée avant de poursuivre.':error.status===401?'Votre session a expiré. Votre saisie est conservée.':error.status===403?'Vous n’avez pas accès à cette opération.':error.status===400?'Vérifiez les champs. Votre saisie est conservée.':error.status===429?'Patientez avant de réessayer.':error.code==='route_conflict'?'L’adresse /link-in-bio est déjà utilisée par une page du site.':'L’opération n’a pas pu être confirmée. Votre saisie est conservée.':'Le service est momentanément indisponible. Votre saisie est conservée.';
 return base+(error instanceof LinkInBioError&&error.details.length?'\n'+error.details.map(d=>d.field+' : '+({required:'obligatoire',too_long:'trop long',invalid:'valeur invalide',unavailable:'indisponible',not_allowed:'non autorisé',conflict:'conflit'}[d.reason]??d.reason)).join('\n'):'');
}
export async function linkInBioFetch<T>(path:string,options:{method?:string;body?:unknown;tag?:string;key?:string;csrfCookie?:string;signal?:AbortSignal}={}){
 const csrf=options.csrfCookie?document.cookie.split(';').map(v=>v.trim()).find(v=>v.startsWith(options.csrfCookie+'='))?.slice(options.csrfCookie.length+1)??'':'';
 let response:Response;try{response=await fetch('/api/link-in-bio/'+path,{method:options.method??'GET',body:options.body===undefined?undefined:JSON.stringify(options.body),headers:{...(options.body===undefined?{}:{'Content-Type':'application/json'}),...(options.tag?{'If-Match':options.tag}:{}),...(options.key?{'Idempotency-Key':options.key}:{}),...(options.csrfCookie?{'X-CSRF-Token':csrf}:{})},cache:'no-store',signal:options.signal??AbortSignal.timeout(30000)});}catch{throw new LinkInBioError(0,'uncertain_response');}
 let data;try{data=await response.json();}catch{throw new LinkInBioError(0,'uncertain_response');}if(!response.ok)throw new LinkInBioError(response.status,data?.error?.code??'dependency_unavailable',data?.error?.details??[]);return {data:data as T,tag:resourceVersion(response.headers)};
}
export function linkInBioThumbnail(thumbnail:LibSchemas['LibAdminThumbnail']|null){
 if(!thumbnail)return null;const uuid=/^[0-9a-f-]{36}$/i;if(thumbnail.kind==='catalog_media')return uuid.test(thumbnail.mediaId)?'/api/media/'+thumbnail.mediaId+'?variant=thumbnail':null;
 if(!uuid.test(thumbnail.assetId)||!['w640','original'].includes(thumbnail.variant)||thumbnail.width>640||thumbnail.width<1||thumbnail.height<1)return null;return '/api/presentation/assets/'+thumbnail.assetId+'/content?variant='+thumbnail.variant;
}
