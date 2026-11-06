import {test,expect} from "@playwright/test";
import {navigationLogin,replaceMenu} from "./navigation-helpers";
test("offers keyboard ordering and usable controls at narrow widths and enlarged text",async({page})=>{
 await navigationLogin(page);const original=await(await page.request.get("/api/navigation")).json();
 try{for(const width of [375,1440]){
  await page.setViewportSize({width,height:900});await page.evaluate(()=>{document.documentElement.style.fontSize="200%";});
  const contact=page.getByTestId("navigation-contact"),up=contact.getByRole("button",{name:/Monter/});await up.focus();await page.keyboard.press("Enter");await expect(page.getByText("Modifications non enregistrées",{exact:true})).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.getByRole("button",{name:"Annuler",exact:true}).click();
 }}finally{await replaceMenu(page,original.items);}
});
test("supports touch controls on a mobile viewport",async({browser})=>{
 const context=await browser.newContext({hasTouch:true,viewport:{width:375,height:812},baseURL:process.env.E2E_BASE_URL});const page=await context.newPage();
 try{await navigationLogin(page);const original=await(await page.request.get("/api/navigation")).json();
  try{const row=page.getByTestId("navigation-contact");await row.getByRole("button",{name:/Monter/}).tap();await page.getByTestId("navigation-news").getByRole("checkbox").tap();
   await expect(page.getByText("Modifications non enregistrées",{exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
   await page.screenshot({path:test.info().outputPath("navigation-mobile.png"),fullPage:true});
  }finally{await replaceMenu(page,original.items);}
 }finally{await context.close();}
});
