import {test,expect,type Page} from "@playwright/test";
import {readFileSync} from "node:fs";
async function login(page:Page){await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/presentation");await expect(page.getByRole("heading",{name:"Apparence et pages",exact:true})).toBeVisible();}
test("publication, explicit restore confirmation and preview POST remain separate from immediate 002 edits",async({page,context})=>{
 await login(page);await expect(page.getByText(/logo.*effet immédiat/i)).toBeVisible();
 await page.getByRole("button",{name:"Publier",exact:true}).click();await expect(page.getByRole("status")).toContainText("Publication confirmée");
 await page.getByRole("button",{name:/Restaurer la version/}).first().click();await expect(page.getByRole("dialog")).toContainText(/remplacera.*brouillon/i);await page.getByRole("button",{name:"Annuler",exact:true}).click();
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);expect(preview.url()).not.toMatch(/code=|token=|session=/);
 const cookies=await context.cookies(preview.url()),session=cookies.find(c=>/artlogic_preview_(?!csrf)/.test(c.name)),csrf=cookies.find(c=>/artlogic_preview_csrf_/.test(c.name));expect(session?.httpOnly).toBe(true);expect(csrf?.httpOnly).toBe(false);expect(session?.sameSite).toBe("Lax");expect(session?.path).toBe("/");
 expect(await preview.evaluate(()=>document.cookie)).not.toContain(session!.value);await expect(preview.locator("iframe")).toBeVisible();
 await expect(preview.frameLocator("iframe").getByTestId("hero-media")).toBeVisible();await preview.getByLabel("Largeur",{exact:true}).selectOption("375");await expect(preview.locator("iframe")).toHaveCSS("width","375px");
 await preview.getByLabel("Langue",{exact:true}).selectOption("en");await expect(preview.frameLocator("iframe").locator('a[hreflang="en"]')).toHaveAttribute("aria-current","true");
 const origin=new URL(preview.url()).origin;for(const token of [undefined,"incorrect"]){expect((await preview.request.delete(origin+"/preview/session",{headers:{origin,...(token?{"x-csrf-token":token}:{})}})).status()).toBe(403);}
 await preview.getByRole("button",{name:"Fermer l’aperçu",exact:true}).click();await expect(preview.locator("iframe")).toBeHidden();expect((await page.request.get("/api/presentation")).status()).toBe(200);
});
test("parent logout hides the live preview and media never becomes public on upload",async({page,context})=>{
 await login(page);const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);await expect(preview.frameLocator("iframe").getByTestId("hero-media")).toBeVisible();
 await page.getByRole("button",{name:"Déconnexion",exact:true}).click();await expect(page.getByRole("button",{name:/se connecter/i})).toBeVisible();await preview.evaluate(()=>window.dispatchEvent(new Event("focus")));await expect(preview.locator("iframe")).toHaveCount(0);
 await login(page);await page.getByRole("link",{name:"Médias",exact:true}).click();const fixture=JSON.parse(readFileSync(process.env.E2E_PRESENTATION_FIXTURE!,"utf8"));await page.getByLabel("Fichier image",{exact:true}).setInputFiles(fixture.assetDirectory+"demo-poster.png");await expect(page.getByRole("button",{name:"Importer et préparer"})).toBeDisabled();await page.getByLabel(/Je confirme disposer des droits/).check();
 const upload=page.waitForResponse(r=>r.url().includes("/api/presentation/assets/")&&r.url().endsWith("/finalize")&&r.request().method()==="POST");await page.getByRole("button",{name:"Importer et préparer"}).click();const uploaded=await upload;expect(uploaded.status()).toBe(200);const asset={id:uploaded.url().split("/assets/")[1]!.split("/")[0]};await expect(page.getByRole("status")).toContainText("Média prêt");
 expect((await page.request.get(fixture.siteOrigin+"/presentation-assets/"+asset.id)).status()).toBe(404);const redirect=await page.request.head("/api/presentation/assets/"+asset.id+"/content",{maxRedirects:0});expect(redirect.status()).toBe(307);const head=await page.request.head(redirect.headers().location!);expect(head.status()).toBe(200);expect((await head.body()).length).toBe(0);
});
test("lost publication response requires rereading instead of replaying the mutation",async({page})=>{
 await login(page);let writes=0;await page.route("**/api/presentation/publications",async route=>{if(route.request().method()!=="POST")return route.continue();writes++;await route.fetch();await route.abort("failed");});
 await page.getByRole("button",{name:"Publier",exact:true}).click();await expect.poll(()=>writes).toBe(1);await expect(page.getByRole("alert").filter({hasText:/réponse n’a pas été reçue/})).toBeVisible();await expect(page.getByRole("button",{name:"Comparer avec la version enregistrée"})).toBeVisible();
});
for(const action of ["identity-disabled","parent-idle"])test("preview is masked after "+action,async({page,context,request})=>{
 const fixture=JSON.parse(readFileSync(process.env.E2E_PRESENTATION_FIXTURE!,"utf8"));
 const control=(action:string)=>request.post(fixture.controlUrl,{headers:{"x-test-control":fixture.controlKey},data:{action}});
 await login(page);const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);await expect(preview.frameLocator("iframe").getByTestId("hero-media")).toBeVisible();
 try{expect((await control(action)).ok()).toBe(true);await preview.evaluate(()=>window.dispatchEvent(new Event("focus")));await expect(preview.locator("iframe")).toHaveCount(0);await expect(preview.getByRole("heading",{name:"Aperçu indisponible ou expiré"})).toBeVisible();}finally{await control("identity-active");}
});
