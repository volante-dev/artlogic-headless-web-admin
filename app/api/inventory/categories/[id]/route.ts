import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("category");
export const PUT=inventoryHandler("updateCategory");
