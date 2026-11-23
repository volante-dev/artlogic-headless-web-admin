import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const POST=inventoryHandler("prepareDocument");
export const GET=inventoryHandler("documents");
