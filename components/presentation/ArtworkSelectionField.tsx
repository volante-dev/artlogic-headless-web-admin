"use client";

import Image from "next/image";
import {createPortal} from "react-dom";
import {useEffect,useId,useRef,useState} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import {Alert,Box,Button,IconButton,Stack,Tooltip,Typography} from "@mui/material";
import {AdminIcon} from "../AdminIcon";
import type {components} from "../../lib/bff/generated";
import styles from "./ArtworkSelectionField.module.css";

type Artwork=components["schemas"]["AdminArtwork"];
type Drag={id:string;order:string;pointerId:number;target:number;x:number;y:number;offsetX:number;offsetY:number;width:number};

function Thumbnail({artwork}:{artwork?:Artwork|null}){
 const media=artwork?.media[0];
 const [failedSource,setFailedSource]=useState<string|null>(null);
 return <div className={styles.thumbnail}>{media&&failedSource!==media.id?<Image unoptimized src={"/api/media/"+media.id} width={media.width} height={media.height} alt="" draggable={false} onError={()=>setFailedSource(media.id)}/>:<span>{artwork===undefined?"Chargement…":media?"Aperçu indisponible":"Sans image"}</span>}</div>;
}
function ReorderIcon({kind}:{kind:"grip"|"up"|"down"}){
 return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={kind==="up"?"M6 14l6-6 6 6":kind==="down"?"M6 10l6 6 6-6":"M9 5h.01 M15 5h.01 M9 12h.01 M15 12h.01 M9 19h.01 M15 19h.01"}/></svg>;
}

