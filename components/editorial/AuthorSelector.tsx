"use client";
import {Button,Stack} from "@mui/material";
import {TermSelector} from "./TermSelector";
import type {ArticleCapabilities} from "@/lib/editorial/client";
import type {Vocabulary} from "@/lib/editorial/taxonomy";
export function AuthorSelector(props:{vocabulary:Vocabulary;value:string[];onChange(value:string[]):void;locale:string;capabilities:ArticleCapabilities;csrfCookie:string;disabled?:boolean}){
 const move=(index:number,direction:number)=>{const value=[...props.value],target=index+direction;if(target<0||target>=value.length)return;[value[index],value[target]]=[value[target]!,value[index]!];props.onChange(value);};
 return <Stack spacing={1}><TermSelector {...props} label="Auteurs"/>{props.value.length>1&&<div><p>L’ordre de sélection détermine l’ordre d’affichage.</p>{props.value.map((id,index)=><Stack key={id} direction="row" useFlexGap sx={{gap:1,flexWrap:"wrap",alignItems:"center"}}><span>Auteur {index+1}</span><Button disabled={props.disabled||index===0} onClick={()=>move(index,-1)} aria-label={"Monter l’auteur "+(index+1)}>Monter</Button><Button disabled={props.disabled||index===props.value.length-1} onClick={()=>move(index,1)} aria-label={"Descendre l’auteur "+(index+1)}>Descendre</Button></Stack>)}</div>}</Stack>;
}
