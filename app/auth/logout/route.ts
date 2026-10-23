import {NextRequest,NextResponse} from "next/server";
import {backendJson,failure,privateHeaders} from "@/lib/bff/client";
import {clearCookie} from "@/lib/bff/cookies";
import {mutationProof,requireEmptyBody} from "@/lib/bff/csrf";
export async function POST(request:NextRequest){
  try{
    const proof=mutationProof(request);await requireEmptyBody(request);await backendJson<void>("logout",proof);
    const response=new NextResponse(null,{status:204,headers:privateHeaders});clearCookie(response,"session");clearCookie(response,"csrf");clearCookie(response,"transaction");return response;
  }catch(error){return failure(error);}
}
