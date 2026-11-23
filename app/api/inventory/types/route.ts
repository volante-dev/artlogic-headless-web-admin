import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("types");
export const POST=inventoryHandler("createType");
