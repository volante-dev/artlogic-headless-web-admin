import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConfirmRead} from "@/components/forms/ConfirmRead";
import {formsServerRequest} from "@/lib/forms/api";
import type {SubmissionDetail} from "@/lib/forms/reception-client";
/** SSO is the authority; do not mount the active SubmissionDetail here. */
export default function Page({params}:{params:Promise<{id:string}>}){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=>{const {id}=await params,result=await formsServerRequest<SubmissionDetail>("GET",["submissions",id]);return <ConfirmRead key={id} id={id} reference={result.data.reference} title={result.data.formTitle} readAt={result.data.readAt} initialTag={result.tag??result.data.etag} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
