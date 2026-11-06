"use client";
import {useState} from "react";
import {Button,Stack} from "@mui/material";
import type {Vocabulary} from "@/lib/editorial/taxonomy";
import type {ArticleCapabilities} from "@/lib/editorial/client";
import {TermLookup} from "./TermLookup";
import {TermEditor} from "./TermEditor";
export function TermSelector({vocabulary,value,onChange,locale,capabilities,csrfCookie,label,disabled=false}:{vocabulary:Vocabulary;value:string[];onChange(value:string[]):void;locale:string;capabilities:ArticleCapabilities;csrfCookie:string;label?:string;disabled?:boolean}){
 const [create,setCreate]=useState(false),[refresh,setRefresh]=useState(0);
 return <Stack spacing={1}><TermLookup vocabulary={vocabulary} value={value} onChange={onChange} locale={locale} label={label??vocabulary.labels[locale]??vocabulary.key} disabled={disabled} refresh={refresh}/>{!vocabulary.inlineCreationLocked&&<Button disabled={disabled} sx={{alignSelf:"start"}} onClick={()=>setCreate(true)}>{vocabulary.kind==="author"?"Ajouter un auteur":"Créer une entrée"}</Button>}{create&&<TermEditor vocabulary={vocabulary} value={null} capabilities={capabilities} csrfCookie={csrfCookie} context="article-editor" onClose={()=>setCreate(false)} onSaved={term=>{onChange([...value,term.id]);setRefresh(value=>value+1);setCreate(false);}}/>}</Stack>;
}
