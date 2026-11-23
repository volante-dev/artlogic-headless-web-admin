import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("sales");
export const POST=inventoryHandler("recordSale");
