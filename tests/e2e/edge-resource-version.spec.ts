import {test,expect} from "@playwright/test";
test.skip(!process.env.E2E_PRESENTATION_FIXTURE,"Requires isolated application services.");
test("loads and saves editorial content and presentation through transformed HTTP ETags",async({page})=>{
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/site-content");await expect(page.getByRole("heading",{name:"Contenu du site",exact:true})).toBeVisible();
 const before=await page.request.get("/api/site-content");expect(before.status()).toBe(200);expect(before.headers()["x-resource-version"]).toMatch(/^"site-content-/);
 await page.getByLabel("Traduction — Actualités",{exact:true}).fill("Actualités de la galerie");await page.getByRole("button",{name:"Enregistrer",exact:true}).click();await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");
 await page.reload();await expect(page.getByLabel("Traduction — Actualités",{exact:true})).toHaveValue("Actualités de la galerie");
 await page.goto("/presentation");await expect(page.getByRole("heading",{name:"Apparence et pages",exact:true})).toBeVisible();
 await expect(page.getByRole("button",{name:"Publier",exact:true})).toBeEnabled();await page.getByRole("button",{name:"Publier",exact:true}).click();await expect(page.getByRole("status")).toContainText("Publication confirmée");
});
