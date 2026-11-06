"use client";
import type {ReactNode} from "react";
import type {EditorialBlock} from "@/lib/editorial/media";
export function BlockList({blocks,render,onDrop,selection}:{selection?:{ids:readonly string[];onToggle(id:string):void};blocks:EditorialBlock[];render(block:EditorialBlock,index:number):ReactNode;onDrop(id:string,index:number):void}){
 return <div role="list" aria-label="Blocs de l’article">{blocks.map((block,index)=><section role="listitem" aria-label={"Bloc "+(index+1)} className="editorial-block work-panel" key={block.id} data-editorial-block={block.id} id={"editorial-block-"+block.id} onDragOver={event=>{if(event.dataTransfer.types.includes("application/x-editorial-block")){event.preventDefault();event.dataTransfer.dropEffect="move";}}} onDrop={event=>{const id=event.dataTransfer.getData("application/x-editorial-block");if(id){event.preventDefault();onDrop(id,index);}}}>{selection&&<label className="composition-block-selection"><input type="checkbox" checked={selection.ids.includes(block.id)} onChange={()=>selection.onToggle(block.id)}/>Affiner le bloc {index+1}</label>}{render(block,index)}</section>)}</div>;
}
