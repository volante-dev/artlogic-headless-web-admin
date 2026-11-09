import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorProposalPreview} from "@/components/connectors/ConnectorProposalPreview";
import {connectorChange} from "@/lib/bff/connectors";
import {uuidPattern} from "@/lib/bff/client";
import {loadConfig,stringValue,configuredLocalePolicy} from "@/lib/config/env";
type Props={params:Promise<{changeId:string}>;searchParams:Promise<{revision?:string}>};
export default function Page(props:Props){return <Suspense fallback={<main><p role="status">Chargement de la proposition…</p></main>}><Content {...props}/></Suspense>;}
async function Content({params,searchParams}:Props){
 const config=loadConfig(),{changeId}=await params,{revision}=await searchParams;if(config.MCP_ENABLED!=="true"||!uuidPattern.test(changeId)||revision!==undefined&&! /^[1-9][0-9]{0,19}$/.test(revision))notFound();
 const path="/connectors/chatgpt/changes/"+changeId+(revision?"?revision="+revision:"");
 return <AuthorizedPage loginNext={path} render={async({csrfCookie})=><ConnectorProposalPreview change={await connectorChange(changeId)} expectedRevision={revision} csrfCookie={csrfCookie} siteOrigin={stringValue(config,"SITE_ORIGIN")} {...configuredLocalePolicy(config)}/>}/>;
}
