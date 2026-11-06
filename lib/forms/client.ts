import {resourceVersion} from "../resource-version";
import type {components} from "./contract-types.generated";
export type FormDocument=components["schemas"]["FormsDocument"];
export type FormAdmin=components["schemas"]["FormsAdmin"];
export type FormSummary=components["schemas"]["FormsSummary"];
export type FormIssue=components["schemas"]["FormsIssue"];
export class FormRequestError extends Error{
 constructor(readonly status:number,readonly code:string,readonly issues:readonly FormIssue[]=[],readonly revision:string|null=null){super(code);}
}
export function formErrorMessage(error:unknown){
 if(error instanceof FormRequestError){if(error.code==="form_not_publishable"||error.status===422)return "Complétez les éléments signalés avant de publier. Votre saisie est conservée.";return ({400:"Certains champs ne sont pas valides. Votre saisie est conservée.",401:"Votre session a expiré. Votre saisie est conservée.",403:"Votre accès ne permet plus cette opération. Votre saisie est conservée.",404:"Ce formulaire n’est plus disponible.",409:"Le formulaire a changé d’état. Relisez la version enregistrée.",412:"Ce formulaire a changé dans une autre session. Comparez la version enregistrée avant de continuer.",413:"Le formulaire dépasse la taille autorisée.",428:"Relisez la version enregistrée avant de poursuivre.",429:"Trop de demandes. Patientez avant de réessayer."} as Record<number,string>)[error.status]??"Le service est indisponible. Votre saisie est conservée.";}
 return "L’opération n’a pas pu être confirmée. Relisez la version enregistrée avant de réessayer.";
}
export async function formFetch<T>(segments:readonly string[],options:{method?:string;body?:unknown;tag?:string;csrfCookie?:string;signal?:AbortSignal;query?:Record<string,string>}={}){
 const csrf=options.csrfCookie?document.cookie.split(";").map(c=>c.trim()).find(c=>c.startsWith(options.csrfCookie+"="))?.slice(options.csrfCookie.length+1)??"":"";
 let response:Response;try{response=await fetch("/api/forms"+(segments.length?"/"+segments.map(encodeURIComponent).join("/"):"")+(options.query?"?"+new URLSearchParams(options.query):""),{method:options.method??"GET",headers:{...(options.body!==undefined?{"content-type":"application/json"}:{}),...(options.tag?{"if-match":options.tag}:{}),...(options.csrfCookie?{"x-csrf-token":csrf}:{})},body:options.body===undefined?undefined:JSON.stringify(options.body),cache:"no-store",signal:options.signal??AbortSignal.timeout(30000)});}catch{throw new FormRequestError(0,"uncertain_response");}
 if(response.status===204)return {data:undefined as T,tag:resourceVersion(response.headers)};
 let data;try{data=await response.json();}catch{throw new FormRequestError(0,"uncertain_response");}
 if(!response.ok)throw new FormRequestError(response.status,data?.error?.code??"service_unavailable",data?.error?.issues??[],resourceVersion(response.headers));return {data:data as T,tag:resourceVersion(response.headers)};
}
