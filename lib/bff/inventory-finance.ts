import "server-only";
import {inventoryBackend} from "./inventory-catalog";
import type {components} from "../inventory/contract-types.generated";
/** Session-specific, uncached finance reads. No elevated fallback or shared result cache. */
export async function inventoryUnitFinance(unitId:string){return inventoryBackend<components["schemas"]["InventoryUnitFinanceReadResult"]>("unitFinance",{params:{unitId}});}
export async function inventoryExpenses(unitId?:string){return inventoryBackend<components["schemas"]["InventoryExpensePage"]>("expenses",{query:new URLSearchParams(unitId?{unitId}:{})});}
export const inventorySellerProfile=()=>inventoryBackend<components["schemas"]["InventoryFiscalProfileReadResult"]>("sellerFiscalProfile");
export const inventoryTaxTreatments=(query?:URLSearchParams)=>inventoryBackend<components["schemas"]["InventoryTaxTreatmentViewPage"]>("taxTreatments",{query});
export const inventoryDocumentSeries=(query?:URLSearchParams)=>inventoryBackend<components["schemas"]["InventoryDocumentSeriesViewPage"]>("documentSeries",{query});
export const inventoryDeposits=(query?:URLSearchParams)=>inventoryBackend<components["schemas"]["InventoryDepositPage"]>("deposits",{query});
export const inventoryDeposit=(operationId:string)=>inventoryBackend<components["schemas"]["InventoryDepositReadResult"]>("deposit",{params:{operationId}});
export const inventorySales=(query?:URLSearchParams)=>inventoryBackend<components["schemas"]["InventorySalePage"]>("sales",{query});
export const inventorySale=(saleId:string)=>inventoryBackend<components["schemas"]["InventorySaleReadResult"]>("sale",{params:{saleId}});
export const inventoryLedger=(query?:URLSearchParams)=>inventoryBackend<components["schemas"]["InventoryLedgerEntryPage"]>("financeLedger",{query});
