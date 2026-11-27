import 'server-only';
import {cache} from 'react';
import {languageBackend} from './site-languages';
import {requiredSession} from './sync-runs';
import type {components} from './language-contract.generated';
type Capabilities=components['schemas']['Capabilities'];
type AdminPolicy=components['schemas']['AdminPolicy'];
/** React cache deduplicates within a server request, never across admin sessions. */
const readPolicy=cache(async(session:string)=>{
 const capabilities=await languageBackend<Capabilities>('readLanguageCapabilities',{session});
 const result=await languageBackend<AdminPolicy>('readAdminLanguages',{session});
  return {availability:'managed' as const,capabilities:capabilities.body,policy:result.body,etag:result.headers.get('etag')!,defaultLocale:result.body.defaultLocale,locales:result.body.languages.filter(l=>l.state!=='disabled').map(l=>({code:l.code,label:l.label})),activeLocales:result.body.languages.filter(l=>l.state==='active').map(l=>({code:l.code,label:l.label})),preparingLocales:result.body.languages.filter(l=>l.state==='preparing').map(l=>({code:l.code,label:l.label}))};

});

export async function readAdminLanguagePolicy(session?:string){return readPolicy(session??await requiredSession());}
