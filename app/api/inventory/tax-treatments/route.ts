import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const POST=inventoryHandler("createTaxTreatment");
export const GET=inventoryHandler("taxTreatments");
