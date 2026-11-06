"use client";

import Image from "next/image";
import {useEffect,useId,useRef,useState} from "react";
import {Alert,Box,Button,ButtonBase,LinearProgress,Stack,TextField,Typography} from "@mui/material";
import type {AdminArtwork,ArtworkPage} from "../../lib/bff/artworks";

function ArtworkThumbnail({artwork}:{artwork:AdminArtwork}){
 const media=artwork.media[0], [failed,setFailed]=useState(false);
 return <Box sx={{height:112,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.default",p:1}}>
  {media&&!failed?<Image unoptimized src={"/api/media/"+media.id} alt="" width={media.width} height={media.height} onError={()=>setFailed(true)} style={{width:"100%",height:"100%",objectFit:"contain"}}/>:<Typography variant="caption" color="text.secondary">{media?"Aperçu indisponible":"Sans image"}</Typography>}
 </Box>;
}

export function ArtworkPreviewPicker({value,onChange,label="Œuvre à prévisualiser",helperText="Choisissez une œuvre publique pour cet aperçu.",selected,requireMedia=false}:{value:string;onChange:(id:string)=>void;label?:string;helperText?:string;selected?:AdminArtwork|null;requireMedia?:boolean}){
 const [chosenArtwork,setChosenArtwork]=useState<AdminArtwork|null>(null),[items,setItems]=useState<AdminArtwork[]>([]),[query,setQuery]=useState(""),[cursor,setCursor]=useState<string|null>(null),[busy,setBusy]=useState(true),[loaded,setLoaded]=useState(false),[error,setError]=useState(false),[retry,setRetry]=useState(0);
 const request=useRef<AbortController|null>(null),labelId=useId(),helpId=useId();
 useEffect(()=>{
  const controller=new AbortController();request.current?.abort();request.current=controller;
  const timer=setTimeout(()=>{
   setBusy(true);setError(false);setLoaded(false);setItems([]);setCursor(null);
   void fetch("/api/artworks?"+new URLSearchParams({publication:"published",availability:"available",limit:"100",q:query}),{cache:"no-store",signal:controller.signal})
    .then(async response=>{if(!response.ok)throw new Error();return response.json() as Promise<ArtworkPage>;})
    .then(data=>{if(controller.signal.aborted)return;setItems(data.items.filter(artwork=>artwork.effectivePublic));setCursor(data.nextCursor);setLoaded(true);})
    .catch(()=>{if(!controller.signal.aborted)setError(true);})
    .finally(()=>{if(!controller.signal.aborted)setBusy(false);});
  },200);
  return()=>{controller.abort();clearTimeout(timer);};
 },[query,retry]);
 async function more(){
  if(!cursor||busy)return;
  const controller=new AbortController();request.current?.abort();request.current=controller;setBusy(true);setError(false);
  try{
   const response=await fetch("/api/artworks?"+new URLSearchParams({publication:"published",availability:"available",limit:"100",q:query,cursor}),{cache:"no-store",signal:controller.signal});
   if(!response.ok)throw new Error();const data:ArtworkPage=await response.json();if(controller.signal.aborted)return;
   setItems(prior=>{const ids=new Set(prior.map(item=>item.id));return [...prior,...data.items.filter(item=>item.effectivePublic&&!ids.has(item.id))];});setCursor(data.nextCursor);
  }catch{if(!controller.signal.aborted)setError(true);}finally{if(!controller.signal.aborted)setBusy(false);}
 }
 useEffect(()=>()=>request.current?.abort(),[]);
 const current=items.find(artwork=>artwork.id===value)??(selected?.id===value?selected:chosenArtwork?.id===value?chosenArtwork:null);
 return <Stack spacing={1.5}>
  <Typography id={labelId} component="h3" variant="h3">{label}</Typography>
  <Typography id={helpId} variant="body2" color="text.secondary">{helperText}</Typography>
  <TextField label="Rechercher une œuvre par titre ou artiste" value={query} onChange={event=>{request.current?.abort();setBusy(true);setQuery(event.target.value);}} type="search" fullWidth/>
  {current&&<Typography variant="body2">Œuvre sélectionnée : {current.title??"Titre non renseigné"}{current.artist?" — "+current.artist:""}</Typography>}
  {busy&&<LinearProgress aria-label="Chargement des œuvres"/>}
  <Box role="group" aria-labelledby={labelId} aria-describedby={helpId} aria-busy={busy} sx={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 140px), 1fr))",gap:1.5,maxHeight:440,overflowY:"auto",p:.5}}>
   {items.map(artwork=>{
    const chosen=artwork.id===value,unavailable=requireMedia&&!artwork.media.length,title=artwork.title??"Titre non renseigné";
    return <ButtonBase key={artwork.id} disabled={unavailable||busy} aria-pressed={chosen} aria-label={title+(artwork.artist?" — "+artwork.artist:"")+(unavailable?" — Sans vue disponible":"")} onClick={()=>{setChosenArtwork(artwork);onChange(artwork.id);}} sx={{display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",textAlign:"left",border:"1px solid",borderColor:chosen?"primary.main":"divider",borderRadius:1,overflow:"hidden",bgcolor:chosen?"action.selected":"background.paper",outline:chosen?"2px solid":"none",outlineColor:"primary.main",outlineOffset:-2,"&:hover":{borderColor:"primary.main"},"&.Mui-focusVisible":{outline:"3px solid",outlineColor:"primary.main",outlineOffset:1},"&.Mui-disabled":{opacity:.65}}}>
     <ArtworkThumbnail artwork={artwork}/>
     <Box sx={{p:1,width:"100%",overflowWrap:"anywhere"}}><Typography component="span" sx={{display:"block",fontWeight:500,lineHeight:1.3}}>{title}</Typography>{artwork.artist&&<Typography component="span" variant="body2" color="text.secondary" sx={{display:"block"}}>{artwork.artist}</Typography>}{chosen&&<Typography component="span" variant="caption" color="primary.main" sx={{display:"block",fontWeight:500}}>Sélectionnée</Typography>}{unavailable&&<Typography component="span" variant="caption" sx={{display:"block"}}>Sans vue disponible</Typography>}</Box>
    </ButtonBase>;
   })}
  </Box>
  {loaded&&!items.length&&!busy&&<Typography role="status">{query?"Aucune œuvre publique ne correspond à cette recherche.":"Aucune œuvre publique disponible. La visibilité se gère dans « Œuvres »."}</Typography>}
  {error&&<Alert severity="error" action={<Button color="inherit" onClick={()=>cursor?void more():setRetry(count=>count+1)}>Réessayer</Button>}>Le catalogue n’a pas pu être chargé. Votre sélection est conservée.</Alert>}
  {cursor&&<Button disabled={busy} onClick={()=>void more()}>Charger les œuvres suivantes</Button>}
 </Stack>;
}
