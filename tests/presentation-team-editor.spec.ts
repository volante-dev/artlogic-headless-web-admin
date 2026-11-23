import {test,expect} from "@playwright/test";
import {loginTeam} from "./team-fixture";

test("creates an incomplete draft without contacts and preserves fields after conflict",async({page})=>{
 await loginTeam(page);await page.getByRole("button",{name:"Ajouter une personne"}).click();const row=page.getByTestId("team-person").last();await row.getByLabel("Nom",{exact:true}).fill("Recette");await row.getByLabel("Prénom",{exact:true}).fill("Camille");await page.getByRole("button",{name:"Enregistrer l’équipe"}).click();await expect(page.getByRole("status")).toContainText("enregistrée");await page.reload();await expect(page.getByTestId("team-person").last().getByLabel("Nom",{exact:true})).toHaveValue("Recette");
 await page.route("**/api/presentation/team",r=>r.request().method()==="PUT"?r.fulfill({status:412,contentType:"application/json",body:JSON.stringify({error:{code:"version_conflict"}})}):r.continue());
 const field=page.getByTestId("team-person").last().getByLabel("Prénom",{exact:true});await field.fill("Saisie conservée");await page.getByRole("button",{name:"Enregistrer l’équipe"}).click();await expect(page.getByRole("alert").filter({hasText:"changé"})).toContainText("changé");await expect(field).toHaveValue("Saisie conservée");
});

test("keeps the five fields usable on mobile and degrades locally without team capabilities",async({page})=>{
 await loginTeam(page);
 for(const width of [320,390,1440]){
  await page.setViewportSize({width,height:900});
  const row=page.getByTestId("team-person").first();
  for(const label of ["Nom","Prénom","Adresse mail","Numéro"])await expect(row.getByLabel(label,{exact:true})).toBeEnabled();
  expect(await row.evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
 }
 try{
  for(const status of [404,403,503]){
   await page.unroute("**/api/presentation/team/capabilities");
   await page.route("**/api/presentation/team/capabilities",r=>r.fulfill({status,contentType:"application/json",body:JSON.stringify({error:{code:status===404?"not_found":status===403?"forbidden":"service_unavailable"}})}));
   await page.reload();
   await expect(page.getByText("La gestion de l’équipe n’est pas disponible sur cette version. Les autres réglages restent accessibles.")).toBeVisible();
   await expect(page.getByRole("button",{name:"Ajouter une personne"})).toHaveCount(0);
   await expect(page.getByRole("link",{name:"Pages",exact:true})).toBeVisible();
  }
 }finally{await page.unroute("**/api/presentation/team/capabilities");}
});
