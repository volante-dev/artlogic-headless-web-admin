import {inventoryHandler} from "@/lib/bff/inventory-catalog";
export const GET=inventoryHandler("expense");
export const PUT=inventoryHandler("replaceExpense");
