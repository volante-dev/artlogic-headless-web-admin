"use client";
import {useRef} from "react";
import {RichTextField} from "../editorial/RichTextField";
import type {RichTextDoc} from "@/lib/editorial/rich-text-adapter";

type LocalizedRichText=Record<string,RichTextDoc>;
const empty=():RichTextDoc=>({type:"doc",content:[]});

/** Each footer field keeps independent undo/redo stacks for every language. */
export function FooterRichTextEditor({value,locale,label,onChange}:{value?:LocalizedRichText|null;locale:string;label:string;onChange:(value:LocalizedRichText)=>void}){
 const history=useRef<Record<string,{undo:RichTextDoc[];redo:RichTextDoc[]}>>({});
 function stack(){return history.current[locale]??(history.current[locale]={undo:[],redo:[]});}
 function change(doc:RichTextDoc){const current=stack();current.undo.push(structuredClone(value?.[locale]??empty()));current.redo=[];onChange({...value,[locale]:doc});}
 function undo(redo=false){const current=stack(),from=redo?current.redo:current.undo,to=redo?current.undo:current.redo,last=from.pop();if(last){to.push(structuredClone(value?.[locale]??empty()));onChange({...value,[locale]:last});}}
 return <RichTextField key={locale} label={label+" — "+locale.toUpperCase()} value={value?.[locale]??empty()} onChange={change} onUndo={()=>undo()} onRedo={()=>undo(true)}/>;
}
