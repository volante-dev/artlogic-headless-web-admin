import {test,expect} from '@playwright/test';
import {languageFixture} from './languages-fixture';
test.describe('US6 keyboard and responsive language administration',()=>{
 test('adds, orders and saves by keyboard with visible textual feedback at mobile and 200 percent zoom',async({page,context},testInfo)=>{
  await languageFixture(context);await page.goto('/languages');const code=testInfo.project.name==='chromium'?'de':'es',label=code==='de'?'Deutsch':'Español';await page.getByRole('textbox',{name:'Code de langue',exact:true}).focus();await page.keyboard.type(code);await page.keyboard.press('Tab');await page.keyboard.type(label);await page.keyboard.press('Enter');await expect(page.locator('[data-language="'+code+'"]')).toBeVisible();await expect(page.getByRole('status').first()).toContainText('Langue ajoutée en préparation');
  const move=page.getByRole('button',{name:'Monter '+label,exact:true});await move.focus();await page.keyboard.press('Enter');await page.getByRole('button',{name:'Enregistrer les libellés et l’ordre',exact:true}).focus();await page.keyboard.press('Enter');await expect(page.getByRole('status').first()).toContainText('enregistré');
  await page.setViewportSize({width:390,height:844});expect(await page.locator('body').evaluate(element=>element.scrollWidth<=innerWidth+1)).toBe(true);await page.evaluate(()=>{if(document.activeElement instanceof HTMLElement)document.activeElement.blur();window.scrollTo(0,0);});await page.screenshot({path:testInfo.outputPath('languages-keyboard-mobile.png'),fullPage:true});
  await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>{document.documentElement.style.zoom='2';window.scrollTo(0,0);});expect(await page.locator('body').evaluate(element=>element.scrollWidth<=innerWidth/2+1)).toBe(true);await expect(page.getByRole('textbox',{name:'Libellé ('+code+')',exact:true})).toBeVisible();await page.screenshot({path:testInfo.outputPath('languages-keyboard-zoom200.png'),fullPage:true});
 });
});
