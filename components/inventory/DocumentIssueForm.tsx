"use client";
import {useEffect,useState} from "react";
import {Button,Checkbox,FormControlLabel,Stack,Typography} from "@mui/material";
import type {components} from "@/lib/inventory/contract-types.generated";
import type {DocumentSeries} from "@/lib/inventory/finance";
import type {InventoryMutation} from "@/lib/inventory/useInventoryMutation";
import {DocumentSeriesSelect} from "./DocumentSeriesSelect";
import {inventoryText as t} from "@/lib/inventory/messages";
export function DocumentIssueForm({document,series,disabled,onSubmit,onCancel,onDirtyChange}:{document:components["schemas"]["InventoryDocument"];series:DocumentSeries[];disabled:boolean;onSubmit:(input:InventoryMutation)=>Promise<unknown>;onCancel:()=>void;onDirtyChange:(dirty:boolean)=>void}){
 const [selected,setSelected]=useState<DocumentSeries|null>(null),[confirmed,setConfirmed]=useState(false),eligible=Boolean(selected?.active&&selected.documentKind===document.kind&&selected.profileId===document.profileId);useEffect(()=>{onDirtyChange(true);return()=>onDirtyChange(false);},[onDirtyChange]);
 return <Stack component="form" aria-label={t("documentsIssue")} spacing={3} onSubmit={event=>{event.preventDefault();if(!disabled&&confirmed&&document.sellerProfileRevision&&eligible)void onSubmit({path:"/documents/"+document.documentId+"/issue",method:"POST",revision:document.revision,body:{seriesId:selected!.seriesId,sellerProfileRevision:document.sellerProfileRevision}});}}><Typography component="h2" variant="h3">{t("documentsIssue")}</Typography><Typography>{t("documentsIssueHint")}</Typography><DocumentSeriesSelect initial={series} document={document} value={selected} onChange={value=>{setSelected(value);setConfirmed(false);}} disabled={disabled}/><FormControlLabel label={t("documentsConfirmIssue")} control={<Checkbox checked={confirmed} disabled={disabled||!eligible} onChange={event=>setConfirmed(event.target.checked)}/>}/><Stack direction="row" spacing={2}><Button variant="contained" type="submit" disabled={disabled||!confirmed||!eligible||!document.sellerProfileRevision}>{t("documentsIssue")}</Button><Button disabled={disabled} onClick={onCancel}>{t("cancel")}</Button></Stack></Stack>;
}
