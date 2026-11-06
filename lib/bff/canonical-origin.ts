/** NextRequest normalizes loopback URLs to localhost, including its url property. */
export function isCanonicalAdminOrigin(request:Request,canonical:string){
 const expected=new URL(canonical),actual=new URL(request.url);
 if(actual.origin===expected.origin)return true;
 return expected.protocol==="http:"&&["127.0.0.1","[::1]"].includes(expected.hostname)&&actual.hostname==="localhost"&&actual.protocol===expected.protocol&&actual.port===expected.port&&request.headers.get("host")===expected.host;
}
