import type {NextRequest} from "next/server";
import {inventoryHandler} from "@/lib/bff/inventory-catalog";
const handler=inventoryHandler("recordOwnerSettlement");
export async function POST(request:NextRequest,context:{params:Promise<{operationId:string}>}){const {operationId}=await context.params;return handler(request,{params:Promise.resolve({depositOperationId:operationId})});}
