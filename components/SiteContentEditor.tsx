"use client";
import {resourceVersion} from "@/lib/resource-version";
import Image from "next/image";
import {useRef,useState} from "react";
import type {SiteContent} from "@/lib/bff/site-content";
import {useSiteContentDraft,translationId} from "./useSiteContentDraft";
import {SiteLogoEditor} from "./SiteLogoEditor";
import {TranslationGroup} from "./TranslationGroup";
import styles from "./SiteContentEditor.module.css";
const logoReasons:Record<string,string>={invalid_image:"Le fichier n’est pas une image valide.",mime_mismatch:"Le contenu du fichier ne correspond pas à son format annoncé.",animated_image:"Choisissez une image fixe, sans animation.",pixel_limit:"L’image dépasse 4 millions de pixels.",output_too_large:"L’image préparée dépasse 2 Mio."};
const reasons:Record<string,string>={reference_required:"La référence ne peut pas être vide.",max_length:"Le texte dépasse la limite indiquée.",unsupported_locale:"Cette langue n’est plus configurée.",unknown_key:"Ce texte n’est plus disponible.",duplicate_translation:"Cette traduction est présente plusieurs fois.",invalid_type:"La valeur fournie n’est pas valide.",required:"Renseignez ce champ."};
const errors:Record<number,string>={400:"Vérifiez les champs signalés. Votre brouillon est conservé.",401:"Votre session a expiré. Reconnectez-vous dans un autre onglet ; votre brouillon est conservé.",403:"Votre accès est refusé. Votre brouillon est conservé.",404:"Le logo préparé n’est plus disponible. Votre brouillon est conservé.",412:"Le contenu a changé. Comparez les versions avant de sauvegarder votre brouillon.",413:"La taille autorisée est dépassée. Votre brouillon est conservé.",415:"Format non pris en charge. Votre brouillon est conservé.",428:"La version du contenu est requise. Comparez les versions.",429:"Trop de demandes. Réessayez plus tard ; votre brouillon est conservé.",503:"La modification n’a pas pu être confirmée. Comparez avec la version enregistrée avant de réessayer."};
export function SiteContentEditor({initial,initialEtag,csrfCookie}:{initial:SiteContent;initialEtag:string;csrfCookie:string}){
  const whiteDraft=useSiteContentDraft({...initial,logo:initial.whiteLogo??null,translations:[]},initialEtag);
  const [whiteFileError,setWhiteFileError]=useState("");
  const draft=useSiteContentDraft(initial,initialEtag),[locale,setLocale]=useState(initial.policy.locales.find(l=>l.code!==initial.policy.defaultLocale)?.code??initial.policy.defaultLocale),[fileError,setFileError]=useState(""),[pending,setPending]=useState(false),[message,setMessage]=useState(""),[error,setError]=useState(""),[status,setStatus]=useState(0),[fields,setFields]=useState<Record<string,string>>({}),[review,setReview]=useState(false),[comparison,setComparison]=useState<{content:SiteContent;etag:string}|null>(null),errorRef=useRef<HTMLDivElement>(null);
  function report(code:number){setStatus(code);setError(errors[code]??errors[503]);if([412,428,503].includes(code))setReview(true);requestAnimationFrame(()=>errorRef.current?.focus());}
  async function save(event:React.FormEvent){event.preventDefault();if(pending||review||!(draft.changed||whiteDraft.changed)||draft.dirty.length>64)return;setPending(true);setError("");setFields({});setMessage("");const submitted=draft.dirty;
    try{
      const csrf=document.cookie.split("; ").find(v=>v.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
      let logoId=draft.logoId;
      if(draft.selection){
        const file=draft.selection.file;
        if(file.size>2097152){setFileError("Le fichier dépasse 2 Mio.");report(413);return;}
        if(!["image/png","image/jpeg","image/webp"].includes(file.type)){setFileError("Choisissez un fichier PNG, JPEG ou WebP.");report(415);return;}
        if(draft.candidate&&Date.parse(draft.candidate.expiresAt)>Date.now())logoId=draft.candidate.id;
        else{
          const upload=await fetch("/api/site-logos",{method:"POST",headers:{"Content-Type":file.type,"X-CSRF-Token":decodeURIComponent(csrf)},body:file,cache:"no-store"}),candidate=await upload.json();
          if(!upload.ok){const reason=Array.isArray(candidate?.error?.details)?candidate.error.details.find((d:{field?:string})=>d.field==="file")?.reason:undefined;setFileError(logoReasons[reason]??(upload.status===413?"Le fichier dépasse 2 Mio.":upload.status===415?"Choisissez un fichier PNG, JPEG ou WebP.":"Le logo n’a pas pu être préparé. Réessayez."));report(upload.status);return;}
          if(typeof candidate.id!=="string"||!/^[0-9a-f-]{36}$/.test(candidate.id)||!Number.isFinite(Date.parse(candidate.expiresAt)))throw new Error();
          draft.setCandidate(candidate);draft.setLogoId(candidate.id);logoId=candidate.id;
        }
      }
      let whiteLogoId=whiteDraft.logoId;
      if(whiteDraft.selection){
        const file=whiteDraft.selection.file;
        if(file.size>2097152){setWhiteFileError("Le fichier dépasse 2 Mio.");report(413);return;}
        if(!["image/png","image/jpeg","image/webp"].includes(file.type)){setWhiteFileError("Choisissez un fichier PNG, JPEG ou WebP.");report(415);return;}
        if(whiteDraft.candidate&&Date.parse(whiteDraft.candidate.expiresAt)>Date.now())whiteLogoId=whiteDraft.candidate.id;
        else{
          const upload=await fetch("/api/site-logos",{method:"POST",headers:{"Content-Type":file.type,"X-CSRF-Token":decodeURIComponent(csrf)},body:file,cache:"no-store"}),candidate=await upload.json();
          if(!upload.ok){const reason=Array.isArray(candidate?.error?.details)?candidate.error.details.find((d:{field?:string})=>d.field==="file")?.reason:undefined;setWhiteFileError(logoReasons[reason]??(upload.status===413?"Le fichier dépasse 2 Mio.":upload.status===415?"Choisissez un fichier PNG, JPEG ou WebP.":"Le logo n’a pas pu être préparé. Réessayez."));report(upload.status);return;}
          if(typeof candidate.id!=="string"||!/^[0-9a-f-]{36}$/.test(candidate.id)||!Number.isFinite(Date.parse(candidate.expiresAt)))throw new Error();
          whiteDraft.setCandidate(candidate);whiteDraft.setLogoId(candidate.id);whiteLogoId=candidate.id;
        }
      }
      const response=await fetch("/api/site-content",{method:"PATCH",headers:{"Content-Type":"application/json","X-CSRF-Token":decodeURIComponent(csrf),"If-Match":draft.etag},body:JSON.stringify({...(submitted.length?{translations:submitted}:{}),...(logoId!==undefined?{logoId}:{}),...(whiteLogoId!==undefined?{whiteLogoId}:{})}),cache:"no-store"});
      const body=await response.json();if(!response.ok){
        if(response.status===404){draft.setCandidate(null);whiteDraft.setCandidate(null);}
        const mapped:Record<string,string>={};if(response.status===400&&Array.isArray(body?.error?.details))for(const detail of body.error.details){const index=/^translations\.(\d+)\.(?:value|key|locale)$/.exec(detail.field)?.[1],change=index===undefined?undefined:submitted[Number(index)];if(change&&typeof reasons[detail.reason]==="string")mapped[translationId(change.locale,change.key)]=reasons[detail.reason];}setFields(mapped);report(response.status);return;
      }
      const etag=resourceVersion(response.headers);if(!etag)throw new Error();draft.accept(body,etag);whiteDraft.accept({...body,logo:body.whiteLogo??null,translations:[]},etag);setWhiteFileError("");setFileError("");setMessage("Enregistrement confirmé.");setReview(false);setComparison(null);
    }catch{report(503);}finally{setPending(false);}
  }
  async function compare(){setPending(true);setMessage("");try{const response=await fetch("/api/site-content",{cache:"no-store"});if(!response.ok){report(response.status);return;}const content=await response.json(),etag=resourceVersion(response.headers);if(!etag)throw new Error();setComparison({content,etag});}catch{report(503);}finally{setPending(false);}}
  const canKeep=comparison?draft.dirty.every(t=>comparison.content.definitions.some(d=>d.key===t.key)&&comparison.content.policy.locales.some(l=>l.code===t.locale)):true;
  function accept(keep:boolean){if(!comparison||keep&&!canKeep)return;draft.accept(comparison.content,comparison.etag,keep);whiteDraft.accept({...comparison.content,logo:comparison.content.whiteLogo??null,translations:[]},comparison.etag,keep);if(!comparison.content.policy.locales.some(l=>l.code===locale))setLocale(comparison.content.policy.defaultLocale);setComparison(null);setReview(false);setError("");setFields({});if(!keep){setFileError("");setWhiteFileError("");}setMessage(keep?"Brouillon conservé. Vérifiez-le puis enregistrez.":"Version enregistrée chargée.");}
  return <section className={styles.editor}><h1>Contenu du site</h1><p>Modifiez les textes du site par langue. Une traduction laissée vide reprend la référence. Les œuvres restent gérées depuis le catalogue.</p>
    <form onSubmit={save}><div className={styles.toolbar}><label htmlFor="editor-locale">Langue à éditer<select id="editor-locale" value={locale} disabled={pending} onChange={event=>setLocale(event.target.value)}>{draft.baseline.policy.locales.map(l=><option key={l.code} value={l.code}>{l.label}{l.code===draft.baseline.policy.defaultLocale?" — référence":""}</option>)}</select></label><span>{draft.dirty.length} traduction(s) modifiée(s)</span></div>
      {draft.dirty.length>64&&<p role="alert">64 traductions maximum par enregistrement. Réduisez les modifications de ce brouillon.</p>}
      <p role="status" aria-live="polite">{message}</p>
      {error&&<div role="alert" tabIndex={-1} ref={errorRef} className={styles.error}><p>{error}</p>{[401,403].includes(status)&&<a href="/auth/login?next=%2Fsite-content" target="_blank" rel="noopener noreferrer">Se reconnecter dans un nouvel onglet</a>}</div>}
      <div className={styles.actions}><button type="submit" disabled={pending||review||!(draft.changed||whiteDraft.changed)||draft.dirty.length>64}>{pending?"Enregistrement…":"Enregistrer"}</button><button type="button" onClick={compare} disabled={pending}>Comparer avec la version enregistrée</button></div>
      {comparison&&<section className={styles.comparison}><h2>Comparer les versions</h2><p>Votre brouillon n’a pas été remplacé. Choisissez explicitement la version à conserver.</p>{!canKeep&&<p role="alert">Certains champs ou langues ont été retirés. Copiez les textes à conserver avant de choisir la version enregistrée.</p>}<div className={styles.actions}>{comparison.content.logo&&<Image unoptimized src={"/api/site-logos/"+comparison.content.logo.id} width={comparison.content.logo.width} height={comparison.content.logo.height} alt="Logo enregistré" style={{maxWidth:160,maxHeight:80,width:"auto",height:"auto"}}/>}{draft.selection&&<Image unoptimized src={draft.selection.url} width={160} height={80} alt="Logo du brouillon" style={{maxWidth:160,maxHeight:80,width:"auto",height:"auto"}}/>}</div><p>Logo enregistré : {comparison.content.logo?"Un logo est présent.":"Aucun logo."} {draft.selection?"Votre fichier sélectionné reste dans le brouillon.":draft.logoId===null?"Votre brouillon demande le retrait du logo.":""}</p><p>Logo blanc enregistré : {comparison.content.whiteLogo?"Une variante est présente.":"Aucune variante."} {whiteDraft.selection?"Votre variante sélectionnée reste dans le brouillon.":whiteDraft.logoId===null?"Votre brouillon demande le retrait de la variante blanche.":""}</p>{comparison.content.whiteLogo&&<Image unoptimized src={"/api/site-logos/"+comparison.content.whiteLogo.id} width={comparison.content.whiteLogo.width} height={comparison.content.whiteLogo.height} alt="Logo blanc enregistré" style={{maxWidth:160,maxHeight:80,width:"auto",height:"auto",background:"var(--admin-ink)",padding:12}}/>}<ul>{draft.dirty.map(t=><li key={translationId(t.locale,t.key)}><strong>{draft.baseline.definitions.find(d=>d.key===t.key)?.label} — {t.locale}</strong><p>Brouillon : {t.value||"Repli sur la référence"}</p><p>Version enregistrée : <span>{comparison.content.translations.find(v=>v.key===t.key&&v.locale===t.locale)?.value??"Repli sur la référence"}</span></p></li>)}</ul><div className={styles.actions}><button type="button" disabled={!canKeep} onClick={()=>accept(true)}>Conserver mon brouillon sur cette version</button><button type="button" onClick={()=>accept(false)}>Utiliser la version enregistrée</button></div></section>}
      <SiteLogoEditor current={draft.baseline.logo} selection={draft.selection} candidate={draft.candidate} removed={draft.logoId===null} error={fileError} disabled={pending} onSelect={file=>{draft.selectFile(file);draft.setLogoId(undefined);setFileError("");}} onRemove={()=>{draft.selectFile(null);draft.setLogoId(null);setFileError("");}} onReprepare={()=>{draft.setCandidate(null);draft.setLogoId(undefined);setFileError("");}}/>
      <SiteLogoEditor white current={whiteDraft.baseline.logo} selection={whiteDraft.selection} candidate={whiteDraft.candidate} removed={whiteDraft.logoId===null} error={whiteFileError} disabled={pending} onSelect={file=>{whiteDraft.selectFile(file);whiteDraft.setLogoId(undefined);setWhiteFileError("");}} onRemove={()=>{whiteDraft.selectFile(null);whiteDraft.setLogoId(null);setWhiteFileError("");}} onReprepare={()=>{whiteDraft.setCandidate(null);whiteDraft.setLogoId(undefined);setWhiteFileError("");}}/>
      {draft.baseline.groups.map(group=><TranslationGroup key={group.id} group={group} content={draft.baseline} locale={locale} values={draft.values} errors={fields} disabled={pending} onChange={draft.setValue}/>)}
    </form>
  </section>;
}
