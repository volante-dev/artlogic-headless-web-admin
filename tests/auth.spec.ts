import { expect,test } from "@playwright/test";
async function login(page:import("@playwright/test").Page){
  await page.goto("/");
  await page.getByRole("link",{name:/se connecter/i}).click();
  await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
  await expect(page.getByRole("button",{name:/déconnexion/i})).toBeVisible();
}
test("SSO creates opaque protected cookies and logout clears the local session",async({page,context})=>{
  const requested:string[]=[];page.on("request",r=>requested.push(r.url()));
  await login(page);
  const cookies=await context.cookies();
  const session=cookies.find(c=>c.name.endsWith("artlogic_admin_session"));
  expect(session).toBeDefined();expect(session!.httpOnly).toBe(true);expect(session!.sameSite).toBe("Lax");expect(session!.path).toBe("/");
  expect(session!.value).not.toContain(".");
  const csrf=cookies.find(c=>c.name.endsWith("artlogic_csrf"));expect(csrf?.httpOnly).toBe(false);expect(csrf?.sameSite).toBe("Strict");
  expect(cookies.some(c=>c.name.endsWith("artlogic_oauth_transaction"))).toBe(false);
  expect(requested.some(url=>new URL(url).pathname==="/token")).toBe(false);
  const response=await page.request.get("/api/session");expect(response.status()).toBe(200);
  expect(await response.text()).not.toMatch(/access_token|refresh_token|accessToken|refreshToken/);
  await page.getByRole("button",{name:/déconnexion/i}).click();
  await expect(page.getByRole("link",{name:/se connecter/i})).toBeVisible();
  expect((await context.cookies()).some(c=>c.name.endsWith("artlogic_admin_session"))).toBe(false);
});
test("callback failure removes the temporary transaction cookie",async({page,context})=>{
  await page.goto("/auth/login");
  expect((await context.cookies()).some(c=>c.name.endsWith("artlogic_oauth_transaction"))).toBe(true);
  await page.goto("/auth/callback?code=invalid&state=invalid");
  expect((await context.cookies()).some(c=>c.name.endsWith("artlogic_oauth_transaction"))).toBe(false);
});
