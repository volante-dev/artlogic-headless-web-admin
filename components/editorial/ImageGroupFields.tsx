"use client";
import {useState} from 'react';
import {Button,Stack} from '@mui/material';
import type {ArticleCapabilities} from '@/lib/editorial/client';
import type {EditorialBlock,EditorialMedia} from '@/lib/editorial/media';
import {MediaField,MediaSourceDialog} from './MediaField';
type Group=Extract<EditorialBlock,{type:'imageGroup'}>;
export function ImageGroupFields({value,onChange,locale,capabilities,csrfCookie,onUndo,onRedo,onValidityChange}:{value:Group;onChange(value:Group):void;locale:string;capabilities:ArticleCapabilities;csrfCookie:string;onUndo():void;onRedo():void;onValidityChange(id:string,valid:boolean):void}){
 const [adding,setAdding]=useState(false),count=value.format==='diptych'?2:3;
 const imageMedia=(media:EditorialMedia):Group['items'][number]['media']=>{if(media.source.kind!=='image'||media.cta?.kind==='artwork')throw Error('image_source_required');const image=structuredClone(media);delete image.video;return {...image,source:{...media.source,kind:"image"},showArtworkInfo:false,cta:media.cta};};
 const move=(index:number,direction:1|-1)=>{const items=[...value.items],destination=index+direction;if(destination<0||destination>=items.length)return;[items[index],items[destination]]=[items[destination]!,items[index]!];onChange({...value,items});};
 return <Stack spacing={3}>
 <p>{count} images côte à côte sur ordinateur ; une galerie plein écran sur mobile.</p>
 {value.items.map((item,index)=><details key={item.id} className="editorial-slide-fields" open={index===0}><summary>Image {index+1}</summary><Stack direction="row" spacing={1} useFlexGap sx={{flexWrap:'wrap'}}><Button disabled={index===0} onClick={()=>move(index,-1)}>Déplacer à gauche</Button><Button disabled={index===value.items.length-1} onClick={()=>move(index,1)}>Déplacer à droite</Button><Button onClick={()=>onChange({...value,items:value.items.filter(current=>current.id!==item.id)})}>Retirer l’image {index+1}</Button></Stack>
 <MediaField fieldPrefix={"blocks."+value.id+".items."+item.id+".media."+item.media.id} imageOnly value={item.media} locale={locale} capabilities={capabilities} csrfCookie={csrfCookie} onUndo={onUndo} onRedo={onRedo} onValidityChange={valid=>onValidityChange(item.media.id,valid)} onChange={media=>onChange({...value,items:value.items.map(current=>current.id===item.id?{...current,media:imageMedia(media)}:current)})}/>
 </details>)}
 {value.items.length<count&&<Button variant="outlined" onClick={()=>setAdding(true)}>Ajouter l’image {value.items.length+1} sur {count}</Button>}
 <MediaSourceDialog open={adding} imageOnly capabilities={capabilities} csrfCookie={csrfCookie} onClose={()=>setAdding(false)} onSelect={media=>{if(value.items.length>=count)return;onChange({...value,items:[...value.items,{id:crypto.randomUUID(),media:imageMedia(media)}]});setAdding(false);}}/>
 </Stack>;
}
