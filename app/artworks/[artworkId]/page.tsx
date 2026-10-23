import {Suspense} from "react";
import Link from "next/link";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ArtworkPreview} from "@/components/ArtworkPreview";
import {PublicationControl} from "@/components/PublicationControl";
import {getArtwork} from "@/lib/bff/artworks";
import styles from "@/components/Artwork.module.css";
export default function Page({params}:{params:Promise<{artworkId:string}>}){return <Suspense fallback={<main><p role="status">Chargement de l’œuvre…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{
  const result=await getArtwork((await params).artworkId),art=result.body;return <><Link href="/artworks" prefetch={false}>Toutes les œuvres</Link><h1>{art.title??"Titre non renseigné"}</h1><div className={styles.detail}><div><ArtworkPreview art={art}/><dl className={styles.metadata}>{[["Artiste",art.artist],["Année",art.year],["Technique",art.medium],["Dimensions",art.dimensions]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value??"Non renseigné"}</dd></div>)}</dl><p>Dernière synchronisation : {new Date(art.lastSyncedAt).toLocaleString("fr-FR")}</p>{art.warnings.length>0&&<p>Certaines images n’ont pas pu être actualisées. La dernière copie disponible est affichée.</p>}</div><div><PublicationControl initial={art} initialEtag={result.headers.get("etag")!} csrfCookie={csrfCookie}/></div></div></>;
}}/></Suspense>;}
