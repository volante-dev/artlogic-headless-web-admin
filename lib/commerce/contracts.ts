import {Ajv2020} from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import {commerceSchemaDocument} from "./schemas.generated";
const ajv=new Ajv2020({strict:false,allErrors:true});
(addFormatsModule as unknown as(a:Ajv2020)=>void)(ajv);
const schemas=JSON.parse(JSON.stringify(commerceSchemaDocument.components.schemas).replaceAll('#/components/schemas/','#/$defs/'));
ajv.addSchema({$id:'urn:artlogic:commerce-bff',$defs:schemas});
export function validCommerceContract(schema:string,value:unknown){return ajv.getSchema('urn:artlogic:commerce-bff#/$defs/'+schema)?.(value)===true;}

export function commerceContractIssues(schema:string,value:unknown):import('./validation').CommerceIssue[]{
 const validator=ajv.getSchema('urn:artlogic:commerce-bff#/$defs/'+schema);if(!validator||validator(value))return [];
 const seen=new Set<string>();return (validator.errors??[]).flatMap(e=>{const base=e.instancePath.split('/').slice(1).map(p=>p.replaceAll('~1','/').replaceAll('~0','~')).join('.'),extra=e.keyword==='required'?String(e.params.missingProperty):e.keyword==='additionalProperties'?String(e.params.additionalProperty):'',path=[base,extra].filter(Boolean).join('.')||schema,issue={path,code:e.keyword},key=path+':'+e.keyword;if(seen.has(key)||path.length>250||!/^[\w.\[\]-]+$/.test(path))return [];seen.add(key);return [issue];}).slice(0,100);
}
