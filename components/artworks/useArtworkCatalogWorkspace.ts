"use client";
import {useCallback,useEffect,useRef,useState} from "react";
import type {components} from "@/lib/bff/generated";
import {resourceVersion} from "@/lib/resource-version";
export type Workspace=components["schemas"]["ArtworkCatalogWorkspace"];
export type CatalogItem=components["schemas"]["ArtworkCatalogWorkspaceItem"];
export type Placement=components["schemas"]["ArtworkCatalogPlacement"];
export type Destination=Placement["destination"];
export class CatalogError extends Error{constructor(readonly status:number,readonly code:string){super(code);}}
export async function workspaceFetch(query:string,signal?:AbortSignal){const r=await fetch("/api/artwork-catalog/workspace"+(query?"?"+query:""),{cache:"no-store",signal});const b=await r.json();if(!r.ok)throw new CatalogError(r.status,b.error?.code??"service_unavailable");const etag=resourceVersion(r.headers);if(!etag||!/^"artwork-catalog-[0-9a-f-]{36}-[0-9]+"$/.test(etag)||!Number.isSafeInteger(b.catalogRevision))throw new CatalogError(503,"service_unavailable");return {data:b as Workspace,etag};}
export function useArtworkCatalogWorkspace(initial:Workspace,initialEtag:string,query:string,csrfCookie:string){
 const [data,setData]=useState(initial),[etag,setEtag]=useState(initialEtag),[status,setStatus]=useState<"idle"|"saving"|"error"|"conflict"|"uncertain"|"forbidden">("idle"),[message,setMessage]=useState("");
 const pending=useRef(false),live=useRef(true);useEffect(()=>{live.current=true;return()=>{live.current=false;};},[]);
 const load=useCallback(async(layoutOnly=false)=>{if(pending.current)return;pending.current=true;try{const result=await workspaceFetch(query);if(!live.current)return;setData(prior=>layoutOnly&&prior.catalogRevision===result.data.catalogRevision?{...prior,layout:result.data.layout}:result.data);setEtag(result.etag);setStatus("idle");setMessage("Catalogue relu. Vous pouvez choisir un nouvel emplacement.");}catch{if(live.current){setStatus("uncertain");setMessage("La lecture du catalogue a échoué. Réessayez avant de modifier son ordre.");}}finally{pending.current=false;}},[query]);
 async function more(kind:"published"|"reserve"){if(pending.current)return;const cursor=data[kind]?.nextCursor;if(!cursor)return;pending.current=true;try{const q=new URLSearchParams(query);q.set("collection",kind);q.set(kind+"Cursor",cursor);const result=await workspaceFetch(q.toString());if(!live.current)return;
  if(result.data.catalogRevision!==data.catalogRevision)throw new CatalogError(409,"catalog_changed");setData(prior=>({...prior,[kind]:{...result.data[kind]!,items:[...prior[kind]!.items,...result.data[kind]!.items]}}));setMessage("Œuvres supplémentaires chargées.");
 }catch(e){if(live.current){setMessage(e instanceof CatalogError&&e.code==="catalog_changed"?"Le catalogue a changé. Relisez-le pour reprendre à la première page.":"Le chargement a échoué. Réessayez.");setStatus("uncertain");}}finally{pending.current=false;}}
 async function place(art:CatalogItem,destination:Destination,keyboard=false){
  if(pending.current||status!=="idle")return false;pending.current=true;setStatus("saving");setMessage("Enregistrement…");
  try{const csrf=document.cookie.split("; ").find(c=>c.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
   const body:Placement={action:art.effectivePublic?"move":"publish",publicationVersion:art.publicationVersion,destination};
   const r=await fetch("/api/artwork-catalog/placements/"+art.id,{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-Token":decodeURIComponent(csrf),"If-Match":etag},body:JSON.stringify(body),cache:"no-store"});const response=await r.json();if(!r.ok)throw new CatalogError(r.status,response.error?.code??"service_unavailable");
   const result=await workspaceFetch(query);if(!live.current)return false;
   // Capture the current DOM immediately before React commits the confirmed collection.
   if(!keyboard)window.dispatchEvent(new CustomEvent("artwork-catalog-before-commit"));setData(result.data);setEtag(result.etag);setStatus("idle");setMessage(art.effectivePublic?"Position enregistrée.":"");return true;
  }catch(e){if(!live.current)return false;const known=e instanceof CatalogError;
   setStatus(known&&[401,403].includes(e.status)?"forbidden":known&&e.status===412?"conflict":known&&[400,404,409,413,415,428].includes(e.status)?"error":"uncertain");
   setMessage(known&&[400,404,409,413,415,428].includes(e.status)&&e.code!=="artwork_unavailable"?"L’opération a été refusée. Relisez le catalogue pour choisir une destination valide.":known&&e.status===412?"Le catalogue a changé dans une autre session. Votre déplacement n’a pas été appliqué. Relisez avant de choisir à nouveau.":known&&e.code==="artwork_unavailable"?"Cette œuvre est retirée d’Artlogic. Elle ne peut pas être publiée. Relisez le catalogue.":known&&[401,403].includes(e.status)?"Votre accès a changé. Reconnectez-vous avant de continuer.":"L’enregistrement n’est pas confirmé. Relisez le catalogue avant toute nouvelle tentative.");return false;
  }finally{pending.current=false;}
 }
 return {data,status,message,disabled:status!=="idle",place,more,reload:load,refreshLayout:()=>load(true)};
}
