"use client";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Alert,Button,FormControl,InputLabel,MenuItem,Select,Stack,Typography} from "@mui/material";
import type {components} from "@/lib/forms/contract-types.generated";
import {formFetch,formErrorMessage,type FormAdmin} from "@/lib/forms/client";
import styles from "./forms.module.css";
const states={draft:"Brouillon",published:"Publié",archived:"Archivé"};
export function FormLibrary({page,locale,query,csrfCookie}:{page:components["schemas"]["FormsAdminPage"];locale:string;query:Record<string,string>;csrfCookie:string}){
 const router=useRouter(),[template,setTemplate]=useState<"blank"|"contact"|"expertise">("blank"),[busy,setBusy]=useState(false),[error,setError]=useState("");
 async function create(){setBusy(true);setError("");try{const result=await formFetch<FormAdmin>([],{method:"POST",csrfCookie,body:{kind:template==="expertise"?"expertise":"classic",template}});router.push("/forms/"+result.data.id);}catch(e){setError(formErrorMessage(e));setBusy(false);}}
 const next=new URLSearchParams(query);if(page.nextCursor)next.set("cursor",page.nextCursor);
 return <Stack spacing={4}><div className={styles.heading}><div><Typography component="h1" variant="h1">Formulaires</Typography><Typography>Créez une fois, puis réutilisez le formulaire dans vos pages et articles.</Typography></div><div className={styles.create}><FormControl size="small"><InputLabel id="form-template-label">Modèle</InputLabel><Select labelId="form-template-label" label="Modèle" value={template} onChange={e=>setTemplate(e.target.value)} disabled={busy}><MenuItem value="blank">Vierge</MenuItem><MenuItem value="contact">Contact</MenuItem><MenuItem value="expertise">Expertise</MenuItem></Select></FormControl><Button variant="contained" onClick={()=>void create()} disabled={busy}>Nouveau formulaire</Button></div></div>{error&&<Alert severity="error">{error}</Alert>}
 <section className="workspace-panel" aria-label="Bibliothèque de formulaires"><form action="/forms" className={styles.filters}><label>Rechercher<input type="search" name="q" defaultValue={query.q??""} placeholder="Titre du formulaire" maxLength={160}/></label><label>État<select name="state" defaultValue={query.state??""}><option value="">Tous les états</option>{Object.entries(states).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label><button type="submit">Rechercher</button><Link prefetch={false} href="/forms">Réinitialiser</Link></form>
 {!page.items.length?<div className={styles.empty}><Typography component="h2" variant="h2">Votre bibliothèque commence ici</Typography><Typography>Choisissez un modèle pour préparer votre premier formulaire. Sa publication sera une action distincte.</Typography></div>:<ul className={styles.library}>{page.items.map(item=><li key={item.id}><div><Link href={"/forms/"+item.id} prefetch={false} className={styles.formTitle}>{item.titles[locale]||Object.values(item.titles).find(Boolean)||"Sans titre"}</Link><p>{item.kind==="expertise"?"Expertise · structure protégée":"Formulaire classique"} · {item.fieldCount} champ{item.fieldCount>1?"s":""}</p></div><span className={styles.state} data-state={item.state}>{states[item.state]}</span><Link href={"/forms/"+item.id} prefetch={false} aria-label={"Modifier "+(item.titles[locale]||"le formulaire")}>Modifier</Link></li>)}</ul>}
 {page.nextCursor&&<Link href={"/forms?"+next.toString()} prefetch={false}>Formulaires suivants</Link>}</section></Stack>;
}
