"use client";
import Image from "next/image";
import {useEffect,useRef,useState} from "react";
import {Alert,MenuItem,Stack,TextField} from "@mui/material";
import {ArtworkPreviewPicker} from "../presentation/ArtworkPreviewPicker";
import type {components} from "@/lib/bff/generated";
import type {EditorialSource} from "@/lib/editorial/media";
type Artwork=components["schemas"]["AdminArtwork"];
type Source=Extract<EditorialSource,{kind:"artwork"}>;
export function ArtworkMediaField({value,onChange}:{value?:Source;onChange(source:Source):void}){
 const [artwork,setArtwork]=useState<Artwork|null>(null),[error,setError]=useState(false),pending=useRef<AbortController|null>(null);
 useEffect(()=>()=>pending.current?.abort(),[]);
 useEffect(()=>{if(!value?.artworkId)return;const controller=new AbortController();fetch("/api/artworks/"+value.artworkId,{cache:"no-store",signal:controller.signal}).then(async response=>{if(!response.ok)throw new Error();return response.json() as Promise<Artwork>;}).then(setArtwork).catch(()=>{if(!controller.signal.aborted)setError(true);});return()=>controller.abort();},[value?.artworkId]);
 const choose=async(id:string)=>{
  if(!id)return;pending.current?.abort();const controller=new AbortController();pending.current=controller;setError(false);
  try{const response=await fetch("/api/artworks/"+id,{cache:"no-store",signal:controller.signal});if(!response.ok)throw new Error();const next=await response.json() as Artwork;if(!next.effectivePublic||!next.media.length)throw new Error();setArtwork(next);onChange({kind:"artwork",artworkId:id,mediaId:next.media[0]!.id});}catch{if(!controller.signal.aborted)setError(true);}
 };
 const media=artwork?.media.find(media=>media.id===value?.mediaId);
 return <Stack spacing={2}><ArtworkPreviewPicker requireMedia selected={artwork} value={value?.artworkId??""} onChange={id=>void choose(id)} label="Œuvre associée" helperText="Recherchez une œuvre publique, puis choisissez sa vue."/>{error&&<Alert severity="error">Cette œuvre ou cette vue n’est plus disponible. Choisissez une autre œuvre publique.</Alert>}{media&&<Image unoptimized src={"/api/media/"+media.id} alt={artwork?.title??"Œuvre associée"} width={media.width} height={media.height} style={{width:"100%",height:"auto",maxHeight:240,objectFit:"contain"}}/>}{artwork&&artwork.media.length>0&&<TextField select label="Vue de l’œuvre" value={value?.mediaId??""} onChange={event=>onChange({kind:"artwork",artworkId:artwork.id,mediaId:event.target.value})}>{artwork.media.map((media,index)=><MenuItem key={media.id} value={media.id}><Image unoptimized src={"/api/media/"+media.id} alt="" width={40} height={40} style={{objectFit:"cover",marginRight:12}}/>{index===0?"Vue principale":"Vue "+(index+1)}</MenuItem>)}</TextField>}</Stack>;
}
