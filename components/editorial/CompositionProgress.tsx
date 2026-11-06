"use client";
import CircularProgress from '@mui/material/CircularProgress';
import type{CompositionRequest}from'@/lib/editorial/composition';
import styles from './CompositionProgress.module.css';
const steps=['Préparation des contenus','Création de la composition','Réception de la proposition','Vérification des contenus','Proposition prête'];
const indices={preparing:0,generating:1,receiving:2,validating:3};
export function CompositionProgress({request}:{request:CompositionRequest}){
 const active=request.status==='queued'||request.status==='running',ready=request.status==='ready',queued=request.status==='queued',index=ready?4:queued?-1:request.progress?indices[request.progress.stage]:request.phase==='preparing'?0:request.phase==='submitted'?1:-1;
 const title=queued?'En attente de prise en charge':ready?'Proposition prête':request.status==='abandoned'?'Demande abandonnée':request.status==='uncertain'?'Résultat à vérifier':request.status==='failed'?'La composition n’a pas abouti':steps[Math.max(0,index)];
 return <section className={styles.progress} aria-label="Avancement de la composition" data-composition-progress data-stage={request.progress?.stage??request.phase} data-status={request.status}>
 <p className={styles.heading} role="status" aria-live="polite" aria-atomic="true">{queued&&<span aria-hidden="true"><CircularProgress size={18}/></span>}{title}</p>
 <ol className={styles.steps}>{steps.map((label,step)=>{const done=ready||index>step,current=step===index;return <li key={label} data-state={done?'done':current?'current':'pending'} aria-current={current?'step':undefined}><span className={styles.marker} aria-hidden="true">{done?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="m5 12 4 4L19 6"/></svg>:current&&active?<CircularProgress size={20}/>:step+1}</span><span>{label}</span></li>;})}</ol>
 </section>;
}
