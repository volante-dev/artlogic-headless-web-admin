import {Ajv2020,type ErrorObject,type ValidateFunction} from 'ajv/dist/2020.js';
import addFormatsModule from 'ajv-formats';
import {linkInBioSchemas} from './schemas.generated';
const ajv=new Ajv2020({strict:false,allErrors:true}),coercing=new Ajv2020({strict:false,allErrors:true,coerceTypes:true});
for(const instance of [ajv,coercing])(addFormatsModule as unknown as(a:Ajv2020)=>void)(instance);
const compiled=new Map<string,ValidateFunction>();
export function linkInBioValidator(schema:unknown,coerce=false){const key=JSON.stringify([coerce,schema]);let result=compiled.get(key);if(!result){result=(coerce?coercing:ajv).compile(schema as object);compiled.set(key,result);}return result;}
export function validLinkInBio(schema:string,value:unknown){const definition=(linkInBioSchemas as Record<string,unknown>)[schema];return !!definition&&linkInBioValidator(definition)(value)===true;}
export function linkInBioIssues(errors:ErrorObject[]|null|undefined){return (errors??[]).slice(0,32).map(e=>({field:[...e.instancePath.split('/').slice(1).map(p=>p.replaceAll('~1','/').replaceAll('~0','~')),e.keyword==='required'?String(e.params.missingProperty):e.keyword==='additionalProperties'?String(e.params.additionalProperty):''].filter(Boolean).join('.').slice(0,250)||'body',reason:e.keyword==='required'?'required':e.keyword==='maxLength'?'too_long':'invalid'}));}
