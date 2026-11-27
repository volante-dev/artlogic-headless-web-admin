import {Suspense} from 'react';
import {AuthorizedPage} from '@/components/AuthorizedPage';
import {LanguageReadiness} from '@/components/languages/LanguageReadiness';
import {readAdminLanguagePolicy} from '@/lib/bff/site-language-policy';
import {languageBackend} from '@/lib/bff/site-languages';
import {BffError,uuidPattern} from '@/lib/bff/client';
import type {components} from '@/lib/bff/language-contract.generated';
export default function LanguagePage({params,searchParams}:{params:Promise<{languageId:string}>;searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense fallback={<main><p role="status">Chargement des traductions…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{
 const {languageId}=await params;if(!uuidPattern.test(languageId))throw new BffError(404,'resource_not_found');const policy=await readAdminLanguagePolicy(),language=policy.policy?.languages.find(value=>value.id===languageId);if(!language||!policy.capabilities)throw new BffError(404,'resource_not_found');
 const query=await searchParams,targetId=query.targetId,fieldId=query.fieldId,scope=query.scope??'public';if(targetId!==undefined&&(typeof targetId!=='string'||!uuidPattern.test(targetId))||fieldId!==undefined&&(typeof fieldId!=='string'||fieldId.length>160)||typeof scope!=='string'||!['public','scheduled','draft'].includes(scope))throw new BffError(400,'invalid_request');
 const sources=await languageBackend<components['schemas']['TargetPage']>('listLanguageTargets',{params:{languageId},query:{scope,limit:50}});
 return <LanguageReadiness siteId={policy.policy!.siteId} language={language} referenceLocale={policy.defaultLocale} policyEtag={policy.etag!} capabilities={policy.capabilities} initial={sources.body} csrfCookie={csrfCookie} initialScope={scope as components['schemas']['Source']['scope']} initialTargetId={targetId as string|undefined} focusFieldId={fieldId as string|undefined}/>;
 }}/></Suspense>;}
