"use client";
import {useEffect,useRef,useState,type PointerEvent,type RefObject} from "react";
import gsap from "gsap";
import type {CatalogItem,Destination} from "./useArtworkCatalogWorkspace";
import styles from "./ArtworkCatalogWorkspace.module.css";
export function useArtworkCatalogDrag(root:RefObject<HTMLDivElement|null>,onDrop:(art:CatalogItem,d:Destination)=>void,disabled:boolean){
 const [target,setTarget]=useState<string|null>(null),[dragging,setDragging]=useState(false),cleanup=useRef<(()=>void)|null>(null),returning=useRef<HTMLElement|null>(null),drop=useRef(onDrop);useEffect(()=>{drop.current=onDrop;},[onDrop]);useEffect(()=>()=>{cleanup.current?.();if(returning.current){gsap.killTweensOf(returning.current);returning.current.remove();}},[]);useEffect(()=>{if(disabled)cleanup.current?.();},[disabled]);
 function start(art:CatalogItem,e:PointerEvent<HTMLButtonElement>){
  if(disabled||e.button!==0)return;cleanup.current?.();if(returning.current){gsap.killTweensOf(returning.current);returning.current.remove();returning.current=null;}window.dispatchEvent(new CustomEvent("artwork-catalog-interrupt"));const button=e.currentTarget,card=button.closest<HTMLElement>("[data-artwork-id]");if(!card)return;
  const original=card.getBoundingClientRect(),x0=e.clientX,y0=e.clientY,offsetX=x0-original.left,offsetY=y0-original.top;let active=false,proxy:HTMLElement|null=null,destination:Destination|null=null,frame=0,x=x0,y=y0,lastKey:string|null=null,ended=false;
  let setX:((n:number)=>void)|undefined,setY:((n:number)=>void)|undefined;
  type Target={rect:DOMRect;destination:Destination};let rectangles:Target[]=[];
  const measure=()=>{rectangles=[...Array.from(root.current?.querySelectorAll<HTMLElement>("[data-drop-kind]")??[]).map(n=>({rect:n.getBoundingClientRect(),destination:{kind:n.dataset.dropKind as "start"|"end"} as Destination})),...Array.from(root.current?.querySelectorAll<HTMLElement>("[data-placement-id]")??[]).filter(n=>n.dataset.placementId!==art.id).map(n=>({rect:n.getBoundingClientRect(),destination:{kind:"before",anchorArtworkId:n.dataset.placementId!} as Destination}))];};measure();
  const choose=()=>{
   let next:Destination|null=null;
   for(const {rect,destination:d} of rectangles){if(x>=rect.left&&x<=rect.right&&y>=rect.top&&y<=rect.bottom){next="anchorArtworkId" in d?{kind:x<rect.left+rect.width/2?"before":"after",anchorArtworkId:d.anchorArtworkId}:d;break;}}
   destination=next;const key=next?next.kind+("anchorArtworkId" in next?":"+next.anchorArtworkId:""):null;if(key!==lastKey){lastKey=key;setTarget(key);}
  };
  const tick=()=>{if(!active||ended)return;const speed=y<72?-10:y>window.innerHeight-72?10:0;if(speed){const before=window.scrollY;window.scrollBy(0,speed);if(window.scrollY!==before){measure();choose();}}frame=requestAnimationFrame(tick);};
  const move=(event:globalThis.PointerEvent)=>{if(event.pointerId!==e.pointerId)return;x=event.clientX;y=event.clientY;if(!active&&Math.hypot(x-x0,y-y0)<6)return;
   if(!active){active=true;setDragging(true);proxy=card.cloneNode(true) as HTMLElement;proxy.removeAttribute("id");proxy.querySelectorAll("[id]").forEach(n=>n.removeAttribute("id"));proxy.setAttribute("aria-hidden","true");proxy.inert=true;proxy.classList.add(styles.proxy);proxy.style.width=original.width+"px";document.body.appendChild(proxy);const sx=gsap.quickSetter(proxy,"x","px"),sy=gsap.quickSetter(proxy,"y","px");setX=n=>sx(n);setY=n=>sy(n);tick();}
   event.preventDefault();setX?.(x-offsetX);setY?.(y-offsetY);choose();
  };
  const scroll=()=>{if(active){measure();choose();}};
  const stop=(animate=false)=>{if(ended)return;ended=true;cancelAnimationFrame(frame);window.removeEventListener("pointermove",move);window.removeEventListener("pointerup",up);window.removeEventListener("pointercancel",cancel);window.removeEventListener("keydown",key);window.removeEventListener("resize",cancel);window.removeEventListener("scroll",scroll,true);button.removeEventListener("lostpointercapture",cancel);if(button.hasPointerCapture(e.pointerId))button.releasePointerCapture(e.pointerId);setTarget(null);setDragging(false);
   if(proxy){gsap.killTweensOf(proxy);if(animate&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const removed=proxy;returning.current=removed;gsap.to(removed,{x:original.left,y:original.top,duration:.14,ease:"power2.out",onComplete:()=>{removed.remove();if(returning.current===removed)returning.current=null;}});}else proxy.remove();}cleanup.current=null;
  };
  const cancel=()=>stop(true),key=(event:KeyboardEvent)=>{if(event.key==="Escape"){event.preventDefault();cancel();}},up=(event:globalThis.PointerEvent)=>{if(event.pointerId!==e.pointerId)return;const chosen=destination,valid=active&&chosen;stop(!valid);if(valid)drop.current(art,chosen);};
  button.setPointerCapture(e.pointerId);window.addEventListener("pointermove",move,{passive:false});window.addEventListener("pointerup",up);window.addEventListener("pointercancel",cancel);window.addEventListener("keydown",key);window.addEventListener("resize",cancel);window.addEventListener("scroll",scroll,true);button.addEventListener("lostpointercapture",cancel);cleanup.current=()=>stop();
 }
 return {start,target,dragging};
}
