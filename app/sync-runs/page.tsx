import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {SyncTrigger} from "@/components/SyncTrigger";
import {listSyncRuns} from "@/lib/bff/sync-runs";
const labels={queued:"En attente",running:"En cours",succeeded:"Terminée",succeeded_with_warnings:"Terminée avec avertissements",failed:"Échouée"};
export default function Page({searchParams}:{searchParams:Promise<{cursor?:string}>}){return <Suspense fallback={<main><p role="status">Chargement des synchronisations…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{
  const {cursor}=await searchParams,query=new URLSearchParams({limit:"20"});if(cursor)query.set("cursor",cursor);const runs=await listSyncRuns(query);
  return <><p className="eyebrow">Catalogue Artlogic</p><h1>Synchronisations</h1><p>Importez les œuvres et leurs images. Les nouvelles œuvres restent masquées jusqu’à votre choix de publication.</p><p>Dernière réussite : {runs.lastSuccessAt?new Date(runs.lastSuccessAt).toLocaleString("fr-FR"):"aucune synchronisation réussie"}.</p>{runs.nextAllowedAt&&<p>Prochaine demande au plus tôt : {new Date(runs.nextAllowedAt).toLocaleString("fr-FR")}.</p>}<SyncTrigger csrfCookie={csrfCookie}/><h2>Historique</h2>{runs.items.length?<ul className="run-list">{runs.items.map(run=><li key={run.id}><a href={"/sync-runs/"+run.id}>{new Date(run.createdAt).toLocaleString("fr-FR")} — {labels[run.status]}</a><span>Demandée par {run.initiatorSubject}</span></li>)}</ul>:<p>Aucune synchronisation pour le moment.</p>}{runs.nextCursor&&<a href={"/sync-runs?cursor="+encodeURIComponent(runs.nextCursor)}>Page suivante</a>}</>;
  }}/></Suspense>;}
