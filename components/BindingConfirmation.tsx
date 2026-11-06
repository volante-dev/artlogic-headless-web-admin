"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Alert,Button,Stack,Typography} from "@mui/material";
import {LogoutButton} from "./LogoutButton";
export function BindingConfirmation({siteName,version,csrfCookie}:{siteName:string;version:number;csrfCookie:string}){
 const router=useRouter(),[pending,setPending]=useState(false),[error,setError]=useState("");
 async function confirm(){setPending(true);setError("");try{
  const csrf=document.cookie.split("; ").find(value=>value.startsWith(csrfCookie+"="))?.split("=").slice(1).join("=")??"";
  const result=await fetch("/api/binding-confirmation",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":decodeURIComponent(csrf)},body:JSON.stringify({expectedVersion:version})});
  if(!result.ok)throw new Error(result.status===409?"Le rattachement a changé. Rechargez la page avant de confirmer.":"La confirmation n’a pas abouti. Réessayez ou reconnectez-vous.");
  router.refresh();
 }catch(cause){setError(cause instanceof Error?cause.message:"La confirmation n’a pas abouti.");setPending(false);}}
 return <main id="contenu" style={{minHeight:"100dvh",display:"grid",placeItems:"center",padding:24}}><Stack spacing={3} sx={{width:"100%",maxWidth:560,p:4,bgcolor:"background.paper",borderRadius:2,boxShadow:1}}>
  <Typography component="h1" variant="h4">{siteName}</Typography><Typography>Confirmez que ce site est bien celui de votre entreprise pour accéder à son administration.</Typography>
  {error&&<Alert severity="error">{error}</Alert>}
  <Button variant="contained" size="large" disabled={pending} onClick={confirm}>{pending?"Confirmation…":"Confirmer le rattachement"}</Button><LogoutButton csrfCookie={csrfCookie}/>
 </Stack></main>;
}
