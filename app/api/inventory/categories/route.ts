import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("categories");
export const POST=inventoryHandler("createCategory");
