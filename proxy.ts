import {NextResponse} from "next/server";
import {loadConfig,stringValue} from "./lib/config/env";
/** Form navigation must retain its Origin so the frontend can authenticate the POST origin. */
export function proxy(){return NextResponse.next({headers:{"Referrer-Policy":"strict-origin","Content-Security-Policy":"form-action 'self' "+stringValue(loadConfig(),"SITE_ORIGIN")}});}
export const config={matcher:"/presentation/:path*"};
