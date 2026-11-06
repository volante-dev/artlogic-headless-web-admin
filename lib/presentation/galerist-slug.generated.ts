// Generated from feature015 address rules. Do not edit.
export const reservedGaleristPaths:readonly string[]=["news","artworks","exhibitions","publications","expertise","contact","api","auth","preview","_next","media","site-logos","presentation-assets","editorial-assets","favicon.ico","sitemap.xml","robots.txt"];
export function suggestGaleristSlug(name:string):string{return name.normalize("NFKD").replace(/\p{M}/gu,"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"").normalize("NFC");}
export function validGaleristSlug(value:string):boolean{return value===value.normalize("NFC")&&value===value.toLowerCase()&&Array.from(value).length<=160&&/^[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*$/u.test(value);}
export function isReservedGaleristSlug(value:string,locales:readonly string[]):boolean{return [...reservedGaleristPaths,...locales].some(p=>p.toLowerCase()===value.toLowerCase());}
