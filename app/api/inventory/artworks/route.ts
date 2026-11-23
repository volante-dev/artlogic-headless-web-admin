import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("artworks");
export const POST=inventoryHandler("createArtwork");
