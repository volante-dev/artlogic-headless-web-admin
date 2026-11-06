"use client";
import{exhibitionPeriodErrors}from"@/lib/editorial/exhibition-period";
import {useCallback,useEffect,useRef,useState} from "react";
import {articleFetch,ArticleError,type AdminArticle,type ArticleCapabilities,type ArticleDocument} from "@/lib/editorial/client";
import {useArticleHistory} from "./useArticleHistory";
import {equalEditorialDocuments} from "@/lib/editorial/document-equality";
import {useUnsavedChanges} from "../presentation/useUnsavedChanges";

export function useArticleDraft(articleId:string,csrfCookie:string,richValid=true){
 const history=useArticleHistory(),{reset}=history;
 const inputValid=richValid&&(!history.document?.exhibitionPeriod||!Object.keys(exhibitionPeriodErrors(history.document.exhibitionPeriod)).length);
 const [article,setArticle]=useState<AdminArticle|null>(null),[capabilities,setCapabilities]=useState<ArticleCapabilities|null>(null),[error,setError]=useState<unknown>(null),[comparison,setComparison]=useState<{data:AdminArticle;tag:string}|null>(null),[saving,setSaving]=useState(false),[dirty,setDirty]=useState(false),[epoch,setEpoch]=useState(0);
 const sequence=useRef(0),generation=useRef(0),tag=useRef<string|null>(null),latest=useRef<ArticleDocument|null>(null),inFlight=useRef(false),blocked=useRef(false),mounted=useRef(false),saveController=useRef<AbortController|null>(null),immediate=useRef(false);
 useEffect(()=>{
  mounted.current=true;generation.current++;const controller=new AbortController();
  Promise.all([articleFetch<AdminArticle>("/articles/"+articleId,{signal:controller.signal}),articleFetch<ArticleCapabilities>("/capabilities",{signal:controller.signal})]).then(([loaded,caps])=>{
   if(!mounted.current||controller.signal.aborted)return;if(!loaded.tag)throw new ArticleError(0,"uncertain_response");
   latest.current=loaded.data.document;tag.current=loaded.tag;sequence.current=0;blocked.current=false;reset(loaded.data.document);setArticle(loaded.data);setCapabilities(caps.data);setDirty(false);setError(null);
  }).catch(error=>{if(mounted.current&&!controller.signal.aborted)setError(error);});
  return()=>{mounted.current=false;controller.abort();saveController.current?.abort();};
 },[articleId,reset]);
 const changed=useCallback((document:ArticleDocument)=>{latest.current=document;sequence.current++;setDirty(true);if(blocked.current&&error instanceof ArticleError&&[400,409,413].includes(error.status)){blocked.current=false;setError(null);}setEpoch(value=>value+1);},[error]);
 const edit=(document:ArticleDocument,key?:string)=>{if(history.edit(document,key))changed(document);};
 const undo=()=>{const value=history.undo();if(value)changed(value);},redo=()=>{const value=history.redo();if(value)changed(value);};
 useEffect(()=>{
  if(!article||!dirty||!inputValid||article.kind==="exhibition"&&!capabilities?.exhibitionsWritable)return;
  const timer=setTimeout(async()=>{
   if(inFlight.current||blocked.current||!tag.current||!latest.current)return;
   immediate.current=false;const snapshot={articleId,sequence:sequence.current,baseTag:tag.current,document:structuredClone(latest.current),clientMutationId:crypto.randomUUID()};
   const run=generation.current;inFlight.current=true;setSaving(true);const controller=new AbortController();saveController.current=controller;
   try{
    const result=await articleFetch<{article:AdminArticle;clientMutationId:string;changed:boolean}>("/articles/"+snapshot.articleId+"/draft",{method:"PUT",body:{clientMutationId:snapshot.clientMutationId,document:snapshot.document},tag:snapshot.baseTag,csrfCookie,signal:AbortSignal.any([controller.signal,AbortSignal.timeout(30000)])});
    if(!mounted.current||run!==generation.current)return;
    if(!result.tag||result.data.clientMutationId!==snapshot.clientMutationId||result.data.article.id!==snapshot.articleId)throw new ArticleError(0,"uncertain_response");
    tag.current=result.tag;setArticle(result.data.article);setError(null);setDirty(sequence.current!==snapshot.sequence);
   }catch(error){if(mounted.current&&run===generation.current){blocked.current=true;setError(error);}}
   finally{if(run===generation.current)inFlight.current=false;if(mounted.current&&run===generation.current){setSaving(false);setEpoch(value=>value+1);}}
  },immediate.current?0:1000);
  return()=>clearTimeout(timer);
 },[article,articleId,csrfCookie,dirty,epoch,inputValid,capabilities]);
 const compare=async()=>{try{const value=await articleFetch<AdminArticle>("/articles/"+articleId);if(!value.tag)throw new ArticleError(0,"uncertain_response");setComparison({data:value.data,tag:value.tag});}catch(error){setError(error);}};
 const resolveComparison=(keepLocal:boolean)=>{
  if(!comparison||inFlight.current)return;
  tag.current=comparison.tag;setArticle(comparison.data);blocked.current=false;setError(null);setComparison(null);
  if(!keepLocal){latest.current=comparison.data.document;reset(comparison.data.document);sequence.current++;setDirty(false);}else{setDirty(true);setEpoch(value=>value+1);}
 };
 const refreshAfterCommand=async(replaceDocument=false)=>{
  if(inFlight.current||dirty)throw new ArticleError(0,"draft_not_saved");
  const value=await articleFetch<AdminArticle>("/articles/"+articleId);if(!value.tag)throw new ArticleError(0,"uncertain_response");
  if(!replaceDocument&&!equalEditorialDocuments(latest.current,value.data.document)){blocked.current=true;setComparison({data:value.data,tag:value.tag});setError(new ArticleError(412,"version_conflict"));return;}
  tag.current=value.tag;setArticle(value.data);blocked.current=false;setError(null);setComparison(null);setDirty(false);
  if(replaceDocument){latest.current=value.data.document;sequence.current++;reset(value.data.document);}
 };
 useUnsavedChanges(!inputValid||dirty||history.hasHistory,!inputValid||dirty?"Des modifications ne sont pas enregistrées. Quitter cet article ?":"Le brouillon est enregistré. Quitter effacera l’historique annuler/rétablir de cette session.");
 return {inputValid,document:history.document,article,capabilities,error,comparison,saving,dirty,edit,undo,redo,canUndo:history.canUndo,canRedo:history.canRedo,saveNow:()=>{immediate.current=true;setEpoch(value=>value+1);},compare,resolveComparison,refreshAfterCommand};
}
