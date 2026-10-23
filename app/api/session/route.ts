import {NextResponse} from "next/server";
import {backendJson,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {sessionHandle} from "@/lib/bff/cookies";
import type {components} from "@/lib/bff/generated";
export async function GET(){
  try{
    const session=await sessionHandle();if(!session)throw new BffError(401,"unauthorized");
    return NextResponse.json(await backendJson<components["schemas"]["AdminSession"]>("session",{session}),{headers:privateHeaders});
  }catch(error){return failure(error);}
}
