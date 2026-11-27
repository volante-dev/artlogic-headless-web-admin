'use client';
import {useRef,useState} from 'react';
import {mergeAuthoredLanguageEdits} from '@/lib/site-languages/merge-edits';
import type {components} from '@/lib/bff/language-contract.generated';
import {useUnsavedChanges} from '../presentation/useUnsavedChanges';
export type TranslationWorkspaceData=components['schemas']['Workspace'];
export type TranslationValue=TranslationWorkspaceData['fields'][number]['value'];
export class TranslationRequestError extends Error{constructor(readonly status:number,readonly code:string,readonly details:{field:string;reason:string}[]=[]){super(code);}}
export async function translationRequest<T>(path:string,input:{method?:string;body?:unknown;etag?:string;key?:string;csrfCookie?:string;signal?:AbortSignal}={}){
 const csrf=input.csrfCookie?decodeURIComponent(document.cookie.split('; ').find(value=>value.startsWith(input.csrfCookie+'='))?.slice(input.csrfCookie.length+1)??''):'';
 let response:Response;try{response=await fetch('/api/languages'+path,{method:input.method??'GET',cache:'no-store',signal:input.signal??AbortSignal.timeout(30000),headers:{...(input.body===undefined?{}:{'Content-Type':'application/json'}),...(csrf?{'X-CSRF-Token':csrf}:{}),...(input.etag?{'If-Match':input.etag}:{}),...(input.key?{'Idempotency-Key':input.key}:{})},body:input.body===undefined?undefined:JSON.stringify(input.body)});}catch{throw new TranslationRequestError(0,'uncertain_response');}
 let body;try{body=await response.json();}catch{throw new TranslationRequestError(0,'uncertain_response');}
 if(!response.ok)throw new TranslationRequestError(response.status,body?.error?.code??'language_policy_unavailable',Array.isArray(body?.error?.details)?body.error.details:[]);
 return {body:body as T,etag:response.headers.get('etag')??''};
}
/** A command acknowledges only its commit; the full document is obtained through the bounded GET. */
export async function translationWorkspaceCommand(path:string,input:Parameters<typeof translationRequest>[1]){
 const receipt=await translationRequest<components['schemas']['WorkspaceReceipt']>(path,input);
 if(receipt.etag!=='"language-workspace-'+receipt.body.id+'-'+receipt.body.revision+'"')throw new TranslationRequestError(503,'uncertain_response');
 const current=await translationRequest<TranslationWorkspaceData>('/workspaces/'+receipt.body.id);
 if(current.etag!==receipt.etag||current.body.revision!==receipt.body.revision||current.body.state!==receipt.body.state)throw new TranslationRequestError(409,'revision_conflict');
 return current;
}
export function translationErrorMessage(error:unknown){
 if(!(error instanceof TranslationRequestError))return 'L’enregistrement n’est pas confirmé. Votre saisie est conservée.';
 const messages:Record<string,string>={locale_not_supported:'Le rendu de cette langue n’est pas encore pris en charge. Consultez les restrictions indiquées.',source_changed:'La source a changé. Relisez-la puis choisissez les champs à reprendre.',source_missing:'La source n’est plus disponible. Vos contributions restent conservées.',readiness_incomplete:'Complétez les traductions signalées avant d’approuver.',forbidden:'Vous n’avez plus les droits nécessaires. Votre saisie est conservée.',revision_conflict:'Une autre session a modifié cette traduction. Comparez les versions avant de continuer.',external_legal_workflow_required:'Ce document doit être publié depuis l’éditeur des documents légaux.',validation_failed:'Corrigez les champs signalés. Votre saisie est conservée.'};
 if(error.status===401)return 'Votre session a expiré. Reconnectez-vous dans un autre onglet ; votre saisie reste ici.';
 return messages[error.code]??'La réponse n’est pas confirmée. Relisez la version enregistrée avant une nouvelle tentative.';
}
const valuesOf=(workspace:TranslationWorkspaceData)=>Object.fromEntries(workspace.fields.map(field=>[field.fieldId,field.value]));
export function useTranslationWorkspace(initial:TranslationWorkspaceData,initialEtag:string,csrfCookie:string){
 const [workspace,setWorkspace]=useState(initial),[etag,setEtag]=useState(initialEtag),[values,setValues]=useState<Record<string,TranslationValue>>(()=>valuesOf(initial)),[pending,setPending]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState(''),[errors,setErrors]=useState<Record<string,string>>({}),[uncertain,setUncertain]=useState(false),[comparison,setComparison]=useState<{body:TranslationWorkspaceData;etag:string}|null>(null);
 const busy=useRef(false),idempotency=useRef<{stamp:string;key:string}|null>(null),base=valuesOf(workspace),dirty=workspace.fields.some(field=>JSON.stringify(values[field.fieldId])!==JSON.stringify(base[field.fieldId]));useUnsavedChanges(dirty||pending);
 function change(fieldId:string,value:TranslationValue){setValues(current=>({...current,[fieldId]:value}));setErrors(current=>{const next={...current};delete next[fieldId];return next;});setNotice('');}
 async function action(kind:'save'|'approve'|'rebase',rebase?:{targetId:string;selectedFieldIds:string[]}){
  if(busy.current||uncertain)return;busy.current=true;setPending(true);setError('');setNotice('');setErrors({});
  try{
   if(kind==='save'){
    const changes=workspace.fields.filter(field=>JSON.stringify(values[field.fieldId])!==JSON.stringify(field.value)).map(field=>({fieldId:field.fieldId,value:values[field.fieldId]??null}));let version=etag;
    for(let offset=0;offset<changes.length;offset+=64){const result=await translationWorkspaceCommand('/workspaces/'+workspace.id,{method:'PATCH',body:{values:changes.slice(offset,offset+64)},etag:version,csrfCookie});setWorkspace(result.body);setEtag(result.etag);version=result.etag;}
    setNotice('Traductions enregistrées en privé. Rien n’a été publié.');
   }else{
    const stamp=JSON.stringify({kind,id:workspace.id,etag,rebase});if(idempotency.current?.stamp!==stamp)idempotency.current={stamp,key:crypto.randomUUID()};
    const result=await translationWorkspaceCommand('/workspaces/'+workspace.id+'/'+kind,{method:'POST',body:rebase??{},etag,key:idempotency.current.key,csrfCookie});
    setWorkspace(result.body);setEtag(result.etag);setValues(kind==='rebase'?Object.fromEntries(result.body.fields.map(field=>[field.fieldId,rebase!.selectedFieldIds.includes(field.fieldId)&&Object.hasOwn(values,field.fieldId)?values[field.fieldId]!:field.value])):valuesOf(result.body));
    setNotice(kind==='approve'?'Traductions approuvées en privé. Un contrôle et une publication explicite restent nécessaires.':'Contribution reprise sur la nouvelle source. Vérifiez les champs avant de l’enregistrer.');idempotency.current=null;
   }
  }catch(error){setError(translationErrorMessage(error));if(error instanceof TranslationRequestError){setErrors(Object.fromEntries(error.details.map(detail=>[detail.field,detail.reason])));if([0,412,428,503].includes(error.status)||error.status===409&&['source_changed','source_missing','revision_conflict'].includes(error.code))setUncertain(true);}else setUncertain(true);}
  finally{busy.current=false;setPending(false);}
 }
 async function compare(){try{const result=await translationRequest<TranslationWorkspaceData>('/workspaces/'+workspace.id);setComparison(result);}catch(error){setError(translationErrorMessage(error));}}
 function acceptComparison(preserve:boolean){if(!comparison)return;const prior=values;setWorkspace(comparison.body);setEtag(comparison.etag);setValues(preserve?mergeAuthoredLanguageEdits(valuesOf(workspace),prior,valuesOf(comparison.body)):valuesOf(comparison.body));setComparison(null);setUncertain(false);setError('');}
 return {workspace,values,pending,error,errors,notice,uncertain,comparison,dirty,change,save:()=>action('save'),approve:()=>action('approve'),rebase:(targetId:string,selectedFieldIds:string[])=>action('rebase',{targetId,selectedFieldIds}),compare,acceptComparison};
}
