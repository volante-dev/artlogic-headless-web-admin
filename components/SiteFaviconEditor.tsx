'use client';
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import shared from './SiteContentEditor.module.css';
import styles from './SiteFaviconEditor.module.css';
type Current={configured:boolean;previewUrl:string|null;tag:string};
async function fetchCurrent(signal?:AbortSignal):Promise<{state:'ready'|'unsupported';current:Current|null}>{
 const response=await fetch('/api/site-favicon',{cache:'no-store',signal});
 if(response.status===404)return {state:'unsupported',current:null};
 if(!response.ok)throw Error();const data=await response.json();return {state:'ready',current:{...data,tag:response.headers.get('etag')!}};
}
export function SiteFaviconEditor({csrfCookie}:{csrfCookie:string}){
 const [current,setCurrent]=useState<Current|null>(null),[state,setState]=useState<'loading'|'ready'|'unsupported'|'failed'>('loading'),[file,setFile]=useState<File|null>(null),[preview,setPreview]=useState<string|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState(''),[message,setMessage]=useState('');
 const input=useRef<HTMLInputElement>(null),working=useRef(false);
 async function read(){try{const result=await fetchCurrent();setCurrent(result.current);setState(result.state);}catch{setState('failed');}}
 useEffect(()=>{const controller=new AbortController();void fetchCurrent(controller.signal).then(result=>{if(!controller.signal.aborted){setCurrent(result.current);setState(result.state);}}).catch(()=>{if(!controller.signal.aborted)setState('failed');});return ()=>controller.abort();},[]);
 useEffect(()=>()=>{if(preview)URL.revokeObjectURL(preview);},[preview]);
 function select(value:File|undefined){setMessage('');setError('');setFile(null);setPreview(null);if(!value)return;if(value.type!=='image/png'){setError('Choisissez une image au format PNG.');if(input.current)input.current.value='';return;}if(value.size>2097152){setError('Le PNG dépasse 2 Mio. Choisissez un fichier plus léger.');if(input.current)input.current.value='';return;}setFile(value);setPreview(URL.createObjectURL(value));}
 async function save(remove=false){
  if(working.current||!current||(!remove&&!file))return;working.current=true;setBusy(true);setMessage('');setError('');
  try{
   const token=document.cookie.split('; ').find(c=>c.startsWith(csrfCookie+'='))?.slice(csrfCookie.length+1)??'';
   const response=await fetch('/api/site-favicon',{method:remove?'DELETE':'PUT',headers:{'X-CSRF-Token':decodeURIComponent(token),'If-Match':current.tag,...(!remove?{'Content-Type':'image/png'}:{})},body:remove?undefined:file,cache:'no-store'});
   if(!response.ok){
    if(response.status===412){setError('Le favicon a été modifié ailleurs. Relisez la version en ligne avant de réessayer. Votre fichier est conservé.');return;}
    if(response.status===400){setError('Ce PNG est invalide, animé ou dépasse 4 millions de pixels. Choisissez une image fixe.');return;}
    if(response.status===401||response.status===403){setError('Votre session ne permet pas cet enregistrement. Reconnectez-vous ; votre fichier est conservé.');return;}
    if(response.status===413){setError('Le PNG dépasse 2 Mio. Choisissez un fichier plus léger.');return;}
    throw Error();
   }
   const saved=await response.json();setCurrent({configured:saved.configured,previewUrl:remove?null:preview,tag:response.headers.get('etag')!});
   // Keep the object URL alive until the server preview has replaced it.
   setMessage(remove?'Le favicon de repli est rétabli.':'Favicon enregistré. Les formats navigateur et mobile sont prêts.');
   await read();setFile(null);setPreview(null);if(input.current)input.current.value='';
  }catch{setError('L’enregistrement n’a pas pu être confirmé. Relisez la version en ligne avant de réessayer. Votre fichier est conservé.');}
  finally{working.current=false;setBusy(false);}
 }
 const src=preview??current?.previewUrl;
 return <section aria-labelledby="favicon-heading" className={shared.group}>
  <h2 id="favicon-heading" className={styles.title}>Icône du site</h2>
  <p className={styles.intro}>Le favicon identifie le site dans les onglets et les favoris. Importez un PNG : tous les formats navigateur et mobile sont créés automatiquement, sans recadrage.</p>
  {state==='loading'&&<p role="status">Chargement du favicon…</p>}
  {state==='unsupported'&&<p>La gestion du favicon sera disponible après la mise à jour de l’API. L’icône de repli reste utilisée.</p>}
  {state==='failed'&&<p role="alert">Le favicon ne peut pas être chargé. <button type="button" onClick={()=>void read()}>Réessayer</button></p>}
  {state==='ready'&&<form onSubmit={event=>{event.preventDefault();void save();}} aria-busy={busy}>
   <div className={styles.row}><div className={styles.preview}>{src?<Image unoptimized src={src} width={48} height={48} alt={file?'Aperçu du PNG sélectionné':'Favicon en ligne'}/>:<span className={styles.fallback} role="img" aria-label="Favicon de repli vert aux angles arrondis"/>}<span>{file?'Nouveau fichier':current?.configured?'En ligne':'Icône de repli'}</span></div>
   <div className={shared.logoInput}><label htmlFor="favicon-png">Choisir un PNG</label><input ref={input} id="favicon-png" type="file" accept="image/png" disabled={busy} aria-describedby={'favicon-help'+(error?' favicon-error':'')} aria-invalid={Boolean(error)} onChange={event=>select(event.target.files?.[0])}/><p id="favicon-help" className={shared.hint}>Image fixe, 2 Mio et 4 millions de pixels maximum. Un carré de 512 × 512 px ou plus est conseillé. La transparence est conservée.</p></div></div>
   <p className={shared.hint}>L’enregistrement applique uniquement le favicon au site. Les onglets déjà ouverts peuvent conserver l’ancienne icône quelques minutes.</p>
   {error&&<p id="favicon-error" role="alert" className={shared.error}>{error} <button type="button" disabled={busy} onClick={()=>{setError('');void read();}}>Relire la version en ligne</button></p>}
   <p role="status" aria-live="polite">{busy?'Préparation des icônes…':message}</p>
   <div className={shared.actions}><button type="submit" disabled={busy||!file}>{busy?'Enregistrement…':'Enregistrer le favicon'}</button>{current?.configured&&<button type="button" disabled={busy} onClick={()=>void save(true)}>Utiliser l’icône de repli</button>}</div>
  </form>}
 </section>;
}
