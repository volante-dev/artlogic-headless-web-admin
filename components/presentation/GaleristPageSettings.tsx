"use client";
import Link from "next/link";
import {Checkbox,FormControlLabel,Stack,TextField,Typography} from "@mui/material";
import type {Page} from "./types";
import {suggestGaleristSlug,validGaleristSlug,isReservedGaleristSlug} from "../../lib/presentation/galerist-slug.generated";
import {usePresentationDraft} from "./usePresentationDraft";
export function GaleristPageSettings({settings,locale,onChange}:{settings:NonNullable<Page["settings"]>;locale:string;onChange:(next:NonNullable<Page["settings"]>)=>void}){
 const state=usePresentationDraft(),label=state.locales.find(l=>l.code===locale)?.label??locale;
 const name=settings.name[locale]??"",contributed=settings.slug[locale],slug=contributed??suggestGaleristSlug(name),invalid=Boolean(slug&&(!validGaleristSlug(slug)||isReservedGaleristSlug(slug,state.locales.map(l=>l.code))));
 return <Stack component="section" aria-labelledby="galerist-settings-title" spacing={2}>
  <Typography id="galerist-settings-title" component="h2" variant="h2">Nom et adresse</Typography>
  <Typography color="text.secondary">Ces réglages suivent la publication du site. Enregistrer prépare le brouillon sans modifier la page publique.</Typography>
  <Stack direction={{xs:"column",md:"row"}} spacing={2}>
   <TextField id={"galerist-name-"+locale} fullWidth label={"Nom de la page — "+label} value={name} error={Array.from(name).length>120} helperText={Array.from(name).length+" / 120 caractères"+(locale!==state.defaultLocale&&!name.trim()?" · Repli : "+(settings.name[state.defaultLocale]||"référence à renseigner"):"")} onChange={e=>onChange({...settings,name:{...settings.name,[locale]:e.target.value.normalize("NFC")}})}/>
   <TextField id={"galerist-slug-"+locale} fullWidth label={"Adresse — "+label} value={slug} error={invalid} helperText={invalid?"Choisissez une adresse libre, en un seul segment, sans espace.":locale!==state.defaultLocale&&!slug?"Repli : "+(settings.slug[state.defaultLocale]||"adresse de référence"):"Adresse modifiable ; vos anciennes adresses publiées seront conservées."} onChange={e=>onChange({...settings,slug:{...settings.slug,[locale]:e.target.value.normalize("NFC")}})}/>
  </Stack>
  <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:0,sm:3}}>
   <FormControlLabel label="Activer la page" control={<Checkbox checked={settings.enabled} onChange={e=>onChange({...settings,enabled:e.target.checked})}/>}/>
   <Typography>La présence dans le menu se règle séparément. <Link href="/presentation/navigation" prefetch={false}>Configurer le menu dans Navigation</Link></Typography>
  </Stack>
  {!settings.enabled&&<Typography variant="body2" color="text.secondary">La page reste préparatoire. Son aperçu privé est disponible ; elle ne sera pas accessible publiquement.</Typography>}
 </Stack>;
}
