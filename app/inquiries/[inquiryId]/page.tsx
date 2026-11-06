import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {InquiryDetail} from "@/components/contact/InquiryDetail";
import {readContactInquiry} from "@/lib/bff/contact";
export default function Page({params}:{params:Promise<{inquiryId:string}>}){return <Suspense fallback={<main><p role="status">Chargement de la demande…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{const result=await readContactInquiry((await params).inquiryId);return <InquiryDetail initial={result.body} initialEtag={result.headers.get("etag")!} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
