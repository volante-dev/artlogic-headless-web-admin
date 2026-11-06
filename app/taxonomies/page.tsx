import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {TaxonomyManager} from "@/components/editorial/TaxonomyManager";
export default function Page(){return <Suspense fallback={<div aria-busy="true" aria-label="Administration"/>}><AuthorizedPage render={async({csrfCookie})=><TaxonomyManager csrfCookie={csrfCookie}/>}/></Suspense>;}
