import {NextResponse,type NextRequest} from 'next/server';
import {completeLinkInBioOAuth} from '@/lib/bff/link-in-bio-oauth';
import {requiredSession} from '@/lib/bff/sync-runs';
import {loadConfig,stringValue} from '@/lib/config/env';
import {privateHeaders} from '@/lib/bff/client';
export async function GET(request:NextRequest){
 let result:'connected'|'cancelled'|'failed'='failed';
 try{
  const query=request.nextUrl.searchParams;if(request.nextUrl.search.length>8192||[...query.keys()].some(k=>!['state','code','error','error_reason','error_description'].includes(k)||query.getAll(k).length!==1))throw Error('oauth_state_invalid');
  const state=query.get('state'),code=query.get('code'),error=query.get('error');if(!state||code&&error)throw Error('oauth_state_invalid');
  if(error&&!['access_denied','cancelled'].includes(error))throw Error('oauth_state_invalid');if(!code&&!error)throw Error('oauth_state_invalid');
  const outcome=await completeLinkInBioOAuth(code?{state,code}:{state,error:error as 'access_denied'|'cancelled'},await requiredSession());result=outcome.result;
 }catch{/* No provider message, state, code, URL or access token is logged or reflected. */}
 return NextResponse.redirect(new URL('/link-in-bio?instagram='+result,stringValue(loadConfig(),'ADMIN_ORIGIN')),{status:303,headers:privateHeaders});
}
