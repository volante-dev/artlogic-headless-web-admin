"use client";
import {useState} from "react";
import Link from "next/link";
import {Alert,Box,Button,MenuItem,Stack,TextField,Typography} from "@mui/material";
import type {ConnectorChangeView} from "@/lib/bff/connectors";
import {ArtworkPreviewPicker} from "@/components/presentation/ArtworkPreviewPicker";
import {postPreviewCode} from "@/lib/presentation/post-preview-code";
import {csrfValue} from "./scopes";
const pages=[ ["home","Accueil"],["news","Actualités"],["artworks","Œuvres"],["exhibitions","Expositions"],["publications","Publications"],["expertise","Expertise"],["contact","Contact"],["galerist","Page du galeriste"],["artworkDetail","Fiche d’une œuvre"] ] as const;
export function ConnectorProposalPreview({change,expectedRevision,csrfCookie,siteOrigin,locales,defaultLocale}:{change:ConnectorChangeView;expectedRevision?:string;csrfCookie:string;siteOrigin:string;locales:readonly {code:string;label:string}[];defaultLocale:string}){
 const [locale,setLocale]=useState(defaultLocale),[pageId,setPageId]=useState("home"),[artworkId,setArtworkId]=useState(""),[busy,setBusy]=useState(false),[error,setError]=useState("");
 const stale=Boolean(expectedRevision&&expectedRevision!==change.revision),ready=!stale&&change.state==="reviewed"&&["presentation","navigation","article"].includes(change.unit);
 async function preview(){
  const popup=window.open("about:blank","artlogic_preview_"+crypto.randomUUID());if(!popup){setError("Autorisez l’ouverture d’un nouvel onglet pour consulter l’aperçu.");return;}popup.opener=null;
  setBusy(true);setError("");
  try{
   const response=await fetch("/api/connectors/chatgpt/changes/"+change.id+"/preview",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":csrfValue(csrfCookie)},credentials:"same-origin",cache:"no-store",body:JSON.stringify({expectedRevision:change.revision,locale,...(change.unit!=="article"?{pageId,...(pageId==="artworkDetail"?{artworkId}:{})}:{})})});
   if(!response.ok)throw Error(response.status===409?"Cette proposition a changé ou sa revue a expiré. Revenez dans ChatGPT pour la relire.":response.status===401||response.status===403?"Votre accès a expiré. Reconnectez-vous pour consulter cet aperçu.":"L’aperçu n’a pas pu être ouvert. Réessayez dans un instant.");
   const result=await response.json();if(result.exchangeUrl!==siteOrigin+"/preview/exchange")throw Error("La destination de l’aperçu n’a pas pu être vérifiée.");
   postPreviewCode(popup,result.exchangeUrl,result.exchangeCode);
  }catch(cause){popup.close();setError(cause instanceof Error?cause.message:"L’aperçu n’a pas pu être ouvert.");}finally{setBusy(false);}
 }
 return <Stack spacing={4} sx={{maxWidth:900,minWidth:0}}>
  <div><Typography component="h1" variant="h1">Aperçu de la proposition</Typography><Typography sx={{mt:2,overflowWrap:"anywhere",whiteSpace:"pre-wrap"}}>{change.summary}</Typography><Typography variant="body2" color="text.secondary" sx={{mt:1}}>Version {change.revision} · Proposition privée</Typography></div>
  {stale?<Alert severity="warning">Le lien correspond à une ancienne version. Demandez un nouvel aperçu dans ChatGPT.</Alert>:!ready?<Alert severity="info">{change.state==="expired"?"Cette proposition a expiré. Préparez une nouvelle proposition dans ChatGPT.":change.state==="prepared"?"Relisez d’abord les modifications dans ChatGPT pour préparer cet aperçu.":"L’aperçu de cette proposition n’est pas disponible."}</Alert>:<Box component="section" className="work-panel" aria-labelledby="connector-preview-heading"><Stack spacing={3}>
   <div><Typography id="connector-preview-heading" component="h2" variant="h5">Consulter le rendu</Typography><Typography variant="body2" color="text.secondary" sx={{mt:1}}>Une copie de la proposition s’ouvre dans un nouvel onglet.</Typography></div>
   <Stack direction={{xs:"column",sm:"row"}} spacing={2}>{change.unit!=="article"&&<TextField select label="Page à afficher" value={pageId} onChange={e=>{setPageId(e.target.value);setArtworkId("");}} disabled={busy} sx={{flex:1,minWidth:0}}>{pages.map(([key,label])=><MenuItem key={key} value={key}>{label}</MenuItem>)}</TextField>}<TextField select label="Langue de l’aperçu" value={locale} onChange={e=>setLocale(e.target.value)} disabled={busy} sx={{flex:1,minWidth:0}}>{locales.map(l=><MenuItem key={l.code} value={l.code}>{l.label}</MenuItem>)}</TextField></Stack>
   {change.unit!=="article"&&pageId==="artworkDetail"&&<ArtworkPreviewPicker value={artworkId} onChange={setArtworkId}/>}
   <div><Button variant="contained" onClick={preview} disabled={busy||change.unit!=="article"&&pageId==="artworkDetail"&&!artworkId}>{busy?"Ouverture de l’aperçu…":"Ouvrir l’aperçu"}</Button></div>
  </Stack></Box>}
  {error&&<Alert severity="error" role="alert">{error}</Alert>}
  <Typography variant="body2" color="text.secondary">Disponible jusqu’au {new Date(change.expiresAt).toLocaleString("fr-FR",{timeZone:"UTC"})} UTC.</Typography>
  <Link href="/connectors/chatgpt" prefetch={false}>Retour aux connexions ChatGPT</Link>
 </Stack>;
}
