import {test,expect,type Page} from "@playwright/test";
import {resolve} from "node:path";
import {readFile} from "node:fs/promises";
const png=resolve(process.cwd(),"../backend/mock/fixtures/site-logos/logo.png");
async function login(page:Page){await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/site-content");await expect(page.getByRole("heading",{name:"Contenu du site",exact:true})).toBeVisible();}
for(const width of [375,1440])test("logo upload, preview, replacement and removal at "+width+"px",async({page,context})=>{
 await page.setViewportSize({width,height:900});await login(page);const start=Date.now();await page.getByLabel("Choisir un logo").setInputFiles(png);await expect(page.getByTestId("logo-draft-preview")).toBeVisible();await page.getByRole("button",{name:"Enregistrer",exact:true}).focus();await page.keyboard.press("Enter");await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");
 const publicPage=await context.newPage();await publicPage.goto(process.env.E2E_PUBLIC_URL!+"/news");const logo=publicPage.getByTestId("site-logo");await expect(logo).toBeVisible();await expect.poll(()=>logo.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);const old=await logo.getAttribute("src");
 await page.getByLabel("Choisir un logo").setInputFiles(png);await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");await publicPage.reload();await expect(logo).not.toHaveAttribute("src",old!);expect((await publicPage.request.get(new URL(old!,process.env.E2E_PUBLIC_URL!).href)).status()).toBe(404);
 await page.getByRole("button",{name:"Retirer le logo"}).focus();await page.keyboard.press("Enter");await page.getByRole("button",{name:"Enregistrer",exact:true}).focus();await page.keyboard.press("Enter");await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");await publicPage.reload();await expect(logo).toHaveCount(0);await expect(publicPage.getByRole("link",{name:/Retour à l’accueil/})).toContainText("Galerie");await publicPage.close();expect(Date.now()-start).toBeLessThan(120000);console.log("002 logo workflow_ms="+(Date.now()-start));
});
test("invalid image reports its file reason without sending a content PATCH or losing texts",async({page})=>{
 await login(page);await page.getByLabel("Traduction — Actualités",{exact:true}).fill("Logo rejection draft");let patches=0;page.on("request",request=>{if(request.url().endsWith("/api/site-content")&&request.method()==="PATCH")patches++;});
 await page.getByLabel("Choisir un logo").setInputFiles({name:"broken.png",mimeType:"image/png",buffer:Buffer.from("not an image")});await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByText("Le fichier n’est pas une image valide.",{exact:true})).toBeVisible();await expect(page.getByLabel("Traduction — Actualités",{exact:true})).toHaveValue("Logo rejection draft");expect(patches).toBe(0);
});
test("logo BFF bounds raw bytes, preserves errors and protects candidate previews",async({page,context})=>{
 await login(page);const csrf=(await context.cookies()).find(c=>c.name.endsWith("artlogic_csrf"))!.value,origin=new URL(page.url()).origin,headers={origin,"x-csrf-token":csrf,"content-type":"image/png"},bytes=await readFile(png);
 expect((await page.request.post("/api/site-logos",{headers,data:Buffer.alloc(2097153)})).status()).toBe(413);
 expect((await page.request.post("/api/site-logos",{headers:{...headers,"content-type":"image/svg+xml"},data:"<svg/>"})).status()).toBe(415);
 const bad=await page.request.post("/api/site-logos",{headers:{...headers,"content-type":"image/jpeg"},data:bytes});expect(bad.status()).toBe(400);expect((await bad.json()).error.details).toEqual([{field:"file",reason:"mime_mismatch"}]);
 const candidate=await page.request.post("/api/site-logos",{headers,data:bytes});expect(candidate.status()).toBe(201);const id=(await candidate.json()).id;expect((await page.request.get("/api/site-logos/"+id)).status()).toBe(200);expect((await page.request.get(process.env.E2E_PUBLIC_URL!+"/site-logos/"+id)).status()).toBe(404);
});
test("keeps a combined draft after conflict and reuploads a candidate whose advertised lifetime expired",async({page})=>{
 await login(page);await page.getByLabel("Traduction — Actualités",{exact:true}).fill("Combined logo draft");await page.getByLabel("Choisir un logo").setInputFiles(png);let uploads=0,patches=0;
 await page.route("**/api/site-logos",async route=>{uploads++;const result=await route.fetch(),body=await result.json();await route.fulfill({response:result,json:{...body,expiresAt:"2000-01-01T00:00:00Z"}});});
 await page.route("**/api/site-content",route=>{if(route.request().method()!=="PATCH")return route.continue();patches++;if(patches===1)return route.fulfill({status:412,json:{error:{code:"version_conflict"}}});return route.continue();});
 await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.locator("main").getByRole("alert")).toContainText("changé");await expect(page.getByLabel("Traduction — Actualités",{exact:true})).toHaveValue("Combined logo draft");await expect(page.getByTestId("logo-draft-preview")).toBeVisible();expect(uploads).toBe(1);
 await page.getByRole("button",{name:"Comparer avec la version enregistrée"}).click();await page.getByRole("button",{name:"Conserver mon brouillon sur cette version"}).click();await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");expect(uploads).toBe(2);expect(patches).toBe(2);
});
for(const width of [390,1440])test("white logo follows inverse header and mobile menu at "+width+"px",async({page,context})=>{
 await page.setViewportSize({width,height:900});await login(page);
 await page.getByLabel("Choisir un logo",{exact:true}).setInputFiles(png);
 await page.getByLabel("Choisir la variante blanche",{exact:true}).setInputFiles(png);
 await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");
 const response=await page.request.get('/api/site-content');const content=await response.json();expect(content.whiteLogo.id).not.toBe(content.logo.id);
 await page.reload();await expect(page.getByTestId('white-logo-draft-preview')).toBeVisible();
 await page.getByRole("group",{name:"Logo blanc",exact:true}).screenshot({path:`.impeccable/review/white-logo-admin-${width}.png`,animations:"disabled"});
 const publicPage=await context.newPage();await publicPage.setViewportSize({width,height:900});await publicPage.goto(process.env.E2E_PUBLIC_URL!+'/');
 const logo=publicPage.locator('header').getByTestId('site-logo');await expect(logo).toHaveAttribute('src',new RegExp('/site-logos/'+content.whiteLogo.id+'$'));
 await publicPage.bringToFront();await expect(logo).toBeVisible();await expect.poll(()=>logo.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);await publicPage.evaluate(()=>document.fonts.ready);await publicPage.screenshot({path:`.impeccable/review/white-logo-public-${width}.png`,fullPage:true,animations:"disabled"});
 if(width<1100){await publicPage.locator('header button[aria-expanded]').click();await expect(logo).toHaveAttribute('src',new RegExp('/site-logos/'+content.logo.id+'$'));await publicPage.locator('header button[aria-expanded]').click();await expect(logo).toHaveAttribute('src',new RegExp('/site-logos/'+content.whiteLogo.id+'$'));}
 await publicPage.goto(process.env.E2E_PUBLIC_URL!+'/news');await expect(logo).toHaveAttribute('src',new RegExp('/site-logos/'+content.logo.id+'$'));
 await page.getByRole('button',{name:'Retirer la variante blanche',exact:true}).click();await page.getByRole('button',{name:'Enregistrer',exact:true}).click();await expect(page.getByRole('status')).toContainText('Enregistrement confirmé');
 await publicPage.goto(process.env.E2E_PUBLIC_URL!+'/');await expect(logo).toHaveAttribute('src',new RegExp('/site-logos/'+content.logo.id+'$'));await publicPage.close();
});
