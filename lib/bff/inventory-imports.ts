import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {inventoryBackend,inventoryPath,inventoryQuery,requireInventoryFinance} from "./inventory-catalog";
import {requiredSession} from "./sync-runs";
import {failure,privateHeaders,BffError} from "./client";
import {boundedBytes} from "./presentation";
import type {components} from "../inventory/contract-types.generated";
export const inventoryImportBatch=(batchId:string)=>inventoryBackend<components["schemas"]["InventoryBatchReadResult"]>("importBatch",{params:{batchId}});
export async function inventoryImportTransfer(request:NextRequest,context:{params:Promise<Record<string,string>>}){
 try{const config=loadConfig();if(!config.BACKEND_PUBLIC_ORIGIN)throw new BffError(503,"service_unavailable");const origin=new URL(stringValue(config,"BACKEND_PUBLIC_ORIGIN")),params=await context.params,result=await inventoryBackend<components["schemas"]["InventoryImportTransfer"]>("createImportTransfer",{request,params});
  const uploadBaseUrl=origin.origin+"/v1/admin/inventory/imports/"+encodeURIComponent(params.batchId!)+"/uploads/"+encodeURIComponent(result.body.uploadId);
  return NextResponse.json({...result.body,uploadBaseUrl},{status:result.status,headers:result.headers});
 }catch(error){return failure(error);}
}
export async function inventoryImportTemplate(request:NextRequest){
 try{await requireInventoryFinance();const config=loadConfig(),session=await requiredSession(),query=inventoryQuery("importTemplate",request.nextUrl.searchParams),response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+inventoryPath("importTemplate")+(query.size?"?"+query:""),{headers:{"X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":session,Accept:"text/csv"},cache:"no-store",redirect:"error",signal:AbortSignal.any([request.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))])});
  if(!response.ok||response.headers.get("content-type")?.split(";")[0]!=="text/csv"){await response.body?.cancel();throw new BffError([401,403,404].includes(response.status)?response.status:503,"service_unavailable");}
  const bytes=await boundedBytes(response.body,1048576);return new Response(new Uint8Array(bytes),{headers:{...privateHeaders,"Content-Type":"text/csv; charset=utf-8","Content-Disposition":'attachment; filename="inventory-template.csv"'}});
 }catch(error){return failure(error);}
}
