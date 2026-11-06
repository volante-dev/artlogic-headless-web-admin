import {Suspense} from "react";
import {Skeleton} from "@mui/material";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {SubmissionList} from "@/components/forms/SubmissionList";
import {formsServerRequest} from "@/lib/forms/api";
import {BffError} from "@/lib/bff/client";
import type {components} from "@/lib/forms/contract-types.generated";
import {configuredLocalePolicy,loadConfig} from "@/lib/config/env";
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense fallback={<section aria-busy="true" aria-label="Réception des demandes"><Skeleton height={52} width="60%"/><Skeleton height={200}/></section>}><AuthorizedPage render={async({csrfCookie})=>{
 const input=await searchParams,query=new URLSearchParams();for(const [key,value]of Object.entries(input)){if(Array.isArray(value))throw new BffError(400,"invalid_request");if(value)query.set(key,value);}
 const [page,forms,views]=await Promise.all([formsServerRequest<components["schemas"]["FormsSubmissionPage"]>("GET",["submissions"],{query}),formsServerRequest<components["schemas"]["FormsAdminPage"]>("GET",[],{query:new URLSearchParams({limit:"100"})}),formsServerRequest<components["schemas"]["FormsViewPage"]>("GET",["views"])]);
 return <SubmissionList page={page.data} forms={forms.data.items} views={views.data.items} locale={configuredLocalePolicy(loadConfig()).defaultLocale} query={Object.fromEntries(query)} csrfCookie={csrfCookie}/>;
 }}/></Suspense>;}
