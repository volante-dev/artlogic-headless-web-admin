"use client";
import {useState} from "react";
import Link from "next/link";
import {Alert,Button,Typography} from "@mui/material";
import {formFetch} from "@/lib/forms/client";
import type {components} from "@/lib/forms/contract-types.generated";
type Page=components["schemas"]["FormsUsagePage"];
const states={draft:"brouillon",published:"publiée",restorable:"version conservée"},pages:Record<string,string>={home:"Accueil",contact:"Contact",expertise:"Expertise",news:"Actualités",publications:"Publications",exhibitions:"Expositions",artworks:"Œuvres",artworkDetail:"Fiche œuvre",galerist:"Le galeriste"};
export function FormUsageList({formId}:{formId:string}){
 const [data,setData]=useState<Page|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState("");
 async function load(cursor?:string){if(busy)return;setBusy(true);setError("");try{const result=await formFetch<Page>([formId,"usages"],{query:{limit:"25",...(cursor?{cursor}:{})}});setData(previous=>cursor&&previous?{...result.data,items:[...previous.items,...result.data.items]}:result.data);}catch{setError("Les emplacements ne peuvent pas être consultés. La suppression restera contrôlée lors de sa confirmation.");}finally{setBusy(false);}}
 return <div><Button type="button" variant="outlined" onClick={()=>void load()} disabled={busy}>{busy?"Lecture des emplacements…":data?"Actualiser les emplacements":"Consulter les emplacements"}</Button>{error&&<Alert severity="error" sx={{mt:2}}>{error}</Alert>}{data&&!data.items.length&&<Typography sx={{mt:2}}>Aucun emplacement ne référence ce formulaire. La présence de réponses reçues est vérifiée séparément.</Typography>}{data&&data.items.length>0&&<ul style={{paddingLeft:"1.25rem"}}>{data.items.map(item=><li key={[item.ownerType,item.ownerId,item.revisionId,item.blockId].join(":")} style={{paddingBlock:".5rem",overflowWrap:"anywhere"}}><Link href={item.adminHref} target="_blank" rel="noopener noreferrer">{item.ownerType==="page"?"Page "+(pages[item.ownerId]??item.ownerId):"Article lié"}</Link>{" · "+states[item.state]}</li>)}</ul>}{data?.nextCursor&&<Button type="button" disabled={busy} onClick={()=>void load(data.nextCursor!)}>Emplacements suivants</Button>}</div>;
}
