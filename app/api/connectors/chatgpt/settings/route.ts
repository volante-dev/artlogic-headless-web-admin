import {connectorMutation} from "@/lib/bff/connectors";
import type {NextRequest} from "next/server";
export const PATCH=(request:NextRequest)=>connectorMutation(request,"settings");
