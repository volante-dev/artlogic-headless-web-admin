"use client";
import {useEffect,useState} from "react";
import {presentationFetch,presentationErrorMessage,PresentationError,usePresentationDraft} from "./usePresentationDraft";
import {teamCapabilities,type TeamDraft,type TeamState} from "@/lib/presentation/team-client";
import {useUnsavedChanges} from "./useUnsavedChanges";
export function useTeamEditor(){
 const state=usePresentationDraft(),[team,setTeam]=useState<TeamDraft|null>(null),[saved,setSaved]=useState(""),[etag,setEtag]=useState(""),[enabled,setEnabled]=useState(false),[loading,setLoading]=useState(true),[busy,setBusy]=useState(false),[error,setError]=useState(""),[status,setStatus]=useState(""),[conflict,setConflict]=useState(false),[comparison,setComparison]=useState<{data:TeamState;etag:string}|null>(null),[details,setDetails]=useState<{field:string;reason:string}[]>([]);
 const dirty=Boolean(team&&JSON.stringify(team)!==saved);useUnsavedChanges(dirty);
 const setDirty=state.setTeamDirty;useEffect(()=>{setDirty(dirty);return()=>setDirty(false);},[dirty,setDirty]);
 useEffect(()=>{let active=true;void (async()=>{try{const c=await teamCapabilities();if(!active)return;setEnabled(c.writable);if(c.available&&c.writable){const r=await presentationFetch<TeamState>("/team");if(active){setTeam(r.data.team);setSaved(JSON.stringify(r.data.team));setEtag(r.etag);}}}catch(e){if(active)setError(presentationErrorMessage(e));}finally{if(active)setLoading(false);}})();return()=>{active=false;};},[]);
 async function save(next=team){if(!next||busy||conflict)return;setBusy(true);setError("");setStatus("");setDetails([]);try{const r=await presentationFetch<TeamState>("/team",{method:"PUT",body:next,etag,csrfCookie:state.csrfCookie});setTeam(r.data.team);setSaved(JSON.stringify(r.data.team));setEtag(r.etag);state.acceptExternalVersion(r.etag);setStatus("Équipe enregistrée en brouillon.");return true;}catch(e){setError(presentationErrorMessage(e));if(e instanceof PresentationError){setDetails(e.details??[]);if([0,412,503].includes(e.status))setConflict(true);}return false;}finally{setBusy(false);}}
 async function compare(){setBusy(true);try{setComparison(await presentationFetch<TeamState>("/team"));}catch(e){setError(presentationErrorMessage(e));}finally{setBusy(false);}}
 function resume(keep:boolean){if(!comparison)return;if(!keep)setTeam(comparison.data.team);setSaved(JSON.stringify(comparison.data.team));setEtag(comparison.etag);state.acceptExternalVersion(comparison.etag);setConflict(false);setComparison(null);setError("");}
 return {announce:setStatus,team,setTeam,save,loading,enabled,busy,error,status,dirty,details,conflict,comparison,compare,resume,csrfCookie:state.csrfCookie};
}
