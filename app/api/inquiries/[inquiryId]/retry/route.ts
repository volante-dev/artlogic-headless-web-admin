import {type NextRequest,NextResponse} from "next/server";
import {backendRequest,failure,privateHeaders} from "@/lib/bff/client";
import {mutationProof} from "@/lib/bff/csrf";
import {readContactRetryBody,retryHeaders} from "@/lib/bff/contact";
export async function POST(request:NextRequest,{params}:{params:Promise<{inquiryId:string}>}){try{const proof=mutationProof(request),{inquiryId}=await params,headers=retryHeaders(request,inquiryId),body=await readContactRetryBody(request),result=await backendRequest("retryContactInquiry",{...proof,...headers,params:{inquiryId},body});return NextResponse.json(result.body,{status:result.status,headers:privateHeaders});}catch(error){return failure(error);}}
