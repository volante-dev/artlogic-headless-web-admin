import {resourceVersion} from "../resource-version";
import type {components} from "../bff/generated";
export type ArticleDocument=components["schemas"]["EditorialArticleDocument"];
export type AdminArticle=components["schemas"]["EditorialArticleAdmin"];
export type ArticleCapabilities=components["schemas"]["EditorialCapabilities"];
export class ArticleError extends Error{
 constructor(readonly status:number,readonly code:string,readonly details:{field:string;reason:string}[]=[]){super(code);}
}
export function articleErrorMessage(error:unknown){
 if(error instanceof ArticleError&&error.code==="composition_unavailable")return "La composition assistée est momentanément indisponible. Le mode manuel reste disponible.";
 if(error instanceof ArticleError&&error.code==="composition_source_conflict")return "Une source a changé ou n’est plus disponible. Actualisez votre sélection depuis le contenu enregistré ; votre saisie est conservée.";
 if(error instanceof ArticleError&&error.code==="composition_scope_conflict")return "Les blocs ou leurs traductions ont changé. Relisez le brouillon ou choisissez un affinage global.";
 if(error instanceof ArticleError&&error.code==="composition_candidate_conflict")return "Cet aperçu est devenu obsolète. Préparez explicitement un nouvel aperçu avant adoption.";
 if(error instanceof ArticleError&&error.code==="composition_check_pending")return "La demande n’est pas encore retrouvée. Vérifiez son état avant toute nouvelle génération.";
 if(error instanceof ArticleError&&error.code==="image_groups_disabled")return "Les formats à plusieurs images sont indisponibles. Votre saisie est conservée.";
 if(error instanceof ArticleError&&error.code==="immersive_disabled")return "La contribution immersive est désactivée. Vos réglages enregistrés sont conservés.";
 if(error instanceof ArticleError&&error.code==="exhibitions_disabled")return "La contribution des expositions est désactivée. Votre saisie est conservée.";
 if(error instanceof ArticleError&&error.code==="article_not_restorable")return "Le délai de restauration est dépassé. Relisez l’état enregistré ; cet article peut avoir été nettoyé.";
 if(error instanceof ArticleError&&error.code==="invalid_article_lifecycle")return "L’état de l’article a changé. Relisez l’état enregistré avant de poursuivre.";
 if(error instanceof ArticleError&&error.code==="invalid_term_merge")return "Choisissez une autre entrée du même vocabulaire. Réaffectez d’abord les éventuelles entrées enfants.";
 if(error instanceof ArticleError&&error.code==="vocabulary_locked")return "L’ajout depuis l’éditeur vient d’être verrouillé. Utilisez la page Taxonomies.";
 if(error instanceof ArticleError&&error.code==="vocabulary_in_use")return "Cette entrée est encore utilisée. Retirez ou réaffectez ses références avant de la supprimer.";
 if(error instanceof ArticleError&&error.code==="vocabulary_conflict")return "Cette clé de vocabulaire est déjà utilisée. Choisissez-en une autre.";
 if(!(error instanceof ArticleError))return "Le service est indisponible. Votre saisie est conservée.";
 return ({401:"Votre session a expiré. Votre saisie est conservée.",403:"Votre accès ne permet plus cette opération. Votre saisie est conservée.",412:"Cet article a changé dans une autre session. Comparez les versions avant de poursuivre.",409:error.code==="slug_conflict"?"Cette adresse est déjà utilisée. Modifiez-la avant de poursuivre.":"Cette opération ne peut pas être confirmée. Relisez l’état enregistré.",400:"Certains champs ne sont pas valides. Votre saisie est conservée.",413:"Le contenu dépasse la taille autorisée. Votre saisie est conservée.",429:"Trop de demandes. Patientez avant de réessayer."} as Record<number,string>)[error.status]??"L’enregistrement n’a pas pu être confirmé. Comparez avec la version enregistrée.";
}
export async function articleFetch<T>(path:string,options:{method?:string;body?:unknown;tag?:string;key?:string;csrfCookie?:string;signal?:AbortSignal}={}){
 const csrf=options.csrfCookie?document.cookie.split(";").map(v=>v.trim()).find(v=>v.startsWith(options.csrfCookie+"="))?.slice(options.csrfCookie.length+1)??"":"";
 let response:Response;
 try{response=await fetch("/api/editorial"+path,{method:options.method??"GET",headers:{...(options.body!==undefined?{"Content-Type":"application/json"}:{}),...(options.tag?{"If-Match":options.tag}:{}),...(options.key?{"Idempotency-Key":options.key}:{}),...(options.csrfCookie?{"X-CSRF-Token":csrf}:{})},body:options.body===undefined?undefined:JSON.stringify(options.body),cache:"no-store",signal:options.signal??AbortSignal.timeout(30000)});}catch{throw new ArticleError(0,"uncertain_response");}
 if(response.status===204&&response.ok)return {data:undefined as T,tag:resourceVersion(response.headers)};
 let value;try{value=await response.json();}catch{throw new ArticleError(0,"uncertain_response");}
 if(!response.ok)throw new ArticleError(response.status,value?.error?.code??"dependency_unavailable",value?.error?.details??[]);
 return {data:value as T,tag:resourceVersion(response.headers)};
}
