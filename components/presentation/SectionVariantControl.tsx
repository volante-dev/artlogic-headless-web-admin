"use client";
import {MenuItem,TextField} from "@mui/material";
import {variantLabels} from "./page-editor";
export function SectionVariantControl({value,variants,onChange}:{value:string;variants:string[];onChange:(variant:string)=>void}){return <TextField select label="Variante" value={value} disabled={variants.length===1} onChange={e=>onChange(e.target.value)} helperText="Les contenus sont conservés lors du changement de variante.">{variants.map(v=><MenuItem key={v} value={v}>{variantLabels[v]??v}</MenuItem>)}</TextField>;}
