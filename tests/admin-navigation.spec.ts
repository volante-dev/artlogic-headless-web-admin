import {test,expect,type Page} from "@playwright/test";
async function login(page:Page){await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await expect(page.locator(".admin-shell")).toBeVisible();}
for(const width of [375,1440])test("admin navigation retains routes, focus and current destination at "+width,async({page})=>{
 await page.setViewportSize({width,height:900});await login(page);
 const menu=page.getByRole("button",{name:"Ouvrir le menu",exact:true});
 for(const [label,path] of [["Œuvres","/artworks"],["Apparence et pages","/presentation"],["Contenu du site","/site-content"],["Demandes","/inquiries"],["Synchronisations","/sync-runs"],["Accueil","/"]]){
  if(width===375){await menu.focus();await page.keyboard.press("Enter");await expect(page.getByRole("button",{name:"Fermer le menu",exact:true})).toBeVisible();}
  const nav=page.getByRole("navigation",{name:"Navigation principale",exact:true}),link=nav.getByRole("link",{name:label,exact:true});await link.focus();await page.keyboard.press("Enter");await expect(page).toHaveURL(new RegExp(path==="/"?"/$":path+"$"));await expect(page.getByRole("heading",{level:1})).toBeVisible();
  if(width===375){await expect(page.getByRole("button",{name:"Fermer le menu",exact:true})).toBeHidden();await menu.click();}
  await expect(page.getByRole("navigation",{name:"Navigation principale",exact:true}).getByRole("link",{name:label,exact:true})).toHaveAttribute("aria-current","page");
  if(width===375){await page.keyboard.press("Escape");await expect(menu).toBeFocused();}
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
});
test("responsive navigation restores focus and preserves a cancelled unsaved exit",async({page})=>{
 await page.setViewportSize({width:1440,height:900});await login(page);await page.getByRole("navigation",{name:"Navigation principale"}).getByRole("link",{name:"Œuvres",exact:true}).focus();await page.setViewportSize({width:375,height:900});const menu=page.getByRole("button",{name:"Ouvrir le menu",exact:true});await expect(menu).toBeFocused();
 await page.goto("/presentation/identity");const field=page.getByRole("textbox",{name:"Fond de page",exact:true});await field.fill("#EFEDE8");await menu.click();page.once("dialog",dialog=>dialog.dismiss());await page.getByRole("navigation",{name:"Navigation principale"}).getByRole("link",{name:"Œuvres",exact:true}).click();await expect(page).toHaveURL(/\/presentation\/identity$/);await expect(page.getByRole("button",{name:"Fermer le menu",exact:true})).toBeVisible();await page.keyboard.press("Escape");await expect(field).toHaveValue("#EFEDE8");
});
