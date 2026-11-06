import {BindingConfirmation} from "@/components/BindingConfirmation";
import Link from "next/link";
import {AdminIcon} from "@/components/AdminIcon";
import {Suspense} from "react";
import {connection} from "next/server";
import {backendJson,BffError} from "@/lib/bff/client";
import {cookieSettings,sessionHandle} from "@/lib/bff/cookies";
import {loadConfig,stringValue} from "@/lib/config/env";
import {AdminShell} from "@/components/AdminShell";
import {SessionNotice} from "@/components/SessionNotice";
import type {components} from "@/lib/bff/generated";
type LoginQuery=Promise<{[key:string]:string|string[]|undefined}>;
async function Administration({searchParams}:{searchParams:LoginQuery}){
  await connection();const config=loadConfig(),session=await sessionHandle(),csrfCookie=cookieSettings().names.csrf;
  const auth=(await searchParams).auth,status=auth==="403"?403:auth==="503"?503:401;
  if(!session)return <main id="contenu"><SessionNotice status={status} csrfCookie={csrfCookie}/></main>;
  let admin:components["schemas"]["AdminSession"];
  try{admin=await backendJson("session",{session});}catch(error){return <main id="contenu"><SessionNotice status={error instanceof BffError?error.status:503} csrfCookie={csrfCookie} hasSession/></main>;}
  if(admin.bindingConfirmation)return <BindingConfirmation siteName={stringValue(config,"SITE_NAME")} version={admin.bindingConfirmation.version} csrfCookie={csrfCookie}/>;
  return <AdminShell formsEnabled={loadConfig().FORMS_ENABLED==="true"} editorialEnabled={config.EDITORIAL_ENABLED==="true"} siteName={stringValue(config,"SITE_NAME")} displayName={admin.displayName} csrfCookie={csrfCookie}><div className="home-intro"><h1>Choisir les œuvres visibles sur votre site</h1><p>Importez les œuvres depuis Artlogic, puis choisissez celles que vous souhaitez publier.</p></div><div className="home-panels"><section className="work-panel"><h2>Catalogue d’œuvres</h2><p>Retrouvez les œuvres importées, prévisualisez leurs images et choisissez leur visibilité.</p><div className="home-panel-links"><Link prefetch={false} href="/artworks">Consulter les œuvres<AdminIcon name="arrow"/></Link><Link prefetch={false} href="/sync-runs">Historique des synchronisations<AdminIcon name="arrow"/></Link></div><div className="actions"><Link prefetch={false} className="button" href="/sync-runs">Synchroniser le catalogue</Link></div></section><section className="work-panel"><h2>Présentation du site</h2><p>Préparez votre identité visuelle et vos pages, puis vérifiez le résultat avant de publier.</p><div className="home-panel-links"><Link prefetch={false} href="/presentation/identity">Identité visuelle<AdminIcon name="arrow"/></Link><Link prefetch={false} href="/presentation/pages/home">Composer les pages<AdminIcon name="arrow"/></Link><Link prefetch={false} href="/site-content">Logo et traductions<AdminIcon name="arrow"/></Link></div><div className="actions"><Link prefetch={false} className="button secondary" href="/presentation">Apparence et pages</Link></div></section></div></AdminShell>;
}
export default function Page({searchParams}:{searchParams:LoginQuery}){return <Suspense fallback={<main><p role="status">Vérification de la session…</p></main>}><Administration searchParams={searchParams}/></Suspense>;}
