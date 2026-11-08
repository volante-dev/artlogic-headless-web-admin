import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorManagement} from "@/components/connectors/ConnectorManagement";
import {connectorOverview} from "@/lib/bff/connectors";
import {loadConfig} from "@/lib/config/env";
export default function Page({searchParams}:{searchParams:Promise<{cursor?:string}>}){return <Suspense fallback={<main><p role="status">Chargement des connexions…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{if(loadConfig().MCP_ENABLED!=="true")notFound();const {cursor}=await searchParams;return <ConnectorManagement {...await connectorOverview(cursor)} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
