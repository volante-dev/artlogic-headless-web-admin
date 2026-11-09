"use client";
import {usePublicationFeedback,type PublicationResult} from "../PublicationFeedback";
import {resourceVersion} from "@/lib/resource-version";
import {createContext,useCallback,useContext,useEffect,useState} from "react";
import type {Capabilities,Draft,Release,Validation} from "./types";
export class PresentationError extends Error{constructor(readonly status:number,readonly code:string,readonly details:Validation["diagnostics"]=[]){super(code);}}
export function csrfValue(name:string){return document.cookie.split(";").map(v=>v.trim()).find(v=>v.startsWith(name+"="))?.slice(name.length+1)??"";}
export async function presentationFetch<T>(path:string,options:{method?:string;body?:unknown;etag?:string;csrfCookie?:string;signal?:AbortSignal}={}){
 let response:Response;try{response=await fetch("/api/presentation"+path,{method:options.method??"GET",headers:{...(options.body!==undefined?{"Content-Type":"application/json"}:{}),...(options.etag?{"If-Match":options.etag}:{}),...(options.csrfCookie?{"X-CSRF-Token":csrfValue(options.csrfCookie)}:{})},body:options.body===undefined?undefined:JSON.stringify(options.body),cache:"no-store",signal:options.signal??AbortSignal.timeout(30000)});}catch{throw new PresentationError(0,"uncertain_response");}
 let data;try{data=response.status===204?undefined:await response.json();}catch{throw new PresentationError(0,"uncertain_response");}
 if(!response.ok)throw new PresentationError(response.status,data?.error?.code??"dependency_unavailable",data?.error?.details??[]);
 return {data:data as T,etag:resourceVersion(response.headers)??""};
}
export function presentationErrorMessage(error:unknown){if(error instanceof PresentationError&&error.code==="artwork_media_changed")return "L’image principale a changé. Relisez le cadrage avant de réessayer ; votre saisie est conservée.";const status=error instanceof PresentationError?error.status:0;return ({0:"La réponse n’a pas été reçue. Comparez avec la version enregistrée avant toute nouvelle tentative.",400:"Certains champs ne sont pas valides. Votre saisie est conservée.",401:"Votre session a expiré. Votre saisie reste dans cet onglet ; reconnectez-vous dans un autre onglet.",403:"Votre accès n’est plus autorisé. Votre saisie reste dans cet onglet.",409:"La publication ou l’opération est bloquée. Corrigez les points indiqués.",412:"Le brouillon a changé dans une autre session. Comparez les versions ; votre saisie est conservée.",413:"Le fichier ou le contenu dépasse la taille autorisée.",415:"Ce format n’est pas pris en charge.",429:"Trop de demandes sont en cours. Réessayez dans un instant.",503:"Le service est indisponible. Relisez la version enregistrée avant une nouvelle tentative."} as Record<number,string>)[status]??"L’opération n’a pas pu être confirmée.";}
function useDraftState(csrfCookie:string,siteOrigin:string,locales:readonly {code:string;label:string}[],defaultLocale:string){
 const feedback=usePublicationFeedback();
 const [draft,setDraft]=useState<Draft|null>(null),[etag,setEtag]=useState(""),[capabilities,setCapabilities]=useState<Capabilities|null>(null),[history,setHistory]=useState<Release[]>([]),[validation,setValidation]=useState<Validation|null>(null),[error,setError]=useState(""),[status,setStatus]=useState(""),[busy,setBusy]=useState(false),[uncertain,setUncertain]=useState(false),[comparison,setComparison]=useState<{data:Draft;etag:string}|null>(null),[publishedEpoch,setPublishedEpoch]=useState(0);
 const readBundle=useCallback(()=>Promise.all([presentationFetch<Draft>(""),presentationFetch<Capabilities>("/capabilities"),presentationFetch<{items:Release[]}>("/publications")]),[]);
 const acceptBundle=useCallback(([current,caps,releases]:Awaited<ReturnType<typeof readBundle>>)=>{setDraft(current.data);setEtag(current.etag);setCapabilities(caps.data);setHistory(releases.data.items);return current;},[]);
 const reload=useCallback(()=>readBundle().then(acceptBundle),[readBundle,acceptBundle]);
 useEffect(()=>{let active=true;void readBundle().then(value=>{if(active)acceptBundle(value);}).catch(e=>{if(active)setError(presentationErrorMessage(e));});return()=>{active=false;};},[readBundle,acceptBundle]);
 function report(e:unknown,write=false){setError(presentationErrorMessage(e));if(write&&(!(e instanceof PresentationError)||[0,412,503].includes(e.status)))setUncertain(true);}
 async function mutate<T>(path:string,body:unknown,method="POST"){if(!etag||uncertain||busy)throw new PresentationError(412,"precondition_failed");setBusy(true);setError("");setStatus("");try{const result=await presentationFetch<T>(path,{method,body,etag,csrfCookie});if(result.etag)setEtag(result.etag);return result;}catch(e){report(e,true);throw e;}finally{setBusy(false);}}
 async function compare(){setBusy(true);try{setComparison(await presentationFetch<Draft>(""));setError("");}catch(e){report(e);}finally{setBusy(false);}}
 function acceptComparison(){if(comparison){setDraft(comparison.data);setEtag(comparison.etag);setComparison(null);setUncertain(false);setStatus("Version enregistrée relue. Vos champs en cours d’édition sont conservés ; vérifiez-les avant de sauvegarder.");}}
 async function publish(action:()=>Promise<PublicationResult>){setStatus("");return feedback.run(action,{errorMessage:presentationErrorMessage});}
 return {draft,etag,capabilities,history,validation,setValidation,error,setError,status,setStatus,busy:busy||feedback.publishing,publish,uncertain,comparison,compare,acceptComparison,reload,mutate,report,publishedEpoch,confirmPublication:()=>setPublishedEpoch(v=>v+1),csrfCookie,siteOrigin,locales,defaultLocale};
}
const Context=createContext<ReturnType<typeof useDraftState>|null>(null);
export function PresentationDraftProvider({csrfCookie,siteOrigin,locales,defaultLocale,children}:{csrfCookie:string;siteOrigin:string;locales:readonly {code:string;label:string}[];defaultLocale:string;children:React.ReactNode}){const state=useDraftState(csrfCookie,siteOrigin,locales,defaultLocale);return <Context value={state}>{children}</Context>;}
export function usePresentationDraft(){const context=useContext(Context);if(!context)throw new Error("presentation_context_required");return context;}

export function useOptionalPresentationDraft(){return useContext(Context);}
