import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
test('localized meta descriptions follow save, private preview and publication; versioned fonts are cached',async({page,context,browserName},info)=>{
 test.setTimeout(120000);const site=JSON.parse(readFileSync(process.env.E2E_PRESENTATION_FIXTURE!,'utf8')).siteOrigin,fr='Description de la galerie de test — '+browserName,en='Test gallery description — '+browserName;
 await page.goto('/');await page.getByRole('button',{name:/se connecter/i}).click();await page.getByRole('button',{name:/continuer avec le compte de test/i}).click();await page.goto('/presentation/pages/home');
 const field=page.getByRole('textbox',{name:/Meta description/}),save=page.getByRole('button',{name:'Enregistrer la page',exact:true});await expect(field).toBeVisible();await field.fill('x'.repeat(321));await expect(save).toBeDisabled();await field.fill(fr);
 await page.getByRole('combobox',{name:'Langue d’édition',exact:true}).click();await page.getByRole('option',{name:'English',exact:true}).click();await field.fill(en);await save.click();await expect(save).toBeDisabled();
 await page.screenshot({path:info.outputPath('metadata-editor.png')});await page.setViewportSize({width:375,height:812});await field.scrollIntoViewIfNeeded();await page.screenshot({path:info.outputPath('metadata-editor-mobile.png')});await page.setViewportSize({width:1280,height:720});
 const [preview]=await Promise.all([context.waitForEvent('page'),page.getByRole('button',{name:'Prévisualiser',exact:true}).click()]);await expect(preview.frameLocator('iframe').locator('meta[name="description"]')).toHaveAttribute('content',en);await preview.close();
 const publicPage=await context.newPage();await publicPage.goto(site+'/',{waitUntil:'domcontentloaded'});await expect(publicPage.locator('meta[name="description"]')).not.toHaveAttribute('content',fr);
 await page.getByRole('button',{name:'Publier le site',exact:true}).click();await expect(page.getByRole('status')).toContainText('Publication confirmée');
 await publicPage.reload({waitUntil:'domcontentloaded'});await expect(publicPage.locator('meta[name="description"]')).toHaveAttribute('content',fr);await expect(publicPage.locator('meta[name="description"]')).toHaveCount(1);
 await publicPage.goto(site+'/en',{waitUntil:'domcontentloaded'});await expect(publicPage.locator('meta[name="description"]')).toHaveAttribute('content',en);
 const hints=publicPage.locator('link[rel="preload"][as="font"]');await expect(hints.first()).toHaveAttribute('href',/\?v=[a-f0-9]{16}$/);const url=await hints.first().getAttribute('href');const font=await publicPage.request.get(new URL(url!,site).href);expect(font.status()).toBe(200);expect(font.headers()['cache-control']).toContain('max-age=31536000');expect(font.headers()['cache-control']).toContain('immutable');expect(font.headers()['cache-control']).not.toContain('private');
 const missing=await publicPage.request.get(site+'/fonts/missing.woff2?v=0000000000000000',{headers:{'x-site-path':'/','x-site-locale':'fr'}});expect(missing.status()).toBe(404);expect(missing.headers()['cache-control']).toContain('no-store');
 await publicPage.evaluate(async()=>{await document.fonts.ready;});const resources=await publicPage.evaluate(()=>performance.getEntriesByType('resource').map(r=>r.name).filter(url=>url.includes('/fonts/')&&url.includes('.woff2')));expect(resources.some(url=>url.includes('-latin-ext-'))).toBe(false);
 await publicPage.close();
});
