import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("medium");
import {deleteMedia} from "@/lib/bff/inventory-publication";
export const DELETE=deleteMedia;
