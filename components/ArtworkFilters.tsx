import Link from "next/link";
import styles from "./Artwork.module.css";
export function ArtworkFilters({query,publication,availability}:{query?:string;publication?:string;availability?:string}){return <form action="/artworks" className={styles.filters}>
  <div><label htmlFor="artwork-search">Rechercher par titre ou artiste</label><input id="artwork-search" type="search" name="q" defaultValue={query} maxLength={200}/></div>
  <div><label htmlFor="publication-filter">Publication</label><select id="publication-filter" name="publication" defaultValue={publication??""}><option value="">Toutes</option><option value="hidden">Masquées</option><option value="published">Publiées</option></select></div>
  <div><label htmlFor="availability-filter">Disponibilité</label><select id="availability-filter" name="availability" defaultValue={availability??""}><option value="">Toutes</option><option value="available">Disponibles</option><option value="withdrawn">Retirées</option></select></div>
  <button type="submit">Rechercher</button><Link href="/artworks" prefetch={false}>Réinitialiser</Link>
</form>;}
