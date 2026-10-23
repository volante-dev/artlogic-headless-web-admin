"use client";
import {useState} from "react";
import Image from "next/image";
import type {AdminArtwork} from "@/lib/bff/artworks";
import styles from "./Artwork.module.css";
export function ArtworkPreview({art}:{art:AdminArtwork}){
  const [failed,setFailed]=useState<string[]>([]);
  return <div className={styles.preview}>{art.media.length?art.media.map(media=>failed.includes(media.id)?<p key={media.id}>Image momentanément indisponible.</p>:<Image key={media.id} unoptimized src={"/api/media/"+media.id} width={media.width} height={media.height} alt={media.alt??art.title??"Vue de l’œuvre"} onError={()=>setFailed(values=>[...values,media.id])}/>):<p>Aucune image disponible.</p>}</div>;
}
