"use client";
import {useEffect,useState} from "react";
import type {SyncRun} from "@/lib/bff/sync-runs";
export const statusLabels={queued:"En attente du worker",running:"Synchronisation en cours",succeeded:"Synchronisation terminée",succeeded_with_warnings:"Synchronisation terminée avec avertissements",failed:"Synchronisation échouée"};
const countLabels={fetched:"Œuvres récupérées",added:"Ajoutées",updated:"Actualisées",unchanged:"Inchangées",withdrawn:"Retirées",mediaWarnings:"Avertissements images"};
export function SyncStatus({initial,pollInterval}:{initial:SyncRun;pollInterval:number}){
  const [run,setRun]=useState(initial),[error,setError]=useState(""),[attempt,setAttempt]=useState(0),active=run.status==="queued"||run.status==="running";
  useEffect(()=>{
    if(!active)return;let stopped=false,timer:ReturnType<typeof setTimeout>;const controller=new AbortController();
    async function poll(){try{
      const response=await fetch("/api/sync-runs/"+initial.id,{cache:"no-store",signal:controller.signal});
      if(!response.ok)throw new Error();const next:SyncRun=await response.json();if(stopped)return;setRun(next);setError("");
      if(next.status==="queued"||next.status==="running")timer=setTimeout(poll,pollInterval);
    }catch{if(!stopped)setError("Le suivi est momentanément indisponible. L’import continue indépendamment de cette page.");}}
    timer=setTimeout(poll,pollInterval);return()=>{stopped=true;clearTimeout(timer);controller.abort();};
  },[initial.id,pollInterval,active,attempt]);
  return <section><p role="status" data-testid="sync-status" aria-live="polite"><strong>{statusLabels[run.status]}</strong></p>
    <dl className="facts"><div><dt>Demandée par</dt><dd>{run.initiatorSubject}</dd></div><div><dt>Demandée le</dt><dd>{new Date(run.createdAt).toLocaleString("fr-FR")}</dd></div>{run.startedAt&&<div><dt>Démarrée le</dt><dd>{new Date(run.startedAt).toLocaleString("fr-FR")}</dd></div>}{run.finishedAt&&<div><dt>Terminée le</dt><dd>{new Date(run.finishedAt).toLocaleString("fr-FR")}</dd></div>}{run.nextAttemptAt&&active&&<div><dt>Prochaine tentative au plus tôt</dt><dd>{new Date(run.nextAttemptAt).toLocaleString("fr-FR")}</dd></div>}</dl>
    {active?<p>Les compteurs définitifs seront affichés après validation complète du catalogue. Vous pouvez quitter cette page.</p>:<dl className="counts">{Object.entries(countLabels).map(([name,label])=><div key={name}><dt>{label}</dt><dd>{run.counts[name as keyof typeof run.counts]}</dd></div>)}</dl>}
    {run.status==="failed"&&<p role="alert">L’import a échoué. Le dernier catalogue validé est conservé. Vous pouvez lancer une nouvelle synchronisation.</p>}
    {run.warnings.length>0&&<p>Certains éléments présentent des avertissements. Les images indisponibles conservent leur dernière copie locale lorsqu’elle existe.</p>}
    {error&&<div><p role="alert">{error}</p><button onClick={()=>{setError("");setAttempt(v=>v+1);}}>Reprendre le suivi</button></div>}
  </section>;
}
