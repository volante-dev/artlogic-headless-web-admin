import {test,expect} from "@playwright/test";
import {navigationLogin,replaceMenu} from "./navigation-helpers";
test("edits navigation independently from the presentation draft and saves immediately",async({page})=>{
 await navigationLogin(page);
 await page.route("**/api/presentation",route=>route.fulfill({status:503,json:{error:{code:"dependency_unavailable"}}}));
 await page.goto("/presentation/navigation");await expect(page.getByRole("heading",{name:"Navigation",exact:true})).toBeVisible();
 const original=await(await page.request.get("/api/navigation")).json();try{
 const began=Date.now();
 const contact=page.getByTestId("navigation-contact");await expect(contact).toBeVisible();
 for(let i=0;i<6;i++)await contact.getByRole("button",{name:/Monter/}).click();
 await expect(contact.getByRole("button",{name:"Déplacer Contact",exact:true})).toBeFocused();
 await page.getByTestId("navigation-publications").getByRole("checkbox").uncheck();
 await expect(page.getByText("Modifications non enregistrées",{exact:true})).toBeVisible();
 await page.getByRole("button",{name:"Enregistrer le menu",exact:true}).click();await expect(page.getByRole("status")).toContainText("Menu enregistré");
 const elapsed=Date.now()-began;expect(elapsed).toBeLessThan(120000);console.log("SC-001 automated menu contribution ms:",elapsed);
 await page.reload();await expect(page.locator('[data-testid^="navigation-"]').first()).toHaveAttribute("data-testid","navigation-contact");
 await expect(page.getByTestId("navigation-publications").getByRole("checkbox")).not.toBeChecked();
 }finally{expect((await replaceMenu(page,original.items)).status()).toBe(200);}
});
