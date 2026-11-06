import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ArticleEditor} from "@/components/editorial/ArticleEditor";
export default function Page({params}:{params:Promise<{articleId:string}>}){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=>{const {articleId}=await params;return <ArticleEditor key={articleId} articleId={articleId} kind="exhibition" csrfCookie={csrfCookie}/>;}}/></Suspense>;}
