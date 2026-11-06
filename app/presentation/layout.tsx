import {Suspense} from "react";
import {AuthorizedPage} from "@/components/AuthorizedPage";
import {PresentationArea} from "@/components/presentation/PresentationArea";
import {configuredLocalePolicy,loadConfig,stringValue} from "@/lib/config/env";
export const metadata={referrer:"strict-origin" as const};
export default function PresentationLayout({children}:{children:React.ReactNode}){return <Suspense fallback={<main><p role="status">Vérification de la session…</p></main>}><AuthorizedPage render={async({csrfCookie})=>{const config=loadConfig(),policy=configuredLocalePolicy(config);return <PresentationArea csrfCookie={csrfCookie} siteOrigin={stringValue(config,"SITE_ORIGIN")} locales={policy.locales} defaultLocale={policy.defaultLocale}>{children}</PresentationArea>;}}/></Suspense>;}
