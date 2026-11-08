import {test,expect,type APIResponse} from "@playwright/test";
import {readFileSync} from "node:fs";
test("catalogue grid reorders, keeps pages on mode change and publishes from reserve",async({page},info)=>{
 test.setTimeout(120000);
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks");
 const grid=page.getByRole("list",{name:"Œuvres publiées",exact:true});await expect(grid).toBeVisible();await expect(grid.locator("li")).toHaveCount(20);
 await page.getByRole("button",{name:"Charger les œuvres publiées suivantes"}).click();await expect(grid.locator("li")).toHaveCount(40);
 const mode=page.getByRole("switch",{name:/Activer la disposition masonry/});const prior=await mode.isChecked();await mode.click();await expect(grid).toHaveAttribute("data-layout",prior?"grid":"masonry");await expect(grid.locator("li")).toHaveCount(40);
 if(info.project.name==="chromium")await page.screenshot({path:".runtime/catalog-grid-masonry-1440.png",fullPage:false});
 await mode.click();await expect(grid).toHaveAttribute("data-layout",prior?"masonry":"grid");await expect(grid.locator("li")).toHaveCount(40);
 const id=await grid.locator("li").nth(4).getAttribute("data-artwork-id");await grid.locator("li").nth(4).getByRole("button",{name:"Placer…",exact:true}).click();const dialog=page.getByRole("dialog");await dialog.getByLabel("Début",{exact:true}).check();await dialog.getByRole("button",{name:"Déplacer",exact:true}).click();await expect(dialog).toBeHidden();await expect(grid.locator("li").first()).toHaveAttribute("data-artwork-id",id!);
 const reserve=page.getByRole("list",{name:"Œuvres non publiées",exact:true}),first=reserve.locator("li").filter({has:page.getByRole("button",{name:"Publier",exact:true})}).first();const publishId=await first.getAttribute("data-artwork-id");await first.getByRole("button",{name:"Publier",exact:true}).click();await expect(page.locator('[role="status"]')).toContainText(["Œuvre publiée"]);const response=await page.request.get("/api/artwork-catalog/workspace?collection=reserve&limit=100");expect((await response.json()).reserve.items.some((a:{id:string})=>a.id===publishId)).toBe(false);
 if(info.project.name==="chromium"){for(const width of [1440,375]){await page.setViewportSize({width,height:1000});await expect(page.locator("body")).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);await page.screenshot({path:`.runtime/catalog-grid-${width}.png`,fullPage:false});}}
});

test("pointer drop publishes at the chosen anchor and samples rendered frames",async({page},info)=>{
 test.setTimeout(120000);await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks");
 const grid=page.getByRole("list",{name:"Œuvres publiées",exact:true}),reserve=page.getByRole("list",{name:"Œuvres non publiées",exact:true});await expect(grid).toBeVisible();const row=reserve.locator("li").filter({has:page.getByRole("button",{name:"Publier",exact:true})}).first(),id=await row.getAttribute("data-artwork-id"),handle=row.getByRole("button",{name:/^Déplacer pour publier /});
 await handle.scrollIntoViewIfNeeded();const start=(await handle.boundingBox())!,target=(await grid.locator("li").first().boundingBox())!;
 await page.evaluate(()=>{const w=window as unknown as {catalogFrames:number[];catalogSampling:boolean};w.catalogFrames=[];w.catalogSampling=true;const tick=(time:number)=>{w.catalogFrames.push(time);if(w.catalogSampling)requestAnimationFrame(tick);};requestAnimationFrame(tick);});
 await page.mouse.move(start.x+start.width/2,start.y+start.height/2);await page.mouse.down();await page.mouse.move(target.x+8,target.y+30,{steps:12});await page.waitForTimeout(250);await page.mouse.up();await page.evaluate(()=>{(window as unknown as {catalogSampling:boolean}).catalogSampling=false;});
 await expect(grid.locator("li").first()).toHaveAttribute("data-artwork-id",id!);const frames=await page.evaluate(()=>(window as unknown as {catalogFrames:number[]}).catalogFrames),intervals=frames.slice(1).map((t,i)=>t-frames[i]!).sort((a,b)=>a-b);console.log("catalog drag frame intervals",JSON.stringify({browser:info.project.name,samples:intervals.length,medianMs:intervals[Math.floor(intervals.length*.5)],p95Ms:intervals[Math.floor(intervals.length*.95)]}));
});

test("filtered publication appends globally and a withdrawn work cannot be published",async({page})=>{
 const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,"utf8")).sites[0];
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/artworks?availability=withdrawn");
 const reserve=page.getByRole("list",{name:"Œuvres non publiées",exact:true});await expect(reserve.getByRole("button",{name:"Publier",exact:true}).first()).toBeDisabled();
 const publicIds=async()=>{const ids:string[]=[];let cursor:string|null=null;do{const result:APIResponse=await page.request.get(site.apiOrigin+"/v1/public/artworks?limit=100"+(cursor?"&cursor="+encodeURIComponent(cursor):""));expect(result.status()).toBe(200);const body:{items:{id:string}[];nextCursor:string|null}=await result.json();ids.push(...body.items.map((a:{id:string})=>a.id));cursor=body.nextCursor;}while(cursor);return ids;};
 const original=await publicIds();
 await page.goto("/artworks?publication=hidden");const row=reserve.locator("li").filter({has:page.getByRole("button",{name:"Publier",exact:true})}).first(),id=await row.getAttribute("data-artwork-id");
 await row.getByRole("button",{name:"Publier",exact:true}).click();await expect(page.getByRole("status")).toContainText(["Œuvre publiée"]);
 const current=await publicIds();expect(current).toEqual([...original,id]);
});
