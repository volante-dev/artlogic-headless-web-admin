import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Suspense} from 'react';
import {AuthorizedPage} from '@/components/AuthorizedPage';
import {PublicationFeedbackProvider} from '@/components/PublicationFeedback';
import {LinkInBioManager} from '@/components/link-in-bio/LinkInBioManager';
import {loadConfig} from '@/lib/config/env';
export default function LinkInBioPage({searchParams}:{searchParams:Promise<{instagram?:string}>}){return <Suspense fallback={<main><p role="status">Chargement…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{const query=await searchParams,instagramResult=['connected','cancelled','failed'].includes(query.instagram??'')?query.instagram as 'connected'|'cancelled'|'failed':null;const config=loadConfig(),policy=(await readAdminLanguagePolicy());return <><h1>Link in bio</h1>{config.LINK_IN_BIO_ENABLED==='true'?<PublicationFeedbackProvider><LinkInBioManager instagramResult={instagramResult} csrfCookie={csrfCookie} locales={policy.locales} defaultLocale={policy.defaultLocale}/></PublicationFeedbackProvider>:<p>Le module Link in bio est désactivé dans cet environnement.</p>}</>;}}/></Suspense>;}
