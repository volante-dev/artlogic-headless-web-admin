import {test,expect} from "@playwright/test";
import {resolve} from "node:path";
test.skip(process.env.E2E_INVENTORY_RECIPE!=="true","Requires the isolated inventory033 recipe.");
test.beforeEach(async({page,baseURL})=>{
 if(baseURL!=="http://127.0.0.1:3133")throw new Error("inventory_isolated_browser_required");
 await page.goto("/auth/login?next=%2Fartworks");
 const selector=page.getByLabel("Compte de recette");if(await selector.isVisible())await selector.selectOption("33000000-0000-4000-8000-000000000001");
 await page.getByRole("button",{name:"Continuer avec le compte de test"}).click();await page.waitForURL(url=>url.origin===baseURL&&!url.pathname.startsWith("/auth/"));
});
test("creates a hidden artwork with a title and an image only",async({page})=>{
 const title="Œuvre inventory "+Date.now();await page.goto("/artworks");await page.getByRole("button",{name:"Ajouter",exact:true}).click();await page.getByRole("textbox",{name:"Titre (fr)",exact:true}).fill(title);
 await page.getByLabel("Ajouter des images",{exact:true}).setInputFiles(resolve(__dirname,"../../backend/mock/fixtures/forms/images/oriented-gps.jpg"));
 await page.getByRole("button",{name:"Enregistrer le brouillon",exact:true}).click();await expect(page).toHaveURL(/\/artworks\/[0-9a-f-]{36}$/);await expect(page.getByRole("main").getByText("Masqué",{exact:true})).toBeVisible();await expect(page.getByRole("main").getByText("1 exemplaire",{exact:true})).toBeVisible();
 await page.reload();await expect(page.getByRole("textbox",{name:"Titre (fr)",exact:true})).toHaveValue(title);await expect(page.getByText("Prix d’achat",{exact:true})).toHaveCount(0);
});
test("edits an origin independently and associates it with an object",async({page})=>{
 let origin="Origine de recette "+Date.now();await page.goto("/inventory/origins");await page.getByRole("button",{name:"Ajouter une origine",exact:true}).click();await page.getByRole("textbox",{name:"Nom (fr)",exact:true}).fill(origin);await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByText(origin,{exact:true})).toBeVisible();origin+=" complétée";await page.getByRole("textbox",{name:"Nom (fr)",exact:true}).fill(origin);await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByText(origin,{exact:true})).toBeVisible();
 await page.goto("/artworks");await page.getByRole("button",{name:"Ajouter",exact:true}).click();await page.getByLabel("Type de fiche",{exact:true}).click();await page.getByRole("option",{name:"Objet",exact:true}).click();await expect(page.getByLabel("Artiste",{exact:true})).toHaveCount(0);await page.getByLabel("Origine",{exact:true}).fill(origin);await page.getByRole("option",{name:origin,exact:true}).click();await page.getByRole("textbox",{name:"Titre (fr)",exact:true}).fill("Objet de recette");
 await page.getByLabel("Ajouter des images",{exact:true}).setInputFiles([resolve(__dirname,"../../backend/mock/fixtures/forms/images/oriented-gps.jpg"),resolve(__dirname,"../../backend/mock/fixtures/forms/images/opaque.png")]);
 await page.getByRole("button",{name:"Enregistrer le brouillon",exact:true}).click();await expect(page).toHaveURL(/\/artworks\/[0-9a-f-]{36}$/);await page.getByRole("main").getByLabel("Ajouter des images",{exact:true}).focus();await expect(page.getByRole("main").getByLabel("Ajouter des images",{exact:true})).toBeFocused();const chooser=page.getByRole("button",{name:"Choisir dans la médiathèque",exact:true});await chooser.focus();await expect(chooser).toBeFocused();await page.keyboard.press("Space");await expect(chooser).toHaveAttribute("aria-expanded","true");await page.keyboard.press("Space");await expect(chooser).toHaveAttribute("aria-expanded","false");
});
test("protects inventory BFF paths, CSRF and closed mutation bodies",async({page,context,playwright,baseURL})=>{
 const anonymous=await playwright.request.newContext({baseURL});try{expect((await anonymous.get("/api/inventory/artworks",{headers:{"x-bff-key":"forged","x-admin-session":"forged"}})).status()).toBe(401);}finally{await anonymous.dispose();}
 expect((await page.request.post("/api/inventory/artworks",{data:{}})).status()).toBe(403);
 const csrf=(await context.cookies()).find(cookie=>cookie.name.endsWith("artlogic_csrf"))!.value,headers={origin:baseURL!,"x-csrf-token":csrf,"idempotency-key":crypto.randomUUID()};
 expect((await page.request.post("/api/inventory/artworks",{headers,data:{patch:{title:{fr:"Inventé"}}}})).status()).toBe(400);
 expect((await page.request.get("/api/inventory/types/33000000-0000-4000-8000-000000000001")).status()).toBe(400);
 expect((await page.request.get("/api/inventory/artworks?q=a&q=b")).status()).toBe(400);
 expect((await page.request.get("/api/inventory/proxy?url=https://example.invalid")).status()).toBe(404);
});
