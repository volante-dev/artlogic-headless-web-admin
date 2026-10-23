import "server-only";
import {backendJson,backendRequest,BffError} from "./client";
import {requiredSession} from "./sync-runs";
import type {components} from "./generated";
export type AdminArtwork=components["schemas"]["AdminArtwork"];
export type ArtworkPage=components["schemas"]["AdminArtworkPage"];
export type EventPage=components["schemas"]["PublicationEventPage"];
export function artworkQuery(input:URLSearchParams,history=false):URLSearchParams{
  const allowed=history?["limit","cursor"]:["q","publication","availability","limit","cursor"];
  for(const key of input.keys())if(!allowed.includes(key)||input.getAll(key).length!==1)throw new BffError(400,"invalid_request");
  return input;
}
export async function listArtworks(query=new URLSearchParams()){return backendJson<ArtworkPage>("artworkList",{session:await requiredSession(),query:artworkQuery(query)});}
export async function getArtwork(artworkId:string){return backendRequest<AdminArtwork>("artworkDetail",{session:await requiredSession(),params:{artworkId}});}
export async function publicationHistory(artworkId:string,query=new URLSearchParams()){return backendJson<EventPage>("publicationEvents",{session:await requiredSession(),params:{artworkId},query:artworkQuery(query,true)});}
