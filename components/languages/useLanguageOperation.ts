'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import type {components} from '@/lib/bff/language-contract.generated';
import {usePublicationFeedback} from '../PublicationFeedback';
import {translationRequest,translationErrorMessage,TranslationRequestError} from './useTranslationWorkspace';
type Operation=components['schemas']['Operation'];
type Input={action:Operation['action'];checkId?:string;checkDigest?:string};
interface StoredRequest{version:1;siteId:string;languageId:string;key:string;operationId?:string}
const uuid=/^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
export const languageOperationLabels:Record<Operation['state'],string>={accepted:'Demande enregistrée',checking:'Vérification des services',committed:'Modification enregistrée, confirmation en cours',propagating:'Confirmation de la visibilité en cours',effective:'Modification effective sur tous les services',failed:'Modification non publiée',unconfirmed:'Modification enregistrée, visibilité non confirmée'};
const finished=(operation:Operation)=>['effective','failed','unconfirmed'].includes(operation.state);
/** Only identifiers persist. Restoring or polling never sends another POST. */
export function useLanguageOperation(siteId:string,languageId:string,csrfCookie:string){
 const [operation,setOperation]=useState<Operation|null>(null),[pending,setPending]=useState(false),[error,setError]=useState(''),[restored,setRestored]=useState(false),[receipt,setReceipt]=useState<StoredRequest|null>(null);
 const feedback=usePublicationFeedback(),busy=useRef(false),controller=useRef<AbortController|null>(null),storage='site-language-operation:'+siteId+':'+languageId;
 const persist=useCallback((record:StoredRequest)=>{sessionStorage.setItem(storage,JSON.stringify(record));setReceipt(record);},[storage]);
 const track=useCallback(async(record:StoredRequest,initial:Operation|undefined,signal:AbortSignal)=>{
  let current=initial;const until=Date.now()+60000;
  for(;;){
   if(signal.aborted)throw new TranslationRequestError(0,'tracking_interrupted');
   if(!current)current=(await translationRequest<Operation>(record.operationId?'/operations/'+record.operationId:'/operations/by-key/'+record.key,{signal:AbortSignal.any([signal,AbortSignal.timeout(12000)])})).body;
   if(current.key!==record.key||current.languageId!==languageId)throw new TranslationRequestError(503,'uncertain_response');
   setOperation(current);if(!record.operationId){record={...record,operationId:current.id};try{persist(record);}catch{/* The already-persisted key still recovers the receipt. */}}
   if(finished(current))return {message:languageOperationLabels[current.state],severity:current.state==='effective'?'success' as const:current.state==='failed'?'error' as const:'warning' as const};
   if(Date.now()>=Math.min(until,Date.parse(current.deadlineAt)))return {message:'La demande est enregistrée. Relisez son état pour confirmer sa visibilité.',severity:'warning' as const};
   await new Promise<void>((resolve,reject)=>{const onAbort=()=>{clearTimeout(timer);reject(new TranslationRequestError(0,'tracking_interrupted'));},timer=setTimeout(()=>{signal.removeEventListener('abort',onAbort);resolve();},2000);signal.addEventListener('abort',onAbort,{once:true});});current=undefined;
  }
 },[languageId,persist]);
 const resume=useCallback(async(record:StoredRequest)=>{
  if(busy.current)return;busy.current=true;setPending(true);setError('');const abort=new AbortController();controller.current=abort;
  try{await feedback.run(async()=>{try{return await track(record,undefined,abort.signal);}catch(failure){if(!abort.signal.aborted)setError(translationErrorMessage(failure));return {message:'Le suivi reste disponible avec le reçu enregistré. Aucune commande n’a été relancée.',severity:'warning'};}},{pending:'Vérification de la demande enregistrée'});}finally{busy.current=false;setPending(false);}
 },[feedback,track]);
 const resumeRef=useRef(resume);useEffect(()=>{resumeRef.current=resume;},[resume]);
 useEffect(()=>{let active=true;void Promise.resolve().then(()=>{if(!active)return;try{const raw=sessionStorage.getItem(storage);if(raw){const value=JSON.parse(raw) as StoredRequest;if(value.version===1&&value.siteId===siteId&&value.languageId===languageId&&uuid.test(value.key)&&(!value.operationId||uuid.test(value.operationId))){setReceipt(value);void resumeRef.current(value);}}}catch{setError('Le navigateur ne permet pas de conserver le reçu de cette opération.');}finally{setRestored(true);}});return()=>{active=false;controller.current?.abort();};},[storage,siteId,languageId]);
 async function start(input:Input,etag:string){
  if(busy.current||!restored)return;busy.current=true;setPending(true);setError('');const record:StoredRequest={version:1,siteId,languageId,key:crypto.randomUUID()},abort=new AbortController();controller.current=abort;
  try{
   try{persist(record);}catch{setError('Le reçu ne peut pas être conservé dans ce navigateur. Aucune demande n’a été envoyée.');return;}
   await feedback.run(async()=>{
    let initial:Operation|undefined;
    try{initial=(await translationRequest<Operation>('/'+languageId+'/transitions',{method:'POST',body:input,etag,key:record.key,csrfCookie,signal:AbortSignal.any([abort.signal,AbortSignal.timeout(12000)])})).body;}
    catch(failure){
     if(failure instanceof TranslationRequestError&&[400,401,403,404,409,412,422,428].includes(failure.status)){setError(translationErrorMessage(failure));sessionStorage.removeItem(storage);setReceipt(null);return {message:translationErrorMessage(failure),severity:'error'};}
     // A timeout can happen after COMMIT. Retrieve this key, never resend the command.
    }
    try{return await track(record,initial,abort.signal);}catch(failure){if(!abort.signal.aborted)setError(translationErrorMessage(failure));return {message:'La réponse n’est pas confirmée. Le reçu est conservé ; utilisez « Vérifier l’état ».',severity:'warning'};}
   },{pending:'Publication linguistique en cours'});
  }finally{busy.current=false;setPending(false);}
 }
 return {operation,receipt,pending,error,restored,start,resume:()=>receipt?resume(receipt):Promise.resolve(),unresolved:Boolean(receipt&&(!operation||!['failed','effective'].includes(operation.state)))};
}
