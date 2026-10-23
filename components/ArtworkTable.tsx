import Link from "next/link";
import Image from "next/image";
import type {AdminArtwork} from "@/lib/bff/artworks";
import styles from "./Artwork.module.css";
export function ArtworkTable({items}:{items:AdminArtwork[]}){
  if(!items.length)return <p>Aucune œuvre ne correspond à cette recherche. Modifiez les filtres ou lancez une synchronisation.</p>;
  return <ul className={styles.list}>{items.map(art=><li key={art.id}><div className={styles.thumb}>{art.media[0]?<Image unoptimized src={"/api/media/"+art.media[0].id} width={art.media[0].width} height={art.media[0].height} alt=""/>:<span>Sans image</span>}</div><div className={styles.title}><Link href={"/artworks/"+art.id} prefetch={false}>{art.title??"Titre non renseigné"}</Link><p>{art.artist??"Artiste non renseigné"}</p></div><div className={styles.state}><span>{art.availability==="withdrawn"?"Retirée d’Artlogic":"Disponible"}</span><strong>{art.publication==="published"?"Publiée":"Masquée"}</strong></div></li>)}</ul>;
}
