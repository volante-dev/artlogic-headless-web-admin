import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("artists");
export const POST=inventoryHandler("createArtist");
