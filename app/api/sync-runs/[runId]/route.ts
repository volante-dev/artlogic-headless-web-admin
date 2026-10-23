import {NextResponse} from "next/server";
import {failure,privateHeaders} from "@/lib/bff/client";
import {getSyncRun} from "@/lib/bff/sync-runs";
export async function GET(_request:Request,{params}:{params:Promise<{runId:string}>}){try{return NextResponse.json(await getSyncRun((await params).runId),{headers:privateHeaders});}catch(error){return failure(error);}}
