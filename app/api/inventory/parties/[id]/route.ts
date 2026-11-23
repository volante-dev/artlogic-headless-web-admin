import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("party");
export const PUT=inventoryHandler("updateParty");
