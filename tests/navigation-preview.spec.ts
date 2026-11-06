import {test,expect} from "@playwright/test";
import {navigationLogin,replaceMenu} from "./navigation-helpers";
test("links from galerist settings to the independent navigation editor",async({page})=>{
 await navigationLogin(page);
 await page.goto("/presentation/pages/galerist");await expect(page.getByRole("link",{name:"Configurer le menu dans Navigation"})).toBeVisible();
 await expect(page.getByRole("checkbox",{name:"Afficher dans la navigation"})).toHaveCount(0);
 await page.getByRole("link",{name:"Configurer le menu dans Navigation"}).click();await expect(page.getByRole("heading",{name:"Navigation",exact:true})).toBeVisible();
});
test("retains a private captured menu after the public menu changes",async({page,context})=>{
 test.setTimeout(60000);await navigationLogin(page);await page.goto("/presentation");
 const original=await(await page.request.get("/api/navigation")).json();
 const [preview]=await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"Prévisualiser",exact:true}).click()]);
 try{
  const frame=preview.frameLocator("iframe");await expect(frame.locator("header nav a:not([lang])")).toHaveCount(6);
  const before=await frame.locator("header nav a:not([lang])").evaluateAll(nodes=>nodes.map(n=>n.getAttribute("href")));
  expect(before.every(href=>href?.startsWith("/preview/render/fr/"))).toBe(true);
  expect((await replaceMenu(page,original.items.map((i:object)=>({...i,visible:false})))).status()).toBe(200);
  await preview.locator("iframe").evaluate(node=>(node as HTMLIFrameElement).contentWindow?.location.reload());
  await expect(frame.locator("header nav a:not([lang])")).toHaveCount(6);expect(await frame.locator("header nav a:not([lang])").evaluateAll(nodes=>nodes.map(n=>n.getAttribute("href")))).toEqual(before);
  await frame.getByRole("link",{name:"English",exact:true}).click();await expect(frame.locator("header nav a:not([lang])").first()).toHaveAttribute("href","/preview/render/en/news");
 }finally{await preview.close();expect((await replaceMenu(page,original.items)).status()).toBe(200);}
});
