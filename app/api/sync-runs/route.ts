import {NextResponse,type NextRequest} from "next/server";
import {backendRequest,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {listSyncRuns,type SyncRun} from "@/lib/bff/sync-runs";
import {mutationProof,requireEmptyBody} from "@/lib/bff/csrf";
export async function GET(request:NextRequest){try{return NextResponse.json(await listSyncRuns(request.nextUrl.searchParams),{headers:privateHeaders});}catch(error){return failure(error);}}
export async function POST(request:NextRequest){try{
  const proof=mutationProof(request);await requireEmptyBody(request);
  const key=request.headers.get("idempotency-key");if(!key)throw new BffError(400,"invalid_request");
  const result=await backendRequest<SyncRun>("syncCreate",{...proof,idempotencyKey:key});
  return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,Location:"/api/sync-runs/"+result.body.id}});
}catch(error){return failure(error);}}
