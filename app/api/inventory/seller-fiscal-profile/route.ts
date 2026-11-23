import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const POST=inventoryHandler("createSellerProfile");
export const PUT=inventoryHandler("replaceSellerProfile");
export const GET=inventoryHandler("sellerFiscalProfile");
