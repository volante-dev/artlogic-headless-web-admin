import {Suspense} from 'react';
import {AuthorizedPage} from '@/components/AuthorizedPage';
import {LanguageList} from '@/components/languages/LanguageList';
import {readAdminLanguagePolicy} from '@/lib/bff/site-language-policy';
export default function LanguagesPage(){return <Suspense fallback={<main><p role="status">Chargement des langues…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{
 const result=await readAdminLanguagePolicy();
 if(!result.policy||!result.capabilities)return <section><h1>Langues du site</h1><p role="status">La gestion des langues n’est pas disponible sur cette version de l’API. Les autres éditeurs restent accessibles.</p></section>;
 return <LanguageList initial={result.policy} etag={result.etag!} capabilities={result.capabilities} csrfCookie={csrfCookie}/>;
 }}/></Suspense>;}
