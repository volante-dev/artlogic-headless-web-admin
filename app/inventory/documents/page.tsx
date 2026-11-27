import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {inventoryCapabilities,InventoryUnavailable} from "@/components/inventory/InventoryServer";
import {DocumentEditor} from "@/components/inventory/DocumentEditor";
import {inventoryDocuments,inventoryDocument} from "@/lib/bff/inventory-documents";
import {inventorySales,inventorySellerProfile,inventoryTaxTreatments,inventoryDocumentSeries} from "@/lib/bff/inventory-finance";
import {inventoryBackend} from "@/lib/bff/inventory-catalog";
import {BffError,uuidPattern} from "@/lib/bff/client";
import {loadConfig,listValue} from "@/lib/config/env";
import type {components} from "@/lib/inventory/contract-types.generated";
import type {InventoryPage} from "@/lib/inventory/client";
async function Content({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const input=await searchParams;return <AuthorizedPage loginNext="/inventory/documents" render={async({csrfCookie})=>{
 const config=loadConfig();if(config.CATALOG_SOURCE!=="standalone")return <InventoryUnavailable status={404}/>;const capabilities=await inventoryCapabilities();if(typeof capabilities==="number")return <InventoryUnavailable status={capabilities}/>;if(capabilities.role!=="administrator")return <InventoryUnavailable status={403}/>;if(!capabilities.commands.includes("inventory_prepare_document"))return <InventoryUnavailable status={503}/>;
 for(const key of ["documentId","saleId"])if(input[key]&&(typeof input[key]!=="string"||!uuidPattern.test(input[key])))throw new BffError(400,"invalid_request");
 const [documents,profile,taxes,series,sales,selected,sale]=await Promise.all([inventoryDocuments(new URLSearchParams({limit:"50"})),inventorySellerProfile().catch(error=>{if(error instanceof BffError&&error.status===404)return null;throw error;}),inventoryTaxTreatments(new URLSearchParams({limit:"50"})),inventoryDocumentSeries(new URLSearchParams({limit:"50"})),inventorySales(new URLSearchParams({limit:"50"})),typeof input.documentId==="string"?inventoryDocument(input.documentId):null,typeof input.saleId==="string"?inventoryBackend<components["schemas"]["InventorySaleReadResult"]>("sale",{params:{saleId:input.saleId}}):null]),partyIds=[...new Set([...documents.body.items.flatMap(item=>item.data.customerId?[item.data.customerId]:[]),...sales.body.items.map(item=>item.data.customerId),...(sale?[sale.body.data.customerId]:[])])],unitIds=sale?.body.data.units.map(unit=>unit.unitId)??[],partyNames:Record<string,string>={},unitNames:Record<string,string>={};
 for(const [kind,ids,names]of [["party",partyIds,partyNames],["unit",unitIds,unitNames]] as const)for(let offset=0;offset<ids.length;offset+=100){const page=await inventoryBackend<InventoryPage>(kind==="party"?"parties":"unitList",{query:new URLSearchParams({ids:ids.slice(offset,offset+100).join(","),limit:"100",...(kind==="unit"?{includeArchived:"true"}:{})})});for(const item of page.body.items)names[String(item.resource.id)]=kind==="party"?String((item.data as {fields:{name:string}}).fields.name):String((item.data as {unitRef:string}).unitRef);}
 return <DocumentEditor initial={{documents:documents.body,profile:profile?.body.data??null,taxes:taxes.body,series:series.body,sales:sales.body,selected:selected?.body.data??null,sale:sale?.body.data??null,partyNames,unitNames}} capabilities={capabilities} csrfCookie={csrfCookie} currencies={listValue(config,"INVENTORY_CURRENCIES_JSON")} locales={(await readAdminLanguagePolicy()).locales}/>;
 }}/>;}

export default function Page(props:{searchParams:Promise<Record<string,string|string[]|undefined>>}){return <Suspense><Content {...props}/></Suspense>;}
