import type {NextRequest} from "next/server";
import {catalogWorkspaceProxy} from "@/lib/bff/artwork-catalog-workspace";
export async function PUT(request:NextRequest,{params}:{params:Promise<{artworkId:string}>}){return catalogWorkspaceProxy(request,(await params).artworkId);}
