"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Drawer,IconButton} from "@mui/material";
import {LogoutButton} from "./LogoutButton";
import {AdminIcon} from "./AdminIcon";
const links=[
 ["/","Accueil","home"],
 ["/artworks","Œuvres","artworks"],
 ["/publications","Publications","content"],
 ["/news","Actualités","content"],
 ["/exhibitions","Expositions","content"],
 ["/taxonomies","Taxonomies","content"],
 ["/presentation","Apparence et pages","presentation"],
 ["/site-content","Contenu du site","content"],
 ["/forms","Formulaires","content"],
 ["/inquiries","Demandes","inquiries"],
 ["/sync-runs","Synchronisations","sync"],
] as const;
export function AdminShell({siteName,displayName,csrfCookie,children,editorialEnabled=false,formsEnabled=false}:{siteName:string;displayName:string|null;csrfCookie:string;children:React.ReactNode;editorialEnabled?:boolean;formsEnabled?:boolean}){
 const [open,setOpen]=useState(false),path=usePathname(),menu=useRef<HTMLButtonElement>(null),sidebarFocused=useRef(false);
 useEffect(()=>{const media=matchMedia("(min-width:900px)");const track=(event:FocusEvent)=>{sidebarFocused.current=Boolean((event.target as Element)?.closest?.(".admin-sidebar"));};const resize=()=>{if(media.matches)setOpen(false);else if(sidebarFocused.current)menu.current?.focus();};document.addEventListener("focusin",track);media.addEventListener("change",resize);return()=>{document.removeEventListener("focusin",track);media.removeEventListener("change",resize);};},[]);
 const account=displayName??"Compte autorisé",initials=account.split(/[\s@.]+/).slice(0,2).map(part=>part[0]).join("").toUpperCase();
 function close(){setOpen(false);}
 const visibleLinks=links.filter(([href])=>(href!=="/forms"||formsEnabled)&&(editorialEnabled||!["/publications","/news","/exhibitions","/taxonomies"].includes(href)));
 const navigation=(mobile=false)=><div className="admin-sidebar-content">
  <div className="admin-brand-row"><Link href="/" prefetch={false} className="admin-brand" onClick={close}><span>{siteName}</span><small>Administration</small></Link>{mobile&&<IconButton aria-label="Fermer le menu" onClick={close}><AdminIcon name="close"/></IconButton>}</div>
  <nav aria-label="Navigation principale" className="admin-navigation">{visibleLinks.map(([href,label,icon])=>{const target=href==="/inquiries"&&formsEnabled?"/forms/reception":href,selected=target==="/"?path==="/":target==="/forms"?path==="/forms"||path.startsWith("/forms/")&&!path.startsWith("/forms/reception"):path===target||path.startsWith(target+"/");return <Link key={href} href={target} prefetch={false} onClick={event=>{if(!event.defaultPrevented)close();}} aria-current={selected?"page":undefined}><AdminIcon name={icon}/><span>{label}</span><AdminIcon name="arrow" className="nav-arrow"/></Link>;})}</nav>
  <div className="admin-account"><div className="admin-user"><span className="admin-avatar" aria-hidden="true">{initials}</span><span>{account}</span></div><LogoutButton csrfCookie={csrfCookie}/></div>
 </div>;
 return <div className="admin-shell"><header className="admin-mobile-bar"><IconButton ref={menu} aria-label="Ouvrir le menu" aria-expanded={open} aria-controls={open?"admin-mobile-navigation":undefined} onClick={()=>setOpen(true)}><AdminIcon name="menu"/></IconButton><Link href="/" prefetch={false} className="admin-mobile-name">{siteName}</Link></header>
 <aside className="admin-sidebar">{navigation()}</aside>
 <Drawer open={open} onClose={close} slotProps={{paper:{id:"admin-mobile-navigation","aria-label":"Menu de navigation",sx:{width:280,maxWidth:"calc(100% - 32px)"}}}}>{navigation(true)}</Drawer>
 <main id="contenu" tabIndex={-1} className="admin-main"><div className="admin-content">{children}</div></main></div>;
}
