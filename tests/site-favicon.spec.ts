import {test,expect} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
import {fallbackFavicons} from '../../artlogic-frontend/lib/site-favicon/fallback.generated';
test.skip(process.env.E2E_FAVICON!=='true','Isolated favicon API/BFF recipe.');
test.beforeEach(async({context})=>{await context.addCookies([{name:'artlogic_admin_session',value:'synthetic-session',url:process.env.E2E_BASE_URL!},{name:'artlogic_csrf',value:'a'.repeat(43),url:process.env.E2E_BASE_URL!}]);});
test('imports a PNG, publishes the generated icons and restores the default',async({page,request})=>{
 await page.goto('/site-content');const panel=page.getByRole('region',{name:'Icône du site'});await expect(panel.getByText('Icône de repli',{exact:true})).toBeVisible();await expect(panel.getByRole('button',{name:'Enregistrer le favicon'})).toBeDisabled();
 await panel.getByLabel('Choisir un PNG').setInputFiles({name:'logo.png',mimeType:'image/png',buffer:Buffer.from(fallbackFavicons['icon-512.png'].base64,'base64')});await expect(panel.getByAltText('Aperçu du PNG sélectionné')).toBeVisible();
 await panel.getByRole('button',{name:'Enregistrer le favicon'}).click();await expect(panel.getByRole('status')).toContainText('Favicon enregistré');await expect(panel.getByText('En ligne',{exact:true})).toBeVisible();await expect(panel.getByRole('button',{name:'Enregistrer le favicon'})).toBeDisabled();
 for(const file of ['favicon.ico','icon-32.png','apple-touch-icon.png','icon-192.png','icon-512.png']){
  const response=await request.get(process.env.E2E_FAVICON_FRONTEND!+'/favicon.ico?file='+file,{maxRedirects:0});expect(response.status()).toBe(307);expect(response.headers()['cache-control']).toContain('s-maxage=300');const url=response.headers().location!;expect(url).toContain('/site-logos/favicons/');expect((await request.get(url)).status()).toBe(200);
 }
 if(test.info().project.name==='chromium'){
  await page.addStyleTag({content:'nextjs-portal { display:none!important; }'});await mkdir('.impeccable/review/site-favicon',{recursive:true});await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'.impeccable/review/site-favicon/desktop.png',fullPage:true});await page.setViewportSize({width:390,height:1000});await page.screenshot({path:'.impeccable/review/site-favicon/mobile.png',fullPage:true});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
 await panel.getByRole('button',{name:'Utiliser l’icône de repli'}).click();await expect(panel.getByRole('status')).toContainText('Le favicon de repli est rétabli');
 const fallback=await request.get(process.env.E2E_FAVICON_FRONTEND!+'/favicon.ico?file=apple-touch-icon.png',{maxRedirects:0});expect(fallback.status()).toBe(200);expect(fallback.headers()['content-type']).toBe('image/png');
});
test('preserves older API compatibility locally and keeps the rest of the editor available',async({page})=>{
 await page.route('**/api/site-favicon',route=>route.fulfill({status:404,json:{error:{code:'not_found'}}}));await page.goto('/site-content');await expect(page.getByText(/La gestion du favicon sera disponible/)).toBeVisible();await expect(page.getByRole('heading',{name:'Contenu du site',exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Enregistrer',exact:true})).toBeVisible();
});
test('validates PNG input and guards BFF writes before forwarding',async({page,request})=>{
 await page.goto('/site-content');await expect(page.getByLabel('Choisir un PNG')).toBeVisible();await page.getByLabel('Choisir un PNG').setInputFiles({name:'first.png',mimeType:'image/png',buffer:Buffer.from(fallbackFavicons['icon-512.png'].base64,'base64')});await expect(page.getByRole('button',{name:'Enregistrer le favicon'})).toBeEnabled();await page.getByLabel('Choisir un PNG').setInputFiles({name:'photo.jpg',mimeType:'image/jpeg',buffer:Buffer.from('jpeg')});await expect(page.locator('#favicon-error')).toContainText('Choisissez une image au format PNG');await expect(page.getByRole('button',{name:'Enregistrer le favicon'})).toBeDisabled();await expect(page.getByAltText('Aperçu du PNG sélectionné')).toHaveCount(0);
 const result=await request.put('/api/site-favicon',{headers:{'Content-Type':'image/png','If-Match':'"favicon-0"'},data:Buffer.from('png')});expect(result.status()).toBe(403);
});
