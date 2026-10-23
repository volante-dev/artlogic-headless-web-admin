import {NextResponse,type NextRequest} from "next/server";
import {listArtworks} from "@/lib/bff/artworks";
import {failure,privateHeaders} from "@/lib/bff/client";
export async function GET(request:NextRequest){try{return NextResponse.json(await listArtworks(request.nextUrl.searchParams),{headers:privateHeaders});}catch(error){return failure(error);}}
