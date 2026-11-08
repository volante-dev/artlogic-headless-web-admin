import {test,expect} from "@playwright/test";
import {readFileSync} from "node:fs";
test("secondary title is saved in draft, previewed and published explicitly",async({page,context},info)=>{
 test.setTimeout(120000);const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")).sites[0],id=site.artworkId,title="Translated work from browser "+info.project.name;
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks/"+id);
 await page.getByRole("combobox",{name:"Langue de la description",exact:true}).click();await page.getByRole("option",{name:/English|Anglais/}).click();const field=page.getByLabel("Nom de l’œuvre dans cette langue",{exact:true});await expect(field).toBeVisible();await field.fill(title);await page.getByRole("button",{name:"Enregistrer les contributions",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Contributions enregistrées");
 const read=()=>page.request.get(site.apiOrigin+"/v1/public/artwork-experiences/"+id+"?locale=en");expect((await (await read()).json()).artwork.title).not.toBe(title);
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);await preview.waitForURL(/\/preview$/);await expect(preview.frameLocator("iframe").getByText(title,{exact:true}).first()).toBeVisible();await preview.close();
 await page.getByRole("button",{name:"Publier le site",exact:true}).click();await expect(page.locator(".workspace-panel").getByRole("status")).toContainText("Publication confirmée");expect((await (await read()).json()).artwork.title).toBe(title);
 await page.reload();await page.getByRole("combobox",{name:"Langue de la description",exact:true}).click();await page.getByRole("option",{name:/English|Anglais/}).click();await expect(field).toHaveValue(title);await page.getByRole("button",{name:"Utiliser le titre Artlogic",exact:true}).click();await expect(field).toHaveValue("");
});
