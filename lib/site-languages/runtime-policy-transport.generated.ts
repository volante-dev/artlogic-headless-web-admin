// Generated from feature038. Independent of all legacy contract fingerprints.
import {decodeLanguagePolicy,languageLeaseRemaining,LanguagePolicyLeaseCache,type PublicLanguagePolicy} from './language-policy-protocol.generated';
export type RuntimePolicyRead =
 | {kind:'runtime';policy:PublicLanguagePolicy;remainingMs:number}
 | {kind:'legacy'}
 | {kind:'unavailable';reason:'unavailable'|'invalid_response'|'expired'|'access_denied'};
export interface PolicyTransportOptions {siteId:string;cacheOrigin:string;backendOrigin:string;required:boolean;allowLoopbackHttp:boolean;fetch:typeof fetch;monotonic?:()=>number}
function trustedOrigin(input:string,allowHttp:boolean):string{
 const url=new URL(input),loopback=['127.0.0.1','localhost','[::1]'].includes(url.hostname);
 if(url.username||url.password||url.search||url.hash||url.pathname!=='/'||!(url.protocol==='https:'||allowHttp&&loopback&&url.protocol==='http:'))throw new Error('invalid_language_policy_origin');
 return url.origin;
}
/** A dedicated, anonymous cache transport, independent of the public business API. */
export class RuntimePolicyTransport {
 private readonly cache:LanguagePolicyLeaseCache;
 private readonly key:string;
 private readonly endpoint:string;
 private readonly monotonic:()=>number;
 private generation=0;
 private readonly pending=new Map<string,Promise<RuntimePolicyRead>>();
 constructor(private readonly options:PolicyTransportOptions){
  this.monotonic=options.monotonic??(()=>performance.now());this.cache=new LanguagePolicyLeaseCache(this.monotonic);
  const origin=trustedOrigin(options.cacheOrigin,options.allowLoopbackHttp),backend=trustedOrigin(options.backendOrigin,options.allowLoopbackHttp);
  if(origin===backend)throw new Error('recursive_language_policy_origin');
  this.endpoint=origin+'/api/languages/policy';this.key=options.siteId+'@'+origin;
 }
 async read(force=false):Promise<RuntimePolicyRead>{
  if(force){this.generation++;this.cache.invalidate(this.key);this.pending.delete(this.key);}
  const hit=this.cache.get(this.key);if(hit)return {kind:'runtime',policy:hit.policy,remainingMs:hit.remainingMs};
  const ongoing=this.pending.get(this.key);if(ongoing)return ongoing;
  const read=this.load(this.generation);this.pending.set(this.key,read);
  try{return await read;}finally{if(this.pending.get(this.key)===read)this.pending.delete(this.key);}
 }
 private async load(generation:number):Promise<RuntimePolicyRead>{
  const started=this.monotonic();
  try{
   // Bypass Next Data Cache, while leaving HTTP caching to the shared CDN endpoint.
   const response=await this.options.fetch(this.endpoint,{method:'GET',headers:{Accept:'application/json'},cache:'default',next:{revalidate:0},credentials:'omit',redirect:'error',signal:AbortSignal.timeout(8000)});
   if(response.status===404){await response.body?.cancel();return !this.options.required&&!this.cache.observedManaged(this.key)?{kind:'legacy'}:{kind:'unavailable',reason:'unavailable'};}
   if(response.status!==200){await response.body?.cancel();return {kind:'unavailable',reason:[401,403].includes(response.status)?'access_denied':'unavailable'};}
   if(response.headers.has('set-cookie')||response.headers.has('etag')||!response.headers.get('content-type')?.includes('application/json')){await response.body?.cancel();return {kind:'unavailable',reason:'invalid_response'};}
   const bytes=await boundedPolicyBody(response);
   const policy=decodeLanguagePolicy(JSON.parse(bytes),this.options.siteId),remainingMs=languageLeaseRemaining(policy,response.headers,this.monotonic()-started);
   if(remainingMs<=0)return {kind:'unavailable',reason:'expired'};
   if(policy.mode==='managed')this.cache.noteManaged(this.key);if(generation===this.generation)this.cache.set(this.key,policy,remainingMs);return {kind:'runtime',policy,remainingMs};
  }catch{return {kind:'unavailable',reason:'unavailable'};}
 }
}
export async function boundedPolicyBody(response:Response):Promise<string>{
 const reader=response.body?.getReader();if(!reader)throw new Error('invalid_language_policy');
 const chunks:Uint8Array[]=[];let size=0;
 try{for(;;){const result=await reader.read();if(result.done)break;size+=result.value.byteLength;if(size>65536)throw new Error('invalid_language_policy');chunks.push(result.value);}const buffer=new Uint8Array(size);let offset=0;for(const chunk of chunks){buffer.set(chunk,offset);offset+=chunk.length;}return new TextDecoder('utf-8',{fatal:true}).decode(buffer);}finally{await reader.cancel().catch(()=>undefined);}
}
