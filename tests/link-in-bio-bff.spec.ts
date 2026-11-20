import {test,expect} from '@playwright/test';
import {fixtureDraft,fixtureSiteId} from './fixtures/link-in-bio';
test.skip(process.env.E2E_LINK_IN_BIO!=='true','Isolated Link in bio BFF recipe.');
test('rejects unlisted paths/queries and requires session and CSRF before mutations',async({page,context})=>{
 const origin=process.env.E2E_BASE_URL!,path='/api/link-in-bio/draft',payload=fixtureDraft().configuration;
 expect((await page.request.get(path)).status()).toBe(401);
 await context.addCookies([{name:'artlogic_admin_session',value:'synthetic-session',url:origin},{name:'artlogic_csrf',value:'a'.repeat(43),url:origin}]);
 expect((await page.request.post('/api/link-in-bio/instagram/callback')).status()).toBe(405);expect((await page.request.get('/api/link-in-bio/draft?unknown=true')).status()).toBe(400);expect((await page.request.get('/api/link-in-bio/targets?type=artwork&type=news')).status()).toBe(400);
 expect((await page.request.put(path,{data:payload})).status()).toBe(403);
 const result=await page.request.put(path,{headers:{origin,'x-csrf-token':'a'.repeat(43),'if-match':'"lib-draft:'+fixtureSiteId+':0"'},data:{...payload,translations:{fr:{title:'x'.repeat(121),description:null}}}});expect(result.status()).toBe(400);expect((await result.json()).error.details).toContainEqual({field:'translations.fr.title',reason:'too_long'});
 const read=await page.request.get(path);expect(read.status()).toBe(200);expect(read.headers()['cache-control']).toContain('no-store');expect(read.headers()['x-resource-version']).toMatch(/^"lib-draft:/);
});
