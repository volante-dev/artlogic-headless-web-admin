import type {FormDocument} from "./client";
/** RHF defaults include every mounted control, so registering an absent optional value is not an edit. */
export function editorFormDefaults(document:FormDocument):FormDocument{
 const copy=structuredClone(document);
 for(const texts of Object.values(copy.translations))texts.intro??="";
 copy.contactEmailFieldId??=undefined;
 for(const field of copy.fields){
  for(const texts of Object.values(field.translations)){texts.help??="";texts.placeholder??="";}
  const constraints=field.type==="number"?["min","max"]:field.type==="date"?["minDate","maxDate"]:field.type==="images"?["minFiles","maxFiles"]:field.type==="multiChoice"?["minChoices","maxChoices"]:["shortText","longText","email","phone"].includes(field.type)?["minLength","maxLength"]:[];
  for(const key of constraints)if(!(key in field.constraints))(field.constraints as Record<string,unknown>)[key]=undefined;
 }
 return copy;
}
/** Remove UI defaults without changing locked system fields or overwriting the operator's intentional clears. */
export function contributedFormDocument(values:FormDocument,baseline:FormDocument):FormDocument{
 const copy=JSON.parse(JSON.stringify(values)) as FormDocument;
 for(const [locale,texts]of Object.entries(copy.translations))if(texts.intro===""&&baseline.translations[locale]?.intro===undefined)delete texts.intro;
 for(const field of copy.fields){const prior=baseline.fields.find(f=>f.id===field.id);for(const [locale,texts]of Object.entries(field.translations))for(const key of ["help","placeholder"] as const)if(texts[key]===""&&prior?.translations[locale]?.[key]===undefined)delete texts[key];}
 return copy;
}
