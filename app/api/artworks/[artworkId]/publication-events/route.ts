import {NextResponse,type NextRequest} from "next/server";
import {publicationHistory} from "@/lib/bff/artworks";
import {failure,privateHeaders} from "@/lib/bff/client";
export async function GET(request:NextRequest,{params}:{params:Promise<{artworkId:string}>}){try{return NextResponse.json(await publicationHistory((await params).artworkId,request.nextUrl.searchParams),{headers:privateHeaders});}catch(error){return failure(error);}}
