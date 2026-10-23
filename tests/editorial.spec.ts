import {test,expect} from "@playwright/test";
test("finds, previews, publishes and hides an artwork with server confirmation",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
  const start=Date.now();await page.goto("/artworks");await page.getByLabel("Rechercher par titre ou artiste").fill("synthétique 0001");await page.getByRole("button",{name:"Rechercher",exact:true}).click();
  await page.getByRole("link",{name:"Étude synthétique 0001",exact:true}).click();await expect(page.getByRole("img").first()).toBeVisible();
  await page.getByRole("button",{name:"Publier sur le site",exact:true}).click();await expect(page.getByTestId("publication-result")).toHaveText("Publication confirmée.");expect(Date.now()-start).toBeLessThan(60000);console.log("SC-003 preview/publication_ms="+(Date.now()-start));
  await page.getByRole("button",{name:"Masquer sur le site",exact:true}).click();await expect(page.getByTestId("publication-result")).toHaveText("Masquage confirmé.");
  await expect(page.getByRole("heading",{name:"Historique de publication"})).toBeVisible();
});
test("searches by artist and combines publication and availability filters",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks");
  await page.getByLabel("Rechercher par titre ou artiste").fill("Artiste de test 03");await page.getByLabel("Publication",{exact:true}).selectOption("hidden");await page.getByLabel("Disponibilité",{exact:true}).selectOption("available");await page.getByRole("button",{name:"Rechercher",exact:true}).click();
  await expect(page.getByText("Artiste de test 03",{exact:true}).first()).toBeVisible();await expect(page).toHaveURL(/publication=hidden/);
  await page.getByLabel("Rechercher par titre ou artiste").fill("aucune correspondance synthétique");await page.getByRole("button",{name:"Rechercher",exact:true}).click();await expect(page.getByText(/aucune œuvre ne correspond/i)).toBeVisible();
});
test("reloads on a stale version and requires another explicit decision",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks");await page.getByRole("link",{name:/Étude synthétique/}).first().click();
  let writes=0;await page.route("**/api/artworks/*/publication",async route=>{writes++;await route.fulfill({status:412,json:{error:{code:"precondition_failed"}}});});
  await page.getByRole("button",{name:"Publier sur le site",exact:true}).click();await expect(page.getByRole("alert").filter({hasText:/a changé/})).toBeVisible();expect(writes).toBe(1);
  await page.waitForTimeout(500);expect(writes).toBe(1);await expect(page.getByRole("button",{name:"Publier sur le site",exact:true})).toBeEnabled();
});
