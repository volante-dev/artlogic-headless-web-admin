"use client";
import {useEffect} from "react";
export function useUnsavedChanges(enabled:boolean,message="Des modifications ne sont pas enregistrées. Quitter cette page ?"){
 useEffect(()=>{if(!enabled)return;function unload(e:BeforeUnloadEvent){e.preventDefault();e.returnValue="";}function click(e:MouseEvent){const link=(e.target as Element).closest?.("a[href]");if(!link||link.getAttribute("target")==="_blank"||link.getAttribute("href")?.startsWith("#"))return;if(!window.confirm(message)){e.preventDefault();e.stopPropagation();}}window.addEventListener("beforeunload",unload);document.addEventListener("click",click,true);return()=>{window.removeEventListener("beforeunload",unload);document.removeEventListener("click",click,true);};},[enabled,message]);
}
