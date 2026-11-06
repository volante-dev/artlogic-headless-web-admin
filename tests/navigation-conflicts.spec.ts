import {test,expect} from "@playwright/test";
import {navigationLogin,replaceMenu} from "./navigation-helpers";
test("preserves the local edit on stale save and requires explicit comparison",async({page})=>{
 await navigationLogin(page);const original=await(await page.request.get("/api/navigation")).json();
 try{
  await page.getByTestId("navigation-news").getByRole("checkbox").uncheck();
  expect((await replaceMenu(page,original.items.map((i:{pageKey:string})=>({...i,visible:i.pageKey!=="contact"})))).status()).toBe(200);
  await page.getByRole("button",{name:"Enregistrer le menu",exact:true}).click();await expect(page.getByRole("alert").filter({hasText:"Le menu a changé"})).toContainText("Le menu a changé");await expect(page.getByTestId("navigation-news").getByRole("checkbox")).not.toBeChecked();
  await expect(page.getByRole("button",{name:"Enregistrer le menu",exact:true})).toBeDisabled();await page.getByRole("button",{name:"Comparer avec le menu enregistré"}).click();await page.getByRole("button",{name:"Utiliser cette version comme référence en gardant ma saisie"}).click();await expect(page.getByTestId("navigation-news").getByRole("checkbox")).not.toBeChecked();
 }finally{expect((await replaceMenu(page,original.items)).status()).toBe(200);}
});
test("rereads a committed mutation after its HTTP response is lost",async({page})=>{
 await navigationLogin(page);const original=await(await page.request.get("/api/navigation")).json();
 try{
  await page.getByTestId("navigation-news").getByRole("checkbox").uncheck();
  let committed=false;
  await page.route("**/api/navigation",async route=>{
   if(route.request().method()!=="PUT"||committed)return route.continue();
   const response=await route.fetch();expect(response.status()).toBe(200);committed=true;await route.abort("failed");
  });
  await page.getByRole("button",{name:"Enregistrer le menu",exact:true}).click();
  await expect(page.getByText("L’enregistrement ne peut pas être confirmé.",{exact:false})).toBeVisible();
  await expect(page.getByRole("button",{name:"Enregistrer le menu",exact:true})).toBeDisabled();
  expect((await(await page.request.get("/api/navigation")).json()).items.find((i:{pageKey:string})=>i.pageKey==="news").visible).toBe(false);
  await page.getByRole("button",{name:"Comparer avec le menu enregistré"}).click();await page.getByRole("button",{name:"Utiliser cette version comme référence en gardant ma saisie"}).click();
  await expect(page.getByTestId("navigation-news").getByRole("checkbox")).not.toBeChecked();
 }finally{await page.unroute("**/api/navigation");expect((await replaceMenu(page,original.items)).status()).toBe(200);}
});
