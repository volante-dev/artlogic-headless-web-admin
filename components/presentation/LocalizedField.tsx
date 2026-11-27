"use client";
import {Stack,TextField,Typography,type TextFieldProps} from "@mui/material";
import {usePresentationDraft} from "./usePresentationDraft";
import type {EditorField} from "./manifest";
/** The native editor and translation workspaces share counting and field appearance. */
export function LocalizedTextControl({value,maxLength,lengthUnit='unicode',onChange,truncate=false,showCount=true,hint,...props}:Omit<TextFieldProps,'value'|'onChange'>&{value:string;maxLength?:number;lengthUnit?:'unicode'|'utf16';onChange:(value:string)=>void;truncate?:boolean;showCount?:boolean;hint?:string}){
 const count=lengthUnit==='utf16'?value.length:Array.from(value).length;
 return <TextField fullWidth {...props} value={value} onChange={event=>onChange(truncate&&maxLength!==undefined?(lengthUnit==='utf16'?event.target.value.slice(0,maxLength):Array.from(event.target.value).slice(0,maxLength).join('')):event.target.value)} helperText={props.helperText??(showCount&&maxLength!==undefined?count+' / '+maxLength+' caractères'+(hint??''):hint)}/>;
}
export function LocalizedField({field,value={},locale,onChange}:{field:EditorField;value?:Record<string,string|null>;locale:string;onChange:(value:Record<string,string|null>)=>void}){
 const state=usePresentationDraft(),reference=state.defaultLocale,label=state.locales.find(l=>l.code===locale)?.label??locale,text=value[locale]??"",max=field.maxLength??5000,archived=Object.keys(value).filter(k=>!state.locales.some(l=>l.code===k)),fallback=locale!==reference&&!text.trim();
 return <Stack spacing={.5}><LocalizedTextControl multiline={max>120} minRows={max>500?4:2} label={field.label.fr+" — "+label} value={text} maxLength={max} truncate onChange={next=>onChange({...value,[locale]:next.trim()?next:locale===reference?"":null})} hint={locale===reference&&field.requiredForPublication?" · Référence requise avant publication":""}/>{fallback&&<Typography variant="body2" color="text.secondary">Repli vers {reference} : {value[reference]?.trim()||"Référence à renseigner"}</Typography>}{archived.length>0&&<Typography variant="caption" color="text.secondary">Traductions archivées conservées : {archived.join(", ")}.</Typography>}</Stack>;
}
