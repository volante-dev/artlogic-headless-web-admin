import {test,expect} from "@playwright/test";
test.skip(!process.env.E2E_EDITORIAL_FIXTURE,"Requires the isolated editorial harness.");test.setTimeout(60000);
test("navigates from the authenticated home to the list and creation form using ordinary links",async({page})=>{
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await expect(page.getByRole("navigation",{name:"Navigation principale"})).toBeVisible();await page.getByRole("navigation",{name:"Navigation principale"}).getByRole("link",{name:"Publications",exact:true}).click();await expect(page.getByRole("heading",{name:"Publications",exact:true})).toBeVisible();await page.getByRole("link",{name:"Nouvelle publication",exact:true}).click();await expect(page.getByRole("button",{name:"Créer le brouillon",exact:true})).toBeVisible();
});
