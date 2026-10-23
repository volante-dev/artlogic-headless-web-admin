import Link from "next/link";
import {Suspense} from "react";
import {connection} from "next/server";
import {backendJson,BffError} from "@/lib/bff/client";
import {cookieSettings,sessionHandle} from "@/lib/bff/cookies";
import {loadConfig,stringValue} from "@/lib/config/env";
import {AdminShell} from "@/components/AdminShell";
import {SessionNotice} from "@/components/SessionNotice";
import type {components} from "@/lib/bff/generated";
async function Administration(){
  await connection();const config=loadConfig(),session=await sessionHandle(),csrfCookie=cookieSettings().names.csrf;
  if(!session)return <main id="contenu"><SessionNotice status={401} csrfCookie={csrfCookie}/></main>;
  let admin:components["schemas"]["AdminSession"];
  try{admin=await backendJson("session",{session});}catch(error){return <main id="contenu"><SessionNotice status={error instanceof BffError?error.status:503} csrfCookie={csrfCookie} hasSession/></main>;}
  return <AdminShell siteName={stringValue(config,"SITE_NAME")} displayName={admin.displayName} csrfCookie={csrfCookie}><p className="eyebrow">Votre catalogue</p><h1>Choisir les œuvres visibles sur votre site</h1><p>Importez les œuvres depuis Artlogic, puis choisissez celles que vous souhaitez publier.</p><div className="actions"><Link prefetch={false} className="button" href="/sync-runs">Synchroniser le catalogue</Link><Link prefetch={false} href="/artworks">Consulter les œuvres</Link></div></AdminShell>;
}
export default function Page(){return <Suspense fallback={<main><p role="status">Vérification de la session…</p></main>}><Administration/></Suspense>;}
