"use client";
import {usePublicationFeedback} from "./PublicationFeedback";
import {resourceVersion} from "@/lib/resource-version";
import {useState} from "react";
import type {AdminArtwork} from "@/lib/bff/artworks";
import {PublicationHistory} from "./PublicationHistory";
import styles from "./Artwork.module.css";
export function PublicationControl({initial,initialEtag,csrfCookie}:{initial:AdminArtwork;initialEtag:string;csrfCookie:string}){
  const feedback=usePublicationFeedback();
  const [art,setArt]=useState(initial),[etag,setEtag]=useState(initialEtag),[pending,setPending]=useState(false),[error,setError]=useState(""),[usages,setUsages]=useState<string[]>([]);
  async function change(){
    if(pending)return;const publication=art.publication==="published"?"hidden":"published";
    await feedback.run(async()=>{
     setPending(true);setError("");setUsages([]);
     const rejected=(message:string)=>{setError(message);return {message,severity:"error" as const};};
     try{
      const csrf=document.cookie.split("; ").find(v=>v.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
      const response=await fetch("/api/artworks/"+art.id+"/publication",{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-Token":decodeURIComponent(csrf),"If-Match":etag},body:JSON.stringify({publication}),cache:"no-store"});
      if(response.status===412){const current=await fetch("/api/artworks/"+art.id,{cache:"no-store"});if(!current.ok)throw new Error();setArt(await current.json());setEtag(resourceVersion(current.headers)!);return rejected("Cette œuvre a changé. Sa version actuelle est affichée ; vérifiez votre choix avant de recommencer.");}
      if(response.status===409){const body=await response.json();if(body.error?.code==="artwork_in_editorial_use"){setUsages((body.error.details??[]).map((item:{field:string})=>item.field).filter((path:string)=>/^\/(publications|news)\/[a-f0-9-]{36}$/i.test(path)));return rejected("Cette œuvre est utilisée par des articles publics ou programmés. Retirez ces usages avant de la masquer.");}return rejected("Cette œuvre a été retirée d’Artlogic et ne peut pas être publiée. Rechargez la page.");}
      if([401,403].includes(response.status))return rejected("Votre accès doit être vérifié. Reconnectez-vous avant de continuer.");
      if(!response.ok)throw new Error();setArt(await response.json());setEtag(resourceVersion(response.headers)!);return {message:publication==="published"?"Publication confirmée.":"Masquage confirmé."};
     }catch{return rejected("La modification n’a pas pu être confirmée. Rechargez l’œuvre pour vérifier son état avant de réessayer.");}finally{setPending(false);}
    },{pending:publication==="published"?"Publication en cours":"Masquage en cours"});
  }

  return <><section className={styles.publication}><h2>Visibilité sur le site</h2><p><strong>{art.effectivePublic?"Publiée sur le site":"Masquée sur le site"}</strong></p>{art.availability==="withdrawn"&&<p>Retirée d’Artlogic. Une œuvre retirée reste masquée, même si elle revient lors d’une prochaine synchronisation.</p>}<button onClick={change} aria-busy={pending||undefined} disabled={pending||feedback.publishing||art.availability==="withdrawn"}>{art.publication==="published"?"Masquer sur le site":"Publier sur le site"}</button>{error&&<p role="alert">{error}</p>}{usages.length>0&&<ul>{usages.map((path,index)=><li key={path}><a href={path}>Corriger l’article {index+1}</a></li>)}</ul>}</section><PublicationHistory key={art.publicationVersion} artworkId={art.id}/></>;
}
