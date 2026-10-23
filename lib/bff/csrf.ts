import "server-only";
import {timingSafeEqual} from "node:crypto";
import type {NextRequest} from "next/server";
import {loadConfig,stringValue} from "../config/env";
import {cookieSettings} from "./cookies";
import {BffError} from "./client";
export function mutationProof(request:NextRequest):{session:string;csrf:string}{
  if(request.headers.get("origin")!==stringValue(loadConfig(),"ADMIN_ORIGIN"))throw new BffError(403,"csrf_invalid");
  const {names}=cookieSettings(),session=request.cookies.get(names.session)?.value;
  if(!session)throw new BffError(401,"unauthorized");
  const stored=request.cookies.get(names.csrf)?.value??"",csrf=request.headers.get("x-csrf-token")??"";
  if(!/^[A-Za-z0-9_-]{43,128}$/.test(csrf)||!/^[A-Za-z0-9_-]{43,128}$/.test(stored)||stored.length!==csrf.length||!timingSafeEqual(Buffer.from(stored),Buffer.from(csrf)))throw new BffError(403,"csrf_invalid");
  return {session,csrf};
}
export async function requireEmptyBody(request:Request):Promise<void>{
  const reader=request.body?.getReader();if(!reader)return;
  const part=await reader.read();await reader.cancel();if(!part.done&&part.value.byteLength>0)throw new BffError(400,"invalid_request");
}
export async function readMutationBody(request:Request):Promise<unknown>{
  if(request.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(400,"invalid_request");
  const reader=request.body?.getReader();if(!reader)throw new BffError(400,"invalid_request");const chunks:Uint8Array[]=[];let bytes=0;
  try{for(;;){const chunk=await reader.read();if(chunk.done)break;bytes+=chunk.value.length;if(bytes>16384)throw new BffError(400,"invalid_request");chunks.push(chunk.value);}return JSON.parse(Buffer.concat(chunks).toString("utf8"));}
  catch{throw new BffError(400,"invalid_request");}finally{await reader.cancel();}
}
