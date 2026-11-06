import {presentationHandler} from "@/lib/bff/presentation";
import {relayAdminPresentationAsset} from "@/lib/bff/presentation-media";
import {failure} from "@/lib/bff/client";
export const PUT=presentationHandler("assetUpload");
export async function GET(request:Request,{params}:{params:Promise<{assetId:string}>}){try{return await relayAdminPresentationAsset(request,(await params).assetId);}catch(error){return failure(error);}}
export async function HEAD(request:Request,context:{params:Promise<{assetId:string}>}){const response=await GET(request,context);await response.body?.cancel();return new Response(null,{status:response.status,headers:response.headers});}
