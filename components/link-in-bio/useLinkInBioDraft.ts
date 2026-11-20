'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import {linkInBioFetch,LinkInBioError,type LibSchemas} from '@/lib/link-in-bio/client';
export function useLinkInBioDraft(csrfCookie:string){
 const [draft,setDraft]=useState<LibSchemas['LibDraft']|null>(null),[configuration,setConfiguration]=useState<LibSchemas['LibDraftInput']|null>(null),[capabilities,setCapabilities]=useState<LibSchemas['LibAdminCapabilities']|null>(null),[error,setError]=useState<unknown>(null),[unsupported,setUnsupported]=useState(false),[busy,setBusy]=useState(false),[comparison,setComparison]=useState<{draft:LibSchemas['LibDraft'];tag:string}|null>(null),[blocked,setBlocked]=useState(false);
 const [attempt,setAttempt]=useState(0);
 const tag=useRef<string|null>(null),lock=useRef(false),[saved,setSaved]=useState('');
 useEffect(()=>{const controller=new AbortController();void linkInBioFetch<LibSchemas['LibAdminCapabilities']>('capabilities',{signal:controller.signal}).then(async result=>{if(controller.signal.aborted)return;setCapabilities(result.data);if(!result.data.schemaAvailable)return;const read=await linkInBioFetch<LibSchemas['LibDraft']>('draft',{signal:controller.signal});if(controller.signal.aborted)return;if(!read.tag)throw new LinkInBioError(503,'dependency_unavailable');tag.current=read.tag;setSaved(JSON.stringify(read.data.configuration));setDraft(read.data);setConfiguration(read.data.configuration);}).catch(error=>{if(!controller.signal.aborted){if(error instanceof LinkInBioError&&error.status===404)setUnsupported(true);else setError(error);}});return()=>controller.abort();},[attempt]);
 const mutate=useCallback(async<T,>(path:string,body:unknown)=>{
  if(lock.current||blocked||!tag.current)throw new LinkInBioError(412,'revision_conflict');lock.current=true;setBusy(true);
  try{const result=await linkInBioFetch<T>(path,{method:'PUT',body,tag:tag.current,csrfCookie});if(!result.tag)throw new LinkInBioError(0,'uncertain_response');tag.current=result.tag;setError(null);return result.data;}
  catch(error){setError(error);if(error instanceof LinkInBioError&&(error.status===412||error.status===0||error.status>=500))setBlocked(true);throw error;}finally{lock.current=false;setBusy(false);}
 },[csrfCookie,blocked]);
 async function save(){if(!configuration)return;const next=await mutate<LibSchemas['LibDraft']>('draft',configuration);setSaved(JSON.stringify(next.configuration));setDraft(next);setConfiguration(next.configuration);return next;}
 async function savePost(id:string,field:'target'|'alt',value:unknown){const result=await mutate<LibSchemas['LibRevisionResult']>('draft/posts/'+id+'/'+field,field==='target'?{target:value}:{altOverride:value});setDraft(previous=>previous?{...previous,revision:result.revision,updatedAt:result.updatedAt}:null);return result;}
 async function compare(){try{const read=await linkInBioFetch<LibSchemas['LibDraft']>('draft');if(!read.tag)throw new LinkInBioError(503,'dependency_unavailable');setComparison({draft:read.data,tag:read.tag});}catch(error){setError(error);}}
 function resolveComparison(keep:boolean){if(!comparison)return;tag.current=comparison.tag;setSaved(JSON.stringify(comparison.draft.configuration));setDraft(comparison.draft);if(!keep)setConfiguration(comparison.draft.configuration);setComparison(null);setBlocked(false);setError(null);}
 const dirty=!!configuration&&JSON.stringify(configuration)!==saved;
 useEffect(()=>{if(!dirty)return;const warn=(event:BeforeUnloadEvent)=>event.preventDefault();window.addEventListener('beforeunload',warn);return()=>window.removeEventListener('beforeunload',warn);},[dirty]);
 return {draft,configuration,setConfiguration,capabilities,error,setError,unsupported,busy,blocked,dirty,tag,save,savePost,compare,comparison,resolveComparison,reload:()=>setAttempt(n=>n+1)};
}
