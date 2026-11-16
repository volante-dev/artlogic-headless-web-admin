"use client";
import {useRef,useState} from "react";
import {Alert,Box,Button,MenuItem,Stack,TextField,Typography} from "@mui/material";
import type {SiteContent} from "@/lib/bff/site-content";
import type {RichTextDoc} from "@/lib/editorial/rich-text-adapter";
import {resourceVersion} from "@/lib/resource-version";
import {RichTextField} from "./editorial/RichTextField";
import {useUnsavedChanges} from "./presentation/useUnsavedChanges";

type Page=NonNullable<SiteContent["legalPages"]>[string];
type Pages=Record<string,Page>;
const empty=():Page=>({title:"",body:{type:"doc",content:[]}});
const errors:Record<number,string>={400:"Vérifiez le titre, le contenu et les liens. La langue de référence doit rester renseignée.",401:"Votre session a expiré. Reconnectez-vous dans un autre onglet ; vos modifications sont conservées.",403:"Votre accès est refusé. Vos modifications sont conservées.",412:"Le contenu du site a changé. Comparez avec la version enregistrée avant de réessayer.",413:"Le contenu dépasse la taille autorisée.",429:"Trop de demandes. Réessayez plus tard.",503:"L’enregistrement n’a pas pu être confirmé. Comparez avec la version enregistrée avant de réessayer."};
function readable(doc:RichTextDoc){const text=(node:RichTextDoc["content"][number]):string=>node.type==="text"?node.text+(node.marks?.filter(m=>m.type==="link").map(m=>" ("+m.attrs.href+")").join("")??""):node.type==="hardBreak"?"\n":(node.content??[]).map(text).join("")+(node.type==="paragraph"||node.type==="heading"?"\n\n":"");return doc.content.map(text).join("");}

