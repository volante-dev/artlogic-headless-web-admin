"use client";
import {useCallback,useEffect,useState} from "react";
import type {components} from "@/lib/bff/generated";
import {resourceVersion} from "@/lib/resource-version";
import {csrfValue} from "./usePresentationDraft";
type Configuration=components["schemas"]["NavigationConfiguration"];
type Context=components["schemas"]["NavigationAdminContext"];
async function request<T>(path:string,init?:RequestInit){
 const response=await fetch("/api/navigation"+path,{...init,cache:"no-store",signal:AbortSignal.timeout(30000)});
 const data=await response.json();if(!response.ok)throw new Error(String(response.status));return {data:data as T,etag:resourceVersion(response.headers)??""};
}
export function useNavigationSettings(csrfCookie:string){
 const [saved,setSaved]=useState<Configuration|null>(null),[items,setItems]=useState<Configuration["items"]>([]),[context,setContext]=useState<Context|null>(null),[etag,setEtag]=useState(""),[busy,setBusy]=useState(false),[error,setError]=useState(""),[status,setStatus]=useState(""),[uncertain,setUncertain]=useState(false),[comparison,setComparison]=useState<{data:Configuration;etag:string}|null>(null);
 const dirty=Boolean(saved&&JSON.stringify(saved.items)!==JSON.stringify(items));
 const load=useCallback(async()=>{try{const [config,ctx]=await Promise.all([request<Configuration>(""),request<Context>("/context")]);setSaved(config.data);setItems(config.data.items);setEtag(config.etag);setContext(ctx.data);setError("");}catch{setError("Le menu ne peut pas être chargé. Réessayez.");}},[]);
 useEffect(()=>{let active=true;void Promise.all([request<Configuration>(""),request<Context>("/context")]).then(([config,ctx])=>{if(active){setSaved(config.data);setItems(config.data.items);setEtag(config.etag);setContext(ctx.data);}}).catch(()=>{if(active)setError("Le menu ne peut pas être chargé. Réessayez.");});return()=>{active=false;};},[]);
 useEffect(()=>{if(!dirty)return;const unload=(e:BeforeUnloadEvent)=>{e.preventDefault();};const click=(e:MouseEvent)=>{const a=(e.target as Element).closest("a[href]");if(a&&!e.defaultPrevented&&!window.confirm("Quitter sans enregistrer les modifications du menu ?")){e.preventDefault();e.stopPropagation();}};window.addEventListener("beforeunload",unload);document.addEventListener("click",click,true);return()=>{window.removeEventListener("beforeunload",unload);document.removeEventListener("click",click,true);};},[dirty]);
 async function save(){if(busy||uncertain||!context?.editingEnabled)return;setBusy(true);setError("");setStatus("");try{const result=await request<Configuration>("",{method:"PUT",headers:{"Content-Type":"application/json","If-Match":etag,"X-CSRF-Token":csrfValue(csrfCookie)},body:JSON.stringify({schemaVersion:1,items})});setSaved(result.data);setItems(result.data.items);setEtag(result.etag);setStatus("Menu enregistré et immédiatement actif.");}catch(e){const code=e instanceof Error?e.message:"";setError(code==="412"?"Le menu a changé. Comparez avec la version enregistrée ; votre saisie est conservée.":code==="401"?"Votre session a expiré. Reconnectez-vous dans un autre onglet ; votre saisie est conservée.":code==="403"?"Accès refusé. Votre saisie est conservée.":"L’enregistrement ne peut pas être confirmé. Relisez le menu enregistré ; votre saisie est conservée.");setUncertain(true);}finally{setBusy(false);}}
 async function compare(){setBusy(true);try{setComparison(await request<Configuration>(""));}catch{setError("La relecture a échoué. Votre saisie est conservée.");}finally{setBusy(false);}}
 function acceptComparison(){if(!comparison)return;setSaved(comparison.data);setEtag(comparison.etag);setComparison(null);setUncertain(false);setError("");setStatus("Référence actualisée. Vérifiez votre saisie avant d’enregistrer.");}
 return {saved,items,setItems,context,dirty,busy,error,status,setStatus,uncertain,comparison,load,save,compare,acceptComparison,cancel(){if(saved)setItems(saved.items);setStatus("");}};
}
