function canonical(value:unknown):string{
 if(Array.isArray(value))return "["+value.map(canonical).join(",")+"]";
 if(value&&typeof value==="object")return "{"+Object.entries(value).filter(([,value])=>value!==undefined).sort(([a],[b])=>a.localeCompare(b)).map(([key,value])=>JSON.stringify(key)+":"+canonical(value)).join(",")+"}";
 return JSON.stringify(value??null);
}
export const equalEditorialDocuments=(a:unknown,b:unknown)=>canonical(a)===canonical(b);
