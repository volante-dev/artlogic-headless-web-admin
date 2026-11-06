"use client";
import {useCallback,useRef,useState} from "react";
import type {ArticleDocument} from "@/lib/editorial/client";
export function useArticleHistory(){
 const current=useRef<ArticleDocument|null>(null),past=useRef<ArticleDocument[]>([]),future=useRef<ArticleDocument[]>([]),group=useRef<{key:string;at:number}|null>(null);
 const [document,setDocument]=useState<ArticleDocument|null>(null),[availability,setAvailability]=useState({canUndo:false,canRedo:false,hasHistory:false});
 const refresh=()=>setAvailability({canUndo:past.current.length>0,canRedo:future.current.length>0,hasHistory:past.current.length+future.current.length>0});
 const reset=useCallback((value:ArticleDocument)=>{current.current=structuredClone(value);past.current=[];future.current=[];group.current=null;setDocument(current.current);setAvailability({canUndo:false,canRedo:false,hasHistory:false});},[]);
 const edit=useCallback((value:ArticleDocument,key?:string)=>{
  if(!current.current||JSON.stringify(current.current)===JSON.stringify(value))return false;
  const now=Date.now();if(!key||group.current?.key!==key||now-group.current.at>1000)past.current=[...past.current.slice(-49),current.current];
  group.current=key?{key,at:now}:null;future.current=[];current.current=structuredClone(value);setDocument(current.current);refresh();return true;
 },[]);
 const undo=useCallback(()=>{const previous=past.current.pop();if(!previous||!current.current)return null;future.current.push(current.current);current.current=previous;group.current=null;setDocument(previous);refresh();return previous;},[]);
 const redo=useCallback(()=>{const next=future.current.pop();if(!next||!current.current)return null;past.current.push(current.current);current.current=next;group.current=null;setDocument(next);refresh();return next;},[]);
 return {document,...availability,reset,edit,undo,redo};
}
