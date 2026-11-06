import type {NextRequest} from "next/server";
import {catalogDisplayProxy} from "@/lib/bff/artwork-catalog-display";
export function GET(request:NextRequest){return catalogDisplayProxy(request);}
export function PUT(request:NextRequest){return catalogDisplayProxy(request);}
