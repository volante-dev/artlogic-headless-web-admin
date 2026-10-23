import "server-only";
import {cookies} from "next/headers";
import type {NextResponse} from "next/server";
import {loadConfig,stringValue,isLoopback} from "../config/env";
export function cookieSettings(){
  const config=loadConfig(),origin=new URL(stringValue(config,"ADMIN_ORIGIN")),secure=origin.protocol==="https:";
  if(!secure&&!(config.DATA_MODE==="mock"&&["local","test"].includes(String(config.DEPLOYMENT_ENV))&&isLoopback(origin.hostname)))throw new Error("secure_cookies_required");
  const prefix=secure?"__Host-":"";
  return {secure,names:{session:prefix+"artlogic_admin_session",transaction:prefix+"artlogic_oauth_transaction",csrf:prefix+"artlogic_csrf"}};
}
export async function sessionHandle(){return (await cookies()).get(cookieSettings().names.session)?.value;}
export function putCookie(response:NextResponse,kind:"session"|"transaction"|"csrf",value:string,expiresAt:string):void{
  const {secure,names}=cookieSettings();
  response.cookies.set(names[kind],value,{secure,httpOnly:kind!=="csrf",sameSite:kind==="csrf"?"strict":"lax",path:"/",expires:new Date(expiresAt)});
}
export function clearCookie(response:NextResponse,kind:"session"|"transaction"|"csrf"):void{
  const {secure,names}=cookieSettings();response.cookies.set(names[kind],"",{secure,httpOnly:kind!=="csrf",sameSite:kind==="csrf"?"strict":"lax",path:"/",maxAge:0});
}
