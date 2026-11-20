import {test,expect} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
test.skip(process.env.E2E_LINK_IN_BIO!=='true','Synthetic visual recipe only.');
test('captures the admin editor on desktop and mobile',async({page,context})=>{
 const origin=process.env.E2E_BASE_URL!;await context.addCookies([{name:'artlogic_admin_session',value:'synthetic-session',url:origin},{name:'artlogic_csrf',value:'a'.repeat(43),url:origin}]);
 await page.route('https://images.example.test/**',async route=>{const image=await page.request.get(process.env.E2E_LINK_BIO_IMAGE!);return route.fulfill({contentType:'image/webp',body:await image.body()});});
 await mkdir('.impeccable/review/link-in-bio',{recursive:true});
 for(const [name,width,height] of [['desktop',1440,1000],['mobile',375,900]] as const){await page.setViewportSize({width,height});await page.goto('/link-in-bio?instagram=connected');await expect(page.getByRole('button',{name:'Associer le post 1'})).toBeVisible();await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(image=>image.decode().catch(()=>undefined)));});await page.addStyleTag({content:'nextjs-portal{display:none}'});await page.screenshot({path:'.impeccable/review/link-in-bio/'+name+'.png',fullPage:true});}
});
