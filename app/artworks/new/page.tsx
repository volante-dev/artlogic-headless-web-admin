import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {loadConfig} from "@/lib/config/env";
import {NativeRecordEditor,InventoryUnavailable} from "@/components/inventory/InventoryServer";
import {inventoryText as t} from "@/lib/inventory/messages";
export default function Page(){return <Suspense fallback={<p role="status">{t("processing")}</p>}><AuthorizedPage render={async({csrfCookie})=>{
 const config=loadConfig(),policy=(await readAdminLanguagePolicy());if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;
 return <NativeRecordEditor locales={policy.locales} defaultLocale={policy.defaultLocale} csrfCookie={csrfCookie}/>;
 }}/></Suspense>;}
