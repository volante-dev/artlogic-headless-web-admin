import {NextRequest,NextResponse} from "next/server";
import {backendJson,failure,privateHeaders,BffError} from "@/lib/bff/client";
import {mutationProof,readMutationBody} from "@/lib/bff/csrf";
export async function POST(request:NextRequest){try{
 const proof=mutationProof(request),body=await readMutationBody(request);
 if(!body||typeof body!=="object"||!("expectedVersion" in body)||!Number.isSafeInteger(body.expectedVersion)||Number(body.expectedVersion)<1||Object.keys(body).length!==1)throw new BffError(400,"invalid_request");
 await backendJson<void>("confirmBinding",{...proof,body});return new NextResponse(null,{status:204,headers:privateHeaders});
}catch(error){return failure(error);}}
