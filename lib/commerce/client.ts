import {safeCommerceIssues,commerceIssueMessage,type CommerceIssue} from './validation';
export class CommerceRequestError extends Error {
 constructor(readonly status:number,readonly code:string,readonly issues:readonly CommerceIssue[]=[]){super(code);}
}
export function commerceErrorMessage(error:unknown){
 if(error instanceof CommerceRequestError&&error.issues.length)return 'Enregistrement impossible :\n'+[...new Set(error.issues.map(commerceIssueMessage))].map(line=>'• '+line).join('\n');
 if(error instanceof CommerceRequestError)return ({revision_conflict:'Ces données ont changé. Relisez la version enregistrée avant de réessayer.',validation_failed:'Vérifiez les champs. Votre saisie est conservée.',destination_unavailable:'Complétez les règles d’adresse des pays autorisés.',tax_rule_missing:'Chaque catégorie doit avoir une règle fiscale unique et validée.',unauthorized:'Reconnectez-vous pour enregistrer.',forbidden:'Votre accès ne permet pas cette opération.'} as Record<string,string>)[error.code]??'L’enregistrement n’a pas pu être confirmé. Relisez les données enregistrées.';
 return 'Le service est indisponible. Votre saisie est conservée.';
}
export async function commerceFetch<T>(segments:readonly string[],options:{method?:string;body?:unknown;revision?:number;intent?:string;csrfCookie?:string}={}){
 const csrf=options.csrfCookie?document.cookie.split(';').map(c=>c.trim()).find(c=>c.startsWith(options.csrfCookie+'='))?.slice(options.csrfCookie.length+1)??'':'';
 let response:Response;
 try{response=await fetch('/api/store/'+segments.map(encodeURIComponent).join('/'),{method:options.method??'GET',headers:{...(options.body===undefined?{}:{'Content-Type':'application/json'}),...(options.revision===undefined?{}:{'If-Match':'"'+options.revision+'"'}),...(options.intent?{'Idempotency-Key':options.intent}:{}),...(options.csrfCookie?{'X-CSRF-Token':csrf}:{})},body:options.body===undefined?undefined:JSON.stringify(options.body),cache:'no-store',signal:AbortSignal.timeout(30000)});}catch{throw new CommerceRequestError(0,'uncertain_response');}
 const data=await response.json().catch(()=>null);if(!response.ok)throw new CommerceRequestError(response.status,data?.error?.code??'persistence_unavailable',safeCommerceIssues(data?.error?.issues??data?.error?.details));if(!data)throw new CommerceRequestError(0,'uncertain_response');return data as T;
}
