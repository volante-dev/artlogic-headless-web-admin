// Generated from feature038. Independent of all legacy contract fingerprints.
import 'server-only';
import {createHash,timingSafeEqual} from 'node:crypto';
export class ConsumerProbeError extends Error{
 constructor(readonly code:'unauthorized'|'validation_failed'|'consumer_unavailable',readonly status:401|400|503){super(code);}
}
/** Shared server-only protocol. No cookies, admin session or caller-supplied build identity. */
export function authenticateConsumerProbe(input:{key:unknown;challengeId:unknown;expiresAt:unknown},expectedKey:string|undefined,now:number){
 if(!expectedKey)throw new ConsumerProbeError('consumer_unavailable',503);
 if(typeof input.key!=='string'||input.key.length>512||!timingSafeEqual(createHash('sha256').update(input.key).digest(),createHash('sha256').update(expectedKey).digest()))throw new ConsumerProbeError('unauthorized',401);
 const expires=typeof input.expiresAt==='string'?Date.parse(input.expiresAt):NaN;
 if(typeof input.challengeId!=='string'||!/^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(input.challengeId)||!Number.isFinite(now)||!Number.isFinite(expires)||expires<=now||expires-now>9000)throw new ConsumerProbeError('validation_failed',400);
 return {id:input.challengeId.toLowerCase(),expiresAt:new Date(expires).toISOString()};
}
/** Vercel's deployment ID, or Render's server-owned service/commit build identity. */
export function resolveLanguageDeployment(environment:Readonly<Record<string,string|undefined>>):string{
 if(environment.RENDER==='true'){
  const service=environment.RENDER_SERVICE_ID,commit=environment.RENDER_GIT_COMMIT;
  if(service&&/^srv-[a-zA-Z0-9-]{1,80}$/.test(service)&&commit&&/^[a-f0-9]{40,64}$/i.test(commit))return 'render:'+service+':'+commit;
  throw new ConsumerProbeError('consumer_unavailable',503);
 }
 const vercel=environment.VERCEL_DEPLOYMENT_ID;if(vercel&&/^dpl_[a-zA-Z0-9]{1,150}$/.test(vercel))return vercel;
 const local=environment.E2E_LANGUAGES_DEPLOYMENT_ID;if(environment.DATA_MODE==='mock'&&environment.DEPLOYMENT_ENV==='test'&&local&&/^[a-zA-Z0-9_-]{1,80}$/.test(local))return 'local:'+local;
 throw new ConsumerProbeError('consumer_unavailable',503);
}

/** Declared served modules come from this deployment's flags, never the caller's request. */
export function languageConsumerModules(role:'api'|'worker'|'frontend'|'admin',config:Readonly<Record<string,unknown>>):string[]{
 const team=role==='frontend'?config.PRESENTATION_TEAM_RENDER_ENABLED:role==='admin'?config.PRESENTATION_TEAM_EDITOR_ENABLED:config.PRESENTATION_TEAM_ENABLED;
 return ['core',...(config.FORMS_ENABLED==='true'?['forms']:[]),...(config.EDITORIAL_ENABLED==='true'?['editorial']:[]),...(team==='true'?['team']:[]),...(config.COMMERCE_ENABLED==='true'?['store']:[]),...(config.LINK_IN_BIO_ENABLED==='true'?['link_in_bio']:[])].sort();
}
