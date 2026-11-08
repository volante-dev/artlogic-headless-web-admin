import type {NextRequest} from "next/server";
import {catalogWorkspaceProxy} from "@/lib/bff/artwork-catalog-workspace";
export const GET=(request:NextRequest)=>catalogWorkspaceProxy(request);
