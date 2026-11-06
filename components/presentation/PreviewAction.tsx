"use client";
import {postPreviewCode} from "@/lib/presentation/post-preview-code";
import {useState} from "react";
import {Button} from "@mui/material";
import {usePresentationDraft} from "./usePresentationDraft";
import type {PageKey} from "./types";
import type {components} from "../../lib/bff/generated";
export function PreviewAction({pageKey="home",locale,artworkId,disabled=false}:{pageKey?:PageKey;locale?:string;artworkId?:string;disabled?:boolean}){
 const state=usePresentationDraft(),[pending,setPending]=useState(false);
 async function open(){
  // Reserve the browsing context during the gesture; codes never appear in a URL.
  const target="artlogic_preview_"+crypto.randomUUID(),popup=window.open("about:blank",target);if(!popup){state.setError("Autorisez l’ouverture d’un nouvel onglet pour prévisualiser le site.");return;}popup.opener=null;
  setPending(true);try{const {data}=await state.mutate<components["schemas"]["PresentationPreviewGrant"]>("/previews",{pageKey,locale:locale??state.defaultLocale,...(artworkId?{artworkId}:{})});const expected=state.siteOrigin+"/preview/exchange";if(data.exchangeUrl!==expected)throw new Error("invalid_exchange_origin");postPreviewCode(popup,expected,data.exchangeCode);}catch{popup.close();}finally{setPending(false);}
 }
 return <Button variant="outlined" disabled={disabled||pending||state.busy||state.uncertain||pageKey==="artworkDetail"&&!artworkId} onClick={open}>{pending?"Ouverture…":"Prévisualiser"}</Button>;
}
