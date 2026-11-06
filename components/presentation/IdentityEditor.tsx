"use client";
import {useEffect,useState} from "react";
import {Alert,Box,Button,Divider,MenuItem,Stack,TextField,Typography} from "@mui/material";
import type {Asset,Draft,Overrides,PageKey,Validation} from "./types";
import {editorManifest,type Manifest} from "./manifest";
import {resolveEditorTheme} from "./theme-editor";
import {presentationFetch,usePresentationDraft} from "./usePresentationDraft";
import {PaletteEditor} from "./PaletteEditor";
import {ContrastDiagnostics} from "./ContrastDiagnostics";
import {TypographyEditor} from "./TypographyEditor";
import {FontFamilyEditor} from "./FontFamilyEditor";
import {PreviewAction} from "./PreviewAction";
import {useUnsavedChanges} from "./useUnsavedChanges";
export function IdentityEditor(){const state=usePresentationDraft();return state.draft&&state.capabilities?<IdentityForm initial={state.draft} manifest={editorManifest(state.capabilities)}/>:null;}
function IdentityForm({initial,manifest}:{initial:Draft;manifest:Manifest}){
 const state=usePresentationDraft(),[overrides,setOverrides]=useState<Overrides>(()=>structuredClone(initial.themeOverrides)),[saved,setSaved]=useState(()=>JSON.stringify(initial.themeOverrides)),[assets,setAssets]=useState<Asset[]>([]),[pageKey,setPageKey]=useState<PageKey>("home"),[artworks,setArtworks]=useState<{id:string;title:string|null}[]>([]),[artworkId,setArtworkId]=useState(""),[assetError,setAssetError]=useState("");
 const theme=resolveEditorTheme(overrides,manifest),dirty=JSON.stringify(overrides)!==saved,faceIds=theme.fonts.flatMap(f=>f.faces.map(f=>f.assetId)).join(",");useUnsavedChanges(dirty);
 useEffect(()=>{let active=true;void Promise.all(faceIds.split(",").filter(Boolean).map(id=>presentationFetch<Asset>("/assets/"+id))).then(values=>{if(active){setAssets(values.map(v=>v.data));setAssetError("");}}).catch(()=>{if(active)setAssetError("Impossible de relire les polices. Votre saisie est conservée ; réessayez après le retour du service.");});return()=>{active=false;};},[faceIds]);
 useEffect(()=>{const c=new AbortController();void fetch("/api/artworks?publication=published&availability=available",{signal:c.signal,cache:"no-store"}).then(r=>{if(!r.ok)throw new Error();return r.json();}).then(data=>{setArtworks(data.items);if(data.items[0])setArtworkId(data.items[0].id);}).catch(()=>{});return()=>c.abort();},[]);
 async function save(){try{const result=await state.mutate<{revision:string;diagnostics:Validation["diagnostics"]}>("/theme",overrides,"PUT");setSaved(JSON.stringify(overrides));state.setValidation({revision:result.data.revision,publishable:!result.data.diagnostics.some(d=>d.severity==="error"),diagnostics:result.data.diagnostics});await state.reload();state.setStatus("Brouillon enregistré. Le site publié reste inchangé.");}catch{}}
 const invalidColors=Object.values(theme.colors).some(v=>!/^#[0-9a-f]{6}$/i.test(v));
 return <Stack spacing={4}><Box><Typography component="h1" variant="h1">Identité visuelle</Typography><Typography>Personnalisez le thème, enregistrez le brouillon puis vérifiez les pages avant de publier.</Typography></Box>
 <Stack direction={{xs:"column",sm:"row"}} spacing={2} sx={{alignItems:{sm:"center"}}}><Button variant="contained" disabled={state.busy||state.uncertain||!dirty||invalidColors} onClick={save}>Enregistrer le brouillon</Button><Typography variant="body2" color="text.secondary">{dirty?"Modifications non enregistrées":"Toutes les modifications sont enregistrées"}</Typography></Stack>
 {state.comparison&&<Alert severity="info">Le thème enregistré utilise {state.comparison.data.effectiveTheme.colors.background} pour le fond ; votre formulaire utilise {theme.colors.background}. Les autres champs restent dans votre formulaire.</Alert>}
 <Box><Typography component="h2" variant="h2" sx={{mb:2}}>Palette</Typography><PaletteEditor theme={theme} overrides={overrides} onChange={setOverrides}/></Box><ContrastDiagnostics theme={theme} manifest={manifest}/><Divider/>
 {assetError&&<Alert severity="error">{assetError}</Alert>}<FontFamilyEditor theme={theme} assets={assets} onAssets={asset=>setAssets(current=>[...current.filter(a=>a.id!==asset.id),asset])} onChange={fonts=>setOverrides({...overrides,fonts})}/><TypographyEditor theme={theme} manifest={manifest} overrides={overrides} assets={assets} onChange={setOverrides}/><Divider/>
 <Box><Typography component="h2" variant="h2">Vérifier le rendu</Typography><Typography sx={{mb:2}}>L’aperçu utilise le dernier brouillon enregistré. Il permet de changer la langue et la largeur d’écran.</Typography><Stack direction={{xs:"column",sm:"row"}} spacing={2}><TextField sx={{minWidth:{sm:240},maxWidth:"100%"}} select label="Page à prévisualiser" value={pageKey} onChange={e=>setPageKey(e.target.value as PageKey)}><MenuItem value="home">Accueil</MenuItem><MenuItem value="artworks">Catalogue d’œuvres</MenuItem><MenuItem value="artworkDetail">Fiche d’œuvre</MenuItem></TextField>{pageKey==="artworkDetail"&&<TextField select label="Œuvre de l’aperçu" value={artworkId} onChange={e=>setArtworkId(e.target.value)}>{artworks.map(a=><MenuItem key={a.id} value={a.id}>{a.title??"Sans titre"}</MenuItem>)}</TextField>}<PreviewAction pageKey={pageKey} artworkId={pageKey==="artworkDetail"?artworkId:undefined} disabled={dirty||pageKey==="artworkDetail"&&!artworkId}/></Stack>{dirty&&<Typography variant="caption">Enregistrez vos modifications pour les voir dans l’aperçu.</Typography>}</Box>
 </Stack>;
}
