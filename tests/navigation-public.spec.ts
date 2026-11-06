import {test,expect} from "@playwright/test";
import {readFile} from "node:fs/promises";
import {navigationLogin,replaceMenu} from "./navigation-helpers";
test("renders saved order in SSR and switches language without document reload",async({page})=>{
 test.setTimeout(60000);await navigationLogin(page);
 const original=await(await page.request.get("/api/navigation")).json(),fixture=JSON.parse(await readFile(process.env.E2E_PRESENTATION_FIXTURE!,"utf8"));
 try{
  const began=Date.now();
  const items=[...original.items].sort((a,b)=>a.pageKey==="contact"?-1:b.pageKey==="contact"?1:0).map(i=>({...i,visible:i.pageKey!=="publications"}));expect((await replaceMenu(page,items)).status()).toBe(200);
  const site=await page.context().newPage();try{
   for(const width of [1440,375]){
    await site.setViewportSize({width,height:900});await site.goto(fixture.siteOrigin+"/artworks");
    if(width===375)await site.getByRole("button",{name:/ouvrir le menu/i}).click();
    const links=site.locator('header nav ul a');await expect(links.first()).toHaveAttribute("href","/contact");await expect(site.locator('header nav a[href="/publications"]')).toHaveCount(0);
   }
   expect(Date.now()-began).toBeLessThan(60000);console.log("SC-002 automated fresh consultations ms:",Date.now()-began);
   await site.goto(fixture.siteOrigin+"/publications");await expect(site.getByRole("heading",{level:1})).toBeVisible();
   await site.setViewportSize({width:1440,height:900});await site.goto(fixture.siteOrigin+"/artworks");await site.evaluate(()=>{(window as Window&{navigationProbe?:boolean}).navigationProbe=true;});
   await site.locator('header a[lang="en"]').click();await expect(site).toHaveURL(/\/en\/artworks/);expect(await site.evaluate(()=>(window as Window&{navigationProbe?:boolean}).navigationProbe)).toBe(true);await expect(site.locator('header nav ul a').first()).toHaveAttribute("href","/en/contact");
  }finally{await site.close();}
 }finally{expect((await replaceMenu(page,original.items)).status()).toBe(200);}
});
test("handles zero and one links and preserves the mounted bundle when the menu read fails",async({page})=>{
 test.setTimeout(60000);await navigationLogin(page);const original=await(await page.request.get("/api/navigation")).json(),fixture=JSON.parse(await readFile(process.env.E2E_PRESENTATION_FIXTURE!,"utf8"));
 const site=await page.context().newPage();
 async function fault(action:string){const r=await page.request.post(fixture.controlUrl,{headers:{"x-test-control":fixture.controlKey},data:{action}});expect(r.status()).toBe(200);}
 try{
  for(const count of [0,1,7]){
   const items=original.items.map((i:{pageKey:string})=>({...i,visible:count===7||count===1&&i.pageKey==="contact"}));expect((await replaceMenu(page,items)).status()).toBe(200);
   for(const width of [375,1440]){
    await site.setViewportSize({width,height:900});await site.goto(fixture.siteOrigin+"/artworks");if(width===375)await site.getByRole("button",{name:/ouvrir le menu/i}).click();
    await expect(site.locator("header nav a:not([lang])")).toHaveCount(count===7?6:count);
    expect(await site.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   }
  }
  await site.setViewportSize({width:1440,height:900});await site.goto(fixture.siteOrigin+"/artworks");const before=await site.locator("header nav a:not([lang])").allTextContents();
  await fault("navigation-read-fail");await site.locator('header a[lang="en"]').click();await expect(site.locator('header [role="status"]')).toBeVisible();expect(await site.locator("header nav a:not([lang])").allTextContents()).toEqual(before);expect(new URL(site.url()).pathname).toBe("/artworks");
  await site.reload();await expect(site.locator("header nav a:not([lang])")).toHaveCount(0);await expect(site.locator('header a[lang="en"]')).toBeVisible();
  await fault("navigation-read-ok");await site.reload();await expect(site.locator("header nav a:not([lang])")).toHaveCount(6);
  await fault("navigation-release-race-next");await site.locator('header a[lang="en"]').click();await expect(site.locator('header [role="status"]')).toBeVisible();expect(new URL(site.url()).pathname).toBe("/artworks");
  await site.locator('header button').filter({hasText:/Réessayer/}).click();await expect(site.locator("header nav a:not([lang])")).toHaveCount(6);await site.locator('header a[lang="en"]').click();await expect(site).toHaveURL(/\/en\/artworks/);
 }finally{await fault("navigation-read-ok");await replaceMenu(page,original.items);await site.close();}
});
