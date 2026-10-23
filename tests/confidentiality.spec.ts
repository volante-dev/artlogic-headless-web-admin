import {test,expect,type Page} from "@playwright/test";
import {readFile,readdir} from "node:fs/promises";
import {join} from "node:path";
interface Fixture{secrets:string[];hidden:{id:string;title:string};withdrawn:{id:string;title:string};identityOrigin:string}
async function fixture():Promise<Fixture>{if(!process.env.E2E_SECURITY_FIXTURE)throw new Error("Use backend test:security:browser");return JSON.parse(await readFile(process.env.E2E_SECURITY_FIXTURE,"utf8"));}
async function login(page:Page){await page.goto("/");const link=page.getByRole("link",{name:/se connecter/i});await link.focus();await page.keyboard.press("Enter");const consent=page.getByRole("button",{name:/continuer avec le compte de test/i});await consent.focus();await page.keyboard.press("Enter");await expect(page.getByRole("button",{name:"Déconnexion",exact:true})).toBeVisible();}
test("permits authorized hidden/withdrawn previews but refuses them after logout without secret leakage",async({page,request,context})=>{
  const data=await fixture(),artifacts:string[]=[],network:string[]=[];page.on("request",r=>network.push(r.url()+JSON.stringify(r.headers())+(r.postData()??"")));
  async function scan(dir:string){for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await scan(path);else if(entry.name.endsWith(".js"))artifacts.push(await readFile(path,"utf8"));}}await scan(".next/static");
  await login(page);const previews:string[]=[];
  for(const art of [data.hidden,data.withdrawn]){
    await page.goto("/artworks/"+art.id);await expect(page.getByRole("heading",{name:art.title,exact:true})).toBeVisible();await expect(page.getByRole("img").first()).toBeVisible();
    const detail=await page.request.get("/api/artworks/"+art.id);expect(detail.status()).toBe(200);const image=(await detail.json()).media[0].previewPath.replace("/v1/admin","/api");previews.push(image);
    expect((await page.request.get(image)).status()).toBe(200);artifacts.push(await detail.text(),await page.content());
    const rsc=await page.request.get("/artworks/"+art.id+"?_rsc=private",{headers:{RSC:"1"}});expect(rsc.headers()["cache-control"]).toContain("no-store");artifacts.push(await rsc.text());
    const denied=await request.get("/api/artworks/"+art.id);expect(denied.status()).toBe(401);expect((await denied.text()).includes(art.title)).toBe(false);
  }
  artifacts.push(await page.evaluate(()=>JSON.stringify({local:{...localStorage},session:{...sessionStorage}})),...network);
  expect(data.secrets.some(secret=>artifacts.some(body=>body.includes(secret))),"service secret leaked to admin browser").toBe(false);
  expect(network.some(value=>value.includes("/token")||value.includes("/rest/v1/")||value.includes("/storage/v1/"))).toBe(false);expect(await page.evaluate(async()=>await caches.keys())).toEqual([]);
  const csrf=(await context.cookies()).find(cookie=>cookie.name.endsWith("artlogic_csrf"))!.value;
  expect((await page.request.post("/auth/logout",{headers:{origin:process.env.E2E_BASE_URL!,"x-csrf-token":csrf}})).status()).toBe(204);
  for(const image of previews)expect((await page.request.get(image)).status()).toBe(401);
  for(const art of [data.hidden,data.withdrawn])for(const suffix of ["","?_rsc=revoked"]){const response=await page.request.get("/artworks/"+art.id+suffix,{headers:suffix?{RSC:"1"}:{}});expect(response.headers()["cache-control"]).toContain("no-store");expect((await response.text()).includes(art.title)).toBe(false);}
});
test("rechecks access when browser history returns to an admin artwork after logout",async({page})=>{
  const data=await fixture();await login(page);
  await page.getByRole("link",{name:"Œuvres",exact:true}).click();
  await page.getByRole("searchbox",{name:"Rechercher par titre ou artiste"}).fill(data.hidden.title);
  await page.getByRole("button",{name:"Rechercher",exact:true}).click();
  await page.getByRole("link",{name:data.hidden.title,exact:true}).click();
  await expect(page.getByRole("heading",{name:data.hidden.title,exact:true})).toBeVisible();
  await page.getByRole("link",{name:"Œuvres",exact:true}).click();
  await expect(page).toHaveURL(/\/artworks$/);
  await expect(page.getByRole("heading",{name:"Œuvres",exact:true})).toBeVisible();
  await page.getByRole("button",{name:"Déconnexion",exact:true}).click();
  await expect(page.getByRole("link",{name:/se connecter/i})).toBeVisible();
  await page.goBack();
  await expect(page.getByRole("link",{name:/se connecter/i})).toBeVisible();
  await expect(page.getByRole("heading",{name:data.hidden.title,exact:true})).toHaveCount(0);
});
for(const width of [375,1440])test("supports login, sync and publication by keyboard at "+width+"px",async({page})=>{
  test.setTimeout(120000);await page.setViewportSize({width,height:1000});const data=await fixture();await login(page);
  await page.goto("/sync-runs");const trigger=page.getByRole("button",{name:"Lancer une synchronisation",exact:true});await trigger.focus();await page.keyboard.press("Enter");await expect(page.getByTestId("sync-status")).toContainText(/terminée/i,{timeout:90000});
  await page.goto("/artworks/"+data.hidden.id);const publish=page.getByRole("button",{name:"Publier sur le site",exact:true});await publish.focus();await page.keyboard.press("Enter");await expect(page.getByTestId("publication-result")).toHaveText("Publication confirmée.");
  const hide=page.getByRole("button",{name:"Masquer sur le site",exact:true});await hide.focus();await page.keyboard.press("Enter");await expect(page.getByTestId("publication-result")).toHaveText("Masquage confirmé.");
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await expect(page.getByRole("heading",{name:"Visibilité sur le site"})).toBeVisible();
});
