"use client";
import {AssetPicker} from "./AssetPicker";
export function ImageFields({label,value,onChange}:{label:string;value?:string|null;onChange:(id:string|null)=>void}){return <AssetPicker kind="image" label={label} value={value} onChange={asset=>onChange(asset?.id??null)}/>;}
