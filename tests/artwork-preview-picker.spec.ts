import {test,expect,type Page} from "@playwright/test";
import type {AdminArtwork} from "../lib/bff/artworks";

const artwork=(id:string,title:string,publicArtwork=true):AdminArtwork=>({id,sourceId:id,title,artist:"Artiste de démonstration",year:null,medium:null,dimensions:null,availability:"available",publication:"published",publicationVersion:1,effectivePublic:publicArtwork,lastSyncedAt:"2026-11-01T00:00:00Z",warnings:[],media:[{id:"media-"+id,alt:null,width:240,height:180,previewPath:"/must-not-use-original"}]});
const first=artwork("first","Étude bleue"),second=artwork("second","Composition avec un titre particulièrement long pour vérifier la lisibilité sur un petit écran"),privateArtwork=artwork("hidden","Œuvre masquée",false);
async function login(page:Page){await page.goto("/auth/login");const button=page.getByRole("button",{name:/continuer avec le compte de test/i});if(await button.isVisible())await button.click();}
async function open(page:Page){await page.goto("/presentation/pages/artworkDetail");await expect(page.getByRole("group",{name:"Œuvre à prévisualiser",exact:true})).toBeVisible();}
test("thumbnail grid preserves one selection through search, pagination, errors and keyboard use",async({page})=>{
 let fail=false;const queries:URLSearchParams[]=[];
 await page.route("**/api/artworks?*",route=>{
  const query=new URL(route.request().url()).searchParams;queries.push(query);
  if(fail)return route.fulfill({status:503,json:{error:{code:"unavailable"}}});
  const items=query.get("q")==="absent"?[]:query.has("cursor")?[second]:[first,privateArtwork];
  return route.fulfill({json:{items,nextCursor:!query.get("q")&&!query.has("cursor")?"next":null,catalogRevision:1}});
 });
 await page.route("**/api/media/*",route=>route.fulfill({contentType:"image/svg+xml",body:'<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="240" height="180" fill="#2952de"/><circle cx="120" cy="90" r="55" fill="#dce4fa"/></svg>'}));
 await login(page);await open(page);
 const grid=page.getByRole("group",{name:"Œuvre à prévisualiser",exact:true}),choice=grid.getByRole("button",{name:/Étude bleue/});
 await expect(choice.locator("img")).toHaveAttribute("src",/\/api\/media\/media-first$/);await expect(grid.getByRole("button",{name:/Œuvre masquée/})).toHaveCount(0);
 await choice.focus();await page.keyboard.press("Enter");await expect(choice).toHaveAttribute("aria-pressed","true");
 await page.getByRole("button",{name:"Charger les œuvres suivantes",exact:true}).click();await expect(grid.getByRole("button")).toHaveCount(2);
 const next=grid.getByRole("button",{name:/Composition avec/});await next.click();await expect(next).toHaveAttribute("aria-pressed","true");await expect(choice).toHaveAttribute("aria-pressed","false");
 await page.getByRole("searchbox").fill("absent");await expect(page.getByRole("status").filter({hasText:"Aucune œuvre publique ne correspond"})).toBeVisible();await expect(page.getByText(/Œuvre sélectionnée : Composition/)).toBeVisible();
 fail=true;await page.getByRole("searchbox").fill("échec");await expect(page.getByRole("alert").filter({hasText:"Le catalogue"})).toBeVisible();fail=false;await page.getByRole("button",{name:"Réessayer",exact:true}).click();await expect(choice).toBeVisible();
 expect(queries.every(query=>query.get("publication")==="published"&&query.get("availability")==="available")).toBe(true);expect(queries.some(query=>query.get("cursor")==="next")).toBe(true);
});
test("thumbnail grid stays readable and keyboard accessible on desktop and mobile",async({page})=>{
 await page.route("**/api/artworks?*",route=>route.fulfill({json:{items:[first,second],nextCursor:null,catalogRevision:1}}));
 await page.route("**/api/media/*",route=>route.fulfill({contentType:"image/svg+xml",body:'<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="240" height="180" fill="#dce4fa"/><rect x="50" y="25" width="140" height="130" fill="#2952de"/></svg>'}));
 await login(page);await open(page);const grid=page.getByRole("group",{name:"Œuvre à prévisualiser",exact:true});await grid.getByRole("button").first().click();
 for(const [name,width] of [["desktop",1440],["mobile",375]] as const){
  await page.setViewportSize({width,height:900});await grid.scrollIntoViewIfNeeded();await expect(grid.locator("img").first()).toBeVisible();await grid.getByRole("button").first().focus();
  expect(await grid.evaluate(element=>element.scrollWidth<=element.clientWidth)).toBe(true);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:".impeccable/review/artwork-picker-"+name+".png",fullPage:true});
 }
});
test("editorial artwork source uses thumbnails, rejects missing views and preserves explicit view selection",async({page})=>{
 const id="77777777-7777-4777-8777-777777777770",noImage={...artwork("no-image","Sans vue photographique"),media:[]},twoViews={...first,media:[...first.media,{...first.media[0]!,id:"second-view"}]};
 const article={id,kind:"publication",revision:"1",lifecycle:"editable",title:"Choix du média",isPublished:false,hasDraftChanges:false,publishedVersionId:null,pendingSchedule:null,updatedAt:"2026-11-01T00:00:00Z",editorialDate:null,completeness:{fr:{complete:true,issuesCount:0}},diagnostics:[],scheduleHistory:[],trashedAt:null,purgeAfter:null,document:{schemaVersion:1,editorialDate:null,translations:{fr:{title:"Choix du média",slug:"choix-du-media",summary:null}},cover:null,authorIds:[],categoryIds:[],primaryCategoryId:null,tagIds:[],taxonomyAssignments:[],relatedArticleIds:[],blocks:[] as unknown[]}};
 await page.route("**/api/editorial/articles/**",async route=>{
  const path=new URL(route.request().url()).pathname;
  if(path.endsWith("/draft")){const input=route.request().postDataJSON();article.document=input.document;return route.fulfill({headers:{"x-resource-version":'"picker-revision"'},json:{article,clientMutationId:input.clientMutationId,changed:true}});}
  return route.fulfill({headers:{"x-resource-version":'"picker-revision"'},json:path.endsWith(id)?article:{items:[],total:0,page:1}});
 });
 await page.route("**/api/artworks?*",route=>route.fulfill({json:{items:[twoViews,noImage],nextCursor:null,catalogRevision:1}}));
 await page.route("**/api/artworks/first",route=>route.fulfill({json:twoViews}));
 await page.route("**/api/media/*",route=>route.fulfill({contentType:"image/svg+xml",body:'<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="240" height="180" fill="#dce4fa"/><rect x="50" y="25" width="140" height="130" fill="#2952de"/></svg>'}));
 await login(page);await page.goto("/publications/"+id);await page.getByRole("button",{name:"Ajouter un bloc média",exact:true}).click();
 const dialog=page.getByRole("dialog",{name:"Choisir un média",exact:true});await dialog.getByRole("combobox",{name:"Source",exact:true}).click();await page.getByRole("option",{name:"Œuvre",exact:true}).click();
 await expect(dialog.getByRole("button",{name:/Sans vue photographique/})).toBeDisabled();await expect(dialog.getByRole("button",{name:/Étude bleue/}).locator("img")).toBeVisible();
 for(const [name,width] of [["desktop",1440],["mobile",375]] as const){await page.setViewportSize({width,height:900});await page.addStyleTag({content:"nextjs-portal { display: none !important; }"});await page.screenshot({path:".impeccable/review/artwork-source-dialog-"+name+".png"});}
 await dialog.getByRole("button",{name:/Étude bleue/}).focus();await page.keyboard.press("Enter");await expect(dialog).toBeHidden();
 const block=page.locator(".editorial-block").first();await expect(block.getByRole("button",{name:/Étude bleue/})).toHaveAttribute("aria-pressed","true");
 await block.getByRole("combobox",{name:"Vue de l’œuvre",exact:true}).click();await page.getByRole("option",{name:"Vue 2",exact:true}).click();
 await expect(block.getByRole("combobox",{name:"Vue de l’œuvre",exact:true})).toContainText("Vue 2");
 for(const [name,width] of [["desktop",1440],["mobile",375]] as const){await page.setViewportSize({width,height:900});const field=block.locator(".editorial-media-fields");await field.scrollIntoViewIfNeeded();await field.screenshot({path:".impeccable/review/artwork-source-selected-"+name+".png",style:".admin-mobile-bar, .demo-notice, .skip { visibility: hidden !important; }"});}
 await expect.poll(()=>JSON.stringify(article.document.blocks)).toContain('"mediaId":"second-view"');expect(article.document.blocks).toHaveLength(1);
});
