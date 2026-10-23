import {LogoutButton} from "./LogoutButton";
export function SessionNotice({status,csrfCookie,hasSession=false}:{status:number;csrfCookie:string;hasSession?:boolean}){
  const text=status===403?"Votre compte ne dispose pas des droits nécessaires.":status===503?"La vérification de votre compte est momentanément indisponible.":"Connectez-vous avec votre compte Volante pour gérer les œuvres et les synchronisations.";
  return <section className="notice"><h1>Accéder à l’administration</h1><p role={status===503?"alert":undefined}>{text}</p><a className="button" href="/auth/login">Se connecter avec Volante</a>{hasSession&&<LogoutButton csrfCookie={csrfCookie}/>}</section>;
}
