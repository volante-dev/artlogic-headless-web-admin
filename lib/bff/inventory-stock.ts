import "server-only";
import {inventoryBackend} from "./inventory-catalog";
import type {components} from "../inventory/contract-types.generated";
export async function inventoryUnit(unitId:string){return inventoryBackend<components["schemas"]["InventoryUnitLogisticsReadResult"]>("unit",{params:{unitId}});}
export async function inventoryUnitOperations(unitId:string,cursor?:string){return inventoryBackend<components["schemas"]["InventoryLogisticsOperationPage"]>("logisticsOperations",{query:new URLSearchParams({unitId,...(cursor?{cursor}:{})})});}
