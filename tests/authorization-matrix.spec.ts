import {test,expect} from "@playwright/test";
import {randomUUID} from "node:crypto";
const id=randomUUID(),routes=["/api/presentation","/api/presentation/capabilities","/api/presentation/pages/home","/api/presentation/publications","/api/presentation/assets","/api/presentation/assets/"+id,"/api/presentation/assets/"+id+"/content","/api/site-content","/api/site-logos/"+id,"/api/session","/api/artworks","/api/artworks/"+id,"/api/media/"+id,"/api/artworks/"+id+"/publication-events","/api/sync-runs","/api/sync-runs/"+id];
test("blocks every anonymous BFF read and mutation despite forged internal headers",async({request})=>{
  for(const path of routes){const response=await request.get(path,{headers:{"x-bff-key":"forged","x-admin-session":"forged"}});expect(response.status(),path).toBe(401);expect(response.headers()["cache-control"]).toContain("no-store");}
  for(const [path,method,data] of [["/api/presentation/theme","PUT",{}],["/api/presentation/pages/home","PUT",{pageKey:"home",sections:[]}],["/api/presentation/validation","POST",{}],["/api/presentation/publications","POST",{}],["/api/presentation/publications/"+id+"/restore","POST",{replaceDraft:true}],["/api/presentation/previews","POST",{pageKey:"home",locale:"fr"}],["/api/presentation/assets","POST",{kind:"image",rightsConfirmed:true}],["/api/presentation/assets/"+id,"DELETE",undefined],["/api/presentation/assets/"+id+"/content","PUT",undefined],["/api/site-content","PATCH",{logoId:null}],["/api/site-logos","POST",undefined],["/api/sync-runs","POST",undefined],["/api/artworks/"+id+"/publication","PUT",{publication:"published"}],["/auth/logout","POST",undefined]] as const){
    const response=await request.fetch(path,{method,data,headers:{origin:process.env.E2E_BASE_URL!,"x-csrf-token":"forged","if-match":'"publication-0"',"idempotency-key":randomUUID()}});expect([401,403]).toContain(response.status());expect(response.headers()["cache-control"]).toContain("no-store");
  }
});
test("rejects missing or foreign Origin and forged CSRF on every mutation",async({page,context})=>{
  await page.goto("/");await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await expect(page.getByRole("button",{name:"Déconnexion",exact:true})).toBeVisible();
  const csrf=(await context.cookies()).find(c=>c.name.endsWith("artlogic_csrf"))!.value;
  const proofs:Record<string,string>[]=[{origin:"https://attacker.invalid","x-csrf-token":csrf},{origin:process.env.E2E_BASE_URL!,"x-csrf-token":"forged"},{"x-csrf-token":csrf}];
  for(const [path,method,data] of [["/api/presentation/theme","PUT",{}],["/api/presentation/pages/home","PUT",{pageKey:"home",sections:[]}],["/api/presentation/validation","POST",{}],["/api/presentation/publications","POST",{}],["/api/presentation/publications/"+id+"/restore","POST",{replaceDraft:true}],["/api/presentation/previews","POST",{pageKey:"home",locale:"fr"}],["/api/presentation/assets","POST",{kind:"image",rightsConfirmed:true}],["/api/presentation/assets/"+id,"DELETE",undefined],["/api/presentation/assets/"+id+"/content","PUT",undefined],["/api/site-content","PATCH",{logoId:null}],["/api/site-logos","POST",undefined],["/api/sync-runs","POST",undefined],["/api/artworks/"+id+"/publication","PUT",{publication:"published"}],["/auth/logout","POST",undefined]] as const){
    for(const proof of proofs){
      const response=await page.request.fetch(path,{method,data,headers:{...proof,"if-match":'"publication-0"',"idempotency-key":randomUUID()}});expect(response.status(),path).toBe(403);expect(response.headers()["cache-control"]).toContain("no-store");
    }
  }
  expect((await page.request.get("/api/session")).status()).toBe(200);
});

test("anonymous asset HEAD does not reveal range metadata",async({request})=>{
  const response=await request.head("/api/presentation/assets/"+id+"/content",{headers:{Range:"bytes=999999999-","x-preview-key":"forged"}});
  expect(response.status()).toBe(401);expect(response.headers()["cache-control"]).toContain("no-store");expect(response.headers()["content-range"]).toBeUndefined();expect((await response.body()).length).toBe(0);
});
