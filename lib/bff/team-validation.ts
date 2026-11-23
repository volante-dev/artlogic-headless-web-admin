import {Ajv2020} from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import {teamSchemas} from "../presentation/team-schemas.generated";
const ajv=new Ajv2020({strict:true,coerceTypes:false,removeAdditional:false});
(addFormatsModule as unknown as (a:Ajv2020)=>void)(ajv);ajv.addKeyword({keyword:"example",valid:true});
const state=ajv.compile(teamSchemas.OurTeamTeamEditorState),capabilities=ajv.compile(teamSchemas.OurTeamCapabilities),page=ajv.compile(teamSchemas.OurTeamPageWrite);
export const validTeamResponse=(operation:string,data:unknown)=>operation==="teamCapabilities"?capabilities(data):operation==="teamPageSave"?page(data):state(data);