export function LegalPageEditor({initial,initialEtag,csrfCookie,siteOrigin}:{initial:SiteContent;initialEtag:string;csrfCookie:string;siteOrigin:string}){
 const [baseline,setBaseline]=useState(initial),[pages,setPages]=useState<Pages>(()=>structuredClone(initial.legalPages??{})),[etag,setEtag]=useState(initialEtag),[locale,setLocale]=useState(initial.policy.defaultLocale),[pending,setPending]=useState(false),[error,setError]=useState(""),[message,setMessage]=useState(""),[uncertain,setUncertain]=useState(false),[invalid,setInvalid]=useState<Record<string,boolean>>({}),[comparison,setComparison]=useState<{content:SiteContent;etag:string}|null>(null);
 const history=useRef<Record<string,{undo:RichTextDoc[];redo:RichTextDoc[]}>>({}),errorRef=useRef<HTMLDivElement>(null);
 const locales=baseline.policy.locales,dirtyLocales=locales.filter(l=>JSON.stringify(pages[l.code])!==JSON.stringify(baseline.legalPages?.[l.code])).map(l=>l.code),dirty=dirtyLocales.length>0,page=pages[locale]??empty(),reference=pages[baseline.policy.defaultLocale];
 useUnsavedChanges(dirty||Object.values(invalid).some(Boolean));
 function change(next:Page){setPages(current=>({...current,[locale]:next}));setMessage("");}
 function stack(){return history.current[locale]??(history.current[locale]={undo:[],redo:[]});}
 function bodyChange(body:RichTextDoc){const s=stack();s.undo.push(structuredClone(page.body));s.redo=[];change({...page,body});}
 function undo(redo=false){const s=stack(),from=redo?s.redo:s.undo,to=redo?s.undo:s.redo,last=from.pop();if(last){to.push(structuredClone(page.body));change({...page,body:last});}}
 function report(status:number){setError(errors[status]??errors[503]);if([412,428,503].includes(status))setUncertain(true);requestAnimationFrame(()=>errorRef.current?.focus());}
 function accept(content:SiteContent,version:string,keep=false){const next=structuredClone(content.legalPages??{});if(keep)for(const code of dirtyLocales){if(pages[code])next[code]=pages[code];else delete next[code];}setBaseline(content);setPages(next);setEtag(version);setUncertain(false);setComparison(null);setError("");if(!keep){history.current={};setInvalid({});}}
 async function save(){if(pending||uncertain||!dirty)return;setPending(true);setError("");setMessage("");try{
  const csrf=document.cookie.split("; ").find(c=>c.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
  const response=await fetch("/api/site-content",{method:"PATCH",cache:"no-store",headers:{"content-type":"application/json","x-csrf-token":decodeURIComponent(csrf),"if-match":etag},body:JSON.stringify({legalPages:Object.fromEntries(dirtyLocales.map(code=>[code,pages[code]??null]))})});
  if(!response.ok){report(response.status);return;}const value=await response.json(),version=resourceVersion(response.headers);if(!version)throw Error();accept(value,version);setMessage("Mentions légales enregistrées et mises en ligne.");
 }catch{report(503);}finally{setPending(false);}}
 async function compare(){setPending(true);try{const response=await fetch("/api/site-content",{cache:"no-store"});if(!response.ok){report(response.status);return;}const content:SiteContent=await response.json(),version=resourceVersion(response.headers);if(!version)throw Error();setComparison({content,etag:version});}catch{report(503);}finally{setPending(false);}}
 const publicHref=new URL((locale===baseline.policy.defaultLocale?"":"/"+locale)+"/legal",siteOrigin).toString();
 return <Stack spacing={4}>
  <Box><Typography component="h1" variant="h1">Mentions légales</Typography><Typography color="text.secondary">Modifiez le titre, les textes et les liens de la page légale. L’enregistrement met les changements en ligne immédiatement.</Typography></Box>
  <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap",alignItems:"center"}}>
   <Button variant="contained" onClick={save} disabled={pending||uncertain||!dirty||Object.values(invalid).some(Boolean)}>Enregistrer et mettre en ligne</Button>
   <Button href={publicHref} target="_blank" rel="noopener noreferrer">Voir la page en ligne</Button>
   <TextField select label="Langue des textes" value={locale} onChange={e=>setLocale(e.target.value)} sx={{minWidth:240,width:{xs:"100%",sm:240}}}>{locales.map(l=><MenuItem key={l.code} value={l.code}>{l.label}</MenuItem>)}</TextField>
  </Stack>
  {dirty&&<Typography role="status" color="text.secondary">Modifications non enregistrées</Typography>}
  {message&&<Alert severity="success" role="status">{message}</Alert>}
  {error&&<Alert severity="error" role="alert" ref={errorRef} tabIndex={-1}>{error}</Alert>}
  {uncertain&&<Button onClick={compare} disabled={pending} sx={{alignSelf:"start"}}>Comparer avec la version enregistrée</Button>}
  {comparison&&<Stack spacing={2}><Typography component="h2" variant="h2">Version enregistrée</Typography>{locales.map(l=>{const saved=comparison.content.legalPages?.[l.code];return <Box component="details" key={l.code}><Box component="summary" sx={{cursor:"pointer"}}>{l.label} — {saved?.title??"Traduction non renseignée"}</Box>{saved&&<Typography component="div" sx={{whiteSpace:"pre-wrap",overflowWrap:"anywhere",mt:2}}>{readable(saved.body)}</Typography>}</Box>;})}<Stack direction="row" useFlexGap spacing={2} sx={{flexWrap:"wrap"}}><Button onClick={()=>accept(comparison.content,comparison.etag,true)}>Utiliser la version enregistrée comme référence</Button><Button onClick={()=>accept(comparison.content,comparison.etag)}>Recharger les textes enregistrés</Button></Stack></Stack>}
  {!pages[locale]&&locale!==baseline.policy.defaultLocale&&<Alert severity="info">Cette langue utilise le texte de référence tant qu’aucune traduction n’est enregistrée.{reference&&<Button onClick={()=>change(structuredClone(reference))}>Copier le texte de référence</Button>}</Alert>}
  <TextField fullWidth label={"Titre de la page — "+locale.toUpperCase()} value={page.title} onChange={e=>change({...page,title:e.target.value})} slotProps={{htmlInput:{maxLength:160}}} helperText="Ce titre apparaît aussi dans l’onglet du navigateur."/>
  <Box><Typography component="h2" variant="h2" sx={{mb:2}}>Contenu de la page</Typography><RichTextField key={locale} label={"Contenu des mentions légales — "+locale.toUpperCase()} value={page.body} onChange={bodyChange} onUndo={()=>undo()} onRedo={()=>undo(true)} onValidityChange={valid=>setInvalid(current=>({...current,[locale]:!valid}))}/></Box>
  {locale!==baseline.policy.defaultLocale&&pages[locale]&&<Button color="error" sx={{alignSelf:"start"}} onClick={()=>{setPages(current=>{const next={...current};delete next[locale];return next;});setInvalid(current=>({...current,[locale]:false}));}}>Supprimer cette traduction et utiliser la référence</Button>}
 </Stack>;
}
