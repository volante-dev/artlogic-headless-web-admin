import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {CreateArticleForm} from "@/components/editorial/CreateArticleForm";
export default function Page(){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=>{return <CreateArticleForm kind="news" csrfCookie={csrfCookie}/>;}}/></Suspense>;}
