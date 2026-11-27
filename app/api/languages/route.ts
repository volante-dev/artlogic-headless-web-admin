import {NextResponse,type NextRequest} from 'next/server';
import {languageBackend,readLanguageBody,type AdminLanguageOperation} from '@/lib/bff/site-languages';
import {mutationProof} from '@/lib/bff/csrf';
import {failure,privateHeaders} from '@/lib/bff/client';
export async function GET(){try{const result=await languageBackend('readAdminLanguages');return NextResponse.json(result.body,{headers:{...privateHeaders,ETag:result.headers.get('etag')!}});}catch(error){return failure(error);}}
async function mutate(request:NextRequest,operation:AdminLanguageOperation){try{
 const proof=mutationProof(request),body=await readLanguageBody(request),result=await languageBackend(operation,{...proof,body,ifMatch:request.headers.get('if-match')??undefined,idempotencyKey:request.headers.get('idempotency-key')??undefined});
 return NextResponse.json(result.body,{status:result.status,headers:{...privateHeaders,ETag:result.headers.get('etag')!}});
}catch(error){return failure(error);}}
export async function POST(request:NextRequest){return mutate(request,'createLanguage');}
export async function PATCH(request:NextRequest){return mutate(request,'updateLanguageLabelsAndOrder');}
