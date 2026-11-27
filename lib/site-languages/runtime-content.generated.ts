// Generated from feature038. Independent of all legacy contract fingerprints.
import {runtimeMessageDefinitions} from './message-definitions.generated';
import {requiredPluralVariants,validateLanguageTemplate,type LanguageMessageDefinition} from './runtime-messages.generated';
const definitions:readonly LanguageMessageDefinition[]=runtimeMessageDefinitions;
export class RuntimeContentError extends Error {constructor(){super('language_content_unavailable');}}
/** Values are admitted module by module; a missing optional catalogue cannot poison the core. */
export function decodeRuntimeMessages(value:unknown,locale:string,selectedDefinitions:readonly LanguageMessageDefinition[]=definitions):{messages:Record<string,string>;modules:string[]}{
 if(!value||typeof value!=='object'||Array.isArray(value))throw new RuntimeContentError();
 const input=value as Record<string,unknown>,messages:Record<string,string>={},modules:string[]=[],allowed=new Set(selectedDefinitions.filter(definition=>definition.module!=='notification').flatMap(definition=>definition.pluralParameter?requiredPluralVariants(locale).map(variant=>definition.id+'.'+variant):[definition.id]));
 if(Object.keys(input).some(key=>!allowed.has(key)))throw new RuntimeContentError();
 for(const moduleName of new Set(selectedDefinitions.map(definition=>definition.module))){
  if(moduleName==='notification')continue;
  const selected:Record<string,string>={};let complete=true;
  for(const definition of selectedDefinitions.filter(definition=>definition.module===moduleName)){
   const variants=definition.pluralParameter?requiredPluralVariants(locale):[null];
   for(const variant of variants){const key=definition.id+(variant?'.'+variant:''),text=input[key];if(typeof text!=='string'||validateLanguageTemplate(definition,text).length){complete=false;break;}selected[key]=text;}
   if(!complete)break;
  }
  if(!complete){if(moduleName==='core')throw new RuntimeContentError();continue;}
  Object.assign(messages,selected);modules.push(moduleName);
 }
 return {messages,modules:modules.filter(moduleName=>moduleName==='core'||definitions.filter(definition=>definition.module===moduleName).every(definition=>(definition.pluralParameter?requiredPluralVariants(locale).map(variant=>definition.id+'.'+variant):[definition.id]).every(key=>typeof messages[key]==='string')))};
}
