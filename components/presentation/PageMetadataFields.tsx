"use client";
import {Stack,TextField,Typography} from '@mui/material';
import type {Page} from './types';
import {usePresentationDraft} from './usePresentationDraft';
export function PageMetadataFields({page,locale,onChange}:{page:Page;locale:string;onChange:(value:NonNullable<Page['metaDescription']>)=>void}){
 const {defaultLocale,locales}=usePresentationDraft(),value=page.metaDescription?.[locale]??'',count=Array.from(value).length,label=locales.find(l=>l.code===locale)?.label??locale;
 return <Stack component="section" spacing={1} aria-labelledby="page-seo-title"><Typography id="page-seo-title" component="h2" variant="h2">Référencement</Typography><TextField fullWidth multiline minRows={3} label={'Meta description — '+label} value={value} error={count>320} helperText={count+' / 320 caractères · '+(locale!==defaultLocale&&!value.trim()?'Repli sur la langue de référence, puis sur la description générale du site.':'Facultatif. Laissez vide pour utiliser la description générale du site.')} onChange={event=>onChange({...page.metaDescription,[locale]:event.target.value})}/><Typography variant="body2" color="text.secondary">Cette description accompagne la page dans les moteurs de recherche. Elle suit la publication du site.{page.pageKey==='artworkDetail'?' Sur les fiches d’œuvres, laissez vide pour conserver leur description propre.':''}</Typography></Stack>;
}
