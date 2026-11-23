"use client";
import {useCallback,useEffect,useRef,useState} from "react";
import Link from "next/link";
import {Alert,Box,Button,Chip,Dialog,DialogActions,DialogContent,DialogTitle,LinearProgress,MenuItem,Stack,TextField,Typography} from "@mui/material";
import {inventoryFetch,InventoryClientError,inventoryErrorText} from "@/lib/inventory/client";
import {inventoryText as t,type InventoryMessageKey} from "@/lib/inventory/messages";
import type {components} from "@/lib/inventory/contract-types.generated";
import {inventoryCsvHeader} from "@/lib/inventory/csv-header";
import {useUnsavedChanges} from "@/components/presentation/useUnsavedChanges";
import {ImportRows} from "./ImportRows";
type Read=components["schemas"]["InventoryBatchReadResult"];
type Mapping={sourceColumn:string;targetField:string;locale?:string};
type Transfer=components["schemas"]["InventoryImportTransfer"]&{uploadBaseUrl:string};
const statuses:Record<Read["data"]["status"],InventoryMessageKey>={uploaded:"importsStatusUploaded",validating:"importsStatusValidating",invalid:"importsStatusInvalid",ready:"importsStatusReady",confirmed:"importsStatusConfirmed",staging:"importsStatusStaging",applied:"importsStatusApplied",failed:"importsStatusFailed",cancelled:"importsStatusCancelled"};
const mappingOf=(value:unknown):Mapping[]=>Array.isArray(value)?value.filter((item):item is Mapping=>Boolean(item&&typeof item.sourceColumn==="string"&&typeof item.targetField==="string")):[];
export function ImportReview({initial,csrfCookie,locales,defaultLocale,columns,limits}:{initial:Read|null;csrfCookie:string;locales:readonly {code:string;label:string}[];defaultLocale:string;columns:readonly string[];limits:{catalogBytes:number;imagesBytes:number}}){
 const [report,setReport]=useState(initial),[csv,setCsv]=useState<File|null>(null),[zip,setZip]=useState<File|null>(null),[mapping,setMapping]=useState<Mapping[]>(mappingOf(initial?.data.mapping)),[delimiter,setDelimiter]=useState<"comma"|"semicolon">((initial?.data.options?.delimiter as "comma"|"semicolon")??"comma"),[mode,setMode]=useState<"create"|"update"|"mixed_explicit">(initial?.data.mode??"mixed_explicit"),[dirty,setDirty]=useState(false),[busy,setBusy]=useState(false),[denied,setDenied]=useState(false),[error,setError]=useState(""),[transferProgress,setTransferProgress]=useState<{name:string;percent:number}|null>(null),[dialog,setDialog]=useState<"confirm"|"cancel"|null>(null);
 const importKey=useRef<string|null>(null),keys=useRef(new Map<string,string>()),controller=useRef<AbortController|null>(null),batch=report?.data;
 useUnsavedChanges(dirty||busy||Boolean(csv&&!batch));
 useEffect(()=>()=>controller.current?.abort(),[]);
 const fail=useCallback((error:unknown)=>{if(error instanceof InventoryClientError&&[401,403].includes(error.status)){setDenied(true);setReport(null);setMapping([]);setCsv(null);setZip(null);}setError(inventoryErrorText(error));},[]);
 const refresh=useCallback(async()=>{if(!batch?.batchId)return;const next=await inventoryFetch<Read>("/imports/"+batch.batchId);setReport(next);return next;},[batch?.batchId]);
 const polling=Boolean(batch&&(["validating","confirmed","staging"].includes(batch.status)||batch.status==="uploaded"&&batch.files?.some(file=>file.state==="finalizing")));
 useEffect(()=>{if(!polling||busy)return;let stopped=false,timer:ReturnType<typeof setTimeout>;const poll=async()=>{try{await refresh();}catch(error){if(!stopped)fail(error);}finally{if(!stopped)timer=setTimeout(()=>void poll(),2000);}};timer=setTimeout(()=>void poll(),2000);return()=>{stopped=true;clearTimeout(timer);};},[polling,busy,refresh,fail]);
 function keyFor(value:string){let key=keys.current.get(value);if(!key){key=crypto.randomUUID();keys.current.set(value,key);}return key;}
 function mapped(sourceColumn:string,target:string):Mapping{const index=target.lastIndexOf("."),locale=target.slice(index+1);return index>0&&locales.some(item=>item.code===locale)?{sourceColumn,targetField:target.slice(0,index),locale}:{sourceColumn,targetField:target};}
 async function inspect(file:File|null,nextDelimiter=delimiter){
  setCsv(file);setError("");if(!file){setMapping([]);return;}
  try{if(file.size<1||file.size>limits.catalogBytes)throw new InventoryClientError(413,"payload_too_large");const bytes=await file.slice(0,65536).arrayBuffer(),text=new TextDecoder("utf-8",{fatal:true}).decode(bytes,{stream:true}),headers=inventoryCsvHeader(text,nextDelimiter==="comma"?",":";");if(file.size>65536&&!/[\r\n]/.test(text))throw new Error("csv_header_incomplete");setMapping(headers.map(header=>mapped(header,columns.includes(header)?header:"")));setDirty(Boolean(batch));}catch{setMapping([]);setError(t("invalidInput"));}
 }
 async function direct(ticket:Transfer,path:string,body?:Blob){
  let response:Response;try{response=await fetch(ticket.uploadBaseUrl+path,{method:body?"PUT":"POST",headers:{Authorization:"Bearer "+ticket.token,"Content-Type":body?"application/octet-stream":"application/json"},body:body??"{}",credentials:"omit",redirect:"error",cache:"no-store",signal:AbortSignal.any([controller.current!.signal,AbortSignal.timeout(30000)])});}catch{throw new InventoryClientError(0,"uncertain_response");}
  if(!response.ok){let code="service_unavailable";try{code=(await response.json()).error?.code??code;}catch{}throw new InventoryClientError(response.status,code);}await response.body?.cancel();
 }
 async function upload(){
  if(busy||!csv||mapping.length===0||mapping.some(item=>!item.targetField))return;setBusy(true);setError("");controller.current=new AbortController();
  try{
   let current=report;if(!current){importKey.current??=crypto.randomUUID();current=await inventoryFetch<Read>("/imports/drafts",{method:"POST",body:{importKey:importKey.current,mode,delimiter,mapping},key:keyFor("create:"+importKey.current),csrfCookie});setReport(current);window.history.replaceState(null,"","/inventory/imports?batchId="+current.data.batchId);}
   const files=[{role:"catalog",file:csv},...(zip?[{role:"images",file:zip}]:[])],tickets:Transfer[]=[];
   for(const entry of files){if(entry.file.size<1||entry.file.size>(entry.role==="catalog"?limits.catalogBytes:limits.imagesBytes))throw new InventoryClientError(413,"payload_too_large");tickets.push(await inventoryFetch<Transfer>("/imports/"+current.data.batchId+"/uploads",{method:"POST",body:{role:entry.role,fileName:entry.file.name,mimeType:entry.file.type||(entry.role==="catalog"?"text/csv":"application/zip"),bytes:entry.file.size},key:keyFor("ticket:"+current.data.batchId+":"+entry.role),csrfCookie}));}
   for(let fileIndex=0;fileIndex<files.length;fileIndex++){
    const {file}=files[fileIndex]!,ticket=tickets[fileIndex]!;if(!ticket.token)continue;
    // Replay every existing block to prevent a same-name replacement from producing a hybrid file.
    for(let start=0,index=0;start<file.size;start+=ticket.chunkBytes,index++){await direct(ticket,"/chunks/"+index,file.slice(start,Math.min(start+ticket.chunkBytes,file.size)));setTransferProgress({name:file.name,percent:Math.round(Math.min(start+ticket.chunkBytes,file.size)/file.size*100)});}
    await direct(ticket,"/seal");
   }
   setReport(await inventoryFetch<Read>("/imports/"+current.data.batchId));setDirty(false);
  }catch(error){fail(error);}finally{setBusy(false);setTransferProgress(null);}
 }
 async function control(action:"validate"|"confirm"|"cancel"|"resume"){
  if(!batch||busy)return;setBusy(true);setError("");const body=action==="validate"?{delimiter,mapping}:action==="confirm"||action==="resume"?{simulationDigest:batch.simulationDigest}:{};
  try{await inventoryFetch("/imports/"+batch.batchId+"/"+action,{method:"POST",body,revision:batch.revision,key:keyFor(JSON.stringify([action,batch.revision,body])),csrfCookie});setDialog(null);await refresh();if(action==="validate")setDirty(false);}catch(error){fail(error);}finally{setBusy(false);}
 }
 function restart(){setReport(null);setCsv(null);setZip(null);setMapping([]);setDirty(false);setError("");importKey.current=null;keys.current.clear();window.history.replaceState(null,"","/inventory/imports");}
 const editable=!batch||["uploaded","invalid","ready","failed"].includes(batch.status),allFilesReady=Boolean(batch?.files?.length&&batch.files.every(file=>file.state==="complete")),canValidate=Boolean(batch&&editable&&allFilesReady&&!busy&&!mapping.some(item=>!item.targetField)),uploadable=!batch||batch.status==="uploaded";
 if(denied)return <Alert severity="error">{t("accessLost")}</Alert>;
 return <Stack spacing={4} sx={{minWidth:0}}>
  <Stack direction="row" useFlexGap sx={{flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:2}}><Typography component="h1" variant="h1" sx={{m:0}}>{t("importsTitle")}</Typography>{batch&&<Button onClick={()=>{if(batch?.files?.some(file=>!["complete","cancelled"].includes(file.state)))setDialog("cancel");else restart();}} disabled={busy}>{t("importsNew")}</Button>}</Stack>
  <Typography color="text.secondary">{t("importsIntro")}</Typography><Alert severity="info">{t("importsPrivate")}</Alert>
  {error&&<Alert severity="error" action={batch?<Button onClick={()=>void refresh().catch(fail)}>{t("importsReload")}</Button>:undefined}>{error}</Alert>}
  <Box component="section" className="work-panel" sx={{minWidth:0}}><Stack spacing={3}>
   <Typography component="h2" variant="h3">{t("importsFiles")}</Typography><Stack direction="row" spacing={3} useFlexGap sx={{flexWrap:"wrap"}}><a href={"/api/inventory/imports/template?delimiter="+delimiter}>{t("importsTemplate")}</a><a href={"/api/inventory/imports/template?example=true&delimiter="+delimiter}>{t("importsExample")}</a></Stack>
   <Typography variant="body2" color="text.secondary">{t("importsLimits",{csvMiB:Math.round(limits.catalogBytes/1048576),zipMiB:Math.round(limits.imagesBytes/1048576)})}</Typography>
   <Stack direction={{xs:"column",sm:"row"}} spacing={2}><TextField select fullWidth label={t("importsDelimiter")} value={delimiter} disabled={busy||!editable} onChange={event=>{const value=event.target.value as typeof delimiter;setDelimiter(value);if(csv)void inspect(csv,value);setDirty(Boolean(batch));}}><MenuItem value="comma">{t("importsComma")}</MenuItem><MenuItem value="semicolon">{t("importsSemicolon")}</MenuItem></TextField><TextField select fullWidth label={t("importsMode")} value={mode} disabled={busy||Boolean(batch)} onChange={event=>setMode(event.target.value as typeof mode)}><MenuItem value="mixed_explicit">{t("importsMixed")}</MenuItem><MenuItem value="create">{t("importsCreate")}</MenuItem><MenuItem value="update">{t("importsUpdate")}</MenuItem></TextField></Stack>
   {uploadable&&<><Stack spacing={2}><label>{t("importsCsv")}<input type="file" accept=".csv,text/csv" disabled={busy} onChange={event=>void inspect(event.target.files?.[0]??null)} style={{display:"block",maxWidth:"100%",marginTop:8}}/></label><label>{t("importsZip")}<input type="file" accept=".zip,application/zip" disabled={busy} onChange={event=>{setZip(event.target.files?.[0]??null);setError("");}} style={{display:"block",maxWidth:"100%",marginTop:8}}/></label></Stack>{batch&&<Typography variant="body2">{t("importsReselect")}</Typography>}</>}
   {mapping.length>0&&<Box component="details"><Typography component="summary" sx={{cursor:"pointer",mb:2}}>{t("importsMapping")+" ("+mapping.length+")"}</Typography><Stack spacing={2}>{mapping.map((item,index)=><Stack key={item.sourceColumn} direction={{xs:"column",sm:"row"}} spacing={2} sx={{alignItems:{sm:"center"}}}><Typography sx={{width:{sm:"40%"},overflowWrap:"anywhere"}}>{item.sourceColumn}</Typography><TextField select fullWidth label={t("importsField")+" : "+item.sourceColumn} value={item.targetField?(item.targetField+(item.locale?"."+item.locale:"")):""} disabled={busy||!editable} onChange={event=>{setMapping(previous=>previous.map((value,i)=>i===index?mapped(value.sourceColumn,event.target.value):value));setDirty(Boolean(batch));}}><MenuItem value="">{t("importsChoose")}</MenuItem><MenuItem value="ignore">{t("importsIgnore")}</MenuItem>{columns.map(column=><MenuItem key={column} value={column}>{column}</MenuItem>)}</TextField></Stack>)}</Stack></Box>}
   {uploadable&&<Button variant="contained" onClick={()=>void upload()} disabled={busy||!csv||mapping.length===0||mapping.some(item=>!item.targetField)} sx={{alignSelf:"start"}}>{t(batch?"importsRetryUpload":"importsUpload")}</Button>}
   {transferProgress&&<Box aria-live="polite"><Typography variant="body2">{t("importsTransferProgress",transferProgress)}</Typography><LinearProgress variant="determinate" value={transferProgress.percent}/></Box>}
  </Stack></Box>
  {batch&&<Box component="section" className="work-panel" sx={{minWidth:0}}><Stack spacing={3}>
   <Stack direction="row" spacing={2} useFlexGap sx={{alignItems:"center",flexWrap:"wrap"}}><Typography component="h2" variant="h3" sx={{m:0}}>{t("importsReview")}</Typography><Chip label={t(statuses[batch.status])} variant="outlined"/></Stack>
   {batch.files?.map(file=><Typography key={file.uploadId} variant="body2" sx={{overflowWrap:"anywhere"}}>{file.fileName??file.role}{" · "+new Intl.NumberFormat("fr-FR",{maximumFractionDigits:1}).format(file.receivedBytes<1048576?file.receivedBytes/1024:file.receivedBytes/1048576)+(file.receivedBytes<1048576?" Kio":" Mio")}{file.state==="complete"?" ✓":""}</Typography>)}
   {(polling||batch.status==="applied")&&<Box role="status"><Typography>{t("importsProgress",{done:batch.progress.processed,total:batch.progress.total})}</Typography>{polling&&<LinearProgress variant={batch.progress.total?"determinate":"indeterminate"} value={batch.progress.total?batch.progress.processed/batch.progress.total*100:0}/>}</Box>}
   {dirty&&<Alert severity="warning">{t("importsMappingDirty")}</Alert>}
   <ImportRows batch={batch} defaultLocale={defaultLocale} onMore={async()=>{const next=await inventoryFetch<Read>("/imports/"+batch.batchId+"?after="+batch.nextAfter);setReport(previous=>({...next,data:{...next.data,rows:[...(previous?.data.rows??[]),...(next.data.rows??[])]}}));}} onError={fail}/>
   <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap"}}>{editable&&allFilesReady&&<Button variant={batch.status==="ready"&&!dirty?"outlined":"contained"} disabled={!canValidate} onClick={()=>void control("validate")}>{t("importsValidate")}</Button>}{batch.status==="ready"&&<Button variant="contained" disabled={busy||dirty} onClick={()=>setDialog("confirm")}>{t("importsConfirm")}</Button>}{batch.status==="failed"&&batch.confirmedDigest&&<Button variant="contained" disabled={busy||dirty} onClick={()=>void control("resume")}>{t("importsResume")}</Button>}<Button disabled={busy} onClick={()=>void refresh().catch(fail)}>{t("importsReload")}</Button>{!["applied","cancelled"].includes(batch.status)&&<Button color="error" disabled={busy} onClick={()=>setDialog("cancel")}>{t("importsCancel")}</Button>}</Stack>
   {batch.simulationDigest&&<Box><Typography variant="body2" color="text.secondary">{t("importsDigest")}</Typography><Typography component="code" variant="caption" sx={{overflowWrap:"anywhere",display:"block"}}>{batch.simulationDigest}</Typography></Box>}
  </Stack></Box>}
  <Link href="/artworks" prefetch={false}>{t("accessBackArtworks")}</Link>
  <Dialog open={dialog!==null} onClose={()=>{if(!busy)setDialog(null);}} aria-labelledby="import-confirm-title"><DialogTitle id="import-confirm-title">{t(dialog==="cancel"?"importsCancelTitle":"importsConfirmTitle")}</DialogTitle><DialogContent><Typography>{t(dialog==="cancel"?"importsCancelBody":"importsConfirmBody")}</Typography></DialogContent><DialogActions><Button disabled={busy} onClick={()=>setDialog(null)}>{t("cancel")}</Button><Button variant="contained" color={dialog==="cancel"?"error":"primary"} disabled={busy} onClick={()=>{if(dialog)void control(dialog);}}>{t(dialog==="cancel"?"importsCancel":"importsConfirm")}</Button></DialogActions></Dialog>
 </Stack>;
}
