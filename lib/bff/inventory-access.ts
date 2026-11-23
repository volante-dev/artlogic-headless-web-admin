import "server-only";
import {inventoryBackend,inventoryHandler} from "./inventory-catalog";
import type {components} from "../inventory/contract-types.generated";
export const inventoryAccess=()=>inventoryBackend<components["schemas"]["InventoryAssignmentPage"]>("assignments");
export const listInventoryAccess=inventoryHandler("assignments");
export const setInventoryAssignment=inventoryHandler("setAssignment");
export const replaceInventoryAssignment=inventoryHandler("replaceAssignment");
export const revokeInventoryAssignment=inventoryHandler("revokeAssignment");
