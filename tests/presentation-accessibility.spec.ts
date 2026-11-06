import {test,expect,type Page,type Locator} from "@playwright/test";
async function activate(page:Page,control:Locator){await control.focus();await expect(control).toBeFocused();await page.keyboard.press("Enter");}
async function fits(page:Page){await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),{message:page.url()+" must fit after responsive layout settles"}).toBeLessThanOrEqual(0);}
for(const width of [375,1440])test("presentation editing, publication and restore by keyboard at "+width,async({page})=>{
  await page.setViewportSize({width,height:1000});await page.emulateMedia({reducedMotion:"reduce"});
  await page.goto("/");await activate(page,page.getByRole("button",{name:/se connecter/i}));await activate(page,page.getByRole("button",{name:/continuer avec le compte de test/i}));await expect(page.locator(".admin-shell")).toBeVisible();
  await page.goto("/presentation/identity");const background=page.getByRole("textbox",{name:"Fond de page",exact:true});await expect(background).toBeVisible();
  await background.focus();await page.keyboard.press("Meta+A");await page.keyboard.insertText(width===375?"#F6F7F5":"#F6F7F4");
  await activate(page,page.getByRole("button",{name:"Enregistrer le brouillon",exact:true}));await expect(page.getByRole("status")).toContainText("Brouillon enregistré");
  for(const path of ["/presentation/identity","/presentation/pages/news","/presentation/media","/presentation"]){
    await page.goto(path);await expect(page.getByRole("heading",{level:1})).toBeVisible();await fits(page);
    await page.evaluate(()=>document.documentElement.style.zoom="2");await fits(page);
    const menu=page.getByRole("button",{name:"Ouvrir le menu",exact:true});if(await menu.isVisible())await activate(page,menu);
    const control=page.getByRole("button").filter({hasText:/Déconnexion/});await control.focus();await expect(control).toBeFocused();await page.keyboard.press("Tab");
    await expect.poll(()=>page.evaluate(()=>{const r=document.activeElement?.getBoundingClientRect();return !!r&&r.width>0&&r.left>=0&&r.right<=innerWidth+1;})).toBe(true);
    if(await page.getByRole("button",{name:"Fermer le menu",exact:true}).isVisible())await page.keyboard.press("Escape");
    await page.evaluate(()=>document.documentElement.style.zoom="1");
  }
  await page.goto("/presentation/pages/news");
  const select=page.getByRole("combobox",{name:"Section à ajouter",exact:true});await activate(page,select);await page.getByRole("option",{name:"Texte",exact:true}).focus();await page.keyboard.press("Enter");
  await activate(page,page.getByRole("button",{name:"Ajouter la section",exact:true}));
  for(const [name,text] of [["Titre — Français","Une lecture au clavier"],["Texte — Français","Contenu synthétique pour la recette d’accessibilité."]]){await page.getByRole("textbox",{name,exact:true}).focus();await page.keyboard.insertText(text);}
  const hidden=page.getByRole("checkbox",{name:"Masquer cette section",exact:true});await hidden.focus();await page.keyboard.press("Space");await expect(hidden).toBeChecked();await page.keyboard.press("Space");await expect(hidden).not.toBeChecked();
  await activate(page,page.getByRole("button",{name:"Enregistrer la page",exact:true}));await expect(page.getByRole("status")).toContainText("Page enregistrée");
  await activate(page,page.getByRole("button",{name:"Publier le site",exact:true}));await expect(page.getByRole("status")).toContainText("Publication confirmée");
  await activate(page,page.getByRole("link",{name:"Publication",exact:true}));
  const started=Date.now();await activate(page,page.getByRole("button",{name:/Restaurer la version/}).first());await expect(page.getByRole("dialog")).toBeVisible();
  await activate(page,page.getByRole("button",{name:"Annuler",exact:true}));await expect(page.getByRole("dialog")).toBeHidden();
  await activate(page,page.getByRole("button",{name:/Restaurer la version/}).first());await activate(page,page.getByRole("button",{name:"Restaurer et publier",exact:true}));await expect(page.getByRole("status")).toContainText("Restauration confirmée");
  console.log("SC-010 automated restoration elapsed ms:",Date.now()-started);expect(Date.now()-started).toBeLessThan(120000);await fits(page);
});
