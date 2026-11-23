import {inventoryFetch,type InventoryPage} from "./client";
import {logisticsPaths,type InventoryUnit,type LogisticsReference,type LogisticsReferenceKind} from "./stock";
export async function inventoryLookup(kind:"unit"|LogisticsReferenceKind,ids:readonly string[]){
 const unique=[...new Set(ids)].filter(Boolean),items:(InventoryUnit|LogisticsReference)[]=[];
 for(let offset=0;offset<unique.length;offset+=100){const query=new URLSearchParams({limit:"100",ids:unique.slice(offset,offset+100).join(","),...(kind==="unit"?{includeArchived:"true"}:{})}),page=await inventoryFetch<InventoryPage>("/"+(kind==="unit"?"units":logisticsPaths[kind])+"?"+query);items.push(...page.items.map(item=>item.data as unknown as InventoryUnit|LogisticsReference));}
 return Object.fromEntries(items.map(item=>["unitId" in item?item.unitId:item.id,"unitRef" in item?item.unitRef:String(item.fields.name)]));
}
