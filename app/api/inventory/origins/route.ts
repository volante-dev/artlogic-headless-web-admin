import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("origins");
export const POST=inventoryHandler("createOrigin");
