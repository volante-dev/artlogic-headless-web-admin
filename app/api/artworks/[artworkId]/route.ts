import {NextResponse} from "next/server";
import {getArtwork} from "@/lib/bff/artworks";
import {failure,privateHeaders} from "@/lib/bff/client";
export async function GET(_request:Request,{params}:{params:Promise<{artworkId:string}>}){try{
  const result=await getArtwork((await params).artworkId);return NextResponse.json(result.body,{headers:{...privateHeaders,ETag:result.headers.get("etag")!}});
}catch(error){return failure(error);}}
