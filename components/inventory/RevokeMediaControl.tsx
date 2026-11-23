"use client";
import {useRef,useState} from "react";
import {Alert,Button,Stack} from "@mui/material";
import {inventoryFetch,InventoryClientError,inventoryErrorText,type InventoryMedia,type InventoryRead,type InventoryReceipt} from "@/lib/inventory/client";
import {inventoryText as t} from "@/lib/inventory/messages";
export function RevokeMediaControl({media,csrfCookie,disabled,onRevoked,onBusy}:{media:InventoryMedia;csrfCookie:string;disabled:boolean;onRevoked(media:InventoryMedia):void;onBusy?(value:boolean):void}){
 const [confirm,setConfirm]=useState(false),[busy,setBusy]=useState(false),[uncertain,setUncertain]=useState(false),[error,setError]=useState(""),pending=useRef<{key:string;revision:string}|null>(null);
 async function revoke(verify=false){setBusy(true);onBusy?.(true);setError("");if(!verify)pending.current={key:crypto.randomUUID(),revision:media.revision};let unresolved=false;
  try{await inventoryFetch<InventoryReceipt>("/media/"+media.mediaId+"/revoke-public",{method:"POST",body:{},key:pending.current!.key,revision:pending.current!.revision,csrfCookie});const result=await inventoryFetch<InventoryRead>("/media/"+media.mediaId);onRevoked(result.data as InventoryMedia);pending.current=null;setUncertain(false);setConfirm(false);}
  catch(error){unresolved=!(error instanceof InventoryClientError)||error.status===0||error.status>=500;setUncertain(unresolved);setError(inventoryErrorText(error));if(!unresolved)pending.current=null;}
  finally{setBusy(false);onBusy?.(unresolved);}
 }
 return <Stack spacing={1}>{!confirm?<Button type="button" sx={{alignSelf:"start"}} disabled={disabled||busy} onClick={()=>setConfirm(true)}>{t("revokePublicImage")}</Button>:<><Alert severity="warning">{t("revokePublicHint")}</Alert><Stack direction="row" spacing={1} useFlexGap sx={{flexWrap:"wrap"}}><Button type="button" color="error" variant="outlined" disabled={busy} onClick={()=>void revoke(uncertain)}>{uncertain?t("revokeVerify"):t("revokeConfirm")}</Button>{!uncertain&&<Button type="button" disabled={busy} onClick={()=>{setConfirm(false);setError("");}}>{t("cancel")}</Button>}</Stack></>}{error&&<Alert severity="error" role="alert">{error}</Alert>}</Stack>;
}
