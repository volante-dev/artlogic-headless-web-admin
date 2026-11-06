import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ArticleList} from "@/components/editorial/ArticleList";
export default function Page(){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=>{return <ArticleList kind="publication" csrfCookie={csrfCookie}/>;}}/></Suspense>;}
