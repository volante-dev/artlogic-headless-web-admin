import {expect,type Page} from "@playwright/test";
export async function navigationLogin(page:Page){await page.goto("/");const origin=new URL(page.url()).origin;await page.getByRole("button",{name:/se connecter/i}).click();await page.getByRole("button",{name:/continuer avec le compte de test/i}).click();await expect.poll(async()=>(await page.context().cookies()).some(c=>c.name.endsWith("artlogic_admin_session"))).toBe(true);await page.waitForURL(url=>url.origin===origin&&url.pathname==="/");await page.goto("/presentation/navigation");await expect(page.getByTestId("navigation-news")).toBeVisible();}
export async function replaceMenu(page:Page,items:unknown[],etag?:string){
 const current=await page.request.get("/api/navigation"),cookies=await page.context().cookies(),csrf=cookies.find(c=>c.name.endsWith("artlogic_csrf"))!.value;
 return page.request.put("/api/navigation",{headers:{origin:new URL(page.url()).origin,"x-csrf-token":csrf,"if-match":etag??current.headers()["x-resource-version"]??current.headers().etag!},data:{schemaVersion:1,items}});
}
