import {NextResponse,type NextRequest} from "next/server";
import {backendRequest,BffError,failure,privateHeaders} from "@/lib/bff/client";
import {mutationProof} from "@/lib/bff/csrf";
import {getSiteContent,readSiteContentBody,siteContentEtag} from "@/lib/bff/site-content";
export async function GET(){try{const result=await getSiteContent();return NextResponse.json(result.body,{headers:{...privateHeaders,ETag:result.headers.get("etag")!,"X-Resource-Version":result.headers.get("etag")!}});}catch(error){return failure(error);}}
export async function PATCH(request:NextRequest){try{
  const proof=mutationProof(request),ifMatch=request.headers.get("if-match");if(!ifMatch)throw new BffError(428,"precondition_required");if(!siteContentEtag.test(ifMatch))throw new BffError(400,"invalid_request");
  const body=await readSiteContentBody(request),result=await backendRequest("siteContentUpdate",{...proof,body,ifMatch});
  if(!siteContentEtag.test(result.headers.get("etag")??""))throw new BffError(503,"service_unavailable");
  return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,ETag:result.headers.get("etag")!,"X-Resource-Version":result.headers.get("etag")!}});
}catch(error){return failure(error);}}
