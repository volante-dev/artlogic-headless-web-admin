"use client";
import {useEffect,useRef,useState} from "react";
import type {components} from "@/lib/inventory/contract-types.generated";
import {inventoryFetch,InventoryClientError,inventoryErrorText,type InventoryMedia,type InventoryRead} from "@/lib/inventory/client";
import {inventoryText as t} from "@/lib/inventory/messages";
type Attachment=components["schemas"]["InventoryAttachment"];
type Upload=components["schemas"]["InventoryUploadResult"];
interface Pending{key:string;finalizeKey:string;file:File;attempt?:Upload;status:"pending"|"uploading"|"processing"|"ready"|"error";message?:string;terminal?:boolean;sha256?:string}
export function useInventoryUploads<T extends InventoryMedia|Attachment=InventoryMedia>(csrfCookie:string,maxBytes:number,onReady:(media:T)=>void,options?:{classification:"financial_document"|"non_financial_document"}){
 const [items,setItems]=useState<Pending[]>([]),[busy,setBusy]=useState(false),rows=useRef<Pending[]>([]),controller=useRef<AbortController|null>(null),ready=useRef(onReady);useEffect(()=>{ready.current=onReady;},[onReady]);
 useEffect(()=>{controller.current=new AbortController();return()=>controller.current?.abort();},[]);
 const update=(item:Pending,change:Partial<Pending>)=>{Object.assign(item,change);setItems([...rows.current]);};
 async function process(item:Pending){
  const signal=controller.current?.signal,endpoint=options?"/attachments/upload-attempts":"/media/upload-attempts";
  try{
   if(!(options?["application/pdf","image/jpeg","image/png","image/webp"]:["image/jpeg","image/png","image/webp"]).includes(item.file.type)||item.file.size<1||item.file.size>maxBytes){update(item,{terminal:true});throw new InventoryClientError(422,"inventory_media_invalid");}
   update(item,{status:"uploading",message:undefined});
   if(!item.sha256){const digest=await crypto.subtle.digest("SHA-256",await item.file.arrayBuffer());item.sha256=[...new Uint8Array(digest)].map(byte=>byte.toString(16).padStart(2,"0")).join("");}
   item.attempt=await inventoryFetch<Upload>(endpoint,{method:"POST",csrfCookie,key:item.key,signal,body:{uploadKey:item.key,fileName:item.file.name,mimeType:item.file.type,bytes:item.file.size,sha256:item.sha256,...(options?{classification:options.classification}:{})}});
   if(item.attempt.status==="expired"||item.attempt.status==="rejected"){update(item,{terminal:true});throw new InventoryClientError(422,"inventory_media_invalid");}
   if(item.attempt.status==="pending"){
    if(!item.attempt.uploadUrl)throw new InventoryClientError(503,"inventory_storage_unavailable");
    const upload=await fetch(item.attempt.uploadUrl,{method:"PUT",headers:{"Content-Type":item.file.type,"x-upsert":"false","cache-control":"0"},body:item.file,signal:signal?AbortSignal.any([signal,AbortSignal.timeout(120000)]):AbortSignal.timeout(120000),credentials:"omit",redirect:"error"});
    if(!upload.ok&&upload.status!==409)throw new InventoryClientError(upload.status,"inventory_storage_unavailable");
    await inventoryFetch(endpoint+"/"+item.attempt.attemptId+"/finalize",{method:"POST",csrfCookie,key:item.finalizeKey,revision:item.attempt.revision,signal,body:{sha256:item.sha256}});
   }
   update(item,{status:"processing"});
   for(let i=0;i<90;i++){
    const result=await inventoryFetch<InventoryRead>("/media/"+item.attempt.mediaId+(options?"?projection="+(options.classification==="financial_document"?"finance":"logistics"):""),{signal}),media=result.data as T;
    if(media.status==="ready"){update(item,{status:"ready"});ready.current(media);return;}
    if(media.status==="rejected"||media.status==="revoked"){update(item,{terminal:true});throw new InventoryClientError(422,"inventory_media_invalid");}
    await new Promise<void>((resolve,reject)=>{const timer=setTimeout(done,2000);function done(){signal?.removeEventListener("abort",abort);resolve();}function abort(){clearTimeout(timer);reject(new InventoryClientError(0,"aborted"));}signal?.addEventListener("abort",abort,{once:true});if(signal?.aborted)abort();});
   }throw new InventoryClientError(0,"uncertain_response");
  }catch(error){if(!signal?.aborted)update(item,{status:"error",message:inventoryErrorText(error)});}
 }
 async function add(files:File[]){if(busy)return;const added=files.map(file=>({key:crypto.randomUUID(),finalizeKey:crypto.randomUUID(),file,status:"pending" as const}));rows.current=[...rows.current,...added];setItems([...rows.current]);setBusy(true);try{for(const item of added){if(controller.current?.signal.aborted)break;await process(item);}}finally{setBusy(false);}}
 async function retry(key:string){if(busy)return;const item=rows.current.find(item=>item.key===key);if(!item||item.terminal)return;setBusy(true);try{await process(item);}finally{setBusy(false);}}
 function remove(key:string){rows.current=rows.current.filter(item=>item.key!==key);setItems([...rows.current]);}
 const status=(item:Pending)=>item.status==="ready"?t("ready"):item.status==="processing"?t("processing"):item.status==="error"?item.message??t("uploadFailed"):t("uploading");
 return {items,busy,add,retry,remove,status};
}
