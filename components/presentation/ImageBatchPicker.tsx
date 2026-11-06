"use client";
import {useState} from "react";
import {Button,Dialog,DialogActions,DialogContent,DialogTitle,Stack} from "@mui/material";
import {AssetManager} from "./AssetManager";
import {BatchImageUpload} from "./BatchImageUpload";
import type {Asset} from "./types";
export function ImageBatchPicker({limit,csrfCookie,onClose,onSelect}:{limit:number;csrfCookie:string;onClose():void;onSelect(assets:Asset[]):void}){
 const [selected,setSelected]=useState<Asset[]>([]),[busy,setBusy]=useState(false),[version,setVersion]=useState(0);
 return <Dialog open fullWidth maxWidth="md" onClose={()=>{if(!busy)onClose();}} aria-labelledby="image-batch-title"><DialogTitle id="image-batch-title">Ajouter des images</DialogTitle><DialogContent><Stack spacing={4} sx={{pt:1}}><BatchImageUpload csrfCookie={csrfCookie} limit={Math.max(0,limit-selected.length)} onBusy={setBusy} onReady={asset=>{setSelected(previous=>previous.some(item=>item.id===asset.id)?previous:[...previous,asset]);setVersion(value=>value+1);}}/><div><AssetManager key={version} kind="image" csrfCookie={csrfCookie} hideUpload selection={selected} maxSelection={limit} selectionDisabled={busy} onSelectionChange={setSelected}/></div></Stack></DialogContent><DialogActions sx={{justifyContent:"space-between"}}><Button disabled={busy} onClick={onClose}>Annuler</Button><Button variant="contained" disabled={busy||!selected.length} onClick={()=>onSelect(selected)}>Ajouter {selected.length} image{selected.length>1?"s":""}</Button></DialogActions></Dialog>;
}
