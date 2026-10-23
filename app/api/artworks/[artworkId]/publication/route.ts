import {NextResponse,type NextRequest} from "next/server";
import {backendRequest,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {mutationProof,readMutationBody} from "@/lib/bff/csrf";
import type {AdminArtwork} from "@/lib/bff/artworks";
export async function PUT(request:NextRequest,{params}:{params:Promise<{artworkId:string}>}){try{
  const proof=mutationProof(request),body=await readMutationBody(request),ifMatch=request.headers.get("if-match");if(!ifMatch)throw new BffError(428,"precondition_required");
  if(!body||typeof body!=="object"||Array.isArray(body)||Object.keys(body).length!==1||!("publication" in body)||!["published","hidden"].includes(String(body.publication)))throw new BffError(400,"invalid_request");
  const result=await backendRequest<AdminArtwork>("publication",{...proof,body,ifMatch,params:await params});
  return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,ETag:result.headers.get("etag")!}});
}catch(error){return failure(error);}}
