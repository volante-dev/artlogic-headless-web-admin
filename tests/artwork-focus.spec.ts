import {test,expect} from "@playwright/test";
import {readFileSync} from "node:fs";
test("focus editor saves without a description, previews privately and publishes explicitly",async({page,context},info)=>{
 test.setTimeout(90000);const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")).sites[0];
 await page.request.post(site.controlUrl,{headers:{"x-test-control":site.controlKey},data:{action:"focusClear"}});
 await page.addInitScript(()=>{const samples:number[]=[];(window as unknown as Window & {focusPaintSamples:number[]}).focusPaintSamples=samples;document.addEventListener("input",e=>{if(e.target instanceof HTMLElement&&e.target.closest('[data-testid="artwork-focus-editor"]')){const start=performance.now();requestAnimationFrame(()=>samples.push(performance.now()-start));}},true);});
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/artworks/"+site.artworkId);await expect(page.getByTestId("artwork-focus-editor")).toBeVisible();
 const reset=page.getByRole("button",{name:"Réinitialiser le cadrage",exact:true});if(await reset.isEnabled()){await reset.click();await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");}
 const focusRequests:string[]=[];page.on("request",r=>{if(new URL(r.url()).pathname.startsWith("/api/presentation"))focusRequests.push(r.url());});
 const started=Date.now(),surface=page.getByRole("button",{name:/Choisir le point de focus/});await surface.scrollIntoViewIfNeeded();const box=(await surface.boundingBox())!;
 await surface.click({position:{x:1,y:1}});await expect(page.getByLabel("Horizontal (%)",{exact:true})).toHaveValue("");
 await surface.click();expect(Number(await page.getByLabel("Horizontal (%)",{exact:true}).inputValue())).toBeCloseTo(50,0);
 await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+box.width/2+15,box.y+box.height/2-15);await page.mouse.up();expect(Number(await page.getByLabel("Horizontal (%)",{exact:true}).inputValue())).toBeGreaterThan(50);
 await page.getByLabel("Horizontal (%)",{exact:true}).fill("75");await page.getByLabel("Vertical (%)",{exact:true}).fill("25");
 await page.evaluate(()=>new Promise(requestAnimationFrame));const latency=await page.evaluate(()=>(window as unknown as Window & {focusPaintSamples:number[]}).focusPaintSamples);expect(latency.length).toBeGreaterThan(0);console.log("Focus input-to-frame ms",info.project.name,JSON.stringify(latency));
 for(const [kind,ratio]of [["desktop",1440/900],["mobile",390/844]] as const){const actual=await page.locator(`[data-focus-preview="${kind}"]`).evaluate(e=>{const r=e.getBoundingClientRect();return r.width/r.height;});expect(actual).toBeCloseTo(ratio,2);}
 if(info.project.name==="chromium"&&process.env.E2E_GALLERY_CAPTURE==="1")for(const width of [1440,390]){await page.setViewportSize({width,height:900});await page.getByTestId("artwork-focus-editor").screenshot({path:`.runtime/focus-editor-selected-${width}.png`});}
 expect(focusRequests).toEqual([]);
 await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
 expect(Date.now()-started).toBeLessThan(60000);
 await page.reload();await expect(page.getByLabel("Horizontal (%)",{exact:true})).toHaveValue("75");
 await page.getByRole("combobox",{name:"Langue de la description",exact:true}).click();await page.getByRole("option",{name:/English|Anglais/}).click();await expect(page.getByRole("listbox")).toBeHidden();await expect(page.getByLabel("Horizontal (%)",{exact:true})).toHaveValue("75");
 await page.getByRole("combobox",{name:"Langue de la description",exact:true}).click();await page.getByRole("option",{name:/Français/}).click();
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);await expect(preview.frameLocator("iframe").locator('[data-artwork-focus="true"]')).toHaveCount(1);await preview.close();
 await page.getByRole("button",{name:"Publier le site",exact:true}).click();await expect(page.locator("[data-publication-notification]")).toContainText("Publication confirmée");
 const read=await page.request.get(site.apiOrigin+"/v1/public/artwork-experiences/"+site.artworkId+"?locale=fr");expect((await read.json()).heroFocus).toMatchObject({x:.75,y:.25});
 const canvas=page.getByRole("button",{name:/Choisir le point de focus/});await canvas.focus();await page.keyboard.press("ArrowLeft");await expect(page.getByLabel("Horizontal (%)",{exact:true})).toHaveValue("74.9");
 await page.getByRole("button",{name:"Réinitialiser le cadrage",exact:true}).click();await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
 await page.route("**/api/presentation/artworks/"+site.artworkId,async route=>{const response=await route.fetch();const body=await response.json();delete body.focusContext;await route.fulfill({response,json:body});});
 await page.reload();await expect(page.getByTestId("artwork-focus-editor")).toHaveCount(0);await expect(page.getByLabel("Description de l’œuvre",{exact:true})).toBeVisible();
});
test("touch selection uses the same focus editor without requiring a drag",async({browser,baseURL,page:loginPage})=>{
 const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")).sites[0];
 await loginPage.goto("/");await loginPage.getByRole("button",{name:/se connecter/i}).click();await loginPage.getByRole("button",{name:/continuer avec le compte de test/i}).click();await loginPage.goto("/artworks/"+site.artworkId);await expect(loginPage.getByTestId("artwork-focus-editor")).toBeVisible();
 const context=await browser.newContext({baseURL,viewport:{width:390,height:844},hasTouch:true,userAgent:await loginPage.evaluate(()=>navigator.userAgent),storageState:await loginPage.context().storageState()});
 try{const page=await context.newPage();await page.goto("/artworks/"+site.artworkId);
  const reset=page.getByRole("button",{name:"Réinitialiser le cadrage",exact:true});await expect(reset).toBeVisible();
  if(await reset.isEnabled()){await reset.tap();await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).tap();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");}
  await page.getByRole("button",{name:/Choisir le point de focus/}).tap();expect(Number(await page.getByLabel("Horizontal (%)",{exact:true}).inputValue())).toBeCloseTo(50,0);expect(Number(await page.getByLabel("Vertical (%)",{exact:true}).inputValue())).toBeCloseTo(50,0);
  await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).tap();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
 }finally{await context.close();}
});
test("a replaced image preserves local input and an unavailable image leaves description editing usable",async({page})=>{
 test.setTimeout(90000);const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")).sites[0];
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks/"+site.artworkId);
 await page.getByLabel("Horizontal (%)",{exact:true}).fill("63");await page.getByLabel("Vertical (%)",{exact:true}).fill("37");
 await page.route("**/api/presentation/artworks/"+site.artworkId,async route=>{if(route.request().method()==="PUT")await route.fulfill({status:409,json:{error:{code:"artwork_media_changed",message:"Image changed"}}});else await route.continue();});
 await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.getByText(/principale a changé pendant/)).toBeVisible();await expect(page.getByLabel("Horizontal (%)",{exact:true})).toHaveValue("63");await expect(page.getByRole("button",{name:"Enregistrer les contributions",exact:true})).toBeDisabled();
 await page.getByRole("button",{name:"Comparer avec la version enregistrée",exact:true}).click();await expect(page.getByRole("button",{name:"Utiliser cette version comme référence et garder ma saisie",exact:true})).toBeVisible();await expect(page.getByLabel("Vertical (%)",{exact:true})).toHaveValue("37");
 await page.unrouteAll();page.on("dialog",dialog=>dialog.accept());
 await page.route("**/api/presentation/artworks/"+site.artworkId,async route=>{const response=await route.fetch();const body=await response.json();body.focusContext={status:"unavailable",primaryMedia:null,selection:null};await route.fulfill({response,json:body});});
 await page.reload();await expect(page.getByText(/L’image est indisponible/)).toBeVisible();await page.getByLabel("Description de l’œuvre",{exact:true}).fill("Description remains editable");await expect(page.getByRole("button",{name:"Enregistrer les contributions",exact:true})).toBeEnabled();
});
test("each reference ratio can be configured and saved in under a minute",async({page},info)=>{
 test.setTimeout(90000);const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")).sites[0];test.skip(!site.focusArtworkIds,"Requires --focus fixtures");
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 for(const id of site.focusArtworkIds){await page.goto("/artworks/"+id);await expect(page.getByTestId("artwork-focus-editor")).toBeVisible();const start=Date.now();await page.getByLabel("Horizontal (%)",{exact:true}).fill(info.project.name==="webkit"?"62":"61");await page.getByLabel("Vertical (%)",{exact:true}).fill(info.project.name==="webkit"?"38":"39");await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");expect(Date.now()-start).toBeLessThan(60000);}
});
