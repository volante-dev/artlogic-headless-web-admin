import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("artist");
export const PUT=inventoryHandler("updateArtist");
