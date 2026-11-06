import {test,expect} from "@playwright/test";
import {readFile,mkdir} from "node:fs/promises";
test.skip(!process.env.E2E_EDITORIAL_FIXTURE?.includes("/composition"),"Requires isolated composition services.");
test.setTimeout(120000);
test("selects multiple images, imports a dropped batch and keeps successful files after a partial failure",async({page})=>{
 await page.setViewportSize({width:1440,height:1000});
 const fixture=JSON.parse(await readFile(process.env.E2E_EDITORIAL_FIXTURE+"/fixture.json","utf8"));
 await page.goto("/auth/login");await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.waitForURL(url=>url.pathname==="/");
 await page.goto("/publications/"+fixture.previewArticleId+"?compose=1");const workspace=page.getByRole("dialog").first();await expect(workspace.getByText(/aucun modèle IA n’est appelé/)).toBeVisible();
 await workspace.getByRole("button",{name:"Ajouter des images",exact:true}).click();const picker=page.getByRole("dialog",{name:"Ajouter des images",exact:true});
 const choices=picker.getByRole("checkbox",{name:/Sélectionner l’image/});await expect(choices.first()).toBeVisible();await choices.first().check();await expect(picker.getByRole("button",{name:"Ajouter 1 image",exact:true})).toBeEnabled();
 // One existing ready fixture plus one valid and one invalid upload: all states remain distinct.
 const bytes=await page.request.get("/api/presentation/assets/"+fixture.imageId+"/content");expect(bytes.ok()).toBe(true);const png=await bytes.body();
 const data=await page.evaluateHandle(({base64})=>{const dt=new DataTransfer();const binary=atob(base64),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);dt.items.add(new File([bytes],"batch-image.webp",{type:"image/webp"}));dt.items.add(new File(["invalid"],"not-an-image.txt",{type:"text/plain"}));return dt;},{base64:png.toString("base64")});
 await picker.getByText("Déposez vos images ici",{exact:true}).locator("..").dispatchEvent("drop",{dataTransfer:data});await data.dispose();
 await expect(picker.getByText("batch-image.webp",{exact:true})).toBeVisible();await expect(picker.getByText("not-an-image.txt",{exact:true})).toBeVisible();await expect(picker.getByText("JPG, PNG ou WebP non vide, 10 Mio maximum.",{exact:true})).toBeVisible();
 await picker.getByLabel("Je confirme disposer des droits pour diffuser tous ces fichiers sur le site.").check();await picker.getByRole("button",{name:"Importer les images",exact:true}).click();await expect(picker.getByText("Importée",{exact:true})).toBeVisible({timeout:30000});
 await expect(picker.getByRole("button",{name:"Ajouter 2 images",exact:true})).toBeEnabled();const importedChoice=picker.getByRole("checkbox",{name:/Sélectionner l’image/}).first();await importedChoice.uncheck();await expect(picker.getByRole("button",{name:"Ajouter 1 image",exact:true})).toBeEnabled();await expect(picker.getByText("Importée",{exact:true})).toBeVisible();await importedChoice.check();await mkdir("../backend/specs/013-ai-editorial-composition/review",{recursive:true});for(const width of[1440,375]){await page.setViewportSize({width,height:width===1440?1000:850});await picker.getByRole("heading",{name:"Ajouter des images",exact:true}).scrollIntoViewIfNeeded();await page.screenshot({path:"../backend/specs/013-ai-editorial-composition/review/image-batch-"+width+".png",animations:"disabled"});}await picker.getByRole("button",{name:"Ajouter 2 images",exact:true}).click();await expect(picker).not.toBeVisible();await expect(workspace.getByLabel(/Description du média \d+ · image/)).toHaveCount(2);
});
