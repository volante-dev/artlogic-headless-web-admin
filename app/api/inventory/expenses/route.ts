import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("expenses");
export const POST=inventoryHandler("recordExpense");
