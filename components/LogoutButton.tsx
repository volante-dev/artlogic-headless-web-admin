"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
export function LogoutButton({csrfCookie}:{csrfCookie:string}){
  const [pending,setPending]=useState(false),[error,setError]=useState("");
  const router=useRouter();
  async function logout(){
    setPending(true);setError("");
    try{
      const csrf=document.cookie.split("; ").find(value=>value.startsWith(csrfCookie+"="))?.slice(csrfCookie.length+1)??"";
      const response=await fetch("/auth/logout",{method:"POST",headers:{"X-CSRF-Token":decodeURIComponent(csrf)},credentials:"same-origin",cache:"no-store"});
      if(response.status!==204)throw new Error();router.replace("/");router.refresh();
    }catch{setError("La déconnexion n’a pas pu être confirmée. Réessayez.");setPending(false);}
  }
  return <div><button type="button" onClick={logout} disabled={pending}>{pending?"Déconnexion…":"Déconnexion"}</button>{error&&<p role="alert">{error}</p>}</div>;
}
