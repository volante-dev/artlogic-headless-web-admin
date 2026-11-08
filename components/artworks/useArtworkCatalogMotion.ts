"use client";
import {useRef,type RefObject} from "react";
import gsap from "gsap";
import {Flip} from "gsap/Flip";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(Flip,useGSAP);
export function useArtworkCatalogMotion(root:RefObject<HTMLDivElement|null>,revision:number){
 const captured=useRef<ReturnType<typeof Flip.getState>|null>(null);
 useGSAP((_context,contextSafe)=>{
  const capture=contextSafe!(()=>{const targets=root.current?.querySelectorAll("[data-flip-id]");if(!targets)return;Flip.killFlipsOf(targets,true);captured.current=matchMedia("(prefers-reduced-motion: reduce)").matches?null:Flip.getState(targets);});
  const interrupt=contextSafe!(()=>{const targets=root.current?.querySelectorAll("[data-flip-id]");if(targets)Flip.killFlipsOf(targets,true);captured.current=null;});
  window.addEventListener("artwork-catalog-before-commit",capture);window.addEventListener("artwork-catalog-interrupt",interrupt);return()=>{window.removeEventListener("artwork-catalog-before-commit",capture);window.removeEventListener("artwork-catalog-interrupt",interrupt);captured.current=null;};
 },{scope:root});
 useGSAP(()=>{if(captured.current){Flip.from(captured.current,{targets:root.current?.querySelectorAll("[data-flip-id]"),duration:.22,ease:"power2.out",scale:true});captured.current=null;}},{scope:root,dependencies:[revision]});
}
