import {NextResponse,type NextRequest} from 'next/server';
import {languageBackend,readLanguageBody} from '@/lib/bff/site-languages';
import {matchLanguageAdminRoute} from '@/lib/bff/language-allowlist';
import {languageRoutes} from '@/lib/bff/language-schemas.generated';
import {mutationProof,requireEmptyBody} from '@/lib/bff/csrf';
import {BffError,failure,privateHeaders} from '@/lib/bff/client';
async function handle(request:NextRequest){try{
 const suffix=request.nextUrl.pathname.slice('/api/languages'.length),matched=matchLanguageAdminRoute(request.method,'/v1/admin/languages'+suffix);if(!matched)throw new BffError(404,'resource_not_found');
 const {operation,params}=matched,definition=languageRoutes[operation],query:Record<string,string|number>={};
 for(const [key,value]of request.nextUrl.searchParams){if(Object.hasOwn(query,key))throw new BffError(400,'invalid_request');query[key]=key==='limit'&&/^[1-9][0-9]{0,2}$/.test(value)?Number(value):value;}
 const proof=request.method==='GET'?{}:mutationProof(request);
 let body:unknown;if(request.method!=='GET'){if(definition.body)body=await readLanguageBody(request,operation==='updateLanguageWorkspace'?1310720:65536);else await requireEmptyBody(request);}
 const result=await languageBackend(operation,{...proof,params,query,body,ifMatch:request.headers.get('if-match')??undefined,idempotencyKey:request.headers.get('idempotency-key')??undefined}),etag=result.headers.get('etag');
 return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,...(etag?{ETag:etag}:{})}});
}catch(error){return failure(error);}}
export {handle as GET,handle as POST,handle as PATCH};
