import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorManagement} from "@/components/connectors/ConnectorManagement";
import {connectorOverview} from "@/lib/bff/connectors";
import {loadConfig} from "@/lib/config/env";
export default function Page({searchParams}:{searchParams:Promise<{cursor?:string}>}){return <Suspense fallback={<main><p role="status">Chargement des connexions…</p></main>}><Content searchParams={searchParams}/></Suspense>;}
async function Content({searchParams}:{searchParams:Promise<{cursor?:string}>}){if(loadConfig().MCP_ENABLED!=="true")notFound();return <AuthorizedPage render={async({csrfCookie})=>{const {cursor}=await searchParams;return <ConnectorManagement {...await connectorOverview(cursor)} csrfCookie={csrfCookie}/>;}}/>;}
