import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {inventoryCapabilities,InventoryUnavailable} from "@/components/inventory/InventoryServer";
import {FiscalSettingsEditor} from "@/components/inventory/FiscalSettingsEditor";
import {inventorySellerProfile,inventoryTaxTreatments,inventoryDocumentSeries} from "@/lib/bff/inventory-finance";
import {BffError} from "@/lib/bff/client";
import {loadConfig,listValue} from "@/lib/config/env";
export default function Page(){return <Suspense><AuthorizedPage loginNext="/inventory/settings" render={async({csrfCookie})=>{
 const config=loadConfig();if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;if(capabilities.role!=="administrator")return <InventoryUnavailable status={403}/>;if(!capabilities.commands.includes("inventory_create_tax_treatment"))return <InventoryUnavailable status={503}/>;
 const [profile,taxes,series]=await Promise.all([inventorySellerProfile().catch(error=>{if(error instanceof BffError&&error.status===404)return null;throw error;}),inventoryTaxTreatments(new URLSearchParams({limit:"50"})),inventoryDocumentSeries(new URLSearchParams({limit:"50"}))]);return <FiscalSettingsEditor initial={{profile:profile?.body.data??null,taxes:taxes.body,series:series.body}} capabilities={capabilities} csrfCookie={csrfCookie} currencies={listValue(config,"INVENTORY_CURRENCIES_JSON")} locales={(await readAdminLanguagePolicy()).locales}/>;
 }}/></Suspense>;}
