import {Suspense} from "react";
import {notFound} from "next/navigation";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ConnectorAuditDetail} from "@/components/connectors/ConnectorAudit";
import {connectorAuditDetail} from "@/lib/bff/connectors";
import {loadConfig} from "@/lib/config/env";
type Props={params:Promise<{operationId:string}>;searchParams:Promise<{cursor?:string}>};
export default function Page(props:Props){return <Suspense fallback={<main><p role="status">Chargement de l’opération…</p></main>}><Content {...props}/></Suspense>;}
async function Content({params,searchParams}:Props){if(loadConfig().MCP_ENABLED!=="true")notFound();const {operationId}=await params;return <AuthorizedPage loginNext={"/connectors/chatgpt/operations/"+operationId} render={async()=>{const {cursor}=await searchParams;return <ConnectorAuditDetail detail={await connectorAuditDetail(operationId,cursor)}/>;}}/>;}
