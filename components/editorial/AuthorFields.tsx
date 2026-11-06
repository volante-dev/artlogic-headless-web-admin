"use client";
import {Stack,TextField} from "@mui/material";
import {AssetPicker} from "../presentation/AssetPicker";
import type {Author} from "@/lib/editorial/taxonomy";
export function AuthorFields({value,onChange,locales,locale,csrfCookie}:{value:Author;onChange(value:Author):void;locales:string[];locale:string;csrfCookie:string}){
 return <Stack spacing={3}><TextField label="Nom de l’auteur" value={value.name} onChange={event=>onChange({...value,name:event.target.value})} required slotProps={{htmlInput:{maxLength:240}}}/><AssetPicker kind="image" label="Portrait" value={value.portraitAssetId} csrfCookie={csrfCookie} onChange={asset=>onChange({...value,portraitAssetId:asset?.id??null})}/><TextField label={"Biographie courte — "+locale.toUpperCase()} value={value.bio?.[locale]??""} multiline minRows={3} onChange={event=>onChange({...value,bio:{...Object.fromEntries(locales.map(code=>[code,""])),...value.bio,[locale]:event.target.value}})} slotProps={{htmlInput:{maxLength:4000}}} helperText="Le profil s’ouvre seulement si un portrait et une biographie traduite sont renseignés."/><TextField label="Lien de l’auteur (facultatif)" type="url" value={value.link??""} onChange={event=>onChange({...value,link:event.target.value||null})} helperText="Adresse HTTPS" slotProps={{htmlInput:{maxLength:2048}}}/></Stack>;
}
