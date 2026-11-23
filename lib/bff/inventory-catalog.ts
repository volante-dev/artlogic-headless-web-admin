import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import {inventorySchemaDocument} from "../inventory/schemas.generated";
import {inventoryOperations as generatedOperations} from "../inventory/operations.generated";
import {inventoryOperations,type InventoryOperation} from "./allowlist";
import {loadConfig,stringValue,numberValue} from "../config/env";
import {BffError,failure,privateHeaders,uuidPattern} from "./client";
import {requiredSession} from "./sync-runs";
import {mutationProof} from "./csrf";
import {boundedBytes} from "./presentation";
import {inventoryError} from "./inventory-errors";
import {resourceVersion} from "../resource-version";
const ajv=new Ajv2020({strict:false,allErrors:false});addFormats(ajv);
const validators=new Map<string,ReturnType<typeof ajv.compile>>();
function validate(schema:string,value:unknown){let validator=validators.get(schema);if(!validator){validator=ajv.compile({...inventorySchemaDocument,$id:undefined,$ref:"#/components/schemas/"+schema});validators.set(schema,validator);}return validator(value);}
export const inventoryTag=/^"[1-9][0-9]{0,19}"$/;
export function inventoryPath(operation:InventoryOperation,params:Record<string,string>={}){const route=inventoryOperations[operation];return route.path.replace(/\{(\w+)\}/g,(_match,key)=>{const id=params[key],numeric=route.path.includes("/types/");if(!id||!(numeric?/^[1-9][0-9]*$/.test(id)&&Number.isSafeInteger(Number(id)):uuidPattern.test(id)))throw new BffError(400,"invalid_request");return encodeURIComponent(id);});}
export function inventoryQuery(operation:InventoryOperation,query=new URLSearchParams()){
 const op=generatedOperations.find(item=>item.id===inventoryOperations[operation].operationId)!;
 for(const key of query.keys())if(!op.query.some(value=>value===key)||query.getAll(key).length!==1)throw new BffError(400,"invalid_request");
 if(query.toString().length>4096||query.has("limit")&&(!/^[1-9][0-9]*$/.test(query.get("limit")!)||Number(query.get("limit"))>100))throw new BffError(400,"invalid_request");return query;
}
export async function inventoryBackend<T>(operation:InventoryOperation,input:{request?:NextRequest;params?:Record<string,string>;query?:URLSearchParams}={}):Promise<{body:T;status:number;headers:Headers}>{
 const route=inventoryOperations[operation],op=generatedOperations.find(item=>item.id===route.operationId)!,mutation=!["GET","HEAD"].includes(route.method),config=loadConfig();
 if(op.scopes.some(scope=>scope==="site.inventory.finance")||operation==="medium"&&(input.query??input.request?.nextUrl.searchParams)?.get("projection")==="finance")await requireInventoryFinance();
 if(mutation&&!input.request)throw new BffError(400,"invalid_request");const proof=mutation?mutationProof(input.request!):{session:await requiredSession()};
 const headers=new Headers({Accept:"application/json","X-BFF-Key":stringValue(config,"BFF_SERVICE_KEY"),"X-Admin-Session":proof.session});if("csrf" in proof)headers.set("X-CSRF-Token",proof.csrf);
 if(op.headers.some(header=>header==="If-Match")){const revision=input.request!.headers.get("if-match");if(!revision)throw new BffError(428,"inventory_precondition_required");if(!inventoryTag.test(revision))throw new BffError(400,"invalid_request");headers.set("If-Match",revision);}
 if(op.headers.some(header=>header==="Idempotency-Key")){const key=input.request!.headers.get("idempotency-key");if(!key||! /^[\x21-\x7e]{16,128}$/.test(key))throw new BffError(400,"invalid_request");headers.set("Idempotency-Key",key);}
 let body:string|undefined;if(mutation){if(input.request!.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(415,"unsupported_media_type");const bytes=await boundedBytes(input.request!.body,1048576);let parsed:unknown;try{parsed=JSON.parse(bytes.toString("utf8"));}catch{throw new BffError(400,"invalid_request");}if(!op.bodySchema||!validate(op.bodySchema,parsed))throw new BffError(400,"inventory_invalid_input");body=JSON.stringify(parsed);headers.set("Content-Type","application/json");}
 const query=inventoryQuery(operation,input.query??input.request?.nextUrl.searchParams),path=inventoryPath(operation,input.params);
 try{
  const response=await fetch(stringValue(config,"BACKEND_URL").replace(/\/$/,"")+path+(query.size?"?"+query:""),{method:route.method,headers,body,cache:"no-store",redirect:"error",signal:input.request?AbortSignal.any([input.request.signal,AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))]):AbortSignal.timeout(numberValue(config,"REQUEST_TIMEOUT_MS"))});
  if(response.headers.get("content-type")?.split(";")[0]!=="application/json"){await response.body?.cancel();throw new BffError(503,"service_unavailable");}
  let value:unknown;try{value=JSON.parse((await boundedBytes(response.body,response.ok?8*1024*1024:65536)).toString("utf8"));}catch{throw new BffError(503,"service_unavailable");}
  if(!response.ok){const safe=inventoryError(response.status,value);throw new BffError(safe.status,safe.code);}
  const version=resourceVersion(response.headers),resultHeaders=new Headers(privateHeaders);if(version&&inventoryTag.test(version)){resultHeaders.set("ETag",version);resultHeaders.set("X-Resource-Version",version);}
  return {body:value as T,status:response.status,headers:resultHeaders};
 }catch(error){if(error instanceof BffError)throw error;throw new BffError(503,"service_unavailable");}
}
/** Resolve the session's current server role before decoding a financial request or returning its errors. */
export async function requireInventoryFinance(){const value=await inventoryBackend<{role:string}>("capabilities");if(value.body.role!=="administrator")throw new BffError(403,"inventory_finance_required");}
export const inventoryHandler=(operation:InventoryOperation)=>async(request:NextRequest,context:{params:Promise<Record<string,string>>})=>{try{const result=await inventoryBackend(operation,{request,params:await context.params});return NextResponse.json(result.body,{status:result.status,headers:result.headers});}catch(error){return failure(error);}};
