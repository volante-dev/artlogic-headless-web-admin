"use client";
import Image from "next/image";
import {Stack,TextField} from "@mui/material";
import {AssetPicker} from "../presentation/AssetPicker";
import type {ArticleDocument} from "@/lib/editorial/client";
export function ArticleCoverField({value,locales,activeLocales,csrfCookie,onChange}:{value:ArticleDocument["cover"];locales:{code:string;label:string}[];activeLocales:string[];csrfCookie:string;onChange(value:ArticleDocument["cover"]):void}){
 return <Stack spacing={2}><AssetPicker kind="image" label="Couverture de l’article" value={value?.assetId} csrfCookie={csrfCookie} onChange={asset=>onChange(asset?{assetId:asset.id,alt:{...Object.fromEntries(locales.map(locale=>[locale.code,""])),...value?.alt}}:null)}/>{value&&<><Image unoptimized src={"/api/presentation/assets/"+value.assetId+"/content"} width={800} height={500} alt="" style={{width:"100%",height:"auto",maxHeight:240,objectFit:"cover"}}/>{locales.map(locale=><TextField key={locale.code} label={"Texte alternatif de la couverture — "+locale.code.toUpperCase()} value={value.alt[locale.code]??""} onChange={event=>onChange({...value,alt:{...value.alt,[locale.code]:event.target.value}})} required={activeLocales.includes(locale.code)} slotProps={{htmlInput:{maxLength:4000,"data-editorial-field":"cover.alt."+locale.code}}} helperText={activeLocales.includes(locale.code)?"Description de l’image obligatoire avant publication.":"Langue en préparation."}/>)}</>}</Stack>;
}
