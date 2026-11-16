import {readFile} from 'node:fs/promises';
import {expect,type Page} from '@playwright/test';
import {loginStoreAdmin} from './products.cases';
export async function verifyOrders(page:Page){
 const path=process.env.E2E_COMMERCE_ORDERS_FIXTURE;if(!path)throw new Error('synthetic_orders_fixture_required');const fixture=JSON.parse(await readFile(path,'utf8'));
 await loginStoreAdmin(page);await page.goto('/store/orders/'+fixture.id);await expect(page.getByRole('heading',{name:'Commande '+fixture.orderNumber,exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Commencer le traitement',exact:true}).click();await expect(page.getByTestId('publication-result')).toContainText('Commande enregistrée.');
 const started=Date.now();await page.getByRole('textbox',{name:'Transporteur',exact:true}).fill('Transporteur de recette');await page.getByRole('textbox',{name:'Numéro de suivi',exact:true}).fill('SYNTHETIC');await page.getByRole('textbox',{name:'Lien de suivi HTTPS',exact:true}).fill('https://tracking.example.test/synthetic');
 await page.getByRole('button',{name:'Enregistrer l’expédition',exact:true}).click();await expect(page.getByRole('heading',{name:'Expédition enregistrée',exact:true})).toBeVisible();expect(Date.now()-started).toBeLessThan(60000);
 await expect(page.getByRole('button',{name:'Enregistrer l’expédition',exact:true})).toHaveCount(0);await expect(page.getByRole('table',{name:'Produits commandés'})).toContainText('1');
 const document=page.getByRole('link',{name:/Pièce de la commande/}).first(),response=await page.request.get((await document.getAttribute('href'))!);expect(response.status()).toBe(200);expect(response.headers()['cache-control']).toContain('no-store');expect(response.headers()['content-type']).toContain('text/html');expect(await response.text()).toContain(fixture.orderNumber);
 await page.getByRole('button',{name:'Confirmer la livraison',exact:true}).click();await expect(page.locator('[aria-current="step"]')).toHaveText(/Commande livrée/);await page.reload();await expect(page.locator('[aria-current="step"]')).toHaveText(/Commande livrée/);
 await page.goto('/store/incidents');await expect(page.getByRole('heading',{name:'Incidents du Store',exact:true})).toBeVisible();
}
