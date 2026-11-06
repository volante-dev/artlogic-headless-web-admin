import {test,expect,type Page} from "@playwright/test";
import type {AdminArtwork} from "../lib/bff/artworks";

const artworks:AdminArtwork[]=["Étude bleue","Composition au titre particulièrement long pour vérifier les retours à la ligne sur téléphone","Sans photographie"].map((title,index)=>({id:"selection-"+index,sourceId:String(index),title,artist:"Artiste de démonstration",year:null,medium:null,dimensions:null,availability:"available",publication:"published",publicationVersion:1,effectivePublic:true,lastSyncedAt:"2026-11-06T00:00:00Z",warnings:[],media:index===2?[]:[{id:"selection-media-"+index,alt:null,width:240,height:180,previewPath:"/unused-original"}]}));
async function openSelection(page:Page){
 await page.route("**/api/artworks?*",route=>route.fulfill({json:{items:artworks,nextCursor:null,catalogRevision:1}}));
 await page.route("**/api/artworks/selection-*",route=>route.fulfill({json:artworks.find(a=>route.request().url().endsWith(a.id))}));
 await page.route("**/api/media/selection-*",route=>route.fulfill({contentType:"image/svg+xml",body:'<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="240" height="180" fill="#dce4fa"/><rect x="50" y="25" width="140" height="130" fill="#2952de"/></svg>'}));
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.waitForURL(url=>url.pathname==="/");
 await page.goto("/presentation/pages/home");
 await page.getByRole("combobox",{name:"Section à ajouter",exact:true}).click();await page.getByRole("option",{name:"Sélection d’œuvres",exact:true}).click();await page.getByRole("button",{name:"Ajouter la section",exact:true}).click();
 for(const artwork of artworks)await page.getByRole("button",{name:"Ajouter cette œuvre : "+artwork.title,exact:true}).click();
 const list=page.getByRole("list",{name:/Œuvres sélectionnées/});await expect(list.locator("li")).toHaveCount(3);return list;
}
async function order(page:Page){return page.getByRole("list",{name:/Œuvres sélectionnées/}).locator("li[data-artwork-id]").evaluateAll(rows=>rows.map(row=>row.getAttribute("data-artwork-id")));}

test("reorders by pointer and keyboard, cancels a drag, and saves the displayed order",async({page})=>{
 await page.setViewportSize({width:1440,height:1200});const list=await openSelection(page);await list.scrollIntoViewIfNeeded();await expect(list.locator("img").first()).toHaveAttribute("src",/\/api\/media\/selection-media-0$/);await expect(list.getByText("Sans image")).toBeVisible();
 const handle=page.getByRole("button",{name:"Déplacer l’œuvre 1",exact:true});const start=(await handle.boundingBox())!,last=(await list.locator("li").last().boundingBox())!;
 await page.mouse.move(start.x+start.width/2,start.y+start.height/2);await page.mouse.down();await page.mouse.move(last.x+100,last.y+last.height-5,{steps:10});await page.mouse.up();
 await expect.poll(()=>order(page)).toEqual(["selection-1","selection-2","selection-0"]);
 const moved=page.getByRole("button",{name:"Déplacer l’œuvre 3",exact:true});await expect(moved).toBeFocused();await page.keyboard.press("ArrowUp");await expect.poll(()=>order(page)).toEqual(["selection-1","selection-0","selection-2"]);
 const first=page.getByRole("button",{name:"Déplacer l’œuvre 1",exact:true}),box=(await first.boundingBox())!;await page.mouse.move(box.x+20,box.y+20);await page.mouse.down();await page.mouse.move(box.x+40,box.y+160,{steps:5});await page.keyboard.press("Escape");await page.mouse.up();await expect.poll(()=>order(page)).toEqual(["selection-1","selection-0","selection-2"]);
 await page.route("**/api/presentation/pages/home",route=>route.request().method()==="PUT"?route.fulfill({json:{revision:"selection-test",diagnostics:[]},headers:{"x-resource-version":'"selection-test"'}}):route.continue());
 const saved=page.waitForRequest(request=>request.method()==="PUT"&&request.url().endsWith("/api/presentation/pages/home"));await page.getByRole("button",{name:"Enregistrer la page",exact:true}).click();
 const body=(await saved).postDataJSON();expect(JSON.stringify(body.sections.at(-1))).toContain('"selection-1","selection-0","selection-2"');
});

test("thumbnails and controls fit desktop and mobile, removal preserves the remaining order",async({page})=>{
 const list=await openSelection(page);
 for(const [name,width] of [["desktop",1440],["mobile",375]] as const){
  await page.setViewportSize({width,height:1000});await list.scrollIntoViewIfNeeded();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await list.screenshot({path:".impeccable/review/artwork-selection-"+name+".png"});
 }
 await page.getByRole("button",{name:"Retirer l’œuvre 2",exact:true}).click();await expect.poll(()=>order(page)).toEqual(["selection-0","selection-2"]);
 await page.getByRole("button",{name:"Descendre l’œuvre 1",exact:true}).click();await expect.poll(()=>order(page)).toEqual(["selection-2","selection-0"]);
 await page.evaluate(()=>document.documentElement.style.fontSize="200%");expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test("touch handle reorders and pointer cancellation leaves the order intact",async({page,browserName})=>{
 test.skip(browserName!=="chromium","CDP touch input is only available in Chromium");
 await page.setViewportSize({width:600,height:1400});const list=await openSelection(page);await list.scrollIntoViewIfNeeded();
 const cdp=await page.context().newCDPSession(page);
 async function touch(type:"touchStart"|"touchMove"|"touchEnd"|"touchCancel",x?:number,y?:number){await cdp.send("Input.dispatchTouchEvent",{type,touchPoints:x===undefined||y===undefined?[]:[{x,y,id:1}]});}
 const handle=(await page.getByRole("button",{name:"Déplacer l’œuvre 1",exact:true}).boundingBox())!,last=(await list.locator("li").last().boundingBox())!;
 await touch("touchStart",handle.x+20,handle.y+20);await touch("touchMove",handle.x+20,last.y+last.height-8);await touch("touchEnd");
 await expect.poll(()=>order(page)).toEqual(["selection-1","selection-2","selection-0"]);
 const next=(await page.getByRole("button",{name:"Déplacer l’œuvre 1",exact:true}).boundingBox())!;
 await touch("touchStart",next.x+20,next.y+20);await touch("touchMove",next.x+20,next.y+170);await touch("touchCancel");
 await expect.poll(()=>order(page)).toEqual(["selection-1","selection-2","selection-0"]);
});
