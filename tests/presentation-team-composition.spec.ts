import {test,expect} from "@playwright/test";
import {loginTeam} from "./team-fixture";

test("moves and hides the single shared team section and previews the saved placement",async({page,context,browserName})=>{
 await loginTeam(page);
 await page.goto("/presentation/pages/home");
 await expect(page.getByRole("heading",{name:/Composer/})).toBeVisible();
 await page.getByRole("button",{name:/Our team/}).first().click();
 await page.getByLabel("Masquer cette section").uncheck();
 const title=`Notre atelier de recette ${browserName}`;
 await page.getByLabel("Titre de l’équipe").fill(title);
 const response=page.waitForResponse(r=>r.url().endsWith("/api/presentation/team/pages/home")&&r.request().method()==="PUT");
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();
 expect((await response).status()).toBe(200);
 await page.reload();
 await page.getByRole("button",{name:/Our team/}).first().click();
 await expect(page.getByLabel("Titre de l’équipe")).toHaveValue(title);
 const up=page.getByRole("button",{name:"Monter la section",exact:true});
 await (await up.isEnabled()?up:page.getByRole("button",{name:"Descendre la section",exact:true})).click();
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();
 await expect(page.getByText("Page enregistrée. La publication")).toBeVisible();
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);
 await preview.waitForURL(/\/preview$/);
 await expect(preview.frameLocator("iframe").locator("[data-our-team]")).toBeVisible();
 await preview.close();
 await page.getByLabel("Masquer cette section").check();
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();
 await expect(page.getByText("Page enregistrée. La publication")).toBeVisible();
 // Restore the shared fixture so both browser engines start from the same state.
 await page.getByLabel("Masquer cette section").uncheck();
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();
 await expect(page.getByText("Page enregistrée. La publication")).toBeVisible();
});

test("explains an empty team only inside the authorized preview",async({page,context})=>{
 const scenario=async(total:number)=>{
  const response=await fetch(process.env.E2E_CONTROL_URL!+"/control",{method:"POST",headers:{"content-type":"application/json","x-test-control":process.env.E2E_CONTROL_KEY!},body:JSON.stringify({action:"team-scenario",founders:total?2:0,total})});
  expect(response.ok).toBe(true);
 };
 await loginTeam(page);await scenario(0);
 try{
  await page.goto("/presentation/pages/home");
  const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);
  await preview.waitForURL(/\/preview$/);
  await expect(preview.frameLocator("iframe").locator('[data-team-diagnostic="team_empty"]')).toContainText("Aucune personne complète et visible");
  await preview.close();
  const publicPage=await context.newPage();
  await publicPage.goto(process.env.E2E_PUBLIC_URL!);
  await expect(publicPage.locator("[data-team-diagnostic], [data-our-team]")).toHaveCount(0);
  expect(await publicPage.content()).not.toContain("Aucune personne complète et visible");
  await publicPage.close();
 }finally{await scenario(8);}
});
