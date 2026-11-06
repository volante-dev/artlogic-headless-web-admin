"use client";
import type {SiteContent} from "@/lib/bff/site-content";
import {translationId} from "./useSiteContentDraft";
import styles from "./SiteContentEditor.module.css";
export function TranslationGroup({group,content,locale,values,errors,disabled,onChange}:{group:SiteContent["groups"][number];content:SiteContent;locale:string;values:Record<string,string>;errors:Record<string,string>;disabled:boolean;onChange:(locale:string,key:string,value:string)=>void}){
  const reference=content.policy.defaultLocale,referenceLabel=content.policy.locales.find(l=>l.code===reference)!.label;
  return <fieldset className={styles.group} disabled={disabled}><legend>{group.label}</legend>{content.definitions.filter(d=>d.group===group.id).map(definition=>{
    const id=translationId(locale,definition.key),value=values[id]??"",count=Array.from(value).length,error=errors[id],referenceValue=values[translationId(reference,definition.key)]??"";
    return <div key={definition.key} className={styles.translation} data-key={definition.key}>
      <div className={styles.reference}><strong>{definition.label}</strong><p className={styles.hint}>Référence — {referenceLabel}</p><p>{referenceValue||"Référence à renseigner"}</p></div>
      <div className={styles.input}><label htmlFor={id}>Traduction — {definition.label}</label><textarea id={id} rows={definition.maxLength===80?2:4} value={value} maxLength={definition.maxLength*2} onChange={event=>onChange(locale,definition.key,event.target.value)} aria-invalid={Boolean(error)||count>definition.maxLength} aria-describedby={id+"-hint"+(error?" "+id+"-error":"")}/>
      <p id={id+"-hint"} className={styles.hint}>{count} / {definition.maxLength} caractères. {locale===reference?"Référence obligatoire.":!value.trim()?"Repli sur la référence.":"Laisser vide pour utiliser la référence."}</p>{error&&<p id={id+"-error"} className={styles.fieldError}>{error}</p>}</div>
    </div>;
  })}</fieldset>;
}
