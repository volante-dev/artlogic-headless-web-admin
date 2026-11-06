"use client";
import{articleKindDescriptors}from"@/lib/editorial/article-kind";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";
import {useRouter} from "next/navigation";
import {Alert,Button,Stack,TextField,ToggleButton,ToggleButtonGroup} from "@mui/material";
import {articleFetch,articleErrorMessage,type ArticleCapabilities} from "@/lib/editorial/client";
import type{CompositionCapabilities}from"@/lib/editorial/composition";
export function CreateArticleForm({kind,csrfCookie}:{kind:"publication"|"news"|"exhibition";csrfCookie:string}){
 const root=articleKindDescriptors[kind].root,router=useRouter(),command=useRef<{key:string;body:{kind:typeof kind;titles:Record<string,string>}}|null>(null);
 const [creationMode,setCreationMode]=useState("manual"),[ai,setAi]=useState<CompositionCapabilities|null>(null);
 useEffect(()=>{const controller=new AbortController();articleFetch<CompositionCapabilities>("/composition/capabilities",{signal:controller.signal}).then(r=>setAi(r.data)).catch(()=>{});return()=>controller.abort();},[]);
 const [submitted,setSubmitted]=useState(false),[title,setTitle]=useState(""),[caps,setCaps]=useState<ArticleCapabilities|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState<unknown>(null);
 useEffect(()=>{const controller=new AbortController();articleFetch<ArticleCapabilities>("/capabilities",{signal:controller.signal}).then(r=>setCaps(r.data)).catch(error=>{if(!controller.signal.aborted)setError(error);});return()=>controller.abort();},[]);
 const create=async()=>{if(!caps||busy||kind==="exhibition"&&!caps.exhibitionsWritable)return;setBusy(true);setSubmitted(true);command.current??={key:crypto.randomUUID(),body:{kind,titles:{[caps.defaultLocale]:title}}};try{const result=await articleFetch<{articleId:string}>("/articles",{method:"POST",body:command.current.body,key:command.current.key,csrfCookie});router.replace(root+"/"+result.data.articleId+(creationMode==="automatic"?"?compose=1":""));}catch(error){setError(error);setBusy(false);}};
 return <Stack spacing={3} className="editorial-create"><Link href={root} prefetch={false}>← Retour aux {articleKindDescriptors[kind].plural}</Link><h1>{articleKindDescriptors[kind].create}</h1><p>Un titre pour commencer. Vous pourrez compléter et traduire votre article dans l’éditeur.</p>{error?<Alert severity="error">{articleErrorMessage(error)}</Alert>:null}<form onSubmit={event=>{event.preventDefault();void create();}} className="work-panel"><Stack spacing={3}><ToggleButtonGroup exclusive value={creationMode} aria-label="Mode de création" onChange={(_event,value)=>{if(value)setCreationMode(value);}} disabled={submitted||busy}><ToggleButton value="manual">Manuel</ToggleButton><ToggleButton value="automatic" disabled={!ai?.canSubmit}>Automatique</ToggleButton></ToggleButtonGroup>{ai&&!ai.canSubmit&&<p>La composition automatique est indisponible. Le mode manuel reste disponible.</p>}<TextField fullWidth label="Titre" value={title} disabled={submitted||busy} onChange={event=>setTitle(event.target.value)} slotProps={{htmlInput:{maxLength:240}}}/><Button type="submit" variant="contained" disabled={busy||!caps||kind==="exhibition"&&!caps.exhibitionsWritable} sx={{alignSelf:"start"}}>{busy?"Création…":submitted?"Vérifier la création":"Créer le brouillon"}</Button></Stack></form></Stack>;
}
