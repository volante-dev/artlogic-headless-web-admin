'use client';
import {useCallback,useMemo,useState,useSyncExternalStore} from 'react';
export interface PendingPublication {key:string;revision:string;tag:string}
const eventName='link-in-bio-publication';
function subscribe(callback:()=>void){window.addEventListener(eventName,callback);window.addEventListener('storage',callback);return()=>{window.removeEventListener(eventName,callback);window.removeEventListener('storage',callback);};}
/** Only the operation identity/revision survive a reload; no session or access token is stored. */
export function usePendingPublication(siteId:string|null){
 const storageKey='link-in-bio-publication:'+siteId,[fallback,setFallback]=useState<PendingPublication|null>(null);
 const snapshot=useCallback(()=>{try{return siteId?sessionStorage.getItem(storageKey):null;}catch{return null;}},[siteId,storageKey]);
 const raw=useSyncExternalStore(subscribe,snapshot,()=>null),stored=useMemo(()=>{try{const value=raw?JSON.parse(raw):null;return value&&/^[0-9a-f-]{36}$/i.test(value.key)&&/^\d+$/.test(value.revision)&&value.tag==='"lib-draft:'+siteId+':'+value.revision+'"'?value as PendingPublication:null;}catch{return null;}},[raw,siteId]);
 function write(value:PendingPublication|null){setFallback(value);try{if(value)sessionStorage.setItem(storageKey,JSON.stringify(value));else sessionStorage.removeItem(storageKey);window.dispatchEvent(new Event(eventName));}catch{/* Same-document recovery remains available if browser storage is disabled. */}}
 return [stored??fallback,write] as const;
}
