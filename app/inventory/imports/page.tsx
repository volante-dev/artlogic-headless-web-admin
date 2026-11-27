import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {inventoryCapabilities,InventoryUnavailable} from "@/components/inventory/InventoryServer";
import {ImportReview} from "@/components/inventory/ImportReview";
import {inventoryImportBatch} from "@/lib/bff/inventory-imports";
import {loadConfig} from "@/lib/config/env";
import {BffError,uuidPattern} from "@/lib/bff/client";
async function Content({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const input=await searchParams;return <AuthorizedPage loginNext="/inventory/imports" render={async({csrfCookie})=>{
 const config=loadConfig();if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const caps=await inventoryCapabilities();if(typeof caps==="number")return <InventoryUnavailable status={caps}/>;if(caps.role!=="administrator")return <InventoryUnavailable status={403}/>;if(!config.BACKEND_PUBLIC_ORIGIN||!caps.importsAvailable||!caps.importColumns||!caps.importLimits)return <InventoryUnavailable status={503}/>;
 const id=input.batchId;if(id!==undefined&&(typeof id!=="string"||!uuidPattern.test(id)))throw new BffError(400,"invalid_request");
 return <ImportReview columns={caps.importColumns} limits={caps.importLimits} initial={typeof id==="string"?(await inventoryImportBatch(id)).body:null} csrfCookie={csrfCookie} locales={(await readAdminLanguagePolicy()).locales} defaultLocale={(await readAdminLanguagePolicy()).defaultLocale}/>;
 }}/>;}
export default function Page(props:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense><Content {...props}/></Suspense>;}
