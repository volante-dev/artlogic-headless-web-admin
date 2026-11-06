"use client";
import {useState} from "react";
import {FormProvider,useForm} from "react-hook-form";
import {Alert,Button,Dialog,DialogActions,DialogContent,DialogTitle,Stack,Tab,Tabs,Typography} from "@mui/material";
import type {FormDocument} from "@/lib/forms/client";
import {validateFormDefinition} from "@/lib/forms/definition.generated";
import {FormField,initialFieldValue,type FormRuntimeValues} from "./FormField.generated";
import styles from "./forms.module.css";
/** The same field layer as the public renderer, with no session provider, upload port or submit transport. */
export function FormPreview({document,locale,onClose}:{document:FormDocument;locale:string;onClose:()=>void}){
 const [step,setStep]=useState(document.steps[0]!.id),form=useForm<FormRuntimeValues>({defaultValues:{answers:Object.fromEntries(document.fields.filter(f=>!["heading","help"].includes(f.type)).map(f=>[f.id,initialFieldValue(f)]))},shouldUnregister:false}),fields=document.fields.filter(f=>f.stepId===step),rows=[...new Set(fields.map(f=>f.rowId))],texts=document.translations[locale];
 return <Dialog open onClose={onClose} fullWidth maxWidth="md"><DialogTitle>Aperçu du formulaire</DialogTitle><DialogContent><Stack spacing={3}><Alert severity="info">Aperçu inactif : aucune saisie, aucun fichier ni e-mail ne sera envoyé. Les champs conditionnels sont tous présentés.</Alert>{validateFormDefinition(document,[locale]).length>0&&<Alert severity="warning">Cette version contient des éléments à compléter avant publication.</Alert>}<Typography component="h2" variant="h2">{texts?.title||"Titre à compléter"}</Typography>{texts?.intro&&<Typography>{texts.intro}</Typography>}<Tabs value={step} onChange={(_e,value)=>setStep(value)} aria-label="Étapes de l’aperçu" variant="scrollable">{document.steps.map((s,i)=><Tab key={s.id} value={s.id} label={s.translations[locale]||"Étape "+(i+1)}/>)}</Tabs><FormProvider {...form}><Stack spacing={3}>{rows.map(row=>{const list=fields.filter(f=>f.rowId===row).sort((a,b)=>a.column-b.column);return <div className={list.length>1?styles.pair:undefined} key={row}>{list.map(field=><FormField key={field.id} field={field} locale={locale} inert/>)}</div>;})}</Stack></FormProvider><div><Button disabled variant="contained">{texts?.submitLabel||"Envoyer"}</Button></div></Stack></DialogContent><DialogActions><Button onClick={onClose}>Fermer l’aperçu</Button></DialogActions></Dialog>;
}
