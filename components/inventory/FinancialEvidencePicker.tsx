"use client";
import {useEffect,useState,useRef} from "react";
import {Alert,Button,Stack,Typography} from "@mui/material";
import {inventoryFetch,inventoryErrorText,type InventoryRead} from "@/lib/inventory/client";
import type {Attachment} from "@/lib/inventory/finance";
import {inventoryText as t} from "@/lib/inventory/messages";
import {useInventoryUploads} from "./useInventoryUploads";
export function FinancialEvidencePicker({value,onChange,csrfCookie,disabled=false,onBusyChange}:{onBusyChange?:(busy:boolean)=>void;value:readonly string[];onChange:(ids:string[])=>void;csrfCookie:string;disabled?:boolean}){
 const [files,setFiles]=useState<Record<string,Attachment>>({}),[error,setError]=useState(""),latest=useRef(value);useEffect(()=>{latest.current=value;},[value]);
 const uploads=useInventoryUploads<Attachment>(csrfCookie,8388608,media=>{setFiles(previous=>({...previous,[media.mediaId]:media}));onChange([...new Set([...latest.current,media.mediaId])]);},{classification:"financial_document"});
 useEffect(()=>onBusyChange?.(uploads.busy),[uploads.busy,onBusyChange]);
 useEffect(()=>{const controller=new AbortController();void Promise.all(value.map(async id=>{const result=await inventoryFetch<InventoryRead>("/media/"+id+"?projection=finance",{signal:controller.signal});return [id,result.data as Attachment] as const;})).then(rows=>{if(!controller.signal.aborted){setFiles(Object.fromEntries(rows));setError("");}}).catch(error=>{if(!controller.signal.aborted)setError(inventoryErrorText(error));});return()=>controller.abort();},[value]);
 return <Stack spacing={2}><Typography>{t("fiscalEvidenceHint")}</Typography>{error&&<Alert severity="error">{error}</Alert>}<Button component="label" variant="outlined" disabled={disabled||uploads.busy} sx={{alignSelf:"start"}}>{t("fiscalUpload")}<input type="file" hidden multiple accept="application/pdf,image/jpeg,image/png,image/webp" disabled={disabled||uploads.busy} onChange={event=>{void uploads.add(Array.from(event.target.files??[]));event.target.value="";}}/></Button>
 {!value.length&&<Typography color="text.secondary">{t("fiscalNoEvidence")}</Typography>}<Stack component="ul" spacing={1} sx={{listStyle:"none",p:0,m:0}}>{value.map((id,index)=><Stack component="li" direction="row" spacing={2} sx={{alignItems:"center"}} key={id}><a href={"/api/inventory/media/"+id+"/original"} target="_blank" rel="noopener noreferrer" style={{overflowWrap:"anywhere"}}>{files[id]?.fileName??t("financeEvidence",{number:index+1})}</a><Button disabled={disabled||uploads.busy} onClick={()=>onChange(value.filter(item=>item!==id))}>{t("remove")}</Button></Stack>)}</Stack>
 {uploads.items.filter(item=>item.status!=="ready").map(item=><Stack key={item.key} spacing={1}><Typography role="status" sx={{overflowWrap:"anywhere"}}>{item.file.name+" : "+uploads.status(item)}</Typography>{item.status==="error"&&!item.terminal&&<Button disabled={disabled||uploads.busy} onClick={()=>void uploads.retry(item.key)}>{t("retry")}</Button>}</Stack>)}</Stack>;
}
