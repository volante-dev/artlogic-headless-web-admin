import {cache} from "react";
import Link from "next/link";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import {BffError} from "@/lib/bff/client";
import {inventoryText as t} from "@/lib/inventory/messages";
import type {InventoryArtwork,InventoryCapabilities,InventoryPage,InventoryRead} from "@/lib/inventory/client";
import {InventoryCatalog} from "./InventoryCatalog";
import {RecordEditor} from "./RecordEditor";
export const inventoryCapabilities=cache(async()=>{try{return (await inventoryBackend<InventoryCapabilities>("capabilities")).body;}catch(error){if(error instanceof BffError&&[403,404,503].includes(error.status))return error.status;throw error;}});
export function InventoryUnavailable({status}:{status:number}){return <section><h1>{t("title")}</h1><p role="alert">{t(status===403?"accessRequired":"unavailable")}</p><Link href="/" prefetch={false}>{t("cancel")}</Link></section>;}
export async function NativeInventoryCatalog({input,defaultLocale}:{input:Record<string,string|string[]|undefined>;defaultLocale:string}){
 const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;const query=new URLSearchParams();
 for(const [key,value]of Object.entries(input)){if(Array.isArray(value))throw new BffError(400,"invalid_request");if(value)query.set(key,value);}
 const initial=(await inventoryBackend<InventoryPage>("artworks",{query})).body;return <InventoryCatalog key={query.toString()} initial={initial} capabilities={capabilities} defaultLocale={defaultLocale} initialQuery={query.toString()}/>;
}
export async function NativeRecordEditor({artworkId,locales,defaultLocale,csrfCookie}:{artworkId?:string;locales:readonly {code:string;label:string}[];defaultLocale:string;csrfCookie:string}){
 const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;
 if(!artworkId)return <RecordEditor capabilities={capabilities} locales={locales} defaultLocale={defaultLocale} csrfCookie={csrfCookie}/>;
 const params={artworkId},[record,notes,units]=await Promise.all([inventoryBackend<InventoryRead>("artwork",{params}),inventoryBackend<InventoryRead>("privateNotes",{params}),inventoryBackend<InventoryPage>("units",{params})]);
 const artwork=record.body.data as InventoryArtwork,unitPage=artwork.archived?(await inventoryBackend<InventoryPage>("units",{params,query:new URLSearchParams({includeArchived:"true"})})).body:units.body;
 const ids=[...new Set(unitPage.items.map(item=>(item.data as {locationId:string|null}).locationId).filter((id):id is string=>Boolean(id)))],locations=ids.length?(await inventoryBackend<InventoryPage>("locations",{query:new URLSearchParams({ids:ids.join(","),limit:"100"})})).body.items:[],locationNames=Object.fromEntries(locations.map(item=>[String(item.resource.id),String((item.data as {fields:{name:string}}).fields.name)]));
 return <RecordEditor key={artworkId} initial={record.body.data as InventoryArtwork} initialNotes={(notes.body.data as {notes:string|null}).notes} initialLocationNames={locationNames} initialUnits={unitPage} unitCount={artwork.archived?0:units.body.items.length} hasMoreUnits={!artwork.archived&&Boolean(units.body.nextCursor)} capabilities={capabilities} locales={locales} defaultLocale={defaultLocale} csrfCookie={csrfCookie}/>;
}
