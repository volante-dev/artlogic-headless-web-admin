import type {FormsOperation} from "./operations";
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export function receptionOperation(method:string,segments:readonly string[]):FormsOperation|null{
 if(segments.length===1&&segments[0]==="administrator-candidates"&&method==="GET")return {method,segments,query:["limit","cursor","q"]};
 if(segments[0]==="submissions"){
  if(segments.length===1&&method==="GET")return {method,segments,query:["limit","cursor","q","formId","originType","from","to","read","treatment","assignee"]};
  if(segments.length===2&&segments[1]==="bulk"&&method==="POST")return {method,segments,query:[],body:true};
  if(!uuid.test(segments[1]??""))return null;
  if(segments.length===2&&method==="GET")return {method,segments,query:[],tag:true};
  if(segments.length===2&&method==="DELETE")return {method,segments,query:[],ifMatch:true,body:true};
  if(segments.length===3&&segments[2]==="notifications"&&method==="GET")return {method,segments,query:["limit","cursor"]};
  if(segments.length===5&&segments[2]==="notifications"&&uuid.test(segments[3]??"")&&segments[4]==="retry"&&method==="POST")return {method,segments,query:[],ifMatch:true,body:true,tag:true};
  if(segments.length===5&&segments[2]==="attachments"&&uuid.test(segments[3]??"")&&segments[4]==="access"&&method==="POST")return {method,segments,query:[],body:true};
  if(segments.length===3){
   if(segments[2]==="notes"&&method==="GET")return {method,segments,query:["cursor","limit"]};
   if(method==="POST"&&["read","notes"].includes(segments[2]!))return {method,segments,query:[],body:true,ifMatch:true,tag:true};
   if(method==="PATCH"&&segments[2]==="workflow")return {method,segments,query:[],body:true,ifMatch:true,tag:true};
  }
 }
 if(segments[0]==="exports"){
  if(segments.length===1&&method==="POST")return {method,segments,query:[],body:true};
  if(segments.length===2&&uuid.test(segments[1]??"")&&method==="GET")return {method,segments,query:[]};
  if(segments.length===3&&uuid.test(segments[1]??"")&&segments[2]==="access"&&method==="POST")return {method,segments,query:[],body:true};
 }
 if(segments[0]==="views"){
  if(segments.length===1&&method==="GET")return {method,segments,query:[]};
  if(segments.length===1&&method==="POST")return {method,segments,query:[],body:true,tag:true};
  if(segments.length===2&&uuid.test(segments[1]??"")){
   if(method==="PUT")return {method,segments,query:[],body:true,ifMatch:true,tag:true};
   if(method==="DELETE")return {method,segments,query:[],ifMatch:true};
  }
 }
 return null;
}
