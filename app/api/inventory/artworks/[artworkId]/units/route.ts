import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("units");
export const POST=inventoryHandler("createUnit");
