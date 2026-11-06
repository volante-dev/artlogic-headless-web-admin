"use client";
import {useState} from "react";
import {articleFetch,ArticleError} from "@/lib/editorial/client";
import type {Vocabulary,Term} from "@/lib/editorial/taxonomy";
export function useTaxonomyWrite({path,initialTag,csrfCookie}:{path:string;initialTag?:string;csrfCookie:string}){
 const [tag,setTag]=useState(initialTag),[busy,setBusy]=useState(false),[error,setError]=useState<unknown>(null),[comparison,setComparison]=useState<{data:Vocabulary|Term;tag:string}|null>(null);
 const blocked=error instanceof ArticleError&&[0,401,403,412].includes(error.status);
 async function write<T>(body:unknown,onSuccess:(value:T)=>void){if(busy||blocked)return;setBusy(true);setError(null);try{const result=await articleFetch<T>(path,{method:initialTag?"PATCH":"POST",body,tag,csrfCookie});onSuccess(result.data);}catch(error){setError(error);}finally{setBusy(false);}}
 async function compare(){setBusy(true);try{const result=await articleFetch<Vocabulary|Term>(path);if(!result.tag)throw new ArticleError(0,"uncertain_response");setComparison({data:result.data,tag:result.tag});}catch(error){setError(error);}finally{setBusy(false);}}
 return {busy,error,blocked,comparison,write,compare,rebase(){if(comparison){setTag(comparison.tag);setComparison(null);setError(null);}}};
}
