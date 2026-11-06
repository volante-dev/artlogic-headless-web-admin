import {receptionOperation} from "./reception-operations";
export interface FormsOperation{method:string;segments:readonly string[];query:readonly string[];ifMatch?:boolean;body?:boolean;tag?:boolean}
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
/** No arbitrary proxy path: every backend operation must be explicitly listed here. */
export function formsOperation(method:string,segments:readonly string[]):FormsOperation|null{
 if(["submissions","views","exports","administrator-candidates"].includes(segments[0]??""))return receptionOperation(method,segments);
 if(segments.length===0){if(method==="GET")return {method,segments,query:["cursor","limit","q","kind","state"]};if(method==="POST")return {method,segments,query:[],body:true,tag:true};return null;}
 if(!uuid.test(segments[0]??""))return null;
 if(segments.length===1&&method==="DELETE")return {method,segments,query:[],ifMatch:true};
 if(segments.length===1&&method==="GET")return {method,segments,query:[],tag:true};
 if(segments.length===2){
  const action=segments[1];
  if(action==="notifications"&&["GET","PUT"].includes(method))return {method,segments,query:[],tag:true,...(method==="PUT"?{ifMatch:true,body:true}:{})};
  if(method==="GET"&&["versions","usages"].includes(action!))return {method,segments,query:["cursor","limit"]};
  if(method==="PUT"&&action==="draft")return {method,segments,query:[],ifMatch:true,body:true,tag:true};
  if(method==="POST"&&["validate","publish","duplicate","versions","restore","archive","reopen"].includes(action!))return {method,segments,query:[],ifMatch:true,body:true,tag:["publish","duplicate","restore","archive","reopen"].includes(action!)};
 }
 if(segments.length===3&&method==="GET"&&segments[1]==="versions"&&uuid.test(segments[2]!))return {method,segments,query:[]};return null;
}
