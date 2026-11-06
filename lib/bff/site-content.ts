import "server-only";
import {backendRequest,BffError} from "./client";
import {requiredSession} from "./sync-runs";
import type {components} from "./generated";
export type SiteContent=components["schemas"]["SiteContentAdmin"];
export type SiteContentPatch=components["schemas"]["SiteContentPatch"];
export const siteContentEtag=/^"site-content-[1-9][0-9]*-[a-f0-9]{64}"$/;
export async function getSiteContent(){const result=await backendRequest<SiteContent>("siteContentRead",{session:await requiredSession()});if(!siteContentEtag.test(result.headers.get("etag")??""))throw new BffError(503,"service_unavailable");return result;}
export async function readSiteContentBody(request:Request){
  if(request.headers.get("content-type")?.split(";")[0]!=="application/json")throw new BffError(415,"unsupported_media_type");
  const reader=request.body?.getReader();if(!reader)throw new BffError(400,"invalid_request");const chunks:Uint8Array[]=[];let size=0;
  try{for(;;){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>262144)throw new BffError(413,"payload_too_large");chunks.push(part.value);}return JSON.parse(Buffer.concat(chunks).toString("utf8"));}
  catch(error){if(error instanceof BffError)throw error;throw new BffError(400,"invalid_request");}finally{await reader.cancel();}
}
