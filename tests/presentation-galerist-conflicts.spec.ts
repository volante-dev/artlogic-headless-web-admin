import {test,expect} from "@playwright/test";
for(const status of [401,412,503])test("retains localized page settings after a refused save "+status,async({page})=>{
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/presentation/pages/galerist");
 const name=page.getByRole("textbox",{name:"Nom de la page — Français"}),draft="Saisie conservée "+status;await name.fill(draft);
 await page.route("**/api/presentation/pages/galerist",route=>route.request().method()==="PUT"?route.fulfill({status,contentType:"application/json",body:JSON.stringify({error:{code:status===401?"unauthenticated":status===412?"precondition_failed":"dependency_unavailable"}})}):route.continue());
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();await expect(page.getByRole("alert").filter({hasText:status===401?/session a expiré/:status===412?/brouillon a changé/:/service est indisponible/})).toBeVisible();await expect(name).toHaveValue(draft);await expect(page.getByRole("status").filter({hasText:"Page enregistrée"})).toHaveCount(0);
 if(status!==401){await expect(page.getByRole("button",{name:"Enregistrer la page",exact:true})).toBeDisabled();await page.getByRole("button",{name:"Comparer avec la version enregistrée"}).click();await expect(name).toHaveValue(draft);}
});
