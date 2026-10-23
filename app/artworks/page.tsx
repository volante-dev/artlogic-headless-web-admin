import {Suspense} from "react";
import Link from "next/link";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ArtworkFilters} from "@/components/ArtworkFilters";
import {ArtworkTable} from "@/components/ArtworkTable";
import {listArtworks,type ArtworkPage} from "@/lib/bff/artworks";
import {BffError} from "@/lib/bff/client";
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense fallback={<main><p role="status">Chargement des œuvres…</p></main>}><AuthorizedPage render={async()=>{
  const input=await searchParams,query=new URLSearchParams();for(const [key,value] of Object.entries(input)){if(Array.isArray(value))throw new BffError(400,"invalid_request");if(value)query.set(key,value);}
  let page:ArtworkPage,reset=false;try{page=await listArtworks(query);}catch(error){if(!(error instanceof BffError)||error.code!=="catalog_changed")throw error;query.delete("cursor");page=await listArtworks(query);reset=true;}
  const next=new URLSearchParams(query);if(page.nextCursor)next.set("cursor",page.nextCursor);
  return <><h1>Œuvres</h1><p>Recherchez une œuvre, prévisualisez-la, puis choisissez sa visibilité sur le site.</p><ArtworkFilters query={query.get("q")??undefined} publication={query.get("publication")??undefined} availability={query.get("availability")??undefined}/>{reset&&<p role="status">Le catalogue a changé. La recherche reprend à la première page.</p>}<ArtworkTable items={page.items}/>{page.nextCursor&&<Link href={"/artworks?"+next.toString()} prefetch={false}>Page suivante</Link>}</>;
}}/></Suspense>;}
