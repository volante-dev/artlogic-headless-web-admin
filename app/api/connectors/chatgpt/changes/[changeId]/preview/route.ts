import type {NextRequest} from "next/server";
import {connectorPreview} from "@/lib/bff/connectors";
export const POST=async(request:NextRequest,{params}:{params:Promise<{changeId:string}>})=>connectorPreview(request,(await params).changeId);
