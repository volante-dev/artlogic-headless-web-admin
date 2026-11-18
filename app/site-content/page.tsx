import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {SiteContentEditor} from "@/components/SiteContentEditor";
import {getSiteContent} from "@/lib/bff/site-content";
export default function Page({searchParams}:{searchParams?:Promise<{locale?:string|string[]}>}){return <Suspense fallback={<main><p role="status">Chargement du contenu du site…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{const result=await getSiteContent(),query=await searchParams;return <SiteContentEditor initial={result.body} initialEtag={result.headers.get("etag")!} csrfCookie={csrfCookie} initialLocale={typeof query?.locale==="string"?query.locale:undefined}/>;}}/></Suspense>;}
