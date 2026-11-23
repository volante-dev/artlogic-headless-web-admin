import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("origin");
export const PUT=inventoryHandler("updateOrigin");
