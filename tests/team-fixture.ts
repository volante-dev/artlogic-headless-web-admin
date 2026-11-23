import {expect,type Page} from "@playwright/test";
export async function loginTeam(page:Page){await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/presentation/team");await expect(page.getByRole("heading",{name:"Équipe",exact:true})).toBeVisible();}
