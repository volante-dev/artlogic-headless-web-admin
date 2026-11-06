import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {FormEditor} from "@/components/forms/FormEditor";
import {formsServerRequest} from "@/lib/forms/api";
import type {FormAdmin} from "@/lib/forms/client";
import {configuredLocalePolicy,loadConfig} from "@/lib/config/env";
import {BffError} from "@/lib/bff/client";
export default function Page({params}:{params:Promise<{formId:string}>}){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=>{const {formId}=await params,result=await formsServerRequest<FormAdmin>("GET",[formId]);if(!result.tag)throw new BffError(503,"service_unavailable");return <FormEditor initial={result.data} initialTag={result.tag} locales={configuredLocalePolicy(loadConfig()).locales} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
