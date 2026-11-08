"use client";
import {useRef,useState,type PointerEvent} from "react";
import Image from "next/image";
import {Alert,Box,Button,Stack,TextField,Typography} from "@mui/material";
import type {components} from "../../lib/bff/generated";
import {modalFocusGeometry} from "../../lib/presentation/modal-focus-geometry.generated";
type Selection=components["schemas"]["GalleryFocusSelection"];
type Context=components["schemas"]["GalleryFocusContext"];
export function ArtworkFocusEditor({context,value,onChange,onInvalid,disabled=false}:{context:Context;value:Selection|null;onChange:(v:Selection|null)=>void;onInvalid:(v:boolean)=>void;disabled?:boolean}){
 const media=context.primaryMedia,canvas=useRef<HTMLButtonElement>(null),[failed,setFailed]=useState(false),[fields,setFields]=useState({x:"",y:""}),[typing,setTyping]=useState(false);
 const available=Boolean(media&&!failed&&!disabled),point=value&&media&&value.mediaId===media.id?value:null;
 function select(x:number,y:number){if(!media||!available)return;setTyping(false);onInvalid(false);onChange({mediaId:media.id,x:Math.max(0,Math.min(1,x)),y:Math.max(0,Math.min(1,y))});}
 function pointer(e:PointerEvent<HTMLButtonElement>){
  if(!media||!canvas.current||!available)return;const r=canvas.current.getBoundingClientRect(),scale=Math.min(r.width/media.width,r.height/media.height),w=media.width*scale,h=media.height*scale;
  const x=(e.clientX-r.left-(r.width-w)/2)/w,y=(e.clientY-r.top-(r.height-h)/2)/h;
  if(e.type==="pointerdown"&&(x<0||x>1||y<0||y>1))return;
  if(e.type==="pointerdown")e.currentTarget.setPointerCapture(e.pointerId);
  if(e.type==="pointerdown"||e.currentTarget.hasPointerCapture(e.pointerId))select(x,y);
 }
 function number(axis:"x"|"y",text:string){
  const next=typing?{...fields,[axis]:text}:{x:String((point?.x??.5)*100),y:String((point?.y??.5)*100),[axis]:text};setFields(next);setTyping(true);
  const valid=[next.x,next.y].every(v=>v.trim()!==""&&Number.isFinite(Number(v))&&Number(v)>=0&&Number(v)<=100);onInvalid(!valid);
  if(valid&&media)onChange({mediaId:media.id,x:Number(next.x)/100,y:Number(next.y)/100});
 }
 const label=point?`Point choisi : ${Math.round(point.x*1000)/10} % horizontal, ${Math.round(point.y*1000)/10} % vertical` :"Aucun point personnalisé";
 return <Stack spacing={2} data-testid="artwork-focus-editor">
  <Box><Typography component="h3" variant="h3">Cadrage de la modale</Typography><Typography color="text.secondary">Choisissez le détail à placer au centre de l’image d’ouverture. Le même point s’applique sur ordinateur et mobile.</Typography></Box>
  {(context.status==="stale"||value&&media&&value.mediaId!==media.id)&&<Alert severity="warning">L’image principale a changé. Choisissez un nouveau point ou réinitialisez le cadrage.</Alert>}
  {(!media||failed)&&<Alert severity="info">L’image est indisponible. Vous pouvez toujours modifier la description ou réinitialiser un ancien point.</Alert>}
  {media&&<Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",lg:"minmax(0,1.5fr) minmax(230px,1fr)"},gap:3,alignItems:"start"}}>
   <Box><Box component="button" ref={canvas} type="button" disabled={!available} aria-label="Choisir le point de focus. Utilisez les flèches pour déplacer le repère." onPointerDown={pointer} onPointerMove={pointer} onKeyDown={e=>{const delta:Record<string,[number,number]>={ArrowLeft:[-.001,0],ArrowRight:[.001,0],ArrowUp:[0,-.001],ArrowDown:[0,.001]};if(delta[e.key]){e.preventDefault();const [x,y]=delta[e.key];select((point?.x??.5)+x*(e.shiftKey?10:1),(point?.y??.5)+y*(e.shiftKey?10:1));}}} sx={{display:"block",width:"100%",aspectRatio:"8/5",position:"relative",overflow:"hidden",p:0,border:0,bgcolor:"action.hover",cursor:available?"crosshair":"default",touchAction:"none","&:focus-visible":{outline:"3px solid",outlineColor:"primary.main",outlineOffset:4},"& img":{objectFit:"contain",pointerEvents:"none"}}}>
    <Image key={media.id} unoptimized fill sizes="(max-width: 900px) 90vw, 50vw" src={"/api/media/"+media.id} alt="Image entière de l’œuvre pour choisir son point de focus" draggable={false} onError={()=>setFailed(true)}/>
    {point&&<FocusMarker point={point} width={media.width} height={media.height} canvas={canvas}/>}
   </Box><Typography variant="body2" color="text.secondary" sx={{mt:1}}>Cliquez sur l’image ou déplacez le repère. Les flèches permettent un réglage précis.</Typography></Box>
   <Stack spacing={2}>
    <Stack direction="row" spacing={2}>{(["x","y"] as const).map(axis=><TextField key={axis} type="number" disabled={!available} label={axis==="x"?"Horizontal (%)":"Vertical (%)"} value={typing?fields[axis]:point?Math.round(point[axis]*10000)/100:""} onChange={e=>number(axis,e.target.value)} slotProps={{htmlInput:{min:0,max:100,step:.1}}} error={typing&&(fields[axis]===""||Number(fields[axis])<0||Number(fields[axis])>100)} fullWidth/>)}</Stack>
    <Typography variant="body2" aria-live="polite">{label}</Typography>
    <FocusPreview media={media} point={point} mobile={false}/><FocusPreview media={media} point={point} mobile/>
   </Stack>
  </Box>}
  <Stack direction="row" spacing={2} sx={{alignItems:"center",flexWrap:"wrap"}}><Button disabled={disabled||!value} onClick={()=>{setTyping(false);onInvalid(false);onChange(null);}}>Réinitialiser le cadrage</Button><Typography variant="body2" color="text.secondary">Près d’un bord, le centrage s’ajuste pour remplir le cadre.</Typography></Stack>
 </Stack>;
}
function FocusMarker({point,width,height,canvas}:{point:{x:number;y:number};width:number;height:number;canvas:React.RefObject<HTMLButtonElement|null>}){
 const [size,setSize]=useState({width:0,height:0});
 // The observer belongs to this marker only; it never changes the saved coordinates.
 useMarkerSize(canvas,setSize);
 const scale=Math.min(size.width/width,size.height/height),w=width*scale,h=height*scale;
 return <Box aria-hidden sx={{position:"absolute",left:(size.width-w)/2+point.x*w,top:(size.height-h)/2+point.y*h,width:28,height:28,border:"2px solid white",borderRadius:"50%",outline:"2px solid #161513",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 2px 8px rgb(0 0 0 / .4)","&:before,&:after":{content:'""',position:"absolute",background:"white",boxShadow:"0 0 1px black"},"&:before":{height:2,width:36,left:-6,top:11},"&:after":{width:2,height:36,top:-6,left:11}}}/>;
}
import {useLayoutEffect} from "react";
function useMarkerSize(ref:React.RefObject<HTMLElement|null>,setSize:(s:{width:number;height:number})=>void){useLayoutEffect(()=>{const el=ref.current;if(!el)return;const measure=()=>setSize({width:el.clientWidth,height:el.clientHeight});measure();const observer=new ResizeObserver(measure);observer.observe(el);return()=>observer.disconnect();},[ref,setSize]);}
function FocusPreview({media,point,mobile}:{media:NonNullable<Context["primaryMedia"]>;point:Selection|null;mobile:boolean}){
 const width=mobile?390:1440,height=mobile?844:900,p=point?modalFocusGeometry(media.width,media.height,width,height,point):null;
 return <Box><Typography variant="body2" sx={{mb:1}}>{mobile?"Aperçu mobile":"Aperçu ordinateur"}</Typography><Box data-focus-preview={mobile?"mobile":"desktop"} sx={{aspectRatio:`${width}/${height}`,position:"relative",overflow:"hidden",bgcolor:"action.hover",width:mobile?"min(100%, 130px)":"100%","& img":{objectFit:"cover",objectPosition:p?`${p.x*100}% ${p.y*100}%`:"50% 50%"}}}>
  <Image unoptimized fill sizes="400px" src={"/api/media/"+media.id} alt="Aperçu du cadrage d’ouverture"/>
  <Box aria-hidden sx={{position:"absolute",left:mobile?12:16,bottom:mobile?16:"auto",top:mobile?"auto":16,width:"42%",height:mobile?44:52,bgcolor:"rgb(255 255 255 / .75)"}}/>
 </Box></Box>;
}
