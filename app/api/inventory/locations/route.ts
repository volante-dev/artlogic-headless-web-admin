import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("locations");
export const POST=inventoryHandler("createLocation");
