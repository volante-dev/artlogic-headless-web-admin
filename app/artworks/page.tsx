import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {ArtworkFilters} from "@/components/ArtworkFilters";
import {ArtworkCatalogWorkspace} from "@/components/artworks/ArtworkCatalogWorkspace";
import type {Workspace} from "@/components/artworks/useArtworkCatalogWorkspace";
import {backendRequest,BffError} from "@/lib/bff/client";
import {requiredSession} from "@/lib/bff/sync-runs";
import {resourceVersion} from "@/lib/resource-version";
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense fallback={<main><p role="status">Chargement des œuvres…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{
 const input=await searchParams,query=new URLSearchParams();for(const [key,value]of Object.entries(input)){if(Array.isArray(value)||!["q","publication","availability","limit","cursor"].includes(key))throw new BffError(400,"invalid_request");if(value&&key!=="cursor")query.set(key,value);}
 const result=await backendRequest<Workspace>("catalogWorkspace",{session:await requiredSession(),query}),etag=resourceVersion(result.headers);if(!etag)throw new BffError(503,"service_unavailable");
 return <><h1>Œuvres</h1><p>Composez le catalogue et choisissez les œuvres à présenter sur le site.</p><ArtworkFilters query={query.get("q")??undefined} publication={query.get("publication")??undefined} availability={query.get("availability")??undefined}/><ArtworkCatalogWorkspace key={query.toString()} initial={result.body} etag={etag} query={query.toString()} csrfCookie={csrfCookie}/></>;
 }}/></Suspense>;}
