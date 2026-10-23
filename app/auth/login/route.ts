import {NextRequest,NextResponse} from "next/server";
import {backendJson,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {putCookie} from "@/lib/bff/cookies";
import {safeNext} from "@/lib/bff/allowlist";
import type {components} from "@/lib/bff/generated";
export async function GET(request:NextRequest){
  try{
    let next:string;try{next=safeNext(request.nextUrl.searchParams.get("next")??"/");}catch{throw new BffError(400,"invalid_request");}
    const result=await backendJson<components["schemas"]["LoginStart"]>("start",{body:{next}});
    const target=new URL(result.authorizeUrl);if(!["https:","http:"].includes(target.protocol)||target.username||target.password)throw new BffError(503,"service_unavailable");
    const response=NextResponse.redirect(target,{status:303,headers:privateHeaders});putCookie(response,"transaction",result.transactionHandle,result.expiresAt);return response;
  }catch(error){return failure(error);}
}
