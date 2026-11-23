import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import {inventoryUnit,inventoryUnitOperations} from "@/lib/bff/inventory-stock";
import {inventoryUnitFinance} from "@/lib/bff/inventory-finance";
import type {InventoryArtwork,InventoryPage,InventoryRead} from "@/lib/inventory/client";
import {inventoryUnitReferences,type InventoryLogisticsOperation} from "@/lib/inventory/stock";
import {inventoryText as t} from "@/lib/inventory/messages";
import {loadConfig,listValue,configuredLocalePolicy} from "@/lib/config/env";
import {inventoryCapabilities,InventoryUnavailable} from "./InventoryServer";
import {UnitPanel} from "./UnitPanel";
export function UnitPage({unitId}:{unitId:string}){return <Suspense fallback={<p role="status">{t("stockLoading")}</p>}><AuthorizedPage render={async({csrfCookie})=>{
 const config=loadConfig();if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;
 if(!capabilities.commands.some(command=>command==="inventory_update_unit_logistics"))return <InventoryUnavailable status={404}/>;
 const financial=capabilities.role==="administrator"&&capabilities.commands.includes("inventory_record_acquisition"),[current,history,active,finance]=await Promise.all([inventoryUnit(unitId),inventoryUnitOperations(unitId),inventoryBackend<InventoryPage>("logisticsOperations",{query:new URLSearchParams({unitId,status:"active",limit:"50"})}),financial?inventoryUnitFinance(unitId):undefined]),unit=current.body.data,operations=[...history.body.items,...active.body.items].map(item=>item.data as InventoryLogisticsOperation);
 const [record,refs]=await Promise.all([inventoryBackend<InventoryRead>("artwork",{params:{artworkId:unit.artworkId}}),Promise.all(inventoryUnitReferences(unit,operations).map(async ref=>{const value=await inventoryBackend<InventoryRead>(ref.kind,{params:{id:ref.id}});return [ref.kind+":"+ref.id,String((value.body.data as {fields:{name:string}}).fields.name)] as const;}))]),artwork=record.body.data as InventoryArtwork,locale=configuredLocalePolicy(config).defaultLocale,workLabel=artwork.workRef+" · "+(artwork.draft.title[locale]??Object.values(artwork.draft.title)[0]??"");
 return <UnitPanel key={unitId} initial={{unit,history:history.body,active:active.body.items.map(item=>item.data as InventoryLogisticsOperation),...(finance?{finance:finance.body.data}:{}),references:Object.fromEntries(refs)}} capabilities={capabilities} csrfCookie={csrfCookie} currencies={financial?listValue(config,"INVENTORY_CURRENCIES_JSON"):[]} workLabel={workLabel}/>;
 }}/></Suspense>;}
