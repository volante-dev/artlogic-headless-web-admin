"use client";
import {MenuItem,Stack,TextField,Typography} from "@mui/material";
import {pageLabels,type PageKey} from "./types";
import type {components} from "../../lib/bff/generated";
import {useEffect,useState} from "react";
import {presentationFetch} from "./usePresentationDraft";
import type {DraftPage} from "./types";
import {ArtworkSelectionField} from "./ArtworkSelectionField";
type Link=components["schemas"]["PresentationLink"];
export function LinkField({label,value,onChange}:{label:string;value?:Link;onChange:(value:Link|undefined)=>void}){
 const [galeristName,setGaleristName]=useState("");
 const [galeristEnabled,setGaleristEnabled]=useState<boolean|null>(null),galeristSelected=value?.kind==="page"&&value.pageKey==="galerist";
 useEffect(()=>{const c=new AbortController();void presentationFetch<DraftPage>("/pages/galerist",{signal:c.signal}).then(r=>{setGaleristEnabled(r.data.page.settings?.enabled===true);setGaleristName(r.data.page.settings?.name.fr??"");}).catch(()=>{});return()=>c.abort();},[galeristSelected]);
 const kind=value?.kind??"";let error="";if(value?.kind==="external"){try{const url=new URL(value.url);if(url.protocol!=="https:"||url.username||url.password)error="Utilisez une URL HTTPS sans identifiants.";}catch{error="Renseignez une URL HTTPS complète.";}}
 return <Stack spacing={2}><TextField select label={label+" — Type"} value={kind} onChange={e=>{const k=e.target.value;onChange(k==="page"?{kind:"page",pageKey:"home"}:k==="external"?{kind:"external",url:"https://"}:k==="email"?{kind:"email",value:""}:k==="phone"?{kind:"phone",value:""}:undefined);}}><MenuItem value="">Aucun lien</MenuItem><MenuItem value="page">Page du site</MenuItem><MenuItem value="external">Site externe (HTTPS)</MenuItem><MenuItem value="email">Adresse e-mail</MenuItem><MenuItem value="phone">Téléphone</MenuItem></TextField>
 {value?.kind==="page"&&<><TextField select label={label+" — Page"} value={value.pageKey} onChange={e=>onChange({kind:"page",pageKey:e.target.value as PageKey})}>{Object.entries(pageLabels).map(([key,label])=><MenuItem key={key} value={key}>{key==="galerist"&&galeristName?galeristName:label}</MenuItem>)}</TextField>{value.pageKey==="artworkDetail"&&<ArtworkSelectionField label="Œuvre de destination" max={1} value={value.artworkId?[value.artworkId]:[]} onChange={ids=>onChange({...value,artworkId:ids[0]})}/>}</>}
 {value?.kind==="page"&&value.pageKey==="galerist"&&galeristEnabled===false&&<Typography color="warning.main">La page du galeriste est inactive dans ce brouillon. Activez-la avant de publier ce lien.</Typography>}
 {value?.kind==="external"&&<TextField label={label+" — URL HTTPS"} value={value.url} error={Boolean(error)} helperText={error||"Les liens externes s’ouvrent sans transmettre la session."} onChange={e=>onChange({...value,url:e.target.value})} slotProps={{htmlInput:{maxLength:2048}}}/>}
 {(value?.kind==="email"||value?.kind==="phone")&&<TextField label={label+" — "+(value.kind==="email"?"E-mail":"Téléphone")} type={value.kind==="email"?"email":"tel"} value={value.value} onChange={e=>onChange({...value,value:e.target.value})} slotProps={{htmlInput:{maxLength:value.kind==="email"?254:32}}}/>}
 {value?.kind==="page"&&value.pageKey==="artworkDetail"&&!value.artworkId&&<Typography color="error">Choisissez une œuvre publique pour cette destination.</Typography>}
 </Stack>;
}
