import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorConsent} from "@/components/connectors/ConnectorConsent";
import {connectorConsent} from "@/lib/bff/connectors";
import {loadConfig} from "@/lib/config/env";
import {BffError,uuidPattern} from "@/lib/bff/client";
export const metadata={title:"Autoriser ChatGPT",referrer:"no-referrer" as const,robots:{index:false,follow:false}};
export default function Page({searchParams}:{searchParams:Promise<{request?:string}>}){return <Suspense fallback={<main><p role="status">Vérification de la demande…</p></main>}><Content searchParams={searchParams}/></Suspense>;}
async function Content({searchParams}:{searchParams:Promise<{request?:string}>}){const {request}=await searchParams;if(loadConfig().MCP_ENABLED!=="true")notFound();if(typeof request!=="string"||!uuidPattern.test(request))return <main><h1>Demande de connexion invalide</h1><p>Recommencez la connexion depuis ChatGPT.</p></main>;return <AuthorizedPage loginNext={"/connectors/chatgpt/consent?request="+request} render={async({csrfCookie})=>{try{return <ConnectorConsent view={await connectorConsent(request)} csrfCookie={csrfCookie}/>;}catch(error){if(error instanceof BffError&&[400,409].includes(error.status))return <section><h1>Demande de connexion expirée</h1><p>Cette demande a expiré ou a déjà été traitée. Recommencez la connexion depuis ChatGPT.</p></section>;throw error;}}}/>;}
