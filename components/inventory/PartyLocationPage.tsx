import {loadConfig} from "@/lib/config/env";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import type {InventoryPage} from "@/lib/inventory/client";
import {logisticsPaths,type LogisticsReferenceKind} from "@/lib/inventory/stock";
import {inventoryText as t} from "@/lib/inventory/messages";
import {inventoryCapabilities,InventoryUnavailable} from "./InventoryServer";
import {PartyLocationEditor} from "./PartyLocationEditor";
export function PartyLocationPage({kind}:{kind:LogisticsReferenceKind}){return <Suspense fallback={<p role="status">{t("checking")}</p>}><AuthorizedPage render={async({csrfCookie})=>{if(loadConfig().CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;const initial=(await inventoryBackend<InventoryPage>(logisticsPaths[kind])).body;return <PartyLocationEditor kind={kind} initial={initial} capabilities={capabilities} csrfCookie={csrfCookie}/>;}}/></Suspense>;}
