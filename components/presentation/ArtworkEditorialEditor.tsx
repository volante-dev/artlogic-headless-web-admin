"use client";
import {useEffect,useState} from "react";
import {Alert,Box,Button,MenuItem,Skeleton,Stack,TextField,Typography} from "@mui/material";
import type {components} from "../../lib/bff/generated";
import {PresentationDraftProvider,presentationFetch,presentationErrorMessage,usePresentationDraft} from "./usePresentationDraft";
import {PreviewAction} from "./PreviewAction";
import {useUnsavedChanges} from "./useUnsavedChanges";
type Editorial=components["schemas"]["GalleryEditorialDraft"];
export function ArtworkEditorialEditor({artworkId,publicArtwork,csrfCookie,siteOrigin,locales,defaultLocale}:{artworkId:string;publicArtwork:boolean;csrfCookie:string;siteOrigin:string;locales:readonly {code:string;label:string}[];defaultLocale:string}){
 return <PresentationDraftProvider csrfCookie={csrfCookie} siteOrigin={siteOrigin} locales={locales} defaultLocale={defaultLocale}><Editor artworkId={artworkId} publicArtwork={publicArtwork}/></PresentationDraftProvider>;
}
function Editor({artworkId,publicArtwork}:{artworkId:string;publicArtwork:boolean}){
 const state=usePresentationDraft(),[initial,setInitial]=useState<Editorial|null>(null),[locale,setLocale]=useState(state.defaultLocale),[changes,setChanges]=useState<Record<string,string|null>>({}),[comparison,setComparison]=useState<Editorial|null>(null),[readError,setReadError]=useState("");
 const dirty=Object.keys(changes).length>0;useUnsavedChanges(dirty,"La description n’est pas enregistrée. Quitter et perdre la saisie ?");
 useEffect(()=>{const c=new AbortController();void presentationFetch<Editorial>("/artworks/"+artworkId,{signal:c.signal}).then(r=>setInitial(r.data)).catch(e=>{if(!c.signal.aborted)setReadError(presentationErrorMessage(e));});return()=>c.abort();},[artworkId]);
 const value=(Object.hasOwn(changes,locale)?changes[locale]:initial?.description[locale])??"",count=Array.from(value.normalize("NFC").trim()).length,invalid=Object.values(changes).some(v=>v!==null&&Array.from(v.normalize("NFC").trim()).length>5000);
 function change(value:string|null){setChanges(prior=>{const next={...prior};if(value===(initial?.description[locale]??null))delete next[locale];else next[locale]=value;return next;});}
 async function save(){try{const result=await state.mutate<Editorial>("/artworks/"+artworkId,{description:changes},"PUT");setInitial(result.data);setChanges({});setComparison(null);await state.reload();state.setStatus("Description enregistrée dans le brouillon. Le site public reste inchangé.");}catch{}}
 async function compare(){try{const [result]=await Promise.all([presentationFetch<Editorial>("/artworks/"+artworkId),state.compare()]);setComparison(result.data);}catch(e){state.setError(presentationErrorMessage(e));}}
 async function publish(){try{const check=await state.mutate<{publishable:boolean;diagnostics:components["schemas"]["PresentationDiagnostic"][]}>("/validation",{});if(!check.data.publishable){state.setError("Le site ne peut pas être publié. Corrigez les diagnostics dans Apparence et pages.");return;}await state.mutate("/publications",{});await state.reload();state.setStatus("Publication confirmée. Le thème, les pages et les descriptions sont en ligne.");}catch{}}
 return <Box className="workspace-panel" sx={{mt:4}}><Stack spacing={3}>
  <Box><Typography component="h2" variant="h2">Description sur le site</Typography><Typography color="text.secondary">Ce texte complète les données Artlogic. Les synchronisations le conservent.</Typography></Box>
  {state.error&&<Alert severity="error">{state.error}</Alert>}{readError&&<Alert severity="error">{readError}</Alert>}{state.status&&<Alert severity="success" role="status">{state.status}</Alert>}
  {initial?<><TextField select label="Langue de la description" value={locale} onChange={e=>setLocale(e.target.value)}>{state.locales.map(l=><MenuItem key={l.code} value={l.code}>{l.label}</MenuItem>)}</TextField>
   <TextField label="Description de l’œuvre" multiline minRows={6} value={value} onChange={e=>change(e.target.value)} error={count>5000} helperText={`${count} / 5 000 caractères · texte simple. Une traduction absente utilise la langue de référence si disponible.`}/>
   <Button variant="text" onClick={()=>change(null)} disabled={!value} sx={{alignSelf:"start"}}>Effacer cette traduction</Button>
   <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap"}}><Button variant="contained" disabled={!dirty||invalid||state.busy||state.uncertain||!state.etag} onClick={save}>Enregistrer la description</Button><PreviewAction pageKey="artworkDetail" locale={locale} artworkId={artworkId} disabled={dirty||!publicArtwork}/><Button variant="outlined" disabled={dirty||state.busy||state.uncertain||!state.etag} onClick={publish}>Publier le site</Button></Stack>
   <Typography variant="body2" color="text.secondary">Publier le site met en ligne tous les changements enregistrés : thème, pages et descriptions d’œuvres.</Typography>
   {!publicArtwork&&<Alert severity="info">L’aperçu de la fiche nécessite une œuvre disponible et publiée dans le catalogue.</Alert>}
   {state.uncertain&&<Button onClick={compare} disabled={state.busy} sx={{alignSelf:"start"}}>Comparer avec la version enregistrée</Button>}
   {comparison&&state.comparison&&<Box><Typography component="h3" variant="h3">Description enregistrée</Typography><Typography sx={{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}}>{comparison.description[locale]??"Aucune traduction"}</Typography><Button onClick={()=>{setInitial(comparison);state.acceptComparison();setComparison(null);}}>Utiliser cette version comme référence et garder ma saisie</Button></Box>}
  </>:!readError&&<Skeleton height={200} aria-label="Chargement de la description"/>}
 </Stack></Box>;
}
