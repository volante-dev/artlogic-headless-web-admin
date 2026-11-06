import {Suspense} from "react";
import {Skeleton} from "@mui/material";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {SubmissionDetail} from "@/components/forms/SubmissionDetail";
import {formsServerRequest} from "@/lib/forms/api";
import type {SubmissionDetail as Detail} from "@/lib/forms/reception-client";
export default function Page({params}:{params:Promise<{id:string}>}){return <Suspense fallback={<section aria-busy="true" aria-label="Demande reçue"><Skeleton height={52} width="60%"/><Skeleton height={220}/></section>}><AuthorizedPage render={async({csrfCookie})=>{const {id}=await params,result=await formsServerRequest<Detail>("GET",["submissions",id]);return <SubmissionDetail key={id} initial={result.data} initialTag={result.tag??result.data.etag} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
