import type {components} from "./contract-types.generated";
import {FormRequestError} from "./client";
export type SubmissionSummary=components["schemas"]["FormsSubmissionSummary"];
export type SubmissionDetail=components["schemas"]["FormsSubmissionDetail"];
export type SubmissionPage=components["schemas"]["FormsSubmissionPage"];
export type SavedView=components["schemas"]["FormsView"];
export type ReceptionFilters=components["schemas"]["FormsFilters"];
export const treatments={new:"Nouvelle",in_progress:"En cours",waiting:"En attente",completed:"Terminée",archived:"Archivée"} as const;
export const origins={page:"Page du site",article:"Article",artwork:"Œuvre"} as const;
export function receptionDate(value:string){return new Intl.DateTimeFormat("fr-FR",{dateStyle:"medium",timeStyle:"short",timeZone:"UTC"}).format(new Date(value))+" UTC";}
export function receptionError(error:unknown){
 if(error instanceof FormRequestError){if(error.code==="legacy_import_required")return "La reprise des anciennes demandes Contact doit être terminée avant cet export. Contactez l’administrateur technique du site.";if(error.code==="form_submission_busy")return "Un envoi est en cours pour cette demande. Réessayez après sa confirmation.";if(error.code==="form_export_unavailable")return "Cet export n’est plus disponible. Relancez sa préparation.";if(error.code==="form_export_too_large")return "L’export est trop volumineux. Réduisez la sélection et relancez-le.";if(error.code==="recipient_blocked")return "Ce compte ne peut plus être affecté à cette demande. Choisissez un administrateur autorisé.";return ({400:"Vérifiez les champs renseignés. Votre saisie est conservée.",401:"Votre session a expiré. Reconnectez-vous avant de poursuivre.",403:"Votre accès ne permet plus cette action.",404:"Cette demande n’est plus disponible. Actualisez la réception.",409:"L’état a changé. Relisez la demande avant de réessayer.",412:"La demande a été modifiée dans une autre session. Relisez son état avant de poursuivre.",413:"La sélection dépasse les limites. Réduisez-la et réessayez.",428:"Relisez l’état enregistré avant de poursuivre.",429:"La limite de demandes est atteinte. Réessayez plus tard."} as Record<number,string>)[error.status]??"Le service est momentanément indisponible. Votre saisie est conservée.";}
 return "L’action n’a pas pu être confirmée. Relisez l’état enregistré avant de réessayer.";
}
export function receptionFilters(query:Record<string,string>):ReceptionFilters{
 const result:Record<string,string|boolean>={};for(const key of ["q","formId","originType","from","to","treatment","assignee"])if(query[key])result[key]=query[key]!;if(query.read==="true"||query.read==="false")result.read=query.read==="true";return result as ReceptionFilters;
}
export function receptionUrl(filters:ReceptionFilters){const query=new URLSearchParams();for(const [key,value]of Object.entries(filters))if(value!==undefined&&value!=="")query.set(key,String(value));return "/forms/reception"+(query.size?"?"+query:"");}
