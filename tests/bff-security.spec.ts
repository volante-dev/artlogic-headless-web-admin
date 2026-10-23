import {expect,test} from "@playwright/test";
async function session(page:import("@playwright/test").Page){
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();
  await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
  await expect(page.getByRole("button",{name:/déconnexion/i})).toBeVisible();
}
test("ignores forged internal headers and limits operations",async({page,context})=>{
  const anonymous=await page.request.get("/api/session",{headers:{"x-bff-key":"forged","x-admin-session":"forged"}});
  expect(anonymous.status()).toBe(401);
  await session(page);
  expect((await page.request.get("/api/session",{headers:{"x-bff-key":"forged","x-admin-session":"forged"}})).status()).toBe(200);
  expect((await page.request.put("/api/session",{data:{}})).status()).toBe(405);
  expect((await page.request.get("/api/proxy?url=https://example.invalid")).status()).toBe(404);
  const csrf=(await context.cookies()).find(c=>c.name.endsWith("artlogic_csrf"))!.value;
  const origin=new URL(page.url()).origin;
  expect((await page.request.post("/auth/logout",{headers:{origin:"https://attacker.invalid","x-csrf-token":csrf}})).status()).toBe(403);
  expect((await page.request.post("/auth/logout",{headers:{origin,"x-csrf-token":"wrong"}})).status()).toBe(403);
  expect((await page.request.post("/auth/logout",{headers:{origin,"x-csrf-token":csrf},data:"x".repeat(20000)})).status()).toBe(400);
  expect((await page.request.get("/api/session")).status()).toBe(200);
});
test("refuses an external return path",async({request})=>{
  const response=await request.get("/auth/login?next=https%3A%2F%2Fattacker.invalid",{maxRedirects:0});
  expect(response.status()).toBe(400);
  expect(response.headers().location).toBeUndefined();
});
