import {connection} from "next/server";
import Link from "next/link";
import {backendJson,BffError} from "@/lib/bff/client";
import {sessionHandle,cookieSettings} from "@/lib/bff/cookies";
import {loadConfig,stringValue} from "@/lib/config/env";
import type {components} from "@/lib/bff/generated";
import {AdminShell} from "./AdminShell";
import {SessionNotice} from "./SessionNotice";
export async function AuthorizedPage({render}:{render:(context:{csrfCookie:string})=>Promise<React.ReactNode>}){
  await connection();const session=await sessionHandle(),csrfCookie=cookieSettings().names.csrf;
  if(!session)return <main id="contenu"><SessionNotice status={401} csrfCookie={csrfCookie}/></main>;
  let admin:components["schemas"]["AdminSession"],content:React.ReactNode;
  try{
    admin=await backendJson<components["schemas"]["AdminSession"]>("session",{session});
  }catch(error){const status=error instanceof BffError?error.status:503;
    return <main id="contenu"><SessionNotice status={status} csrfCookie={csrfCookie} hasSession/></main>;
  }
  try{content=await render({csrfCookie});}catch(error){const status=error instanceof BffError?error.status:503;
    if(status===401||status===403)return <main id="contenu"><SessionNotice status={status} csrfCookie={csrfCookie} hasSession/></main>;
    content=<section><h1>{status===404?"Ressource introuvable":status===400?"Recherche invalide":"Contenu momentanément indisponible"}</h1><p role="alert">{status===404?"Cette ressource ne figure pas dans votre catalogue.":status===400?"Recommencez la recherche avec de nouveaux critères.":"Rechargez la page pour réessayer."}</p><Link prefetch={false} href="/">Revenir à l’accueil</Link></section>;
  }
  return <AdminShell siteName={stringValue(loadConfig(),"SITE_NAME")} displayName={admin.displayName} csrfCookie={csrfCookie}>{content}</AdminShell>;
}
