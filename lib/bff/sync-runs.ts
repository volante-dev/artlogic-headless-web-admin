import "server-only";
import {backendJson,BffError} from "./client";
import {sessionHandle} from "./cookies";
import type {components} from "./generated";
export type SyncRun=components["schemas"]["SyncRun"];
export type SyncRunPage=components["schemas"]["SyncRunPage"];
export async function requiredSession(){const session=await sessionHandle();if(!session)throw new BffError(401,"unauthorized");return session;}
export function syncQuery(input:URLSearchParams):URLSearchParams{
  for(const key of input.keys())if(!["limit","cursor"].includes(key)||input.getAll(key).length!==1)throw new BffError(400,"invalid_request");
  const limit=input.get("limit"),cursor=input.get("cursor");
  if(limit&&(!/^\d+$/.test(limit)||Number(limit)<1||Number(limit)>100)||cursor&&cursor.length>4096)throw new BffError(400,"invalid_request");
  return input;
}
export async function listSyncRuns(query=new URLSearchParams()){return backendJson<SyncRunPage>("syncList",{session:await requiredSession(),query:syncQuery(query)});}
export async function getSyncRun(runId:string){return backendJson<SyncRun>("syncDetail",{session:await requiredSession(),params:{runId}});}
