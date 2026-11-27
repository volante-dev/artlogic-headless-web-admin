import 'server-only';
import {RuntimePolicyTransport} from './runtime-policy-transport.generated';
import {decodeLanguagePolicy} from './language-policy-protocol.generated';
import {decodeRuntimeMessages} from './runtime-content.generated';
import {runtimeMessageCatalogueId} from './message-definitions.generated';
import {ConsumerProbeError} from './consumer-probe-protocol.generated';
import {stringValue,canonicalJson,type Config} from '../config/env';
/** Anonymous runtime observation, deliberately separate from session-bound admin BFF reads. */
export async function readPublicLanguageObservation(config:Config,signal:AbortSignal){
 const siteId=stringValue(config,'SITE_ID'),backendOrigin=stringValue(config,'BACKEND_URL'),reader=new RuntimePolicyTransport({siteId,backendOrigin,cacheOrigin:typeof config.SITE_LANGUAGES_POLICY_CACHE_ORIGIN==='string'?config.SITE_LANGUAGES_POLICY_CACHE_ORIGIN:stringValue(config,'SITE_ORIGIN'),required:true,allowLoopbackHttp:config.DATA_MODE==='mock'&&config.DEPLOYMENT_ENV==='test',fetch:(input,init)=>fetch(input,{...init,signal:AbortSignal.any([signal,init?.signal??signal])})});
 const read=await reader.read();if(read.kind!=='runtime')throw new ConsumerProbeError('consumer_unavailable',503);
 const endpoint=new URL('/v1/public/languages/content',backendOrigin);endpoint.search=new URLSearchParams({locale:read.policy.defaultLocale,revision:read.policy.publicRevision,catalogue:runtimeMessageCatalogueId}).toString();
 const response=await fetch(endpoint,{method:'GET',headers:{Accept:'application/json'},cache:'no-store',credentials:'omit',redirect:'error',signal});
 if(response.status!==200||response.headers.has('set-cookie')||!response.headers.get('content-type')?.includes('application/json')){await response.body?.cancel();throw new ConsumerProbeError('consumer_unavailable',503);}
 const bodyReader=response.body?.getReader();if(!bodyReader)throw new ConsumerProbeError('consumer_unavailable',503);let size=0;const chunks:Uint8Array[]=[];
 try{for(;;){const part=await bodyReader.read();if(part.done)break;size+=part.value.byteLength;if(size>4194304)throw new ConsumerProbeError('consumer_unavailable',503);chunks.push(part.value);}}finally{await bodyReader.cancel().catch(()=>undefined);}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
 const body=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes)) as Record<string,unknown>,policy=decodeLanguagePolicy(body.policy,siteId);
 if(body.contractVersion!==1||body.selectedCatalogueId!==runtimeMessageCatalogueId||body.locale!==read.policy.defaultLocale||typeof body.contentRevision!=='string'||!(/^[1-9][0-9]{0,18}$/).test(body.contentRevision)||BigInt(body.contentRevision)>BigInt('9223372036854775807')||policy.publicRevision!==read.policy.publicRevision||canonicalJson({defaultLocale:policy.defaultLocale,locales:policy.locales})!==canonicalJson({defaultLocale:read.policy.defaultLocale,locales:read.policy.locales}))throw new ConsumerProbeError('consumer_unavailable',503);
 const decoded=decodeRuntimeMessages(body.messages,read.policy.defaultLocale);return {publicRevision:policy.publicRevision,modules:decoded.modules};
}
