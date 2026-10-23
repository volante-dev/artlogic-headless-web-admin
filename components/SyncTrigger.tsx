"use client";
import {useRef,useState} from "react";
import {useRouter} from "next/navigation";
export function SyncTrigger({csrfCookie}:{csrfCookie:string}){
  const router=useRouter(),key=useRef<string|null>(null),[pending,setPending]=useState(false),[error,setError]=useState(""),[active,setActive]=useState<string|null>(null);
  async function start(){
    key.current??=crypto.randomUUID();setPending(true);setError("");setActive(null);
    try{
      const csrf=document.cookie.split("; ").find(v=>v.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
      const response=await fetch("/api/sync-runs",{method:"POST",cache:"no-store",headers:{"X-CSRF-Token":decodeURIComponent(csrf),"Idempotency-Key":key.current}}),body=await response.json();
      if(response.status===202){router.push("/sync-runs/"+body.id);return;}
      if(response.status===409&&body.error?.code==="sync_in_progress"){
        setActive(body.error.details?.find((v:{field:string})=>v.field==="runId")?.reason??null);setError("Une synchronisation est déjà en cours.");
      }else if(response.status===429){const seconds=Number(response.headers.get("retry-after"));setError("La source impose un délai. Réessayez"+(seconds>0?" dans environ "+Math.ceil(seconds/60)+" minute(s)":" plus tard")+".");}
      else if([401,403].includes(response.status))setError("Votre session doit être vérifiée. Reconnectez-vous avant de continuer.");
      else if(body.error?.code==="idempotency_expired"){key.current=null;setError("Cette demande a expiré. Vous pouvez lancer une nouvelle demande.");}
      else throw new Error();
    }catch{setError("La réponse n’a pas été reçue. Réessayez pour retrouver la même demande.");}finally{setPending(false);}
  }
  return <section aria-label="Déclencher un import"><button onClick={start} disabled={pending}>{pending?"Envoi de la demande…":error?"Réessayer":"Lancer une synchronisation"}</button>{error&&<p role="alert">{error}</p>}{active&&<a href={"/sync-runs/"+active}>Ouvrir la synchronisation en cours</a>}</section>;
}
