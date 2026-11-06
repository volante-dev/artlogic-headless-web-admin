import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {InquiryList} from "@/components/contact/InquiryList";
import {listContactInquiries} from "@/lib/bff/contact";
import {BffError} from "@/lib/bff/client";
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense fallback={<main><p role="status">Chargement des demandes…</p></main>}><AuthorizedPage render={async()=>{const input=await searchParams,query=new URLSearchParams();for(const [key,value]of Object.entries(input)){if(Array.isArray(value))throw new BffError(400,"invalid_request");if(value)query.set(key,value);}const page=await listContactInquiries(query);return <><h1>Demandes</h1><p>Consultez les messages reçus par la galerie et suivez leur notification par e-mail.</p><InquiryList page={page} query={query}/></>;}}/></Suspense>;}
