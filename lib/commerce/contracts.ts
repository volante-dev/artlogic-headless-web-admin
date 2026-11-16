import {Ajv2020} from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import {commerceSchemaDocument} from "./schemas.generated";
const ajv=new Ajv2020({strict:false,allErrors:false});
(addFormatsModule as unknown as(a:Ajv2020)=>void)(ajv);
const schemas=JSON.parse(JSON.stringify(commerceSchemaDocument.components.schemas).replaceAll('#/components/schemas/','#/$defs/'));
ajv.addSchema({$id:'urn:artlogic:commerce-bff',$defs:schemas});
export function validCommerceContract(schema:string,value:unknown){return ajv.getSchema('urn:artlogic:commerce-bff#/$defs/'+schema)?.(value)===true;}
