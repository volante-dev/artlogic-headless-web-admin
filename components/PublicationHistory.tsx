"use client";
import {useEffect,useState} from "react";
import type {EventPage} from "@/lib/bff/artworks";
import styles from "./Artwork.module.css";
export function PublicationHistory({artworkId}:{artworkId:string}){
  const [data,setData]=useState<EventPage|null>(null),[error,setError]=useState(false),[pending,setPending]=useState(false),[attempt,setAttempt]=useState(0);
  useEffect(()=>{let active=true;const controller=new AbortController();
    fetch("/api/artworks/"+artworkId+"/publication-events",{cache:"no-store",signal:controller.signal}).then(async response=>{if(!response.ok)throw new Error();return response.json() as Promise<EventPage>;}).then(value=>{if(active){setData(value);setError(false);}}).catch(()=>{if(active)setError(true);});
    return()=>{active=false;controller.abort();};
  },[artworkId,attempt]);
  async function next(){if(!data?.nextCursor)return;setPending(true);setError(false);try{
    const response=await fetch("/api/artworks/"+artworkId+"/publication-events?cursor="+encodeURIComponent(data.nextCursor),{cache:"no-store"});if(!response.ok)throw new Error();const page:EventPage=await response.json();setData({items:[...data.items,...page.items],nextCursor:page.nextCursor});
  }catch{setError(true);}finally{setPending(false);}}
  return <section className={styles.history}><h2>Historique de publication</h2>{!data&&!error&&<p role="status">Chargement de l’historique…</p>}{data&&!data.items.length&&<p>Aucune décision enregistrée.</p>}{data&&<ol>{data.items.map(event=><li key={event.id}><strong>{event.publication==="published"?"Publication":"Masquage"}</strong> — {new Date(event.occurredAt).toLocaleString("fr-FR")}<p>{event.actorType==="system"?"Automatique : œuvre retirée d’Artlogic.":"Décision de "+event.actorSubject}</p></li>)}</ol>}{error&&<div><p role="alert">L’historique n’a pas pu être chargé.</p><button onClick={()=>data?.nextCursor?void next():setAttempt(v=>v+1)} disabled={pending}>Réessayer</button></div>}{data?.nextCursor&&!error&&<button onClick={next} disabled={pending}>{pending?"Chargement…":"Afficher la suite"}</button>}</section>;
}
