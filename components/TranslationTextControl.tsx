"use client";
import styles from './SiteContentEditor.module.css';
/** Shared interface-catalogue input; no document or publication state is accepted. */
export function TranslationTextControl({id,label,value,maxLength,error,disabled,required=false,hint,rows=4,onChange}:{id:string;label:string;value:string;maxLength?:number;error?:string;disabled?:boolean;required?:boolean;hint?:string;rows?:number;onChange:(value:string)=>void}){
 const count=Array.from(value).length;
 return <div className={styles.input}><label htmlFor={id}>{label}</label><textarea id={id} rows={rows} value={value} maxLength={maxLength===undefined?undefined:maxLength*2} disabled={disabled} required={required} onChange={event=>onChange(event.target.value)} aria-invalid={Boolean(error)||maxLength!==undefined&&count>maxLength} aria-describedby={id+'-hint'+(error?' '+id+'-error':'')}/><p id={id+'-hint'} className={styles.hint}>{maxLength===undefined?'':count+' / '+maxLength+' caractères. '}{hint}</p>{error&&<p id={id+'-error'} className={styles.fieldError}>{error}</p>}</div>;
}
