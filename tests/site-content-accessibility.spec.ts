import {test,expect} from "@playwright/test";
for(const width of [375,1440])test("translation editor supports the keyboard at "+width+"px",async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/site-content");
 const select=page.getByLabel("Langue à éditer");await expect(select).toBeVisible();await select.focus();await page.keyboard.press("ArrowUp");await page.keyboard.press("Tab");
 const field=page.getByLabel("Traduction — Actualités",{exact:true});await field.focus();await page.keyboard.press("ControlOrMeta+A");await page.keyboard.type("Keyboard news "+width);await expect(field).toBeFocused();
 await page.getByRole("button",{name:"Enregistrer",exact:true}).focus();await page.keyboard.press("Enter");await expect(page.getByRole("status")).toContainText("Enregistrement confirmé");
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:"test-results/site-content-"+width+".png"});
});
