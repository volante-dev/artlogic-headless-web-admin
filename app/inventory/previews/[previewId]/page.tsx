import {Suspense} from "react";
import Link from "next/link";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {PublicationPreview,type InventoryPreview} from "@/components/inventory/PublicationPreview";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import {BffError} from "@/lib/bff/client";
import {configuredLocalePolicy,loadConfig} from "@/lib/config/env";
import {inventoryText as t} from "@/lib/inventory/messages";
export const metadata={referrer:"no-referrer" as const};
export default function Page({params}:{params:Promise<{previewId:string}>}){return <Suspense fallback={<p role="status">{t("previewLoading")}</p>}><AuthorizedPage render={async()=>{
 const policy=configuredLocalePolicy(loadConfig());try{const value=(await inventoryBackend<InventoryPreview>("readPreview",{params:await params})).body;return <><Link href={"/artworks/"+value.artworkId} prefetch={false}>{t("openSaved")}</Link><PublicationPreview value={value} defaultLocale={policy.defaultLocale} locales={policy.locales}/></>;}catch(error){if(error instanceof BffError&&[403,404,412].includes(error.status))return <section><h1>{t("publicationPreview")}</h1><p role="alert">{t("previewUnavailable")}</p><Link href="/artworks" prefetch={false}>{t("allArtworks")}</Link></section>;throw error;}
 }}/></Suspense>;}
