import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("artwork");
export const DELETE=inventoryHandler("deleteArtwork");
