"use client";
import {useState} from "react";
import type {AdminArtwork} from "@/lib/bff/artworks";
import {PublicationHistory} from "./PublicationHistory";
import styles from "./Artwork.module.css";
export function PublicationControl({initial,initialEtag,csrfCookie}:{initial:AdminArtwork;initialEtag:string;csrfCookie:string}){
  const [art,setArt]=useState(initial),[etag,setEtag]=useState(initialEtag),[pending,setPending]=useState(false),[message,setMessage]=useState(""),[error,setError]=useState("");
  async function change(){
    setPending(true);setError("");setMessage("");const publication=art.publication==="published"?"hidden":"published";
    try{
      const csrf=document.cookie.split("; ").find(v=>v.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
      const response=await fetch("/api/artworks/"+art.id+"/publication",{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-Token":decodeURIComponent(csrf),"If-Match":etag},body:JSON.stringify({publication}),cache:"no-store"});
      if(response.status===412){
        const current=await fetch("/api/artworks/"+art.id,{cache:"no-store"});if(!current.ok)throw new Error();setArt(await current.json());setEtag(current.headers.get("etag")!);
        setError("Cette œuvre a changé. Sa version actuelle est affichée ; vérifiez votre choix avant de recommencer.");return;
      }
      if(response.status===409){setError("Cette œuvre a été retirée d’Artlogic et ne peut pas être publiée. Rechargez la page.");return;}
      if([401,403].includes(response.status)){setError("Votre accès doit être vérifié. Reconnectez-vous avant de continuer.");return;}
      if(!response.ok)throw new Error();setArt(await response.json());setEtag(response.headers.get("etag")!);setMessage(publication==="published"?"Publication confirmée.":"Masquage confirmé.");
    }catch{setError("La modification n’a pas pu être confirmée. Rechargez l’œuvre pour vérifier son état avant de réessayer.");}finally{setPending(false);}
  }
  return <><section className={styles.publication}><h2>Visibilité sur le site</h2><p><strong>{art.effectivePublic?"Publiée sur le site":"Masquée sur le site"}</strong></p>{art.availability==="withdrawn"&&<p>Retirée d’Artlogic. Une œuvre retirée reste masquée, même si elle revient lors d’une prochaine synchronisation.</p>}<button onClick={change} disabled={pending||art.availability==="withdrawn"}>{pending?"Enregistrement…":art.publication==="published"?"Masquer sur le site":"Publier sur le site"}</button><p role="status" data-testid="publication-result" aria-live="polite">{message}</p>{error&&<p role="alert">{error}</p>}</section><PublicationHistory key={art.publicationVersion} artworkId={art.id}/></>;
}
