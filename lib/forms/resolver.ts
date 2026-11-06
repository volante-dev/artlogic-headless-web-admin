import type {Resolver,FieldErrors} from "react-hook-form";
import type {FormDocument,FormIssue} from "./client";
import {validateFormDefinition} from "./definition.generated";
export function formIssuePath(document:FormDocument,issue:FormIssue){
 let fieldIndex=-1;let path=issue.path.replace(/^fields\.([^.]+)/,(_m,id)=>{fieldIndex=document.fields.findIndex(f=>f.id===id);return fieldIndex<0?"root":`fields.${fieldIndex}`;}).replace(/^steps\.([^.]+)/,(_m,id)=>{const index=document.steps.findIndex(s=>s.id===id);return index<0?"root":`steps.${index}`;});
 if(fieldIndex>=0)path=path.replace(/\.options\.([^.]+)/,(_m,id)=>{const index=document.fields[fieldIndex]!.options?.findIndex(option=>option.id===id)??-1;return index<0?".options":`.options.${index}`;});
 return path;
}
export function formIssueMessage(issue:FormIssue){return ({translation_required:"Complétez cette traduction.",condition_cycle:"Cette condition forme une boucle. Choisissez un autre champ.",incompatible_condition:"Choisissez une condition compatible avec le champ.",unknown_condition_source:"Le champ utilisé par la condition n’existe plus.",occupied_column:"Deux champs occupent la même colonne sur cette ligne.",incompatible_constraint:"Cette règle ne correspond pas au type de champ.",invalid_range:"Le minimum doit être inférieur ou égal au maximum.",invalid_email_field:"Choisissez un champ e-mail valide.",unknown_step:"Affectez ce champ à une étape existante.",limit_exceeded:"La limite autorisée est dépassée.",duplicate_id:"Cet élément utilise déjà une identité existante."} as Record<string,string>)[issue.code]??"Vérifiez ce champ.";}
export function formDefinitionResolver(locales:readonly string[]):Resolver<FormDocument>{return async values=>{
 const issues=validateFormDefinition(JSON.parse(JSON.stringify(values)),locales,{draft:true}),errors:Record<string,unknown>={};
 for(const issue of issues){const parts=formIssuePath(values,issue).split(".");let node=errors;for(const part of parts.slice(0,-1)){if(!node[part]||typeof node[part]!=="object")node[part]={};node=node[part] as Record<string,unknown>;}node[parts.at(-1)!]={type:issue.code,message:formIssueMessage(issue)};}
 return issues.length?{values:{},errors:errors as FieldErrors<FormDocument>}:{values,errors:{}};
};}
