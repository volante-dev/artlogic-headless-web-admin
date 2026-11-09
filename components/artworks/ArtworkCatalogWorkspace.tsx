"use client";
import {usePublicationFeedback} from "../PublicationFeedback";
import {useRef,useState} from "react";
import {Alert,Button,Typography} from "@mui/material";
import {ArtworkCatalogModeControl} from "../ArtworkCatalogModeControl";
import {ArtworkCatalogGrid} from "./ArtworkCatalogGrid";
import {ArtworkReserveList} from "./ArtworkReserveList";
import {ArtworkPlacementDialog} from "./ArtworkPlacementDialog";
import {useArtworkCatalogWorkspace,type Workspace,type CatalogItem,type Destination} from "./useArtworkCatalogWorkspace";
import {useArtworkCatalogDrag} from "./useArtworkCatalogDrag";
import {useArtworkCatalogMotion} from "./useArtworkCatalogMotion";
import styles from "./ArtworkCatalogWorkspace.module.css";
export function ArtworkCatalogWorkspace({initial,etag,query,csrfCookie}:{initial:Workspace;etag:string;query:string;csrfCookie:string}){
 const feedback=usePublicationFeedback();
 const state=useArtworkCatalogWorkspace(initial,etag,query,csrfCookie),root=useRef<HTMLDivElement>(null),[selected,setSelected]=useState<CatalogItem|null>(null),[intent,setIntent]=useState(""),[lastSaved,setLastSaved]=useState<CatalogItem|null>(null);
 useArtworkCatalogMotion(root,state.data.catalogRevision);
 async function place(art:CatalogItem,d:Destination,keyboard=false){setIntent((art.title??art.sourceId)+" · "+({start:"début",end:"fin",before:"avant l’œuvre choisie",after:"après l’œuvre choisie"}[d.kind]));const execute=async()=>{const ok=await state.place(art,d,keyboard);if(ok){setSelected(null);setLastSaved(art);requestAnimationFrame(()=>{const card=root.current?.querySelector<HTMLElement>(`[data-artwork-id="${art.id}"]`);(card?.querySelector<HTMLElement>("button,a")??root.current?.querySelector<HTMLElement>("[data-recent-artwork]"))?.focus();});}return ok;};if(art.effectivePublic)await execute();else await feedback.run(async()=>{const ok=await execute();return {message:ok?"Œuvre publiée à l’emplacement choisi.":"La publication n’est pas confirmée. Relisez le catalogue avant une nouvelle tentative.",severity:ok?"success":"error"};});}
 const disabled=state.disabled||feedback.publishing;
 const drag=useArtworkCatalogDrag(root,(art,d)=>void place(art,d),disabled||!state.data.orderingAllowed);
 const published=state.data.published,reserve=state.data.reserve,targetId=drag.target?.split(":")[1],targetName=published?.items.find(a=>a.id===targetId)?.title??"l’œuvre choisie";
 return <div ref={root} className={styles.workspace} data-dragging={drag.dragging}><ArtworkCatalogModeControl csrfCookie={csrfCookie} onConfirmed={()=>void state.refreshLayout()}/>
 {!state.data.orderingAllowed&&<Alert severity="info">Revenez à la vue complète pour réordonner. Le bouton Publier ajoute toujours à la fin du catalogue.</Alert>}
 <div role="status" aria-live="polite" className={styles.status}>{drag.target?"Emplacement : "+(drag.target.startsWith("before")?"avant « "+targetName+" »":drag.target.startsWith("after")?"après « "+targetName+" »":drag.target==="start"?"début du catalogue":"fin du catalogue"):state.message}</div>
 {state.status!=="idle"&&state.status!=="saving"&&<Alert severity="warning">{intent&&<p>Votre intention : {intent}</p>}{state.status==="forbidden"?<Button href="/auth/login">Se reconnecter</Button>:<Button onClick={()=>{setSelected(null);void state.reload();}}>Relire le catalogue</Button>}</Alert>}
 {lastSaved&&<a data-recent-artwork href={"/artworks/"+lastSaved.id}>Ouvrir la fiche de {lastSaved.title??lastSaved.sourceId}</a>}
 <a href="#artwork-reserve" className={styles.reserveJump}>Aller aux œuvres non publiées</a><div className={styles.columns}><section className={styles.published} aria-labelledby="published-title" aria-busy={state.status==="saving"}><div className={styles.heading}><Typography component="h2" variant="h2" id="published-title">Publiées</Typography><span>{published?.total??0}{published?.total!==published?.unfilteredTotal?" / "+published?.unfilteredTotal:""}</span></div><Typography variant="body2" color="text.secondary">L’ordre est appliqué au site après chaque déplacement confirmé.</Typography><ArtworkCatalogGrid items={published?.items??[]} layout={state.data.layout} disabled={disabled||!state.data.orderingAllowed} onPlace={setSelected} onDrag={drag.start} target={drag.target}/>{published?.nextCursor&&<Button disabled={disabled} onClick={()=>void state.more("published")}>Charger les œuvres publiées suivantes</Button>}</section>
 <aside id="artwork-reserve" className={styles.reserve} aria-labelledby="reserve-title"><div className={styles.heading}><Typography component="h2" variant="h3" id="reserve-title">Non publiées</Typography><span>{reserve?.total??0}{reserve?.total!==reserve?.unfilteredTotal?" / "+reserve?.unfilteredTotal:""}</span></div><Typography variant="body2" color="text.secondary">Publiez en fin de grille ou choisissez un emplacement.</Typography>{reserve?.items.length?<ArtworkReserveList items={reserve.items} disabled={disabled} orderingAllowed={state.data.orderingAllowed} onPublish={a=>void place(a,{kind:"end"},true)} onPlace={setSelected} onDrag={drag.start}/>:<p className={styles.empty}>Aucune œuvre non publiée dans cette vue.</p>}{reserve?.nextCursor&&<Button disabled={disabled} onClick={()=>void state.more("reserve")}>Charger les œuvres non publiées suivantes</Button>}</aside></div>
 <ArtworkPlacementDialog key={selected?.id??"closed"} art={selected} busy={state.status==="saving"} onClose={()=>setSelected(null)} onPlace={async d=>{if(selected)await place(selected,d,true);}}/>
 </div>;
}
