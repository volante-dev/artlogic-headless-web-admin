import {mkdir} from "node:fs/promises";
import {test,expect} from "@playwright/test";
import {readFileSync} from "node:fs";
test('format confirms only a saved state and recovers a lost success explicitly',async({page})=>{
 const site=JSON.parse(readFileSync(process.env.E2E_GALLERY_FIXTURE!,'utf8')).sites[0];
 await page.goto('/');await page.getByRole('button',{name:/se connecter/i}).click();await page.getByRole('button',{name:/continuer avec le compte de test/i}).click();await page.goto('/artworks/'+site.artworkId);
 const control=page.locator('[data-catalog-control="large"]'),toggle=control.getByRole('switch');await expect(toggle).toBeEnabled();await toggle.click();await expect(control.getByRole('status')).toHaveText('Réglage enregistré.');
 await page.route('**/api/artworks/*/catalog-display',async route=>{if(route.request().method()==='PUT'){await route.fetch();await route.abort();}else await route.continue();});
 await toggle.click();await expect(control.getByRole('status')).toContainText('n’est pas confirmée');await expect(toggle).toBeDisabled();if(process.env.E2E_GALLERY_CAPTURE==='1'){await mkdir('.impeccable/review/plp',{recursive:true});for(const width of [1440,390]){await page.setViewportSize({width,height:1000});await control.scrollIntoViewIfNeeded();await page.screenshot({path:`.impeccable/review/plp/format-uncertain-${width}.png`});}}await control.getByRole('button',{name:'Relire le réglage',exact:true}).click();await control.getByRole('button',{name:'Conserver mon choix',exact:true}).click();await expect(control.getByRole('button',{name:'Confirmer mon choix',exact:true})).toBeVisible();await expect(control.getByRole('status')).toContainText('Confirmez');
 await page.unroute('**/api/artworks/*/catalog-display');await control.getByRole('button',{name:'Confirmer mon choix',exact:true}).click();await expect(control.getByRole('status')).toHaveText('Réglage enregistré.');
});
