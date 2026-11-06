"use client";
import {articleRoot,articleKindDescriptors} from "@/lib/editorial/article-kind";
import Link from "next/link";
import {useEffect,useId,useState} from "react";
import {Alert,Button,LinearProgress,Stack,TextField,Typography} from "@mui/material";
import {articleFetch,articleErrorMessage,type AdminArticle} from "@/lib/editorial/client";
import type {components} from "@/lib/bff/generated";
type Summary=components["schemas"]["EditorialArticleSummary"];
/** Saved IDs stay ordered and explicit. An unavailable selection is never replaced. */
export function RelatedArticleSelector({value,onChange,articleId,max=12,label="Articles associés",disabled=false}:{value:string[];onChange(value:string[]):void;articleId?:string;max?:number;label?:string;disabled?:boolean}){
 const heading=useId(),[q,setQ]=useState(""),[search,setSearch]=useState(""),[reload,setReload]=useState(0),[items,setItems]=useState<Summary[]>([]),[records,setRecords]=useState<Record<string,Summary|null>>({}),[error,setError]=useState<unknown>(null),[loading,setLoading]=useState(true);
 const selectionKey=value.join(",");
 useEffect(()=>{
  const controller=new AbortController();
  const load=articleId&&!search?articleFetch<{items:Summary[]}>("/articles/"+articleId+"/related-suggestions?limit=12",{signal:controller.signal}).then(result=>result.data.items):Promise.all((["publication","news","exhibition"] as const).map(kind=>articleFetch<components["schemas"]["EditorialAdminPage"]>("/articles?"+new URLSearchParams({kind,published:"true",lifecycle:"editable",page:"1",pageSize:"12",sort:"editorialDate",q:search}),{signal:controller.signal}))).then(results=>results.flatMap(result=>result.data.items).sort((a,b)=>(b.editorialDate??"").localeCompare(a.editorialDate??"")||a.id.localeCompare(b.id)));
  load.then(result=>{if(!controller.signal.aborted){setItems(result.filter(item=>item.id!==articleId));setError(null);setLoading(false);}}).catch(error=>{if(!controller.signal.aborted){setError(error);setLoading(false);}});
  return()=>controller.abort();
 },[articleId,search,reload]);
 useEffect(()=>{
  const controller=new AbortController(),ids=selectionKey?selectionKey.split(","):[];
  void Promise.all(ids.map(async id=>{try{const result=await articleFetch<AdminArticle>("/articles/"+id,{signal:controller.signal});return [id,result.data] as const;}catch{return [id,null] as const;}})).then(entries=>{if(!controller.signal.aborted)setRecords(Object.fromEntries(entries));});
  return()=>controller.abort();
 },[selectionKey,reload]);
 const move=(index:number,offset:number)=>{const next=[...value];[next[index],next[index+offset]]=[next[index+offset],next[index]];onChange(next);};
 return <Stack component="section" aria-labelledby={heading} spacing={2}><Typography component="h3" id={heading} variant="h3">{label}</Typography><Typography variant="body2">{articleId?"Choisissez les articles et leur ordre. Les suggestions utilisent les classements enregistrés. ":"Choisissez les articles et leur ordre. "}Un article privé est omis sur le site et reste dans votre sélection.</Typography>
 {value.length>0&&<ol aria-label={label+" — ordre"} style={{paddingInlineStart:"1.5rem",marginBlock:0}}>{value.map((id,index)=>{const record=records[id];return <li key={id} style={{paddingBlock:".75rem"}}><Stack spacing={1}>{record?<><Link href={articleRoot(record.kind)+"/"+id} prefetch={false}>{record.title||"Sans titre"}</Link>{!record.isPublished&&<Alert severity="warning">Cet article est privé. Il ne sera pas affiché sur le site.</Alert>}</>:Object.hasOwn(records,id)?<Alert severity="warning">Référence indisponible. Retirez-la ou réessayez la lecture.</Alert>:<Typography variant="body2">Article {index+1}</Typography>}<Stack direction="row" useFlexGap sx={{flexWrap:"wrap",gap:1}}><Button size="small" disabled={disabled||index===0} aria-label={"Monter l’article "+(index+1)} onClick={()=>move(index,-1)}>Monter</Button><Button size="small" disabled={disabled||index===value.length-1} aria-label={"Descendre l’article "+(index+1)} onClick={()=>move(index,1)}>Descendre</Button><Button size="small" disabled={disabled} aria-label={"Retirer l’article "+(index+1)} onClick={()=>onChange(value.filter(item=>item!==id))}>Retirer</Button></Stack></Stack></li>;})}</ol>}
 <form onSubmit={event=>{event.preventDefault();setLoading(true);setSearch(q.trim());setReload(value=>value+1);}}><Stack spacing={1}><TextField label="Rechercher un article public" value={q} onChange={event=>setQ(event.target.value)} disabled={disabled} slotProps={{htmlInput:{maxLength:160}}}/><Button type="submit" variant="outlined" disabled={disabled||loading}>Rechercher</Button></Stack></form>
 {loading?<LinearProgress aria-label="Recherche des articles"/>:error?<Alert severity="error" action={<Button onClick={()=>{setLoading(true);setReload(value=>value+1);}}>Réessayer</Button>}>{articleErrorMessage(error)}</Alert>:<><Typography component="h4" variant="body2">{articleId&&!search?"Suggestions selon les classements":"Articles publics"}</Typography>{items.filter(item=>!value.includes(item.id)).length?<ul style={{listStyle:"none",padding:0,margin:0}}>{items.filter(item=>!value.includes(item.id)).map(item=><li key={item.id} style={{paddingBlock:".5rem"}}><Stack spacing={.5}><Typography>{item.title||"Sans titre"}</Typography><Typography variant="caption">{articleKindDescriptors[item.kind].singular}</Typography><Button variant="outlined" disabled={disabled||value.length>=max} onClick={()=>onChange([...value,item.id])} aria-label={"Ajouter « "+(item.title||"Sans titre")+" »"}>Ajouter</Button></Stack></li>)}</ul>:<Typography variant="body2">{articleId&&!search?"Aucune suggestion. Recherchez un article par son titre.":"Aucun autre article trouvé. Essayez un autre titre."}</Typography>}</>}
 <Typography variant="caption">{value.length} / {max} articles sélectionnés</Typography></Stack>;
}
