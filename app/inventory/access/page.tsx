import Link from "next/link";
import {inventoryText as t} from "@/lib/inventory/messages";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {AccessEditor} from "@/components/inventory/AccessEditor";
import {inventoryCapabilities,InventoryUnavailable} from "@/components/inventory/InventoryServer";
import {inventoryAccess} from "@/lib/bff/inventory-access";
import {loadConfig} from "@/lib/config/env";
export default function Page(){return <Suspense><AuthorizedPage loginNext="/inventory/access" render={async({csrfCookie})=>{if(loadConfig().CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;if(capabilities.role!=="administrator")return <section><h1>{t("accessTitle")}</h1><p role="alert">{t("accessAdministratorRequired")}</p><Link href="/artworks" prefetch={false}>{t("accessBackArtworks")}</Link></section>;if(!capabilities.commands.includes("inventory_set_assignment"))return <InventoryUnavailable status={503}/>;return <AccessEditor initial={(await inventoryAccess()).body} capabilities={capabilities} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
