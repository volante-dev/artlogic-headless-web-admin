import Link from "next/link";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {SyncStatus} from "@/components/SyncStatus";
import {getSyncRun} from "@/lib/bff/sync-runs";
import {loadConfig,numberValue} from "@/lib/config/env";
export default function Page({params}:{params:Promise<{runId:string}>}){return <Suspense fallback={<main><p role="status">Chargement du suivi…</p></main>}><AuthorizedPage render={async()=>{
  const run=await getSyncRun((await params).runId);return <><Link prefetch={false} href="/sync-runs">Toutes les synchronisations</Link><h1>Suivi de l’import</h1><SyncStatus initial={run} pollInterval={numberValue(loadConfig(),"ADMIN_POLL_INTERVAL_MS")}/></>;
}}/></Suspense>;}
