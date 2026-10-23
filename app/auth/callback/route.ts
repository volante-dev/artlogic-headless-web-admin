import {NextRequest,NextResponse} from "next/server";
import {backendJson,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {cookieSettings,putCookie,clearCookie} from "@/lib/bff/cookies";
import {safeNext} from "@/lib/bff/allowlist";
import {loadConfig,stringValue} from "@/lib/config/env";
import type {components} from "@/lib/bff/generated";
export async function GET(request:NextRequest){
  let response:NextResponse;
  try{
    const transactionHandle=request.cookies.get(cookieSettings().names.transaction)?.value,code=request.nextUrl.searchParams.get("code"),state=request.nextUrl.searchParams.get("state");
    if(!transactionHandle||!code||!state||request.nextUrl.searchParams.has("error"))throw new BffError(401,"unauthorized");
    const result=await backendJson<components["schemas"]["LoginComplete"]>("callback",{body:{transactionHandle,code,state}});
    response=NextResponse.redirect(new URL(safeNext(result.next),stringValue(loadConfig(),"ADMIN_ORIGIN")),{status:303,headers:privateHeaders});
    putCookie(response,"session",result.sessionToken,result.expiresAt);putCookie(response,"csrf",result.csrfToken,result.expiresAt);
  }catch(error){response=failure(error);}
  clearCookie(response,"transaction");return response;
}
