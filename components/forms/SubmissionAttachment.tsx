"use client";
import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import {Button,Skeleton} from "@mui/material";
import {formFetch} from "@/lib/forms/client";
import type {components} from "@/lib/forms/contract-types.generated";
import styles from "./reception.module.css";
export function SubmissionAttachment({submissionId,file,alt,csrfCookie}:{submissionId:string;csrfCookie:string;file:components["schemas"]["FormsAttachment"];alt:string}){
 const root=useRef<HTMLElement>(null),[url,setUrl]=useState<string|null>(null),[error,setError]=useState(false),[retry,setRetry]=useState(0);
 useEffect(()=>{const controller=new AbortController();let started=false;const load=()=>{if(started)return;started=true;setError(false);void formFetch<components["schemas"]["FormsAccess"]>(["submissions",submissionId,"attachments",file.id,"access"],{method:"POST",body:{},csrfCookie,signal:AbortSignal.any([controller.signal,AbortSignal.timeout(15000)])}).then(result=>{if(!controller.signal.aborted)setUrl(result.data.url);}).catch(()=>{if(!controller.signal.aborted)setError(true);});};const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting))load();},{rootMargin:"160px"});if(root.current)observer.observe(root.current);return()=>{controller.abort();observer.disconnect();};},[submissionId,file.id,retry,csrfCookie]);
 return <figure ref={root} className={styles.photo}>{url&&!error?<Image unoptimized src={url} width={file.width} height={file.height} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={()=>setError(true)}/>:<div className={styles.photoPlaceholder}>{error?<div><p role="alert">L’image privée n’a pas pu être chargée.</p><Button onClick={()=>{setUrl(null);setRetry(value=>value+1);}}>Réessayer</Button></div>:<Skeleton variant="rectangular" width="100%" height={180} aria-label="Photographie privée"/>}</div>}<figcaption>{alt}{file.primary?" · Photo principale":""}</figcaption></figure>;
}
