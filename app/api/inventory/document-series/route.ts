import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const POST=inventoryHandler("createDocumentSeries");
export const GET=inventoryHandler("documentSeries");
