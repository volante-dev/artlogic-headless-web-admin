import "server-only";
import {NextResponse,type NextRequest} from "next/server";
import {loadConfig} from "@/lib/config/env";
import {backendRequest,BffError,failure,privateHeaders,uuidPattern} from "./client";
import {mutationProof,readMutationBody,requireEmptyBody} from "./csrf";
import {requiredSession} from "./sync-runs";
export const connectorScopes=["site.read","site.draft","site.publish","site.sync","site.connector.manage"] as const;
export type ConnectorScope=typeof connectorScopes[number];
export interface ConsentView {requestId:string;siteName:string;environment:string;clientName:string;requestedScopes:ConnectorScope[];allowedScopes:ConnectorScope[];expiresAt:string;csrfProtected:true}
export interface ConnectorSettingsView {enabled:boolean;authorizationEpoch:string;revision:string}
export interface ConnectionView {id:string;actorLabel:string;isOwn:boolean;scopes:ConnectorScope[];status:"active"|"revoked"|"expired";consentedAt:string}
export interface ConnectionPage {items:ConnectionView[];nextCursor:string|null}
export function requireConnector(){if(loadConfig().MCP_ENABLED!=="true")throw new BffError(404,"not_found");}
export async function connectorConsent(requestId:string){requireConnector();if(!uuidPattern.test(requestId))throw new BffError(400,"invalid_request");return (await backendRequest<ConsentView>("connectorConsentRead",{session:await requiredSession(),params:{requestId}})).body;}
export async function connectorOverview(cursor?:string){requireConnector();if(cursor&&cursor.length>2048)throw new BffError(400,"invalid_request");const session=await requiredSession();const [settings,connections]=await Promise.all([backendRequest<ConnectorSettingsView>("connectorSettings",{session}),backendRequest<ConnectionPage>("connectorConnections",{session,query:cursor?new URLSearchParams({cursor}):undefined})]);return {settings:settings.body,connections:connections.body};}
export async function connectorMutation(request:NextRequest,kind:"consent"|"settings"|"revoke",grantId?:string){
 try{requireConnector();if(request.nextUrl.searchParams.size)throw new BffError(400,"invalid_request");const proof=mutationProof(request);
  if(kind==="revoke"){if(!grantId||!uuidPattern.test(grantId))throw new BffError(400,"invalid_request");await requireEmptyBody(request);await backendRequest("connectorRevoke",{...proof,params:{grantId}});return new NextResponse(null,{status:204,headers:privateHeaders});}
  const data=await readMutationBody(request);if(!data||typeof data!=="object"||Array.isArray(data))throw new BffError(400,"invalid_request");const body=data as Record<string,unknown>;
  if(kind==="settings"){if(Object.keys(body).length!==1||typeof body.enabled!=="boolean")throw new BffError(400,"invalid_request");const tag=request.headers.get("if-match");if(!tag)throw new BffError(428,"precondition_required");const result=await backendRequest<ConnectorSettingsView>("connectorSettingsUpdate",{...proof,ifMatch:tag,body});return NextResponse.json(result.body,{headers:{...privateHeaders,ETag:'"'+result.body.revision+'"'}});}
  if(Object.keys(body).some(k=>!["requestId","decision","grantedScopes"].includes(k))||typeof body.requestId!=="string"||!uuidPattern.test(body.requestId)||!["approve","deny"].includes(String(body.decision))||!Array.isArray(body.grantedScopes)||body.grantedScopes.length>5||body.grantedScopes.some(s=>!connectorScopes.includes(s as ConnectorScope)))throw new BffError(400,"invalid_request");
  const result=await backendRequest<{redirectUrl:string}>("connectorConsentDecision",{...proof,params:{requestId:body.requestId},body:{decision:body.decision,grantedScopes:body.grantedScopes}});
  // Destination comes only from the backend's registered OAuth callback, never from browser input.
  const destination=new URL(result.body.redirectUrl);if(destination.protocol!=="https:"||destination.username||destination.password||destination.hash)throw new BffError(503,"dependency_unavailable");
  return NextResponse.json({redirectUrl:destination.href},{headers:privateHeaders});
 }catch(error){return failure(error);}
}
export type ConnectorChangeView=import("./connector-contracts.generated").components["schemas"]["Change"];
export async function connectorChange(changeId:string){requireConnector();if(!uuidPattern.test(changeId))throw new BffError(400,"invalid_request");return (await backendRequest<ConnectorChangeView>("connectorChangeRead",{session:await requiredSession(),params:{changeId}})).body;}
export async function connectorPreview(request:NextRequest,changeId:string){
 try{requireConnector();if(!uuidPattern.test(changeId)||request.nextUrl.searchParams.size)throw new BffError(400,"invalid_request");const proof=mutationProof(request),body=await readMutationBody(request) as Record<string,unknown>;
  if(!body||typeof body!=="object"||Array.isArray(body)||Object.keys(body).some(k=>!["expectedRevision","locale","pageId","artworkId"].includes(k))||typeof body.expectedRevision!=="string"||! /^[1-9][0-9]{0,19}$/.test(body.expectedRevision)||typeof body.locale!=="string"||body.locale.length>35||body.pageId!==undefined&&(typeof body.pageId!=="string"||body.pageId.length>64)||body.artworkId!==undefined&&(typeof body.artworkId!=="string"||!uuidPattern.test(body.artworkId)))throw new BffError(400,"invalid_request");
  const result=await backendRequest<{exchangeCode:string;exchangeUrl:string;expiresAt:string}>("connectorChangePreview",{...proof,params:{changeId},body});
  const config=loadConfig(),origin=config.SITE_ORIGIN;if(typeof origin!=="string"||result.body.exchangeUrl!==origin+"/preview/exchange")throw new BffError(503,"dependency_unavailable");
  return NextResponse.json(result.body,{status:201,headers:privateHeaders});
 }catch(error){return failure(error);}
}

export type ConnectorAuditSummary=import("./connector-contracts.generated").components["schemas"]["AuditSummary"];
export type ConnectorOperationDetail=import("./connector-contracts.generated").components["schemas"]["OperationDetail"];
export interface ConnectorAuditPage {items:ConnectorAuditSummary[];nextCursor:string|null}
function auditCursor(cursor?:string){if(cursor!==undefined&&(typeof cursor!=="string"||!cursor||cursor.length>2048))throw new BffError(400,"invalid_request");return cursor?new URLSearchParams({cursor}):undefined;}
export async function connectorAuditList(cursor?:string){requireConnector();return (await backendRequest<ConnectorAuditPage>("connectorAuditList",{session:await requiredSession(),query:auditCursor(cursor)})).body;}
export async function connectorAuditDetail(operationId:string,cursor?:string){requireConnector();if(!uuidPattern.test(operationId))throw new BffError(400,"invalid_request");return (await backendRequest<ConnectorOperationDetail>("connectorAuditDetail",{session:await requiredSession(),params:{operationId},query:auditCursor(cursor)})).body;}
