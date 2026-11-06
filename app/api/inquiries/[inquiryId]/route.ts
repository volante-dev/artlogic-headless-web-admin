import {type NextRequest,NextResponse} from "next/server";
import {failure,privateHeaders} from "@/lib/bff/client";
import {readContactInquiry} from "@/lib/bff/contact";
export async function GET(request:NextRequest,{params}:{params:Promise<{inquiryId:string}>}){try{const result=await readContactInquiry((await params).inquiryId,request.nextUrl.searchParams);return NextResponse.json(result.body,{headers:{...privateHeaders,ETag:result.headers.get("etag")!,"X-Resource-Version":result.headers.get("etag")!}});}catch(error){return failure(error);}}
