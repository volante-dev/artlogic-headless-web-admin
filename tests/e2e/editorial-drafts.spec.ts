import {test,expect,type Page} from "@playwright/test";
test.skip(!process.env.E2E_EDITORIAL_FIXTURE,"Requires the isolated editorial harness.");
test.setTimeout(60000);
async function login(page:Page){page.on("dialog",dialog=>dialog.accept());await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/publications");await expect(page.getByRole("heading",{name:"Publications",exact:true})).toBeVisible();}
async function create(page:Page,kind="publications"){
 await page.goto("/"+kind+"/new");await page.getByLabel("Titre",{exact:true}).fill("Article synthétique de recette");await page.getByRole("button",{name:"Créer le brouillon",exact:true}).click();await page.waitForURL(new RegExp("/"+kind+"/[a-f0-9-]{36}$"));await expect(page.getByRole("status")).toContainText("Enregistré");return page.url().split("/").at(-1)!;
}
test("creates private drafts in both sections, persists translated text and preserves the admin shell on mobile",async({page})=>{
 await login(page);
 for(const kind of ["publications","news"]){
  const id=await create(page,kind);
  await page.getByLabel("Adresse — FR",{exact:true}).fill("article-recette-"+id);
  await page.getByLabel("Date de l’article",{exact:true}).fill("2026-10-30");
  await page.getByRole("button",{name:"Ajouter un bloc texte",exact:true}).click();
  await page.getByRole("textbox",{name:"Texte du bloc 1 — FR",exact:true}).fill("Un texte français pour vérifier le brouillon.");
  await expect(page.getByRole("status")).toContainText("Enregistré");
  await page.getByRole("tab",{name:/^EN/}).click();await expect(page.locator(".editorial-reference")).toContainText("Un texte français");
  await page.getByLabel("Titre — EN",{exact:true}).fill("Synthetic acceptance article");await page.getByRole("textbox",{name:"Texte du bloc 1 — EN",exact:true}).fill("An English text for draft acceptance.");
  await expect(page.getByRole("status")).toContainText("Enregistré");
  const response=await page.request.get("/api/editorial/articles/"+id);expect(response.status()).toBe(200);const article=await response.json();expect(article.document.translations.en.title).toBe("Synthetic acceptance article");expect(article.isPublished).toBe(false);
  await page.reload();await expect(page.getByLabel("Titre — FR",{exact:true})).toHaveValue("Article synthétique de recette");await expect(page.getByRole("textbox",{name:"Texte du bloc 1 — FR",exact:true})).toContainText("Un texte français");
 }
 await page.screenshot({path:process.env.E2E_EDITORIAL_FIXTURE+"/editor-desktop.png",fullPage:true});
 await page.setViewportSize({width:375,height:812});await expect(page.getByRole("tab",{name:"Composition",exact:true})).toBeVisible();await page.getByRole("tab",{name:"Article",exact:true}).click();await expect(page.getByLabel("Titre — FR",{exact:true})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.screenshot({path:process.env.E2E_EDITORIAL_FIXTURE+"/editor-mobile.png",fullPage:true});
});
test("keeps newer typing while an autosave is in flight and stops on a conflicting session",async({page,context})=>{
 await login(page);const id=await create(page),url=page.url(),other=await context.newPage();other.on("dialog",dialog=>dialog.accept());await other.goto(url);await expect(other.getByRole("status")).toContainText("Enregistré");
 let inFlight=0,max=0,first=true;
 await page.route("**/api/editorial/articles/"+id+"/draft",async route=>{inFlight++;max=Math.max(max,inFlight);const response=await route.fetch();if(first){first=false;await new Promise(resolve=>setTimeout(resolve,900));}await route.fulfill({response});inFlight--;});
 const request=page.waitForRequest(r=>r.method()==="PUT"&&r.url().endsWith("/draft"));await page.getByLabel("Titre — FR",{exact:true}).fill("Premier instantané");await request;await page.getByLabel("Titre — FR",{exact:true}).fill("Saisie plus récente");
 await expect(page.getByRole("status")).toContainText("Enregistré");await expect(page.getByLabel("Titre — FR",{exact:true})).toHaveValue("Saisie plus récente");expect(max).toBe(1);
 await other.getByLabel("Titre — FR",{exact:true}).fill("Autre session");await expect(other.getByRole("alert").filter({hasText:"autre session"})).toBeVisible();await expect(other.getByLabel("Titre — FR",{exact:true})).toHaveValue("Autre session");
 await other.getByRole("button",{name:"Comparer",exact:true}).click();await expect(other.getByRole("heading",{name:"Comparer avec la version enregistrée"})).toBeVisible();await other.getByRole("button",{name:"Utiliser la version enregistrée",exact:true}).click();await expect(other.getByLabel("Titre — FR",{exact:true})).toHaveValue("Saisie plus récente");await other.close();
});
test("does not blindly retry a committed write whose response was lost",async({page})=>{
 await login(page);const id=await create(page);let writes=0;
 await page.route("**/api/editorial/articles/"+id+"/draft",async route=>{writes++;await route.fetch();await route.abort("failed");});
 await page.getByLabel("Titre — FR",{exact:true}).fill("Réponse perdue");await expect(page.getByRole("alert").filter({hasText:"n’a pas pu être confirmé"})).toBeVisible();
 const stored=await page.request.get("/api/editorial/articles/"+id);expect((await stored.json()).document.translations.fr.title).toBe("Réponse perdue");expect(writes).toBe(1);
 await page.getByRole("button",{name:"Comparer",exact:true}).click();await expect(page.getByRole("heading",{name:"Comparer avec la version enregistrée"})).toBeVisible();await page.getByRole("button",{name:"Utiliser la version enregistrée",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistré");expect(writes).toBe(1);
});
test("the BFF rejects anonymous reads, foreign query keys, missing CSRF, binary uploads and oversized JSON",async({page,playwright,baseURL})=>{
 const anonymous=await playwright.request.newContext({baseURL});try{expect((await anonymous.get("/api/editorial/articles?kind=news")).status()).toBe(401);}finally{await anonymous.dispose();}
 await login(page);const id=await create(page),path="/api/editorial/articles/"+id;
 expect((await page.request.get("/api/editorial/articles?kind=news&siteId=foreign")).status()).toBe(400);
 expect((await page.request.put(path+"/draft",{data:{}})).status()).toBe(403);
 const csrf=(await page.context().cookies()).find(cookie=>cookie.name.includes("csrf")&&!cookie.httpOnly)!;
 const headers={origin:new URL(page.url()).origin,"x-csrf-token":csrf.value,"if-match":'"article-'+id+'-1"'};
 expect((await page.request.put(path+"/draft",{headers:{...headers,"content-type":"video/mp4"},data:Buffer.from([1,2,3])})).status()).toBe(415);
 expect((await page.request.put(path+"/draft",{headers:{...headers,"content-type":"application/json"},data:'{"padding":"'+"x".repeat(1310720)+'"}'})).status()).toBe(413);
});
