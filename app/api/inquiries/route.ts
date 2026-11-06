import {type NextRequest,NextResponse} from "next/server";
import {failure,privateHeaders} from "@/lib/bff/client";
import {listContactInquiries} from "@/lib/bff/contact";
export async function GET(request:NextRequest){try{return NextResponse.json(await listContactInquiries(request.nextUrl.searchParams),{headers:privateHeaders});}catch(error){return failure(error);}}
