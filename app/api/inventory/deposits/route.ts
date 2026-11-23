import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("deposits");
export const POST=inventoryHandler("recordDeposit");
