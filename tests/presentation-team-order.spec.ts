import {test,expect} from "@playwright/test";
import {loginTeam} from "./team-fixture";
test("orders with buttons and keyboard and keeps hidden positions",async({page})=>{
 await loginTeam(page);const rows=page.getByTestId('team-person'),first=rows.first(),id=await first.getAttribute('data-person-id');
 const down=first.getByRole('button',{name:/Descendre/});await down.focus();await page.keyboard.press('Enter');await expect(page.getByRole('status')).toContainText('position 2');await page.reload();expect(await rows.nth(1).getAttribute('data-person-id')).toBe(id);
 const checkbox=rows.nth(1).getByRole('checkbox',{name:'Visible après publication'});await checkbox.uncheck();await page.getByRole('button',{name:'Enregistrer l’équipe'}).click();await page.reload();expect(await rows.nth(1).getAttribute('data-person-id')).toBe(id);await expect(rows.nth(1).getByText('Masqué',{exact:true})).toBeVisible();
});
