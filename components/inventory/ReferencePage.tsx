import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {loadConfig} from "@/lib/config/env";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import {referencePaths,type InventoryPage,type ReferenceKind} from "@/lib/inventory/client";
import {inventoryText as t} from "@/lib/inventory/messages";
import {inventoryCapabilities,InventoryUnavailable} from "./InventoryServer";
import {ReferenceEditor} from "./ReferenceEditor";
export function ReferencePage({kind}:{kind:ReferenceKind}){return <Suspense fallback={<p role="status">{t("processing")}</p>}><AuthorizedPage render={async({csrfCookie})=>{
 const config=loadConfig();if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const policy=(await readAdminLanguagePolicy()),capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;
 const initial=(await inventoryBackend<InventoryPage>(referencePaths[kind])).body;return <ReferenceEditor key={kind} kind={kind} initial={initial} capabilities={capabilities} locales={policy.locales} defaultLocale={policy.defaultLocale} csrfCookie={csrfCookie}/>;
 }}/></Suspense>;}
