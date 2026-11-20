import {test,expect} from '@playwright/test';
test.skip(process.env.E2E_LINK_IN_BIO!=='true','Synthetic OAuth BFF recipe.');
test('completes the specialized GET callback with a Lax session and no Strict CSRF cookie',async({context,page})=>{
 await context.addCookies([{name:'artlogic_admin_session',value:'synthetic-session',url:process.env.E2E_BASE_URL!,sameSite:'Lax',httpOnly:true}]);
 const result=await page.request.get('/api/link-in-bio/instagram/callback?state='+'s'.repeat(43)+'&code=synthetic-authorization',{maxRedirects:0});expect(result.status()).toBe(303);expect(result.headers().location).toBe(process.env.E2E_BASE_URL+'/link-in-bio?instagram=connected');expect(result.headers()['referrer-policy']).toBe('no-referrer');expect(result.headers()['cache-control']).toContain('no-store');
});
test('redirects cancellation and malformed input to fixed, secret-free result URLs',async({context,page})=>{
 await context.addCookies([{name:'artlogic_admin_session',value:'synthetic-session',url:process.env.E2E_BASE_URL!,sameSite:'Lax',httpOnly:true}]);
 for(const [query,result] of [['state='+'s'.repeat(43)+'&error=access_denied','cancelled'],['state=bad&code=synthetic-authorization&returnTo=https://evil.example.test','failed'],['state=bad&state=other&code=synthetic-authorization','failed']] as const){const response=await page.request.get('/api/link-in-bio/instagram/callback?'+query,{maxRedirects:0});expect(response.status()).toBe(303);expect(response.headers().location).toBe(process.env.E2E_BASE_URL+'/link-in-bio?instagram='+result);expect(await response.text()).not.toContain('synthetic-authorization');}
});
