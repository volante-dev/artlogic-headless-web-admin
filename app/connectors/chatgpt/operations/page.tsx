import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorAuditList} from "@/components/connectors/ConnectorAudit";
import {connectorAuditList} from "@/lib/bff/connectors";
import {loadConfig} from "@/lib/config/env";
type Props={searchParams:Promise<{cursor?:string}>};
export default function Page(props:Props){return <Suspense fallback={<main><p role="status">Chargement de l’historique…</p></main>}><Content {...props}/></Suspense>;}
async function Content({searchParams}:Props){if(loadConfig().MCP_ENABLED!=="true")notFound();return <AuthorizedPage loginNext="/connectors/chatgpt/operations" render={async()=>{const {cursor}=await searchParams;return <ConnectorAuditList page={await connectorAuditList(cursor)}/>;}}/>;}
