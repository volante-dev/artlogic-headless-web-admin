import{test,expect}from'@playwright/test';
import{readFile}from'node:fs/promises';
test.skip(!process.env.E2E_EDITORIAL_FIXTURE,'Requires the isolated editorial admin harness.');test.setTimeout(90000);
test('keeps private BFF capabilities behind the admin session while public variants still refuse them',async({page})=>{
 const fixture=JSON.parse(await readFile(process.env.E2E_EDITORIAL_FIXTURE+'/fixture.json','utf8')),path='/api/presentation/assets/'+fixture.privateAssetId+'/content';
 expect((await page.request.get(path)).status()).toBe(401);await page.goto('/');await page.getByRole('button',{name:/se connecter/i}).click();await page.getByRole('button',{name:/continuer avec le compte de test/i}).click();await expect(page.getByRole('button',{name:/se connecter/i})).toHaveCount(0);
 const response=await page.request.get(path,{maxRedirects:0});expect(response.status()).toBe(307);expect(response.headers()['cache-control']).toContain('no-store');expect((await response.body()).length).toBe(0);const terminal=await page.request.get(response.headers().location);expect(terminal.status()).toBe(200);expect(terminal.headers()['content-type']).toMatch(/^image\//);expect((await terminal.body()).length).toBeGreaterThan(0);
 const denied=await page.request.get(process.env.E2E_PUBLIC_URL+'/editorial-assets/'+fixture.privateAssetId+'?image=r1-reference&v='+fixture.privateAssetId+'.original',{maxRedirects:0});expect(denied.status()).toBe(404);
 await page.context().clearCookies();expect((await page.request.get(path)).status()).toBe(401);
});
