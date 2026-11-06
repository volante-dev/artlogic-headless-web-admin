import {test,expect} from "@playwright/test";
test("contributes the singleton without replacing its address on rename",async({page})=>{
 test.setTimeout(60000);
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/presentation/pages/galerist");await expect(page.getByRole("heading",{name:"Composer : Le galeriste"})).toBeVisible();
 await page.getByRole("checkbox",{name:"Activer la page"}).uncheck();
 const finalName="Notre histoire "+Date.now();
 const prior=await page.getByRole("textbox",{name:"Adresse — Français"}).inputValue();
 await page.getByRole("textbox",{name:"Nom de la page — Français"}).fill("Galeriste synthétique");await expect(page.getByRole("textbox",{name:"Adresse — Français"})).toHaveValue(prior||"galeriste-synthetique");
 await page.getByRole("textbox",{name:"Adresse — Français"}).fill("notre-histoire");await page.getByRole("textbox",{name:"Nom de la page — Français"}).fill(finalName);await expect(page.getByRole("textbox",{name:"Adresse — Français"})).toHaveValue("notre-histoire");
 const proofRequest=page.waitForRequest(r=>r.url().includes("/api/presentation/pages/galerist")&&r.method()==="PUT");await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();const proof=(await proofRequest).headers();await expect(page.getByRole("status")).toContainText("Page enregistrée");
 await page.reload();await expect(page.getByRole("textbox",{name:"Nom de la page — Français"})).toHaveValue(finalName);await expect(page.getByRole("checkbox",{name:"Activer la page"})).not.toBeChecked();
 const current=await page.request.get("/api/presentation/pages/galerist"),body=await current.json();
 const reset=await page.request.put("/api/presentation/pages/galerist",{headers:{"if-match":current.headers().etag!,"x-csrf-token":proof["x-csrf-token"]!,origin:new URL(page.url()).origin},data:{...body.page,sections:[]}});expect(reset.status()).toBe(200);await page.reload();
 const began=Date.now();
 for(const [index,label]of ["Texte","Texte et image","Contact","Texte","Texte"].entries()){
  await page.getByRole("combobox",{name:"Section à ajouter",exact:true}).click();await page.getByRole("option",{name:label,exact:true}).click();await page.getByRole("button",{name:"Ajouter la section",exact:true}).click();
  await page.getByRole("textbox",{name:"Titre — Français",exact:true}).fill("Parcours de recette "+index);await page.getByRole("textbox",{name:"Texte — Français",exact:true}).fill("Texte synthétique pour vérifier les associations.");
 }
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();await expect(page.getByRole("status")).toContainText("Page enregistrée");
 const before=(await(await page.request.get("/api/presentation/pages/galerist")).json()).page.sections;
 await page.getByRole("button",{name:"Dupliquer la section",exact:true}).click();await page.getByRole("button",{name:"Monter la section",exact:true}).focus();await page.keyboard.press("Enter");await page.getByRole("button",{name:"Descendre la section",exact:true}).click();await page.getByRole("checkbox",{name:"Masquer cette section",exact:true}).check();
 await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();await expect(page.getByRole("status")).toContainText("Page enregistrée");
 const after=(await(await page.request.get("/api/presentation/pages/galerist")).json()).page.sections;expect(after).toHaveLength(before.length+1);expect(after.at(-1).id).not.toBe(before.at(-1).id);expect(after.at(-1).props).toEqual(before.at(-1).props);expect(after.at(-1).hidden).toBe(true);
 await page.getByRole("checkbox",{name:"Activer la page"}).check();await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();await expect(page.getByRole("status")).toContainText("Page enregistrée");await page.getByRole("button",{name:"Publier le site",exact:true}).click();await expect(page.getByRole("status")).toContainText("Publication confirmée");
 const elapsed=Date.now()-began;expect(elapsed).toBeLessThan(600000);console.log("SC-001 builder elapsed ms:",elapsed);
 await page.setViewportSize({width:375,height:812});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
