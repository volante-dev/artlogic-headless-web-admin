// Generated from the canonical feature038 runtime registry. Legacy002 is unchanged.
/** Shared, deterministic formatter. Templates are data, never expressions or HTML. */
export interface LanguageMessageParameter {type:'string'|'number'|'date';required:boolean;mustAppear:boolean}
export interface LanguageMessageDefinition {id:string;module:string;group:string;maxLength:number;parameters:Readonly<Record<string,LanguageMessageParameter>>;pluralParameter?:string;fallback:'none'|'reference'|'original_name'}
export class LanguageMessageError extends Error {constructor(readonly code:'message_unavailable'|'invalid_message_template'|'invalid_message_parameters'){super(code);}}
export function requiredPluralVariants(intlLocale:string):readonly string[]{return new Intl.PluralRules(intlLocale).resolvedOptions().pluralCategories;}
export function validateLanguageTemplate(definition:LanguageMessageDefinition,input:unknown):{field:string;reason:string}[]{
 const issue=(reason:string)=>[{field:'template',reason}];
 if(typeof input!=='string'||!input.trim())return issue('required');
 if(Array.from(input).length>definition.maxLength)return issue('max_length');
 if(/<\/?[a-z!][^>]*>/i.test(input)||input.includes('${')||Array.from(input).some(c=>c.charCodeAt(0)===0))return issue('plain_text_required');
 const variables=[...input.matchAll(/\{([a-z][a-zA-Z0-9_]*)\}/g)].map(match=>match[1]!);
 if(/[{}]/.test(input.replace(/\{[a-z][a-zA-Z0-9_]*\}/g,'')))return issue('invalid_placeholder');
 if(variables.some(name=>!Object.hasOwn(definition.parameters,name)))return issue('unknown_parameter');
 if(Object.entries(definition.parameters).some(([name,parameter])=>parameter.mustAppear&&!variables.includes(name)))return issue('missing_parameter');
 return [];
}
export function escapeLanguageHtml(value:string):string{return value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');}
export function formatLanguageMessage(definition:LanguageMessageDefinition,translations:Readonly<Record<string,string>>,intlLocale:string,parameters:Readonly<Record<string,unknown>>={},destination:'text'|'html'='text'):string{
 if(Object.keys(parameters).some(name=>!Object.hasOwn(definition.parameters,name)))throw new LanguageMessageError('invalid_message_parameters');
 for(const [name,parameter] of Object.entries(definition.parameters)){
  const value=parameters[name];if(value===undefined){if(parameter.required)throw new LanguageMessageError('invalid_message_parameters');continue;}
  if(parameter.type==='number'?(typeof value!=='number'||!Number.isFinite(value)):parameter.type==='date'?(typeof value!=='string'||!Number.isFinite(Date.parse(value))):(typeof value!=='string'||value.length>100000))throw new LanguageMessageError('invalid_message_parameters');
 }
 let key=definition.id;
 if(definition.pluralParameter){const number=parameters[definition.pluralParameter];if(typeof number!=='number'||!Number.isFinite(number))throw new LanguageMessageError('invalid_message_parameters');key+='.'+new Intl.PluralRules(intlLocale).select(number);}
 if(!Object.hasOwn(translations,key))throw new LanguageMessageError('message_unavailable');
 const template=translations[key]!;if(validateLanguageTemplate(definition,template).length)throw new LanguageMessageError('invalid_message_template');
 const result=template.replace(/\{([a-z][a-zA-Z0-9_]*)\}/g,(_match,name:string)=>{
  const value=parameters[name],parameter=definition.parameters[name]!;if(value===undefined)throw new LanguageMessageError('invalid_message_parameters');
  return parameter.type==='number'?new Intl.NumberFormat(intlLocale).format(value as number):parameter.type==='date'?new Intl.DateTimeFormat(intlLocale,{dateStyle:'medium',timeZone:'UTC'}).format(new Date(value as string)):String(value);
 });
 return destination==='html'?escapeLanguageHtml(result):result;
}
