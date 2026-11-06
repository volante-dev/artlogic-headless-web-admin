const keys=["galerist","news","artworks","exhibitions","publications","expertise","contact"];
function object(value:unknown):value is Record<string,unknown>{return Boolean(value)&&typeof value==="object"&&!Array.isArray(value);}
function closed(value:Record<string,unknown>,names:string[]){return Object.keys(value).every(k=>names.includes(k));}
function revision(v:unknown){return typeof v==="string"&&/^[1-9][0-9]{0,18}$/.test(v)&&BigInt(v)<=BigInt("9223372036854775807");}
function seven(value:unknown):value is Record<string,unknown>[]{return Array.isArray(value)&&value.length===7&&value.every(object)&&keys.every(k=>value.filter(v=>v.pageKey===k).length===1);}
function name(v:unknown,max:number){return typeof v==="string"&&Array.from(v).length>=1&&Array.from(v).length<=max;}
export function validNavigationResponse(value:unknown,context=false):boolean{
 if(!object(value)||value.schemaVersion!==1)return false;
 if(!context)return closed(value,["schemaVersion","revision","items"])&&revision(value.revision)&&seven(value.items)&&value.items.every(i=>closed(i,["pageKey","visible"])&&typeof i.visible==="boolean");
 if(!closed(value,["schemaVersion","editingEnabled","releaseId","locale","pages"])||typeof value.editingEnabled!=="boolean"||typeof value.releaseId!=="string"||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value.releaseId)||typeof value.locale!=="string"||value.locale.length>35||!/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/.test(value.locale)||!seven(value.pages))return false;
 return value.pages.every(p=>{
  if(p.pageKey!=="galerist")return closed(p,["pageKey","publicAvailable","name"])&&p.publicAvailable===true&&name(p.name,80);
  if(typeof p.publicAvailable!=="boolean")return false;
  if(!p.publicAvailable)return closed(p,["pageKey","publicAvailable","name"])&&(p.name===undefined||name(p.name,120));
  return closed(p,["pageKey","publicAvailable","name","href"])&&name(p.name,120)&&typeof p.href==="string"&&p.href.length<=2048&&/^\/(?:[a-z]{2,3}(?:-[a-z0-9]{2,8})*\/)?[^/\\?#\s]+$/.test(p.href);
 });
}
