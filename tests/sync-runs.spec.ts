import {test,expect} from "@playwright/test";
test.setTimeout(150000);
test("accepts a durable sync and follows it after revisiting the admin",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();
  await page.goto("/sync-runs");const start=Date.now();await page.getByRole("button",{name:/lancer une synchronisation/i}).click();
  await expect(page).toHaveURL(/\/sync-runs\/[0-9a-f-]{36}$/);expect(Date.now()-start).toBeLessThan(30000);console.log("SC-003 sync_trigger_ms="+(Date.now()-start));
  const url=page.url();await page.goto("/");await page.getByRole("button",{name:"Déconnexion",exact:true}).click();
  await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto(url);
  await expect(page.getByTestId("sync-status")).toContainText(/terminée/i,{timeout:120000});
  let polls=0;page.on("request",request=>{if(request.url().includes("/api/sync-runs/"))polls++;});
  await page.waitForTimeout(4500);expect(polls).toBe(0);
});
test("reuses the same idempotency key after a lost acceptance response",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/sync-runs");
  const keys:string[]=[];let lost=false;
  await page.route("**/api/sync-runs",async route=>{
    if(route.request().method()!=="POST")return route.continue();keys.push(route.request().headers()["idempotency-key"]!);
    if(!lost){lost=true;await route.fetch();await route.abort("connectionreset");}else await route.continue();
  });
  await page.getByRole("button",{name:/lancer une synchronisation/i}).click();await page.getByRole("button",{name:/réessayer/i}).click();
  await expect(page).toHaveURL(/\/sync-runs\/[0-9a-f-]{36}$/);expect(keys).toHaveLength(2);expect(keys[0]).toBe(keys[1]);
  await expect(page.getByTestId("sync-status")).toContainText(/terminée/i,{timeout:120000});
});
test("offers the active run after a concurrent trigger",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/sync-runs");
  const id="11111111-1111-4111-8111-111111111111";
  await page.route("**/api/sync-runs",route=>route.fulfill({status:409,json:{error:{code:"sync_in_progress",details:[{field:"runId",reason:id}]}}}));
  await page.getByRole("button",{name:/lancer une synchronisation/i}).click();await expect(page.getByRole("link",{name:/ouvrir la synchronisation/i})).toHaveAttribute("href","/sync-runs/"+id);
});
test("explains source cooldown and preserves an explicit retry",async({page})=>{
  await page.goto("/");await page.getByRole("link",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await page.goto("/sync-runs");
  await page.route("**/api/sync-runs",route=>route.fulfill({status:429,headers:{"Retry-After":"300"},json:{error:{code:"source_cooldown"}}}));
  await page.getByRole("button",{name:/lancer une synchronisation/i}).click();await expect(page.getByRole("alert").filter({hasText:/5 minute/})).toBeVisible();await expect(page.getByRole("button",{name:"Réessayer"})).toBeEnabled();
});
