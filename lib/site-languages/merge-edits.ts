/** An explicit conflict resolution reapplies authored edits only, preserving concurrent untouched fields. */
export function mergeAuthoredLanguageEdits<T>(baseline:Readonly<Record<string,T>>,local:Readonly<Record<string,T>>,remote:Readonly<Record<string,T>>):Record<string,T>{
 return Object.fromEntries(Object.entries(remote).map(([key,value])=>[key,Object.hasOwn(local,key)&&Object.hasOwn(baseline,key)&&JSON.stringify(local[key])!==JSON.stringify(baseline[key])?local[key]:value]));
}
