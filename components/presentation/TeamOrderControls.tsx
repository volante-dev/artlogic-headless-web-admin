"use client";
import {Button} from "@mui/material";
export function TeamOrderControls({name,index,total,disabled,onMove}:{name:string;index:number;total:number;disabled:boolean;onMove:(delta:number)=>void}){
 return <><Button aria-label={`Monter ${name}`} disabled={disabled||index===0} onClick={()=>onMove(-1)}>Monter</Button><Button aria-label={`Descendre ${name}`} disabled={disabled||index===total-1} onClick={()=>onMove(1)}>Descendre</Button></>;
}
