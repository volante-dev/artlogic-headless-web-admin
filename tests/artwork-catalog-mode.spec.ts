import {mkdir} from "node:fs/promises";
import {test,expect} from "@playwright/test";
import {readFileSync} from "node:fs";
test('site mode cycles from the artwork list without a presentation release',async({page})=>{
 const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,'utf8')).sites[0];await page.goto('/');await page.getByRole('button',{name:/se connecter/i}).click();await page.getByRole('button',{name:/continuer avec le compte de test/i}).click();await page.goto('/artworks');
 const control=page.locator('[data-catalog-control="enabled"]'),toggle=control.getByRole('switch');await expect(toggle).toBeEnabled();if(process.env.E2E_GALLERY_CAPTURE==='1'){await mkdir('.impeccable/review/plp',{recursive:true});for(const width of [1440,390]){await page.setViewportSize({width,height:1000});await page.screenshot({path:`.impeccable/review/plp/mode-${width}.png`});}}
 for(const enabled of [true,false,true,false]){if(await toggle.isChecked()!==enabled)await toggle.click();await expect(toggle).toBeChecked({checked:enabled});await expect.poll(async()=>{const r=await page.request.get(site.apiOrigin+'/v1/public/artwork-catalog?display=plp');return (await r.json()).layout;}).toBe(enabled?'masonry':'grid');}
});
