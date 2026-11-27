import {NextResponse} from 'next/server';
import {languageBackend} from '@/lib/bff/site-languages';
import {failure,privateHeaders} from '@/lib/bff/client';
export async function GET(){try{const result=await languageBackend('readLanguageCapabilities');return NextResponse.json(result.body,{headers:privateHeaders});}catch(error){return failure(error);}}
