"use client";
import {usePathname} from "next/navigation";
import {createContext,useContext} from "react";
import {Stack} from "@mui/material";
import {PresentationDraftProvider} from "./usePresentationDraft";
import {PresentationWorkspace} from "./PresentationWorkspace";
import {PresentationTabs} from "./PresentationTabs";
const CsrfContext=createContext("");
export const useNavigationCsrf=()=>useContext(CsrfContext);
export function PresentationArea({children,...props}:{children:React.ReactNode;csrfCookie:string;siteOrigin:string;locales:readonly {code:string;label:string}[];defaultLocale:string}){
 const path=usePathname();return path==="/presentation/navigation"?<CsrfContext value={props.csrfCookie}><Stack spacing={3}><PresentationTabs/>{children}</Stack></CsrfContext>:<PresentationDraftProvider {...props}><PresentationWorkspace>{children}</PresentationWorkspace></PresentationDraftProvider>;
}
