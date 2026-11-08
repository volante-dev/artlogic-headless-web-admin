"use client";
import {useEffect,useState} from "react";
import {useOptionalPresentationDraft} from "./usePresentationDraft";
import type {Capabilities} from "./types";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Box} from "@mui/material";
export function PresentationTabs(){const path=usePathname(),state=useOptionalPresentationDraft(),[standaloneFooter,setStandaloneFooter]=useState(false),[standaloneArtworks,setStandaloneArtworks]=useState(false);
 useEffect(()=>{if(state)return;const controller=new AbortController();fetch("/api/presentation/capabilities",{cache:"no-store",signal:controller.signal}).then(async response=>{if(response.ok){const data:Capabilities=await response.json();setStandaloneFooter(data.footer?.writable===true);setStandaloneArtworks(data.artworkSettings?.writable===true);}}).catch(()=>{});return()=>controller.abort();},[state]);
 const artworksEnabled=state?.capabilities?.artworkSettings?.writable??standaloneArtworks;const footerEnabled=state?.capabilities?.footer??standaloneFooter;return <Box component="nav" aria-label="Apparence et pages" className="workspace-tabs">{[...(artworksEnabled?[["/presentation/artworks","Fiches d’œuvre"]]:[]),...(footerEnabled?[["/presentation/footer","Footer"]]:[]),["/presentation","Publication"],["/presentation/identity","Identité visuelle"],["/presentation/pages/home","Pages"],["/presentation/media","Médias"],["/presentation/navigation","Navigation"]].map(([href,label])=><Link key={href} href={href} prefetch={false} aria-current={(path===href||href.includes("/pages/")&&path.startsWith("/presentation/pages/"))?"page":undefined}>{label}</Link>)}</Box>;}
