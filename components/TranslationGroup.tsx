"use client";
import type {SiteContent} from "@/lib/bff/site-content";
import {translationId} from "./useSiteContentDraft";
import {TranslationTextControl} from "./TranslationTextControl";
import styles from "./SiteContentEditor.module.css";
export function TranslationGroup({group,content,locale,values,errors,disabled,onChange}:{group:SiteContent["groups"][number];content:SiteContent;locale:string;values:Record<string,string>;errors:Record<string,string>;disabled:boolean;onChange:(locale:string,key:string,value:string)=>void}){
  const reference=content.policy.defaultLocale,referenceLabel=content.policy.locales.find(l=>l.code===reference)!.label;
  return <fieldset className={styles.group} disabled={disabled}><legend>{group.label}</legend>{content.definitions.filter(d=>d.group===group.id).map(definition=>{
    const id=translationId(locale,definition.key),value=values[id]??"",error=errors[id],referenceValue=values[translationId(reference,definition.key)]??"";
    return <div key={definition.key} className={styles.translation} data-key={definition.key}>
      <div className={styles.reference}><strong>{definition.label}</strong><p className={styles.hint}>Référence — {referenceLabel}</p><p>{referenceValue||"Référence à renseigner"}</p></div>
      <TranslationTextControl id={id} label={'Traduction · '+definition.label} value={value} maxLength={definition.maxLength} rows={definition.maxLength===80?2:4} error={error} onChange={next=>onChange(locale,definition.key,next)} hint={locale===reference?'Référence obligatoire.':!value.trim()?'Repli sur la référence.':'Laisser vide pour utiliser la référence.'}/>
    </div>;
  })}</fieldset>;
}
