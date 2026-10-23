import Link from "next/link";
import {LogoutButton} from "./LogoutButton";
export function AdminShell({siteName,displayName,csrfCookie,children}:{siteName:string;displayName:string|null;csrfCookie:string;children:React.ReactNode}){
  return <><header><div><p className="eyebrow">Administration</p><strong>{siteName}</strong></div><div className="account"><span>{displayName??"Compte autorisé"}</span><LogoutButton csrfCookie={csrfCookie}/></div></header>
    <nav aria-label="Navigation principale"><Link href="/" prefetch={false}>Accueil</Link><Link href="/artworks" prefetch={false}>Œuvres</Link><Link href="/sync-runs" prefetch={false}>Synchronisations</Link></nav><main id="contenu">{children}</main></>;
}
