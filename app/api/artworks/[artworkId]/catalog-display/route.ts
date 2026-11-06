import type {NextRequest} from "next/server";
import {catalogDisplayProxy} from "@/lib/bff/artwork-catalog-display";
type Context={params:Promise<{artworkId:string}>};
export async function GET(request:NextRequest,{params}:Context){return catalogDisplayProxy(request,(await params).artworkId);}
export async function PUT(request:NextRequest,{params}:Context){return catalogDisplayProxy(request,(await params).artworkId);}
