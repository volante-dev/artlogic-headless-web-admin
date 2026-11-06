"use client";
import {useEffect,useRef,useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import {Switch} from "./ui/Switch";
import {resourceVersion} from "../lib/resource-version";
interface Snapshot {value:boolean;etag:string}
type Status="loading"|"confirmed"|"editing"|"saving"|"conflict"|"uncertain"|"forbidden";
class CatalogAccessError extends Error {}
async function readSnapshot(endpoint:string,field:"large"|"enabled"):Promise<Snapshot>{const r=await fetch(endpoint,{cache:"no-store"});if([401,403].includes(r.status)){throw new CatalogAccessError("Accès à vérifier. Reconnectez-vous.");}if(!r.ok)throw new Error("Lecture indisponible. Réessayez.");const b=await r.json(),etag=resourceVersion(r.headers);if(typeof b[field]!=="boolean"||!etag||!/^"artwork-catalog-(?:mode-)?[0-9a-f-]{36}-(?:0|[1-9][0-9]{0,18})"$/.test(etag))throw new Error("Version non confirmée. Relisez le réglage.");return {value:b[field],etag};}
export function ArtworkCatalogControl({endpoint,field,label,help,csrfCookie}:{endpoint:string;field:"large"|"enabled";label:string;help:string;csrfCookie:string}){
 const [base,setBase]=useState<Snapshot|null>(null),[attempt,setAttempt]=useState(false),[remote,setRemote]=useState<Snapshot|null>(null),[status,setStatus]=useState<Status>("loading"),[message,setMessage]=useState(""),busy=useRef(false);
 const uncertain=status==="uncertain"||status==="conflict";

 useEffect(()=>{let live=true;readSnapshot(endpoint,field).then(v=>{if(live){setBase(v);setAttempt(v.value);setStatus("confirmed");}}).catch(e=>{if(live){if(e instanceof CatalogAccessError)setStatus("forbidden");setMessage(e.message); }});return ()=>{live=false;};},[endpoint]); // eslint-disable-line react-hooks/exhaustive-deps
 async function save(value:boolean){if(busy.current||!base||uncertain||status==="forbidden")return;busy.current=true;setAttempt(value);setStatus("saving");setMessage("");setRemote(null);
  try{const csrf=document.cookie.split("; ").find(v=>v.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";const r=await fetch(endpoint,{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-Token":decodeURIComponent(csrf),"If-Match":base.etag},body:JSON.stringify({[field]:value}),cache:"no-store"});
   if([401,403].includes(r.status)){setStatus("forbidden");setMessage("Votre accès a changé. Reconnectez-vous avant de continuer.");return;}
   if(r.status===412){setStatus("conflict");setMessage("Le réglage a changé. Relisez-le puis comparez votre choix.");return;}
   if(!r.ok)throw new Error();const b=await r.json(),etag=resourceVersion(r.headers);if(b[field]!==value||!etag||!/^"artwork-catalog-(?:mode-)?[0-9a-f-]{36}-(?:0|[1-9][0-9]{0,18})"$/.test(etag)||typeof b.version!=="string"||!etag.endsWith("-"+b.version+'"'))throw new Error();setBase({value,etag});setStatus("confirmed");setMessage("Réglage enregistré.");
  }catch{setStatus("uncertain");setMessage("La sauvegarde n’est pas confirmée. Relisez le réglage avant toute nouvelle tentative.");}finally{busy.current=false;}
 }
 async function reload(){if(busy.current)return;busy.current=true;try{const v=await readSnapshot(endpoint,field);if(uncertain)setRemote(v);else{setBase(v);setAttempt(v.value);setStatus("confirmed");}setMessage(uncertain?"Comparez la valeur enregistrée avec votre choix.":"");}catch(e){if(e instanceof CatalogAccessError)setStatus("forbidden");setMessage(e instanceof Error?e.message:"Lecture indisponible.");}finally{busy.current=false;}}
 return <Box component="section" sx={{py:3,borderBottom:1,borderColor:"divider",mb:3}} data-catalog-control={field}>
  <FormControlLabel control={<Switch checked={attempt} disabled={!base||status==="saving"||status==="forbidden"||uncertain} onChange={(_,v)=>void save(v)}/>} label={label}/>
  <Typography variant="body2" color="text.secondary">{help}</Typography>
  {base&&<Typography variant="body2">Enregistré : {base.value?"activé":"désactivé"}{uncertain||status==="editing"?` · Votre choix : ${attempt?"activé":"désactivé"}`:""}</Typography>}
  <Typography role="status" aria-live="polite" variant="body2">{status==="loading"&&!message?"Chargement du réglage…":status==="saving"?"Enregistrement…":message}</Typography>
  {(uncertain||(!base&&message&&status!=="forbidden"))&&<Button onClick={()=>void reload()}>Relire le réglage</Button>}
  {remote&&uncertain&&<Box><Typography variant="body2">Valeur actuelle : {remote.value?"activée":"désactivée"}</Typography><Button onClick={()=>{setBase(remote);setAttempt(remote.value);setRemote(null);setStatus("confirmed");setMessage("Valeur enregistrée chargée.");}}>Charger la valeur enregistrée</Button><Button onClick={()=>{setBase(remote);setRemote(null);setStatus("editing");setMessage("Votre choix est conservé. Confirmez son enregistrement.");}}>Conserver mon choix</Button></Box>}
  {status==="editing"&&<Button onClick={()=>void save(attempt)}>Confirmer mon choix</Button>}
  {status==="forbidden"&&<Button href="/auth/login">Se reconnecter</Button>}
 </Box>;
}
