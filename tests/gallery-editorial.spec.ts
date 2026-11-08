import {test,expect} from "@playwright/test";
import {readFileSync} from "node:fs";
import {mkdir} from "node:fs/promises";
test("editorial draft, frozen bound preview and publication are explicit",async({page,context})=>{
 const fixture=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")),site=fixture.sites[0];
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/artworks/"+site.artworkId);const field=page.getByLabel("Description de l’œuvre",{exact:true});await expect(field).toBeVisible();
 const text="Description éditoriale <script> sans HTML";await field.fill(text);await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);
 await expect(preview.frameLocator("iframe").getByText(text,{exact:true}).first()).toBeVisible();await expect(preview.getByLabel("Langue",{exact:true})).toBeDisabled();
 await field.fill("Nouvelle description publique");await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
 await preview.reload();await expect(preview.frameLocator("iframe").getByText(text,{exact:true}).first()).toBeVisible();
 await page.getByRole("button",{name:"Publier le site",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Publication confirmée");
 const publicRead=await page.request.get(site.apiOrigin+"/v1/public/artwork-experiences/"+site.artworkId+"?locale=fr");expect((await publicRead.json()).description).toBe("Nouvelle description publique");
 await preview.getByRole("button",{name:"Fermer l’aperçu",exact:true}).click();
 await page.getByLabel("Langue de la description",{exact:true}).click();await page.getByRole("option",{name:/English|Anglais/}).click();
 const [english]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await english.waitForURL(/\/preview$/);await expect(english.getByLabel("Langue",{exact:true})).toHaveValue("en");await expect(english.frameLocator("iframe").getByRole("button",{name:"Close artwork",exact:true})).toBeVisible();
 const forged=await context.newPage();await forged.goto(site.siteOrigin+"/preview/render/fr/artworks/"+site.artworkId);await expect(forged.getByRole("heading",{name:"Aperçu indisponible ou expiré"})).toBeVisible();await expect(forged.getByTestId("artwork-experience")).toHaveCount(0);await forged.close();
 await english.getByRole("button",{name:"Fermer l’aperçu",exact:true}).click();
});
test("a real shared revision conflict keeps the local description and can be compared",async({page,context,baseURL})=>{
 const fixture=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")),site=fixture.sites[0];
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/artworks/"+site.artworkId);const field=page.getByLabel("Description de l’œuvre",{exact:true});await expect(field).toBeVisible();await expect(page.getByRole("button",{name:"Prévisualiser",exact:true})).toBeEnabled();
 await field.fill("Ma description conservée");
 const path="/api/presentation/artworks/"+site.artworkId,current=await page.request.get(path),csrf=(await context.cookies(baseURL)).find(c=>c.name.endsWith("artlogic_csrf"))!.value;
 const other=await page.request.put(path,{headers:{Origin:baseURL!,"X-CSRF-Token":csrf,"If-Match":current.headers().etag!},data:{description:{fr:"Description d’une autre session"}}});expect(other.status()).toBe(200);
 await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.getByRole("alert").filter({hasText:/brouillon a changé/})).toBeVisible();await expect(field).toHaveValue("Ma description conservée");
 await page.getByRole("button",{name:"Comparer avec la version enregistrée",exact:true}).click();await expect(page.getByText("Description d’une autre session",{exact:true})).toBeVisible();
 if(process.env.E2E_GALLERY_CAPTURE==="1"){
  const directory=".impeccable/review/gallery";await mkdir(directory,{recursive:true});
  for(const width of [1440,375]){await page.setViewportSize({width,height:900});await field.scrollIntoViewIfNeeded();await page.screenshot({path:`${directory}/editorial-conflict-${width}.png`,fullPage:true});}
 }
 await page.getByRole("button",{name:"Utiliser cette version comme référence et garder ma saisie",exact:true}).click();await expect(field).toHaveValue("Ma description conservée");await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
});

test("mobile frozen preview uses the common information composition and inert contact",async({page,context})=>{
 const fixture=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")),site=fixture.sites[0];test.skip(!site.mobileArtworkId,"Requires the isolated mobile fixtures");
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks/"+site.mobileArtworkId);
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);await preview.getByLabel("Largeur",{exact:true}).selectOption("375");
 const frame=preview.frameLocator("iframe"),scene=frame.getByTestId("artwork-experience");await expect(scene).toHaveAttribute("data-artwork-layout","mobile");await expect(scene).toHaveAttribute("data-artwork-opening-phase","complete");await expect(preview.getByLabel("Langue",{exact:true})).toBeDisabled();await scene.getByRole("button",{name:"Voir les informations",exact:true}).click();await expect(scene.getByRole("heading",{name:"Informations complémentaires",exact:true})).toHaveCount(1);await expect(scene.getByRole("heading",{level:1})).toHaveCount(1);await expect(scene.getByRole("link",{name:"Demander des informations",exact:true})).toHaveAttribute("aria-disabled","true");await scene.getByRole("button",{name:"Revenir aux images",exact:true}).click();await scene.getByRole("navigation").getByRole("button").nth(1).click();await expect(scene).toHaveAttribute("data-mobile-transition","idle");await expect(page).toHaveURL(new RegExp(site.mobileArtworkId));await preview.getByRole("button",{name:"Fermer l’aperçu",exact:true}).click();
});
