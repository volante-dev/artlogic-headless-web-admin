import 'server-only';
import {cache} from 'react';
import {loadConfig,configuredLocalePolicy} from '../config/env';
import {languageBackend} from './site-languages';
import {BffError} from './client';
import {requiredSession} from './sync-runs';
import type {components} from './language-contract.generated';
type Capabilities=components['schemas']['Capabilities'];
type AdminPolicy=components['schemas']['AdminPolicy'];
/** React cache deduplicates within a server request, never across admin sessions. */
const readPolicy=cache(async(session:string)=>{
 const config=loadConfig();
 let capabilities:Awaited<ReturnType<typeof languageBackend<Capabilities>>>;
 try{capabilities=await languageBackend<Capabilities>('readLanguageCapabilities',{session});}catch(error){
  if(!(error instanceof BffError)||error.status!==404||config.SITE_LANGUAGES_RUNTIME_REQUIRED==='true')throw error;
  const legacy=configuredLocalePolicy(config);return {availability:'legacy' as const,capabilities:null,policy:null,etag:null,...legacy,activeLocales:legacy.locales,preparingLocales:[]};
 }
 const result=await languageBackend<AdminPolicy>('readAdminLanguages',{session});
  return {availability:capabilities.body.enabled?'managed' as const:'dormant' as const,capabilities:capabilities.body,policy:result.body,etag:result.headers.get('etag')!,defaultLocale:result.body.defaultLocale,locales:result.body.languages.filter(l=>l.state!=='disabled').map(l=>({code:l.code,label:l.label})),activeLocales:result.body.languages.filter(l=>l.state==='active').map(l=>({code:l.code,label:l.label})),preparingLocales:result.body.languages.filter(l=>l.state==='preparing').map(l=>({code:l.code,label:l.label}))};

});

export async function readAdminLanguagePolicy(session?:string){return readPolicy(session??await requiredSession());}
