import {test,expect} from "@playwright/test";
import {readFileSync} from "node:fs";
test.skip(!process.env.E2E_PRESENTATION_FIXTURE,"Requires the isolated presentation harness.");
test.setTimeout(180000);
test("imports and publishes centered animated WebP and global loaders on desktop/mobile with reduced-motion and error fallbacks",async({page},testInfo)=>{
 const fixture=JSON.parse(readFileSync(process.env.E2E_PRESENTATION_FIXTURE!,"utf8")),site=process.env.E2E_PUBLIC_URL!;
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/presentation/pages/home");await page.getByRole("button",{name:/^(Choisir|Changer) visuel webp centré$/i}).click();
 const dialog=page.getByRole("dialog",{name:"Visuel WebP centré",exact:true});
 await dialog.getByLabel("Fichier image",{exact:true}).setInputFiles(fixture.assetDirectory+"invalid/animated.webp");
 await dialog.getByLabel(/Je confirme disposer des droits/).check();
 const upload=page.waitForResponse(r=>r.url().includes("/api/presentation/assets/")&&r.url().endsWith("/finalize")&&r.request().method()==="POST");
 await dialog.getByRole("button",{name:"Importer et préparer",exact:true}).click();const response=await upload;expect(response.status()).toBe(200);const {asset}=await response.json();
 const row=dialog.getByText("Image · "+asset.id.slice(0,8),{exact:true}).locator("..").locator("..");await row.getByRole("button",{name:"Choisir ce média",exact:true}).click();
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();
 await page.goto("/presentation/identity");
 await page.getByRole("button",{name:/^(Choisir|Changer) webp des loaders$/i}).click();
 const loaderDialog=page.getByRole("dialog",{name:"WebP des loaders",exact:true});await loaderDialog.getByText("Image · "+asset.id.slice(0,8),{exact:true}).locator("..").locator("..").getByRole("button",{name:"Choisir ce média",exact:true}).click();
 await page.getByRole("button",{name:"Enregistrer le brouillon",exact:true}).click();await expect(page.getByText("Toutes les modifications sont enregistrées",{exact:true})).toBeVisible();
 for(const width of [1440,375]){await page.setViewportSize({width,height:900});await page.getByRole("heading",{name:"Indicateurs de chargement",exact:true}).scrollIntoViewIfNeeded();await page.screenshot({path:testInfo.outputPath(`admin-loader-${width}.png`)});}
 await page.goto("/presentation/pages/home");await page.getByRole("button",{name:"Publier le site",exact:true}).click();await expect(page.getByText(/Publication confirmée/).first()).toBeVisible();
 await page.goto(site+"/");const overlay=page.getByTestId("hero-media").locator("picture img");await expect(overlay).toBeVisible();await expect.poll(()=>overlay.evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
 for(const width of [1440,375]){await page.setViewportSize({width,height:900});const hero=await page.getByTestId("hero-media").boundingBox(),box=await overlay.boundingBox();expect(Math.abs(box!.x+box!.width/2-hero!.width/2)).toBeLessThan(1);expect(Math.abs(box!.y+box!.height/2-hero!.height/2)).toBeLessThan(1);await page.screenshot({path:testInfo.outputPath(`hero-${width}.png`)});}
 await expect.poll(()=>overlay.evaluate((img:HTMLImageElement)=>img.currentSrc)).toContain("variant=original");
 await page.getByRole("button",{name:"Mettre le film en pause",exact:true}).click();await expect(overlay).toHaveAttribute("src",/variant=w640/);
 await page.getByRole("button",{name:"Lire le film",exact:true}).click();await expect(overlay).toHaveAttribute("src",/variant=original/);
 await page.emulateMedia({reducedMotion:"reduce"});await expect.poll(()=>overlay.evaluate((img:HTMLImageElement)=>img.currentSrc)).toContain("variant=w640");
 await page.emulateMedia({reducedMotion:"no-preference"});await page.setViewportSize({width:1440,height:900});
 let release=()=>{};const held=new Promise<void>(resolve=>{release=resolve;});
 await page.route("**/contact?*",async route=>{if(route.request().headers().rsc!=="1"){await route.continue();return;}const response=await route.fetch();await held;await route.fulfill({response});});
 try{
  await page.locator('header a[href="/contact"]').click({noWaitAfter:true});const loader=page.locator('[data-header-status][role="progressbar"]');await expect(loader).toBeVisible();const image=loader.locator("picture img");await expect(image).toBeVisible();await expect.poll(()=>image.evaluate((img:HTMLImageElement)=>img.currentSrc)).toContain("variant=original");await expect.poll(()=>image.evaluate(img=>getComputedStyle(img.closest("span")!).opacity)).toBe("1");await page.screenshot({path:testInfo.outputPath("custom-loader-desktop.png")});
  await page.emulateMedia({reducedMotion:"reduce"});await expect.poll(()=>image.evaluate((img:HTMLImageElement)=>img.currentSrc)).toContain("variant=w640");await page.setViewportSize({width:375,height:900});await page.screenshot({path:testInfo.outputPath("custom-loader-mobile-reduced.png")});
  await page.route("**/presentation-assets/"+asset.id+"**",route=>route.abort());await image.evaluate((img:HTMLImageElement)=>{img.dispatchEvent(new Event("error"));});await expect(loader.locator("picture")).toHaveCount(0);await expect(loader.locator("span span")).toBeVisible();
 }finally{release();await page.unrouteAll({behavior:"ignoreErrors"});}
 await expect(page).toHaveURL(site+"/contact");
 await page.route("**/api/presentation/capabilities",async route=>{const response=await route.fetch(),data=await response.json();delete data.animatedWebp;await route.fulfill({response,json:data});});
 await page.goto(new URL("/presentation/identity",testInfo.project.use.baseURL!).href);await expect(page.getByText("Le WebP des loaders sera disponible après la mise à jour du service de présentation.",{exact:true})).toBeVisible();await expect(page.getByRole("button",{name:/^(Choisir|Changer) webp des loaders$/i})).toHaveCount(0);
 await page.goto("/presentation/pages/home");await expect(page.getByText("Le visuel WebP centré sera disponible après la mise à jour du service de présentation.",{exact:true})).toBeVisible();await expect(page.getByRole("button",{name:"Enregistrer la page",exact:true})).toBeVisible();
});