export function ArtworkSelectionField({value,onChange,max=12,label="Œuvres sélectionnées"}:{value:string[];onChange:(ids:string[])=>void;max?:number;label?:string}){
 const [items,setItems]=useState<Artwork[]>([]),[selectedItems,setSelectedItems]=useState<Record<string,Artwork|null>>({}),[cursor,setCursor]=useState<string|null>(null),[error,setError]=useState(""),[loaded,setLoaded]=useState(false),[loadingMore,setLoadingMore]=useState(false);
 const [drag,setDrag]=useState<Drag|null>(null),[announcement,setAnnouncement]=useState("");
 const listRef=useRef<HTMLOListElement>(null),dragRef=useRef<Drag|null>(null),headingId=useId(),helpId=useId();
 // Reordering never needs to reload the selected artwork details.
 const selectedIds=[...value].sort().join(",");
 useEffect(()=>{const c=new AbortController();void Promise.all(selectedIds.split(",").filter(Boolean).map(async id=>{const response=await fetch("/api/artworks/"+id,{cache:"no-store",signal:c.signal});if(response.status===404)return [id,null] as const;if(!response.ok)throw new Error();return [id,await response.json() as Artwork] as const;})).then(values=>{if(!c.signal.aborted)setSelectedItems(Object.fromEntries(values));}).catch(()=>{if(!c.signal.aborted)setError("Impossible de vérifier la disponibilité des œuvres sélectionnées. La sélection est conservée.");});return()=>c.abort();},[selectedIds]);
 useEffect(()=>{const c=new AbortController();void fetch("/api/artworks?publication=published&availability=available",{signal:c.signal,cache:"no-store"}).then(r=>{if(!r.ok)throw new Error();return r.json() as Promise<components["schemas"]["AdminArtworkPage"]>;}).then(data=>{setItems(data.items.filter(a=>a.effectivePublic));setCursor(data.nextCursor);setLoaded(true);}).catch(()=>{if(!c.signal.aborted)setError("Impossible de charger les œuvres publiques. La sélection est conservée.");});return()=>c.abort();},[]);
 async function more(){if(!cursor||loadingMore)return;setLoadingMore(true);try{const r=await fetch("/api/artworks?"+new URLSearchParams({publication:"published",availability:"available",cursor}),{cache:"no-store"});if(!r.ok)throw new Error();const data=await r.json() as components["schemas"]["AdminArtworkPage"];setItems(current=>[...current,...data.items.filter(a=>a.effectivePublic&&!current.some(item=>item.id===a.id))]);setCursor(data.nextCursor);}catch{setError("Impossible de charger la suite des œuvres.");}finally{setLoadingMore(false);}}
 function artwork(id:string){return Object.hasOwn(selectedItems,id)?selectedItems[id]:items.find(a=>a.id===id);}
 function move(from:number,to:number){
  if(from===to||from<0||to<0||to>=value.length)return;
  const next=[...value],id=next.splice(from,1)[0];next.splice(to,0,id);onChange(next);
  setAnnouncement((artwork(id)?.title??"Œuvre")+" · position "+(to+1)+" sur "+value.length+".");
 }
 function cancelDrag(){dragRef.current=null;setDrag(null);}
 function startDrag(event:ReactPointerEvent<HTMLButtonElement>,id:string){
  if(event.button!==0||!event.isPrimary||value.length<2)return;
  const row=event.currentTarget.closest("li")!;const rect=row.getBoundingClientRect();
  const next={id,order:value.join(","),pointerId:event.pointerId,target:value.indexOf(id),x:event.clientX,y:event.clientY,offsetX:event.clientX-rect.left,offsetY:event.clientY-rect.top,width:rect.width};
  event.currentTarget.focus();event.currentTarget.setPointerCapture(event.pointerId);dragRef.current=next;setDrag(next);
 }
 function updateDrag(x:number,y:number){
  const current=dragRef.current;if(!current||!listRef.current)return;
  const rows=Array.from(listRef.current.children) as HTMLElement[];
  const remaining=rows.filter(row=>row.dataset.artworkId!==current.id);
  const index=remaining.findIndex(row=>{const rect=row.getBoundingClientRect();return y<rect.top+rect.height/2;});
  const next={...current,x,y,target:index===-1?remaining.length:index};dragRef.current=next;setDrag(next);
 }
 // Keep long selections moving when the pointer reaches the viewport edge.
 const dragging=drag!==null;
 useEffect(()=>{
  if(!dragging)return;
  let frame:number;
  function tick(){const current=dragRef.current;if(!current)return;const speed=current.y<72?-12:current.y>window.innerHeight-72?12:0;if(speed){window.scrollBy(0,speed);updateDrag(current.x,current.y);}frame=requestAnimationFrame(tick);}
  frame=requestAnimationFrame(tick);
  function escape(event:KeyboardEvent){if(event.key==="Escape"){event.preventDefault();cancelDrag();setAnnouncement("Déplacement annulé.");}}
  window.addEventListener("keydown",escape);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener("keydown",escape);};
 },[dragging]);
 function finishDrag(event:ReactPointerEvent<HTMLButtonElement>){
  const current=dragRef.current;if(!current||current.pointerId!==event.pointerId)return;
  if(current.order===value.join(","))move(value.indexOf(current.id),current.target);
  cancelDrag();
 }
 const available=items.filter(a=>!value.includes(a.id));
 const destination=drag?value.filter(id=>id!==drag.id)[drag.target]:undefined;
 return <Stack spacing={2}>
  <div><Typography id={headingId} component="h3" variant="h3">{label} · {value.length}/{max}</Typography>{value.length>1&&<Typography id={helpId} variant="body2" color="text.secondary" sx={{mt:1}}>Glissez les œuvres par leur poignée pour changer l’ordre. Au clavier, utilisez les flèches haut et bas sur la poignée.</Typography>}</div>
  {error&&<Alert severity="error">{error}</Alert>}
  <span className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">{announcement}</span>
  {value.length>0?<Box component="ol" ref={listRef} aria-labelledby={headingId} className={styles.list}>
   {value.map((id,index)=>{const a=artwork(id),unavailable=a===null||a&&!a.effectivePublic;return <li key={id} data-artwork-id={id} className={[styles.row,drag?.id===id?styles.dragging:"",destination===id?styles.dropBefore:""].join(" ")}>
    {max>1&&<Tooltip title="Glisser pour déplacer"><IconButton className={styles.handle} aria-label={"Déplacer l’œuvre "+(index+1)} aria-describedby={value.length>1?helpId:undefined} disabled={value.length<2} onPointerDown={event=>startDrag(event,id)} onPointerMove={event=>{if(dragRef.current?.pointerId===event.pointerId)updateDrag(event.clientX,event.clientY);}} onPointerUp={finishDrag} onPointerCancel={cancelDrag} onLostPointerCapture={cancelDrag} onKeyDown={event=>{if(event.key==="ArrowUp"||event.key==="ArrowDown"){event.preventDefault();move(index,index+(event.key==="ArrowUp"?-1:1));}}}><ReorderIcon kind="grip"/></IconButton></Tooltip>}
    <span className={styles.position} aria-label={"Position "+(index+1)}>{index+1}</span>
    <Thumbnail artwork={a}/><div className={styles.details}><Typography>{a?.title??(a===null?id.slice(0,8):"Vérification…")}</Typography><Typography variant="body2" color="text.secondary">{a?.artist??"Artiste non renseigné"}</Typography>{unavailable&&<Typography variant="caption" color="warning.main">Œuvre indisponible sur le site</Typography>}</div>
    <div className={styles.actions}>{max>1&&<><Tooltip title="Monter"><span><IconButton aria-label={"Monter l’œuvre "+(index+1)} disabled={index===0} onClick={()=>move(index,index-1)}><ReorderIcon kind="up"/></IconButton></span></Tooltip><Tooltip title="Descendre"><span><IconButton aria-label={"Descendre l’œuvre "+(index+1)} disabled={index===value.length-1} onClick={()=>move(index,index+1)}><ReorderIcon kind="down"/></IconButton></span></Tooltip></>}<Tooltip title="Retirer de la sélection"><IconButton aria-label={"Retirer l’œuvre "+(index+1)} onClick={()=>{onChange(value.filter(v=>v!==id));setAnnouncement("Œuvre retirée de la sélection.");}}><AdminIcon name="close"/></IconButton></Tooltip></div>
   </li>;})}
   {drag&&!destination&&<li aria-hidden="true" className={styles.dropEnd}/>}
  </Box>:<Typography color="text.secondary">Aucune œuvre sélectionnée. Ajoutez une œuvre ci-dessous.</Typography>}
  {drag&&createPortal(<div className={styles.preview} aria-hidden="true" style={{left:drag.x-drag.offsetX,top:drag.y-drag.offsetY,width:drag.width}}><Thumbnail artwork={artwork(drag.id)}/><div className={styles.details}><Typography>{artwork(drag.id)?.title??"Œuvre"}</Typography><Typography variant="body2" color="text.secondary">{artwork(drag.id)?.artist}</Typography></div></div>,document.body)}
  {!items.length&&loaded&&<Typography>Aucune œuvre publique disponible. La visibilité se gère dans « Œuvres ».</Typography>}
  {available.length>0&&<div><Typography component="h4" variant="body1" sx={{mb:1}}>Ajouter à la sélection</Typography><div className={styles.catalog}>{available.map(a=><div key={a.id} className={styles.candidate}><Thumbnail artwork={a}/><div className={styles.details}><Typography>{a.title??"Sans titre"}</Typography><Typography variant="body2" color="text.secondary">{a.artist??"Artiste non renseigné"}</Typography></div><Button size="small" disabled={value.length>=max} onClick={()=>onChange([...value,a.id])} aria-label={"Ajouter cette œuvre : "+(a.title??"Sans titre")}>Ajouter</Button></div>)}</div></div>}
  {cursor&&<Button onClick={more} disabled={loadingMore}>{loadingMore?"Chargement…":"Charger d’autres œuvres"}</Button>}
  <Typography variant="caption" color="text.secondary">Une œuvre masquée ou retirée sera omise du site. Cette sélection ne modifie jamais sa visibilité.</Typography>
 </Stack>;
}
