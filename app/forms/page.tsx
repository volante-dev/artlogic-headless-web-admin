import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {FormLibrary} from "@/components/forms/FormLibrary";
import {formsServerRequest} from "@/lib/forms/api";
import type {components} from "@/lib/forms/contract-types.generated";
import {configuredLocalePolicy,loadConfig} from "@/lib/config/env";
import {BffError} from "@/lib/bff/client";
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=>{const input=await searchParams,query=new URLSearchParams();for(const [key,value]of Object.entries(input)){if(Array.isArray(value))throw new BffError(400,"invalid_request");if(value)query.set(key,value);}const result=await formsServerRequest<components["schemas"]["FormsAdminPage"]>("GET",[],{query});return <FormLibrary page={result.data} locale={configuredLocalePolicy(loadConfig()).defaultLocale} query={Object.fromEntries(query)} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
