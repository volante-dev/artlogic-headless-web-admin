import {test,expect} from "@playwright/test";
import {randomUUID} from "node:crypto";
const id=randomUUID(),routes=["/api/session","/api/artworks","/api/artworks/"+id,"/api/media/"+id,"/api/artworks/"+id+"/publication-events","/api/sync-runs","/api/sync-runs/"+id];
test("blocks every anonymous BFF read and mutation despite forged internal headers",async({request})=>{
  for(const path of routes){const response=await request.get(path,{headers:{"x-bff-key":"forged","x-admin-session":"forged"}});expect(response.status(),path).toBe(401);expect(response.headers()["cache-control"]).toContain("no-store");}
  for(const [path,method,data] of [["/api/sync-runs","POST",undefined],["/api/artworks/"+id+"/publication","PUT",{publication:"published"}],["/auth/logout","POST",undefined]] as const){
    const response=await request.fetch(path,{method,data,headers:{origin:process.env.E2E_BASE_URL!,"x-csrf-token":"forged","if-match":'"publication-0"',"idempotency-key":randomUUID()}});expect([401,403]).toContain(response.status());
  }
});
test("rejects missing or foreign Origin and forged CSRF on every mutation",async({page,context})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await expect(page.getByRole("button",{name:"Déconnexion",exact:true})).toBeVisible();
  const csrf=(await context.cookies()).find(c=>c.name.endsWith("artlogic_csrf"))!.value;
  const proofs:Record<string,string>[]=[{origin:"https://attacker.invalid","x-csrf-token":csrf},{origin:process.env.E2E_BASE_URL!,"x-csrf-token":"forged"},{"x-csrf-token":csrf}];
  for(const [path,method,data] of [["/api/sync-runs","POST",undefined],["/api/artworks/"+id+"/publication","PUT",{publication:"published"}],["/auth/logout","POST",undefined]] as const){
    for(const proof of proofs){
      const response=await page.request.fetch(path,{method,data,headers:{...proof,"if-match":'"publication-0"',"idempotency-key":randomUUID()}});expect(response.status(),path).toBe(403);
    }
  }
  expect((await page.request.get("/api/session")).status()).toBe(200);
});
