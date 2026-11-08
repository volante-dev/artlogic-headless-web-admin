"use client";
import {PageMetadataFields} from "./PageMetadataFields";
import {GaleristPageSettings} from "./GaleristPageSettings";
import {suggestGaleristSlug} from "../../lib/presentation/galerist-slug.generated";
import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";
import {Alert,Box,Button,Checkbox,Dialog,DialogActions,DialogContent,DialogTitle,Divider,FormControlLabel,MenuItem,Skeleton,Stack,TextField,Typography} from "@mui/material";
import {pageLabels,reasonLabels,type DraftPage,type PageKey,type Section,type Validation} from "./types";
import {editorManifest,type Manifest} from "./manifest";
import {presentationErrorMessage,presentationFetch,usePresentationDraft} from "./usePresentationDraft";
import {SectionList} from "./SectionList";
import {SectionLibrary} from "./SectionLibrary";
import {SectionFields} from "./SectionFields";
import {SectionVariantControl} from "./SectionVariantControl";
import {HeroMediaFields} from "./HeroMediaFields";
import {ArtworkPreviewPicker} from "./ArtworkPreviewPicker";
import {PreviewAction} from "./PreviewAction";
import {usePageUndo} from "./usePageUndo";
import {useUnsavedChanges} from "./useUnsavedChanges";
import {duplicateSection,moveSection,sectionLabels} from "./page-editor";
export function PageEditor({pageKey}:{pageKey:PageKey}){
 const state=usePresentationDraft(),[initial,setInitial]=useState<DraftPage|null>(null),[error,setError]=useState("");
 const reload=state.reload;
 useEffect(()=>{let active=true;void Promise.all([presentationFetch<DraftPage>("/pages/"+pageKey),reload()]).then(([result])=>{if(active)setInitial(result.data);}).catch(e=>{if(active)setError(presentationErrorMessage(e));});return()=>{active=false;};},[pageKey,reload]);
 if(error)return <Alert severity="error">{error}</Alert>;
 return initial?.page.pageKey===pageKey&&state.capabilities?<PageForm key={pageKey} initial={initial} manifest={editorManifest(state.capabilities)}/>:<Skeleton height={180} aria-label="Chargement de la page"/>;
}
function PageForm({initial,manifest}:{initial:DraftPage;manifest:Manifest}){
 const state=usePresentationDraft(),router=useRouter(),undo=usePageUndo(initial.page,state.publishedEpoch),page=undo.page;
 const [selectedId,setSelectedId]=useState(page.sections[0]?.id??""),[locale,setLocale]=useState(state.defaultLocale),[saved,setSaved]=useState(()=>JSON.stringify(initial.page)),[diagnostics,setDiagnostics]=useState(initial.diagnostics),[deleting,setDeleting]=useState(false),[comparison,setComparison]=useState<DraftPage|null>(null),[artworkId,setArtworkId]=useState("");
 const selected=page.sections.find(s=>s.id===selectedId)??page.sections[0],definition=selected?manifest.sections.find(s=>s.type===selected.type)!:null,index=page.sections.findIndex(s=>s.id===selected?.id),required=Boolean(definition?.requiredOn.includes(page.pageKey)),dirty=JSON.stringify(page)!==saved;
 const exitMessage=dirty?"Des modifications ne sont pas enregistrées. Quitter et perdre la saisie et le journal d’annulation ?":"Quitter cet éditeur efface le journal d’annulation. Le brouillon enregistré est conservé. Continuer ?";useUnsavedChanges(dirty||undo.canUndo,exitMessage);
 const compareRevision=state.comparison?.data.revision;
 useEffect(()=>{if(!compareRevision)return;const c=new AbortController();void presentationFetch<DraftPage>("/pages/"+initial.page.pageKey,{signal:c.signal}).then(r=>setComparison(r.data)).catch(()=>{});return()=>c.abort();},[compareRevision,initial.page.pageKey]);
 function changeSection(next:Section,structural=false){undo.update({...page,sections:page.sections.map(s=>s.id===next.id?next:s)},structural);}
 function changeProps(props:Record<string,unknown>,structural=false){if(selected)changeSection({...selected,props} as Section,structural);}
 async function save(){try{const contributed={...page,...(page.settings?{settings:{...page.settings,slug:{...page.settings.slug,...Object.fromEntries(Object.entries(page.settings.name).map(([language,name])=>[language,page.settings!.slug[language]??suggestGaleristSlug(name)]))}}}:{})};const result=await state.mutate<{revision:string;diagnostics:Validation["diagnostics"]}>("/pages/"+page.pageKey,contributed,"PUT");undo.update(contributed);setSaved(JSON.stringify(contributed));setDiagnostics(result.data.diagnostics.filter(d=>d.field.startsWith("pages."+page.pageKey+".")));await state.reload();state.setStatus("Page enregistrée. La publication et le journal d’annulation restent inchangés.");}catch{}}
 async function publish(){try{const check=await state.mutate<Validation>("/validation",{});state.setValidation(check.data);setDiagnostics(check.data.diagnostics);if(!check.data.publishable)return;await state.mutate("/publications",{});await state.reload();state.confirmPublication();state.setStatus("Publication confirmée. Le thème, les pages et les descriptions sont en ligne ; le journal d’annulation est terminé.");}catch{}}
 function selectPage(key:PageKey){if(key===page.pageKey)return;if((dirty||undo.canUndo)&&!window.confirm(exitMessage))return;router.push("/presentation/pages/"+key);}
 function add(section:Section){undo.update({...page,sections:[...page.sections,section]},true);setSelectedId(section.id);}
 function duplicate(){if(!selected||!definition)return;const copy=duplicateSection(selected,definition,state.locales.map(l=>l.code));undo.update({...page,sections:[...page.sections.slice(0,index+1),copy,...page.sections.slice(index+1)]},true);setSelectedId(copy.id);}
 return <Stack spacing={4} sx={{containerType:"inline-size"}}><Box><Typography component="h1" variant="h1">Composer : {pageLabels[page.pageKey]}</Typography><Typography>Ajoutez des sections, renseignez leurs contenus puis enregistrez la page. La publication met en ligne le thème, les pages et les descriptions ensemble.</Typography></Box>
 <Stack direction={{xs:"column",sm:"row"}} spacing={2} useFlexGap sx={{flexWrap:"wrap"}}><TextField select label="Page à composer" value={page.pageKey} onChange={e=>selectPage(e.target.value as PageKey)} sx={{minWidth:0,maxWidth:"100%",flex:{xs:"0 1 auto",sm:"1 1 240px"}}}>{Object.entries(pageLabels).map(([key,label])=><MenuItem key={key} value={key}>{label}</MenuItem>)}</TextField><TextField select label="Langue d’édition" value={locale} onChange={e=>setLocale(e.target.value)} sx={{minWidth:0,maxWidth:"100%",flex:{xs:"0 1 auto",sm:"1 1 200px"}}}>{state.locales.map(l=><MenuItem key={l.code} value={l.code}>{l.label}</MenuItem>)}</TextField></Stack>
 <PageMetadataFields page={page} locale={locale} onChange={metaDescription=>undo.update({...page,metaDescription})}/>
 {page.pageKey==="galerist"&&page.settings&&<GaleristPageSettings settings={page.settings} locale={locale} onChange={settings=>undo.update({...page,settings})}/>}
 {page.pageKey==="artworkDetail"&&<ArtworkPreviewPicker value={artworkId} onChange={setArtworkId}/>}
 <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap"}}><Button variant="contained" disabled={!dirty||state.busy||state.uncertain||Object.values(page.metaDescription??{}).some(value=>Array.from(value??"").length>320)} onClick={save}>Enregistrer la page</Button><PreviewAction pageKey={page.pageKey} locale={locale} artworkId={artworkId||undefined} disabled={dirty||page.pageKey==="artworkDetail"&&!artworkId}/><Button variant="outlined" disabled={dirty||state.busy||state.uncertain} onClick={publish}>Publier le site</Button><Button disabled={!undo.canUndo||state.busy} onClick={undo.undo}>Annuler la dernière modification de structure</Button></Stack>
 <Typography variant="body2" color="text.secondary">{dirty?"Modifications non enregistrées.":"Page enregistrée."} {undo.canUndo?"Les changements de structure restent annulables ici, même après sauvegarde. Quitter ou recharger efface ce journal.":"Le journal d’annulation commence à la prochaine modification de structure."}</Typography>
 {state.comparison&&comparison&&<Alert severity="info">La version enregistrée contient {comparison.page.sections.length} sections ; votre formulaire en contient {page.sections.length}. Sections enregistrées : {comparison.page.sections.map(s=>sectionLabels[s.type]).join(", ")||"aucune"}. Votre saisie reste conservée.</Alert>}
 {diagnostics.length>0&&<Alert severity={diagnostics.some(d=>d.severity==="error")?"warning":"info"}><Typography sx={{fontWeight:600}}>Dernière vérification du brouillon</Typography><ul>{diagnostics.map((d,i)=><li key={d.field+i}>{d.field.startsWith("pages.galerist.settings.")?<button type="button" onClick={()=>{const parts=d.field.split("."),language=parts.at(-1)!;setLocale(language);requestAnimationFrame(()=>document.getElementById("galerist-"+(parts[3]==="name"?"name":"slug")+"-"+language)?.focus());}}>{reasonLabels[d.reason]}</button>:reasonLabels[d.reason]} {d.field.includes("theme")?"(Identité visuelle)":""}</li>)}</ul></Alert>}
 <Box sx={{display:"grid",gridTemplateColumns:"minmax(0,1fr)","@container (min-width: 720px)":{gridTemplateColumns:"280px minmax(0,1fr)"},gap:4,alignItems:"start"}}><Stack spacing={3}><SectionList page={page} selected={selected?.id??""} onSelect={setSelectedId} locale={locale}/><Divider/><SectionLibrary page={page} manifest={manifest} formsEnabled={state.capabilities?.formsWritable===true} onAdd={add}/></Stack>
 <Stack spacing={3} sx={{minWidth:0}}>{selected&&definition?<><Typography component="h2" variant="h2">{sectionLabels[selected.type]}</Typography>{required&&<Alert severity="info" icon={false}>Bloc métier obligatoire : il reste visible et unique. Les décisions de visibilité des œuvres se gèrent dans « Œuvres ».</Alert>}
 <Stack direction="row" spacing={1} useFlexGap sx={{flexWrap:"wrap"}}><Button disabled={index===0} onClick={()=>undo.update(moveSection(page,index,-1),true)}>Monter la section</Button><Button disabled={index===page.sections.length-1} onClick={()=>undo.update(moveSection(page,index,1),true)}>Descendre la section</Button><Button disabled={required||selected.type==="contact"||page.sections.length>=30||page.sections.filter(s=>s.type===selected.type).length>=(definition.maxPerPage??30)} onClick={duplicate}>Dupliquer la section</Button><Button disabled={required} onClick={()=>setDeleting(true)} aria-label="Supprimer la section sélectionnée">Supprimer la section</Button></Stack>
 <FormControlLabel label="Masquer cette section" control={<Checkbox disabled={required} checked={selected.hidden} onChange={e=>changeSection({...selected,hidden:e.target.checked},true)}/>}/><SectionVariantControl value={selected.variant} variants={definition.variants} onChange={variant=>changeSection({...selected,variant} as Section,true)}/>
 {selected.type==="heroMedia"&&<HeroMediaFields props={selected.props} onChange={changeProps}/>}<SectionFields fields={selected.type==="heroMedia"?definition.fields.filter(f=>!["image","video"].includes(f.kind)):definition.fields} props={selected.props} locale={locale} onChange={changeProps}/>
 <Typography variant="caption" color="text.secondary">La duplication crée de nouveaux éléments et copie les traductions actives. Les traductions archivées restent sur l’original.</Typography>
 </>:<Typography>Sélectionnez ou ajoutez une section pour modifier son contenu.</Typography>}</Stack></Box>
 <Dialog open={deleting} onClose={()=>setDeleting(false)} aria-labelledby="delete-section-title"><DialogTitle id="delete-section-title">Supprimer cette section ?</DialogTitle><DialogContent>Ses contenus seront retirés du brouillon. Vous pourrez annuler ici, même après sauvegarde, jusqu’à publication ou fermeture de l’éditeur.</DialogContent><DialogActions><Button onClick={()=>setDeleting(false)}>Annuler</Button><Button color="error" onClick={()=>{undo.update({...page,sections:page.sections.filter(s=>s.id!==selected?.id)},true);setDeleting(false);}}>Confirmer la suppression</Button></DialogActions></Dialog>
 </Stack>;
}
