"use client";
import {Stack,TextField,Typography} from "@mui/material";
import {usePresentationDraft} from "./usePresentationDraft";
import type {EditorField} from "./manifest";
export function LocalizedField({field,value={},locale,onChange}:{field:EditorField;value?:Record<string,string|null>;locale:string;onChange:(value:Record<string,string|null>)=>void}){
 const state=usePresentationDraft(),reference=state.defaultLocale,label=state.locales.find(l=>l.code===locale)?.label??locale,text=value[locale]??"",count=Array.from(text).length,max=field.maxLength??5000,archived=Object.keys(value).filter(k=>!state.locales.some(l=>l.code===k)),fallback=locale!==reference&&!text.trim();
 return <Stack spacing={.5}><TextField fullWidth multiline={max>120} minRows={max>500?4:2} label={field.label.fr+" — "+label} value={text} onChange={e=>{const next=Array.from(e.target.value).slice(0,max).join("");onChange({...value,[locale]:next.trim()?next:locale===reference?"":null});}} helperText={count+" / "+max+" caractères"+(locale===reference&&field.requiredForPublication?" · Référence requise avant publication":"")} />{fallback&&<Typography variant="body2" color="text.secondary">Repli vers {reference} : {value[reference]?.trim()||"Référence à renseigner"}</Typography>}{archived.length>0&&<Typography variant="caption" color="text.secondary">Traductions archivées conservées : {archived.join(", ")}.</Typography>}</Stack>;
}
