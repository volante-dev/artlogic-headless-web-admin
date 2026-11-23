"use client";
import {useRef,useState} from "react";
import {inventoryFetch,InventoryClientError,inventoryErrorText,type InventoryReceipt} from "./client";
import {inventoryText as t} from "./messages";
export interface InventoryMutation{path:string;method:string;body:unknown;revision?:string}
/** Freeze a logical attempt until its outcome is known; a confirmed write only retries its refresh. */
export function useInventoryMutation(csrfCookie:string,refresh:(receipt?:InventoryReceipt)=>Promise<void>){
 const confirmed=useRef<InventoryReceipt|null>(null),pending=useRef<(InventoryMutation&{key:string})|null>(null),[accessLost,setAccessLost]=useState(false),[busy,setBusy]=useState(false),[uncertain,setUncertain]=useState(false),[conflict,setConflict]=useState(false),[reloadRequired,setReloadRequired]=useState(false),[error,setError]=useState(""),[status,setStatus]=useState("");
 async function perform(){
  if(busy||!pending.current)return null;setBusy(true);setError("");setStatus("");let receipt:InventoryReceipt|null=null;
  try{const attempt=pending.current;receipt=await inventoryFetch<InventoryReceipt>(attempt.path,{...attempt,csrfCookie});confirmed.current=receipt;pending.current=null;setUncertain(false);setConflict(false);await refresh(receipt);confirmed.current=null;setReloadRequired(false);setStatus(t("stockSaved"));}
  catch(error){if(error instanceof InventoryClientError&&[401,403].includes(error.status))setAccessLost(true);if(receipt){setReloadRequired(true);setError(t("stockReloadSaved"));}else{const unknown=!(error instanceof InventoryClientError)||error.status===0||error.status>=500;setUncertain(unknown);setConflict(error instanceof InventoryClientError&&error.status===412);setError(error instanceof InventoryClientError&&error.status===412?t("stockConflict"):inventoryErrorText(error));if(!unknown)pending.current=null;}}
  finally{setBusy(false);}return receipt;
 }
 async function submit(input:InventoryMutation){if(accessLost||busy||uncertain||conflict||reloadRequired)return null;pending.current={...input,body:structuredClone(input.body),key:crypto.randomUUID()};return perform();}
 async function reload(){if(busy||uncertain)return;setBusy(true);try{await refresh(confirmed.current??undefined);confirmed.current=null;setReloadRequired(false);setError("");}catch(error){setError(inventoryErrorText(error));}finally{setBusy(false);}}
 return {submit,verify:perform,reload,accessLost,busy,uncertain,conflict,reloadRequired,error,status,blocked:accessLost||busy||uncertain||conflict||reloadRequired,clearConflict(){setConflict(false);setError("");setStatus("");}};
}
