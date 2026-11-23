import "server-only";
import type {NextRequest} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {inventoryOperations,type InventoryOperation} from "./allowlist";
import {inventoryPath} from "./inventory-catalog";
import {requiredSession} from "./sync-runs";
import {privateHeaders,BffError,failure} from "./client";
type MediaOperation="mediaPreview"|"mediaPreviewHead"|"mediaOriginal"|"mediaOriginalHead"|"documentPdf"|"documentPdfHead";
export async function inventoryMediaRequest(operation:MediaOperation,request:NextRequest,params:Record<string,string>){
 const config=loadConfig(),path=inventoryPath(operation,params),route=inventoryOperations[operation],session=await requiredSession();
 if(request.nextUrl.searchParams.size)throw new BffError(400,"invalid_request");
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+path,{method:route.method,headers:{Accept:"image/webp, image/jpeg, image/png, application/pdf","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":session},cache:"no-store",redirect:"error",signal:AbortSignal.any([request.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))])});
  if(!response.ok){await response.body?.cancel();throw new BffError([401,403,404,429].includes(response.status)?response.status:503,({401:"unauthorized",403:"inventory_access_required",404:"inventory_not_found",429:"rate_limited"} as Record<number,string>)[response.status]??"service_unavailable");}
  const mime=response.headers.get("content-type")?.split(";")[0],length=response.headers.get("content-length"),preview=operation.startsWith("mediaPreview");
  const document=operation.startsWith("documentPdf");
  if(!mime||!(document?["application/pdf"]:preview?["image/webp"]:["image/webp","image/png","image/jpeg","application/pdf"]).includes(mime)||!length||! /^[1-9][0-9]*$/.test(length)||Number(length)>(document?5242880:26214400)||route.method!=="HEAD"&&!response.body){await response.body?.cancel();throw new BffError(503,"service_unavailable");}
  return new Response(route.method==="HEAD"?null:response.body,{status:200,headers:{...privateHeaders,"Content-Type":mime,"Content-Length":length,"Content-Security-Policy":"default-src 'none'; sandbox",...(!preview?{"Content-Disposition":"attachment"}:{})}});
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"service_unavailable");}
}
export const inventoryMediaHandler=(operation:Extract<InventoryOperation,MediaOperation>)=>async(request:NextRequest,context:{params:Promise<Record<string,string>>})=>{try{return await inventoryMediaRequest(operation,request,await context.params);}catch(error){return failure(error);}};
