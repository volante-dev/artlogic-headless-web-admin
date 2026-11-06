"use client";
import {useEffect,useRef} from "react";
import Image from "next/image";
import type {SiteContent} from "@/lib/bff/site-content";
import type {LogoCandidate,LogoSelection} from "./useSiteContentDraft";
import styles from "./SiteContentEditor.module.css";
export function SiteLogoEditor({white=false,current,selection,candidate,removed,error,disabled,onSelect,onRemove,onReprepare}:{white?:boolean;current:SiteContent["logo"];selection:LogoSelection|null;candidate:LogoCandidate|null;removed:boolean;error:string;disabled:boolean;onSelect:(file:File)=>void;onRemove:()=>void;onReprepare:()=>void}){
 const input=useRef<HTMLInputElement>(null);useEffect(()=>{if(!selection&&input.current)input.current.value="";},[selection]);
 const src=selection?.url??(!removed&&current?"/api/site-logos/"+current.id:null);
 return <fieldset className={styles.group} disabled={disabled}><legend>{white?"Logo blanc":"Logo du site"}</legend>{white&&<p>Utilisé lorsque la navigation du header est blanche. Choisissez une image blanche sur fond transparent. Sans variante, le logo principal reste affiché.</p>}<p id={white?"white-logo-limits":"logo-limits"}>PNG, JPEG ou WebP, 2 Mio maximum, une image fixe de 4 millions de pixels maximum. Le logo conserve ses proportions. Sans logo, le nom du site est affiché.</p>
  {src&&<Image unoptimized data-testid={white?"white-logo-draft-preview":"logo-draft-preview"} src={src} width={current?.width??300} height={current?.height??100} alt={white?"Aperçu du logo blanc":"Aperçu du logo"} style={{maxWidth:"100%",maxHeight:120,width:"auto",height:"auto",objectFit:"contain",...(white?{background:"var(--admin-ink)",padding:16}:{})}}/>}
  <div className={styles.logoInput}><label htmlFor={white?"white-logo-file":"logo-file"}>{white?"Choisir la variante blanche":"Choisir un logo"}</label><input ref={input} id={white?"white-logo-file":"logo-file"} type="file" accept="image/png,image/jpeg,image/webp" aria-describedby={(white?"white-logo-limits":"logo-limits")+(error?(white?" white-logo-error":" logo-error"):"")} aria-invalid={Boolean(error)} onChange={event=>{const file=event.target.files?.[0];if(file)onSelect(file);}}/></div>
  {error&&<p id={white?"white-logo-error":"logo-error"} className={styles.fieldError}>{error}</p>}
  {removed&&<p>Le logo sera retiré lors de l’enregistrement.</p>}
  {candidate&&<p>Le logo préparé sera utilisé au prochain enregistrement, jusqu’au {new Date(candidate.expiresAt).toLocaleString("fr-FR")}. <button type="button" onClick={onReprepare}>Préparer le logo à nouveau</button></p>}
  {(current||selection)&&<button type="button" onClick={onRemove}>{white?"Retirer la variante blanche":"Retirer le logo"}</button>}
 </fieldset>;
}
