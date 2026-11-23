import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("parties");
export const POST=inventoryHandler("createParty");
