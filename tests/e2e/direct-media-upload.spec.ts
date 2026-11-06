import {test,expect,type Page} from "@playwright/test";
test.skip(!process.env.E2E_PRESENTATION_FIXTURE,"Requires the isolated PostgreSQL/Storage and synthetic SSO harness.");
test.setTimeout(120000);
async function openVideos(page:Page){
 await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
 await page.goto("/presentation/media");await chooseVideo(page);
}
async function chooseVideo(page:Page){await page.getByRole("combobox",{name:"Type de média"}).click();await page.getByRole("option",{name:"Vidéo",exact:true}).click();}
test("transfers nineteen MiB directly, retains ready state after a lost finalize response and never relays binary through BFF",async({page})=>{
 await openVideos(page);let directPuts=0,attempts=0,assetId="";const bffSizes:number[]=[];
 page.on("request",r=>{if(r.url().includes("/storage/v1/object/upload/sign/")&&r.method()==="PUT")directPuts++;if(r.url().includes("/api/presentation/")&&!['GET','HEAD'].includes(r.method())){bffSizes.push(r.postDataBuffer()?.length??0);if(r.url().endsWith("/upload-attempts"))attempts++;}});
 await page.route("**/upload-attempts/*/finalize",async route=>{const response=await route.fetch();expect(response.status()).toBe(200);assetId=(await response.json()).asset.id;await route.abort("failed");});
 await page.getByLabel("Fichier vidéo",{exact:true}).setInputFiles({name:"synthetic.webm",mimeType:"video/webm",buffer:Buffer.alloc(19*1048576,17)});
 await page.getByLabel(/Je confirme disposer des droits/).check();await page.getByRole("button",{name:"Importer et préparer"}).click();
 await expect(page.getByRole("alert").filter({hasText:"réponse n’a pas été reçue"})).toBeVisible({timeout:110000});expect(directPuts).toBe(1);expect(attempts).toBe(1);expect(bffSizes.every(size=>size<16384)).toBe(true);
 const ready=await page.request.get("/api/presentation/assets/"+assetId);expect(ready.status()).toBe(200);expect((await ready.json()).metadata).toEqual({kind:"video"});
 await page.reload();await chooseVideo(page);await expect(page.getByText("Vidéo · "+assetId.slice(0,8),{exact:true})).toBeVisible();expect(directPuts).toBe(1);expect(attempts).toBe(1);
});
test("accepts a non-MP4 video classification without binary inspection and rejects an oversized selection before reservation",async({page})=>{
 await openVideos(page);let reservations=0;page.on("request",r=>{if(r.method()==="POST"&&r.url().endsWith("/upload-attempts"))reservations++;});
 await page.getByLabel("Fichier vidéo",{exact:true}).setInputFiles({name:"oversize.mov",mimeType:"video/quicktime",buffer:Buffer.alloc(20971521)});
 await expect(page.getByRole("alert").filter({hasText:"20 Mio maximum"})).toBeVisible();expect(reservations).toBe(0);
 await page.getByLabel("Fichier vidéo",{exact:true}).setInputFiles({name:"synthetic.mov",mimeType:"video/quicktime",buffer:Buffer.alloc(1024,19)});
 await page.getByLabel(/Je confirme disposer des droits/).check();await page.getByRole("button",{name:"Importer et préparer"}).click();await expect(page.getByRole("status")).toContainText("Média prêt",{timeout:110000});expect(reservations).toBe(1);
});
