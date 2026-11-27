import {loadConfig,stringValue} from '@/lib/config/env';
import {authenticateConsumerProbe,ConsumerProbeError,resolveLanguageDeployment,languageConsumerModules} from '@/lib/site-languages/consumer-probe-protocol.generated';
import {runtimeSupportedCatalogueIds,legacyMessageCatalogueId} from '@/lib/site-languages/message-definitions.generated';
import {readPublicLanguageObservation} from '@/lib/site-languages/public-observation';
const privateHeaders={'Cache-Control':'private, no-store','Vercel-CDN-Cache-Control':'no-store'};
/** A dedicated probe key observes runtime support without any SSO or admin cookie. */
export async function GET(request:Request){
 try{
  const config=loadConfig(),query=new URL(request.url).searchParams,challenge=authenticateConsumerProbe({key:request.headers.get('x-site-languages-probe-key'),expiresAt:request.headers.get('x-site-languages-probe-expires-at'),challengeId:query.get('challengeId')},typeof config.SITE_LANGUAGES_PROBE_KEY==='string'?config.SITE_LANGUAGES_PROBE_KEY:undefined,Date.now());
  if([...query.keys()].some(key=>key!=='challengeId')||query.getAll('challengeId').length!==1)throw new ConsumerProbeError('validation_failed',400);
  const slotId=config.SITE_LANGUAGES_CONSUMER_SLOT_ID;if(typeof slotId!=='string')throw new ConsumerProbeError('consumer_unavailable',503);
  const remaining=Date.parse(challenge.expiresAt)-Date.now();if(remaining<=0)throw new ConsumerProbeError('consumer_unavailable',503);
  const observed=await readPublicLanguageObservation(config,AbortSignal.any([request.signal,AbortSignal.timeout(remaining)]));if(Date.parse(challenge.expiresAt)<=Date.now())throw new ConsumerProbeError('consumer_unavailable',503);
  const modules=languageConsumerModules('admin',config).filter(module=>observed.modules.includes(module));if(!modules.includes('core'))throw new ConsumerProbeError('consumer_unavailable',503);
  const receipt={siteId:stringValue(config,'SITE_ID'),slotId,deploymentId:resolveLanguageDeployment({...process.env,DATA_MODE:String(config.DATA_MODE),DEPLOYMENT_ENV:String(config.DEPLOYMENT_ENV)}),challengeId:challenge.id,contractVersion:1,runtimeRequired:true,observedPublicRevision:observed.publicRevision,catalogueIds:[...runtimeSupportedCatalogueIds,legacyMessageCatalogueId],descriptorVersion:'1',modules,observedAt:new Date().toISOString()};
  return Response.json(receipt,{headers:privateHeaders});
 }catch(error){const safe=error instanceof ConsumerProbeError?error:new ConsumerProbeError('consumer_unavailable',503);return Response.json({error:{code:safe.code}},{status:safe.status,headers:privateHeaders});}
}
