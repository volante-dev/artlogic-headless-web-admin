"use client";
import Link from "next/link";
import Image from "next/image";
import {Button,IconButton,Typography} from "@mui/material";
import type {PointerEvent} from "react";
import type {CatalogItem} from "./useArtworkCatalogWorkspace";
import styles from "./ArtworkCatalogWorkspace.module.css";
export function CatalogThumbnail({art}:{art:CatalogItem}){return <div className={styles.image}>{art.media[0]?/* Browser proxy stays private; source dimensions prevent distortion. */<Image unoptimized src={"/api/media/"+art.media[0].id} alt="" width={art.media[0].width} height={art.media[0].height} loading="lazy" draggable={false}/>:<span>Sans image</span>}</div>;}
export function ArtworkCatalogGrid({items,layout,disabled,onPlace,onDrag,target}:{items:CatalogItem[];layout:"grid"|"masonry";disabled:boolean;onPlace:(a:CatalogItem)=>void;onDrag:(a:CatalogItem,e:PointerEvent<HTMLButtonElement>)=>void;target:string|null}){
 return <><div className={styles.dropZone} data-drop-kind="start" data-active={target==="start"}>Début du catalogue</div>{!items.length&&<p className={styles.empty}>Aucune œuvre publiée dans cette vue. Publiez une œuvre depuis la réserve pour composer la grille.</p>}<ol className={styles.grid} data-layout={layout} aria-label="Œuvres publiées">{items.map(a=><li key={a.id} className={styles.card} data-artwork-id={a.id} data-placement-id={a.id} data-flip-id={a.id} data-large={a.catalogLarge} data-target={target?.endsWith(":"+a.id)?target.split(":")[0]:undefined}>
 <CatalogThumbnail art={a}/><div className={styles.identity}><Typography component="h3" variant="body1"><Link href={"/artworks/"+a.id} prefetch={false}>{a.title??"Titre non renseigné"}</Link></Typography><Typography variant="body2" color="text.secondary">{a.artist??"Artiste non renseigné"}</Typography></div><div className={styles.actions}><IconButton className={styles.grip} disabled={disabled} aria-label={"Déplacer "+(a.title??a.sourceId)} onPointerDown={e=>onDrag(a,e)}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 4h1m4 0h1M7 10h1m4 0h1M7 16h1m4 0h1"/></svg></IconButton><Button size="small" disabled={disabled} onClick={()=>onPlace(a)}>Placer…</Button></div></li>)}</ol><div className={styles.dropZone} data-drop-kind="end" data-active={target==="end"}>Fin du catalogue complet</div></>;
}
