import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorConsent} from "@/components/connectors/ConnectorConsent";
import {connectorConsent} from "@/lib/bff/connectors";
import {loadConfig} from "@/lib/config/env";
import {uuidPattern} from "@/lib/bff/client";
export const metadata={title:"Autoriser ChatGPT",referrer:"no-referrer" as const,robots:{index:false,follow:false}};
export default function Page({searchParams}:{searchParams:Promise<{request?:string}>}){return <Suspense fallback={<main><p role="status">Vérification de la demande…</p></main>}><Content searchParams={searchParams}/></Suspense>;}
async function Content({searchParams}:{searchParams:Promise<{request?:string}>}){const {request}=await searchParams;if(loadConfig().MCP_ENABLED!=="true")notFound();if(typeof request!=="string"||!uuidPattern.test(request))return <main><h1>Demande de connexion invalide</h1><p>Recommencez la connexion depuis ChatGPT.</p></main>;return <AuthorizedPage loginNext={"/connectors/chatgpt/consent?request="+request} render={async({csrfCookie})=><ConnectorConsent view={await connectorConsent(request)} csrfCookie={csrfCookie}/>}/>;}
