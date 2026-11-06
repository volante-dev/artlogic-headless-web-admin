"use client";
import {useEffect,useRef,useState} from "react";
import type {SiteContent} from "@/lib/bff/site-content";
export interface LogoCandidate{id:string;expiresAt:string}
export interface LogoSelection{file:File;url:string}
export const translationId=(locale:string,key:string)=>locale+":"+key;
function valuesOf(content:SiteContent){return Object.fromEntries(content.translations.map(t=>[translationId(t.locale,t.key),t.value??""]));}
export function useSiteContentDraft(initial:SiteContent,initialEtag:string){
  const [baseline,setBaseline]=useState(initial),[etag,setEtag]=useState(initialEtag),[values,setValues]=useState(()=>valuesOf(initial));
  const [selection,setSelection]=useState<LogoSelection|null>(null),[candidate,setCandidate]=useState<LogoCandidate|null>(null),url=useRef<string|null>(null);
  useEffect(()=>()=>{if(url.current)URL.revokeObjectURL(url.current);},[]);
  function selectFile(file:File|null){if(url.current)URL.revokeObjectURL(url.current);url.current=file?URL.createObjectURL(file):null;setSelection(file?{file,url:url.current!}:null);setCandidate(null);}
  const [logoId,setLogoId]=useState<string|null|undefined>(undefined);
  const dirty=baseline.translations.filter(t=>(values[translationId(t.locale,t.key)]??"")!==(t.value??"")).map(t=>({key:t.key,locale:t.locale,value:values[translationId(t.locale,t.key)]??""}));
  function setValue(locale:string,key:string,value:string){setValues(current=>({...current,[translationId(locale,key)]:value}));}
  function accept(content:SiteContent,version:string,keepDraft=false){
    const next=valuesOf(content);
    if(keepDraft)for(const t of dirty)next[translationId(t.locale,t.key)]=t.value;
    setBaseline(content);setEtag(version);setValues(next);if(!keepDraft){setLogoId(undefined);selectFile(null);}
  }
  return {baseline,etag,values,dirty,selection,selectFile,candidate,setCandidate,logoId,setLogoId,setValue,accept,changed:selection!==null||dirty.length>0||logoId!==undefined&&logoId!==(baseline.logo?.id??null)};
}
