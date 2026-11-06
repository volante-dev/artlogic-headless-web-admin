"use client";
import {useEffect,useRef,useState} from "react";
import {presentationFetch,PresentationError} from "./usePresentationDraft";
import type {Asset} from "./types";
type Attempt={id:string;assetId:string;state:"reserved"|"finalizing"|"ready"|"failed"|"expired";errorCode?:string|null};
type Status={attempt:Attempt;asset:Asset};
type Reservation={attempt:Attempt;upload:{url:string;method:"PUT";headers:Record<string,string>}};
const key=(id:string)=>"presentation-upload:"+id;
function remember(assetId:string,attemptId:string){try{sessionStorage.setItem(key(assetId),attemptId);}catch{/* Status remains available from the asset list. */}}
/** Signed credentials remain in memory only; JSON intent/finalize requests pass through the BFF. */
export function useDirectMediaUpload(csrfCookie:string){
 const xhr=useRef<XMLHttpRequest|null>(null),abort=useRef<AbortController|null>(null),[progress,setProgress]=useState<number|null>(null);
 useEffect(()=>()=>{abort.current?.abort();xhr.current?.abort();},[]);
 async function finalize(assetId:string,attemptId:string,etag:string,signal:AbortSignal){
  const path="/assets/"+assetId+"/upload-attempts/"+attemptId;
  let result=await presentationFetch<Status>(path+"/finalize",{method:"POST",body:{},csrfCookie,etag,signal});
  const deadline=Date.now()+120000;
  while(result.data.attempt.state==="finalizing"&&Date.now()<deadline){
   await new Promise<void>((resolve,reject)=>{const done=()=>{clearTimeout(timer);signal.removeEventListener("abort",cancel);resolve();},cancel=()=>{clearTimeout(timer);signal.removeEventListener("abort",cancel);reject(new PresentationError(0,"uncertain_response"));},timer=setTimeout(done,1000);signal.addEventListener("abort",cancel,{once:true});if(signal.aborted)cancel();});
   result=await presentationFetch<Status>(path,{signal});
  }
  if(result.data.attempt.state!=="ready")throw new PresentationError(result.data.attempt.state==="expired"?410:409,result.data.attempt.errorCode??"asset_state_conflict");
  try{sessionStorage.removeItem(key(assetId));}catch{/* No credentials were stored. */}
  return result.data.asset;
 }
 async function send(asset:Asset,etag:string,file:File){
  const controller=new AbortController();abort.current=controller;setProgress(0);
  try{
   const mimeType=asset.kind==="font"?"font/woff2":file.type;
   const reservation=await presentationFetch<Reservation>("/assets/"+asset.id+"/upload-attempts",{method:"POST",body:{byteSize:file.size,mimeType},etag,csrfCookie,signal:controller.signal});
   remember(asset.id,reservation.data.attempt.id);
   await new Promise<void>((resolve,reject)=>{
    const request=new XMLHttpRequest();xhr.current=request;
    request.open(reservation.data.upload.method,reservation.data.upload.url);
    for(const [name,value] of Object.entries(reservation.data.upload.headers))request.setRequestHeader(name,value);
    request.setRequestHeader("Content-Type",mimeType);request.timeout=120000;
    request.upload.onprogress=e=>{if(e.lengthComputable)setProgress(Math.round(e.loaded/e.total*100));};
    request.onerror=request.ontimeout=request.onabort=()=>reject(new PresentationError(0,"uncertain_response"));
    request.onload=()=>request.status>=200&&request.status<300?resolve():reject(new PresentationError(request.status===413?413:503,request.status===413?"payload_too_large":"dependency_unavailable"));
    request.send(file);
   });
   setProgress(100);
   return await finalize(asset.id,reservation.data.attempt.id,reservation.etag,controller.signal);
  }finally{xhr.current=null;abort.current=null;setProgress(null);}
 }
 async function resume(asset:Asset,etag:string){
  let id:string|null=null;try{id=sessionStorage.getItem(key(asset.id));}catch{/* Read the asset if browser storage is unavailable. */}
  if(!id||asset.state!=="preparing")return asset;
  const controller=new AbortController();abort.current=controller;
  try{return await finalize(asset.id,id,etag,controller.signal);}finally{abort.current=null;}
 }
 return {send,resume,progress};
}
