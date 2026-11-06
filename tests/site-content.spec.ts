import {test,expect,type Page} from "@playwright/test";
async function login(page:Page){await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/site-content");await expect(page.getByRole("heading",{name:"Contenu du site",exact:true})).toBeVisible();}
test("edits, saves and rereads English texts with public visibility under sixty seconds",async({page,context})=>{
  await login(page);const start=Date.now();await page.getByLabel("Langue à éditer").selectOption("en");const input=page.getByLabel("Traduction — Actualités",{exact:true});
  await input.fill("Gallery news");await page.getByLabel("Traduction — Message Actualités",{exact:true}).fill("<b>Plain text, not HTML</b>");await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");
  const saved=Date.now(),publicPage=await context.newPage();await publicPage.goto(process.env.E2E_PUBLIC_URL!+"/en/news");await expect(publicPage.getByText("<b>Plain text, not HTML</b>",{exact:true})).toBeVisible();expect(await publicPage.locator("main b").count()).toBe(0);expect(Date.now()-saved).toBeLessThan(60000);await publicPage.close();
  await page.reload();await page.getByLabel("Langue à éditer").selectOption("en");await expect(input).toHaveValue("Gallery news");await input.fill("");await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");await expect(page.locator('[data-key="nav.news"]')).toContainText("Repli sur la référence");
  expect(Date.now()-start).toBeLessThan(120000);console.log("002 translation workflow_ms="+(Date.now()-start));
});
test("keeps a conflicting draft until an explicit comparison decision",async({page,context})=>{
  await login(page);await page.getByLabel("Langue à éditer").selectOption("en");const other=await context.newPage();await other.goto("/site-content");await other.getByLabel("Langue à éditer").selectOption("en");
  await page.getByLabel("Traduction — Actualités",{exact:true}).fill("First editor");await other.getByLabel("Traduction — Actualités",{exact:true}).fill("Second editor");await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("confirmé");
  await other.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(other.locator("main").getByRole("alert")).toContainText("changé");await expect(other.getByLabel("Traduction — Actualités",{exact:true})).toHaveValue("Second editor");
  await other.getByRole("button",{name:"Comparer avec la version enregistrée"}).click();await expect(other.getByText("First editor",{exact:true})).toBeVisible();await other.getByRole("button",{name:"Conserver mon brouillon sur cette version"}).click();await other.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(other.getByRole("status")).toContainText("confirmé");await other.close();
});
test("BFF preserves bounded field errors, preconditions, size and format statuses",async({page,context})=>{
  await login(page);const csrf=(await context.cookies()).find(c=>c.name.endsWith("artlogic_csrf"))!.value,origin=new URL(page.url()).origin;
  const read=await page.request.get("/api/site-content"),etag=read.headers().etag;
  const headers={origin,"x-csrf-token":csrf,"if-match":etag};
  const invalid=await page.request.patch("/api/site-content",{headers,data:{translations:[{key:"nav.news",locale:"fr",value:""}]}});expect(invalid.status()).toBe(400);expect((await invalid.json()).error.details).toEqual([{field:"translations.0.value",reason:"reference_required"}]);
  expect((await page.request.patch("/api/site-content",{headers:{...headers,"content-type":"text/plain"},data:"{}"})).status()).toBe(415);
  expect((await page.request.patch("/api/site-content",{headers,data:{translations:[{key:"nav.news",locale:"en",value:"x".repeat(262144)}]}})).status()).toBe(413);
  expect((await page.request.patch("/api/site-content",{headers:{...headers,"if-match":'"site-content-999-'+"a".repeat(64)+'"'},data:{logoId:null}})).status()).toBe(412);
  expect((await page.request.patch("/api/site-content",{headers:{...headers,origin:"https://invalid.example"},data:{logoId:null}})).status()).toBe(403);
});
for(const status of [400,401,403,413,415,429,503])test("retains unsaved text after status "+status,async({page})=>{
  await login(page);const field=page.getByLabel("Traduction — Actualités",{exact:true});await field.fill("Keep this draft "+status);
  await page.route("**/api/site-content",route=>route.request().method()==="PATCH"?route.fulfill({status,json:{error:{code:status===400?"validation_error":"service_unavailable",details:status===400?[{field:"translations.0.value",reason:"max_length"}]:undefined}}}):route.continue());
  await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.locator("main").getByRole("alert").first()).toBeVisible();await expect(field).toHaveValue("Keep this draft "+status);
  if(status===401)await expect(page.getByRole("link",{name:"Se reconnecter dans un nouvel onglet"})).toHaveAttribute("target","_blank");
});
test("a lost success response keeps the draft and requires a reread before another write",async({page})=>{
 await login(page);const field=page.getByLabel("Traduction — Actualités",{exact:true});await field.fill("Saved despite lost response");let writes=0;
 await page.route("**/api/site-content",async route=>{if(route.request().method()!=="PATCH")return route.continue();writes++;await route.fetch();await route.abort("failed");});
 await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.locator("main").getByRole("alert")).toContainText("n’a pas pu être confirmée");await expect(field).toHaveValue("Saved despite lost response");expect(writes).toBe(1);await expect(page.getByRole("button",{name:"Enregistrer",exact:true})).toBeDisabled();
 await page.getByRole("button",{name:"Comparer avec la version enregistrée"}).click();await page.getByRole("button",{name:"Utiliser la version enregistrée"}).click();await expect(field).toHaveValue("Saved despite lost response");await expect(page.getByRole("button",{name:"Enregistrer",exact:true})).toBeDisabled();expect(writes).toBe(1);
});
