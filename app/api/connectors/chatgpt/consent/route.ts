import {connectorMutation} from "@/lib/bff/connectors";
import type {NextRequest} from "next/server";
export const POST=(request:NextRequest)=>connectorMutation(request,"consent");
