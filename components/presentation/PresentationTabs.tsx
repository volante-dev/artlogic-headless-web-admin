"use client";
import {usePresentationDraft} from "./usePresentationDraft";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Box} from "@mui/material";
export function PresentationTabs(){const path=usePathname(),state=usePresentationDraft();return <Box component="nav" aria-label="Apparence et pages" className="workspace-tabs">{[...(state.capabilities?.footer?[["/presentation/footer","Footer"]]:[]),["/presentation","Publication"],["/presentation/identity","Identité visuelle"],["/presentation/pages/home","Pages"],["/presentation/media","Médias"],["/presentation/navigation","Navigation"]].map(([href,label])=><Link key={href} href={href} prefetch={false} aria-current={(path===href||href.includes("/pages/")&&path.startsWith("/presentation/pages/"))?"page":undefined}>{label}</Link>)}</Box>;}
