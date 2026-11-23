"use client";
import {useRef} from "react";
import {RichTextField} from "@/components/editorial/RichTextField";
import type {RichTextDoc} from "@/lib/editorial/rich-text-adapter";
export const emptyInventoryText:RichTextDoc={type:"doc",content:[{type:"paragraph",content:[]}]};
export function InventoryRichText({value,onChange,label,onValidityChange}:{value:RichTextDoc;onChange(value:RichTextDoc):void;label:string;onValidityChange?(valid:boolean):void}){
 const history=useRef<RichTextDoc[]>([]),future=useRef<RichTextDoc[]>([]);
 return <RichTextField value={value} label={label} onValidityChange={onValidityChange} onChange={next=>{history.current.push(value);if(history.current.length>30)history.current.shift();future.current=[];onChange(next);}} onUndo={()=>{const prior=history.current.pop();if(prior){future.current.push(value);onChange(prior);}}} onRedo={()=>{const next=future.current.pop();if(next){history.current.push(value);onChange(next);}}}/>;
}
