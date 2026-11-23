import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {inventoryCapabilities,InventoryUnavailable} from "@/components/inventory/InventoryServer";
import {CommercialEditor} from "@/components/inventory/CommercialEditor";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import {inventoryDeposits,inventorySales} from "@/lib/bff/inventory-finance";
import {inventoryUnit} from "@/lib/bff/inventory-stock";
import {BffError,uuidPattern} from "@/lib/bff/client";
import {loadConfig,listValue} from "@/lib/config/env";
import type {InventoryPage} from "@/lib/inventory/client";
async function Content({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const input=await searchParams;return <AuthorizedPage loginNext="/inventory/commerce" render={async({csrfCookie})=>{
 const config=loadConfig();if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;if(capabilities.role!=="administrator")return <InventoryUnavailable status={403}/>;if(!capabilities.commands.includes("inventory_record_sale"))return <InventoryUnavailable status={503}/>;
 if(input.unitId&&(typeof input.unitId!=="string"||!uuidPattern.test(input.unitId)))throw new BffError(400,"invalid_request");const [deposits,sales,unit]=await Promise.all([inventoryDeposits(new URLSearchParams({limit:"50"})),inventorySales(new URLSearchParams({limit:"50"})),typeof input.unitId==="string"?inventoryUnit(input.unitId):null]),partyIds=[...new Set([...deposits.body.items.flatMap(item=>[item.data.ownerId,item.data.counterpartyId]),...sales.body.items.map(item=>item.data.customerId)])],unitIds=[...new Set([...deposits.body.items.flatMap(item=>item.data.unitIds.slice(0,1)),...sales.body.items.flatMap(item=>item.data.units.slice(0,1).map(unit=>unit.unitId))])],references:Record<string,string>={};
 for(const [kind,ids]of [["party",partyIds],["unit",unitIds]] as const)for(let offset=0;offset<ids.length;offset+=100){const page=await inventoryBackend<InventoryPage>(kind==="party"?"parties":"unitList",{query:new URLSearchParams({ids:ids.slice(offset,offset+100).join(","),limit:"100",...(kind==="unit"?{includeArchived:"true"}:{})})});for(const item of page.body.items)references[kind+":"+item.resource.id]=kind==="party"?String((item.data as {fields:{name:string}}).fields.name):String((item.data as {unitRef:string}).unitRef);}
 return <CommercialEditor initial={{deposits:deposits.body,sales:sales.body,references,...(unit?{defaultUnit:unit.body.data}:{})}} capabilities={capabilities} csrfCookie={csrfCookie} currencies={listValue(config,"INVENTORY_CURRENCIES_JSON")}/>;
 }}/>;}

export default function Page(props:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense><Content {...props}/></Suspense>;}
