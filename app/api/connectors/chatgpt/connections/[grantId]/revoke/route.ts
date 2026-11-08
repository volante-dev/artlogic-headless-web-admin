import {connectorMutation} from "@/lib/bff/connectors";
import type {NextRequest} from "next/server";
export async function POST(request:NextRequest,{params}:{params:Promise<{grantId:string}>}){return connectorMutation(request,"revoke",(await params).grantId);}
