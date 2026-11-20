'use client';
import {useEffect,useRef,useState} from 'react';
import {Alert,Button,LinearProgress,Typography} from '@mui/material';
import {linkInBioFetch,linkInBioErrorMessage,type LibSchemas} from '@/lib/link-in-bio/client';
import styles from './link-in-bio.module.css';
const states:Record<string,string>={scheduled:'Planifiée',running:'En cours',waiting:'En attente de reprise',succeeded:'Terminée',failed:'Arrêtée',cancelled:'Annulée'};
const errors:Record<string,string>={rate_limited:'La limite de la source est atteinte. La reprise est différée.',reauth_required:'Une reconnexion à Instagram est nécessaire.',source_invalid:'La réponse Instagram n’a pas pu être validée.',dependency_unavailable:'La source ou le stockage est momentanément indisponible.'};
export function SyncProgress({initial,onComplete}:{initial:LibSchemas['LibRun'];onComplete:()=>void}){
 const [run,setRun]=useState(initial),[error,setError]=useState<unknown>(null),[retry,setRetry]=useState(0),complete=useRef(onComplete);
 useEffect(()=>{complete.current=onComplete;},[onComplete]);
 useEffect(()=>{const controller=new AbortController();let timer:ReturnType<typeof setTimeout>|undefined,done=false,attempts=0;
  async function read(){if(controller.signal.aborted)return;if(document.hidden){timer=setTimeout(()=>void read(),15000);return;}try{const result=await linkInBioFetch<LibSchemas['LibRun']>('sync-runs/'+initial.runId,{signal:controller.signal});if(controller.signal.aborted)return;setRun(result.data);setError(null);if(['succeeded','failed','cancelled'].includes(result.data.state)){if(!done){done=true;complete.current();}return;}attempts++;timer=setTimeout(()=>void read(),result.data.state==='waiting'?15000:attempts>12?5000:2000);}catch(error){if(!controller.signal.aborted)setError(error);}}
  if(!['succeeded','failed','cancelled'].includes(initial.state))timer=setTimeout(()=>void read(),1500);
  return()=>{controller.abort();clearTimeout(timer);};
 },[initial.runId,initial.state,retry]);
 return <div role="status" aria-live="polite" className={styles.syncProgress}>
 <Typography component="h3" variant="h3">{run.mode==='purge'?'Effacement du compte':'Synchronisation'} : {states[run.state]??run.state}</Typography>
 {['scheduled','running'].includes(run.state)&&<LinearProgress aria-label={run.mode==='purge'?'Effacement en cours':'Synchronisation en cours'}/>}
 <Typography variant="body2">{run.mode==='purge'?'La confirmation attend l’effacement des fichiers et des données. Les bandeaux indépendants sont conservés.':`${run.postsAdded} posts ajoutés, ${run.postsUpdated} actualisés. ${run.coversReady} visuels prêts, ${run.coversFailed} indisponibles. ${run.postsChecked} posts vérifiés, ${run.postsRemoved} retraits confirmés.`}</Typography>
 {run.errorCode&&<Alert severity={run.errorCode==='reauth_required'?'warning':'info'}>{errors[run.errorCode]??'La reprise de cette opération est différée.'}</Alert>}
 {run.retryAt&&<Typography variant="body2">Reprise au plus tôt le {new Intl.DateTimeFormat('fr-FR',{dateStyle:'short',timeStyle:'short'}).format(new Date(run.retryAt))}.</Typography>}
 <Typography variant="caption">Référence : {run.runId}{run.finishedAt?' · '+new Intl.DateTimeFormat('fr-FR',{dateStyle:'short',timeStyle:'short'}).format(new Date(run.finishedAt)):''}</Typography>
 {!!error&&<Alert severity="error" action={<Button onClick={()=>setRetry(n=>n+1)}>Vérifier l’état</Button>}>{linkInBioErrorMessage(error)}</Alert>}
 </div>;
}
