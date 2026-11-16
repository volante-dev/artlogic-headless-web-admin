import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {LegalPageEditor} from "@/components/LegalPageEditor";
import {getSiteContent} from "@/lib/bff/site-content";
import {loadConfig,stringValue} from "@/lib/config/env";

export default function Page(){return <Suspense fallback={<p role="status">Chargement des mentions légales…</p>}><AuthorizedPage loginNext="/legal" render={async({csrfCookie})=>{const result=await getSiteContent();return <LegalPageEditor initial={result.body} initialEtag={result.headers.get("etag")!} csrfCookie={csrfCookie} siteOrigin={stringValue(loadConfig(),"SITE_ORIGIN")}/>;}}/></Suspense>;}
