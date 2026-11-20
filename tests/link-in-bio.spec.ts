import {test,expect} from '@playwright/test';
import {fixtureDraft,fixtureTargets,fixturePosts,fixtureAccountId,fixtureSiteId,fixtureReleaseId,fixtureNow} from './fixtures/link-in-bio';
test.skip(process.env.E2E_LINK_IN_BIO!=='true','Uses an isolated synthetic admin harness.');
const tag=(revision='0')=>'"lib-draft:'+fixtureSiteId+':'+revision+'"';
test.beforeEach(async({context,page})=>{
 await context.addCookies([{name:'artlogic_admin_session',value:'synthetic-session',url:process.env.E2E_BASE_URL!},{name:'artlogic_csrf',value:'a'.repeat(43),url:process.env.E2E_BASE_URL!}]);
 await page.route('**/api/link-in-bio/**',async route=>{const url=new URL(route.request().url()),path=url.pathname,method=route.request().method();let body:unknown;
  if(path.endsWith('/capabilities'))body={schemaVersion:1,supported:true,enabled:true,schemaAvailable:true,workerAvailable:false,canEdit:true,canPublish:true,canConnect:false,canSync:false,canPurge:true,reasons:['worker_unavailable']};
  else if(path.endsWith('/accounts'))body={schemaVersion:1,items:[]};
  else if(path.endsWith('/draft'))body=method==='GET'?fixtureDraft():{...fixtureDraft(),revision:'1',configuration:route.request().postDataJSON()};
  else if(path.endsWith('/posts'))body={schemaVersion:1,items:fixturePosts(3).map(p=>({id:p.id,accountId:fixtureAccountId,kind:p.kind,postedAt:p.postedAt,captionExcerpt:p.captionExcerpt,image:null,sourceStatus:'available',draftTarget:null,publishedTarget:null,draftAltOverride:null,publishedAltOverride:null})),page:1,hasMore:false,draftRevision:'0'};
  else if(path.endsWith('/targets')){const type=url.searchParams.get('type'),q=url.searchParams.get('q')??'';body={schemaVersion:1,items:fixtureTargets(8).filter(t=>t.kind===type&&(!q||t.artist?.includes(q)||t.title.includes(q))),page:1,hasMore:false};}
  else if(path.endsWith('/target')||path.endsWith('/alt'))body={schemaVersion:1,revision:'1',updatedAt:fixtureNow};
  else if(path.endsWith('/preview'))body={schemaVersion:1,draftRevision:'0',locale:'fr',title:'Link in bio',description:'Les liens de la galerie',banners:[],items:fixturePosts(3),nextCursor:null,appearance:{available:false,colors:{background:'#ffffff',text:'#171a18',accent:'#305e46',border:'#d6dcd7'},typography:{headingFamily:'sans-serif',bodyFamily:'sans-serif'},fonts:[],warnings:['theme_unavailable']},warnings:[]};
  else if(path.endsWith('/publications'))body={schemaVersion:1,operationId:route.request().headers()['idempotency-key'],releaseId:fixtureReleaseId,sourceRevision:'0',publishedAt:fixtureNow};
  else return route.fulfill({status:404,json:{error:{code:'not_found',message:'Absent',requestId:fixtureSiteId,details:[]}}});
  return route.fulfill({json:body,headers:{ETag:tag(method==='PUT'?'1':'0')}});
 });
});
test('searches by type and artist, selects one destination and saves the independent alt',async({page})=>{
 await page.goto('/link-in-bio');await page.getByRole('button',{name:'Associer le post 1',exact:true}).click();
 await page.getByLabel('Rechercher par titre ou artiste').fill('Artiste 4');await expect(page.getByText('Artiste 4',{exact:true})).toBeVisible();
 const request=page.waitForRequest(r=>r.url().endsWith('/target')&&r.method()==='PUT');await page.getByRole('button',{name:'Choisir Contenu 4'}).click();expect((await request).postDataJSON()).toMatchObject({target:{type:'artwork'}});
 await expect(page.getByRole('dialog')).toHaveCount(0);await page.getByRole('button',{name:'Texte alternatif du post 1'}).click();await page.getByLabel('Texte alternatif (fr)').fill('Vue de l’objet');await page.getByRole('button',{name:'Enregistrer le texte alternatif'}).click();await expect(page.getByRole('dialog')).toHaveCount(0);
});
test('retains typed configuration after a conflict and does not retry silently',async({page})=>{
 let writes=0;await page.route('**/api/link-in-bio/draft',async route=>{if(route.request().method()==='GET')return route.fallback();writes++;return route.fulfill({status:412,json:{error:{code:'revision_conflict',message:'Version périmée',requestId:fixtureSiteId,details:[]}}});});
 await page.goto('/link-in-bio');await page.getByLabel('Titre (fr)').fill('Ma saisie conservée');await page.getByRole('button',{name:'Enregistrer le brouillon',exact:true}).click();await expect(page.getByRole('alert').filter({hasText:/autre session/}).first()).toBeVisible();await expect(page.getByLabel('Titre (fr)')).toHaveValue('Ma saisie conservée');expect(writes).toBe(1);
});
test('shows pending immediately, disables publishing, then confirms the receipt',async({page})=>{
 let release:()=>void=()=>{};const wait=new Promise<void>(resolve=>{release=resolve;});await page.route('**/api/link-in-bio/publications',async route=>{await wait;return route.fulfill({json:{schemaVersion:1,operationId:route.request().headers()['idempotency-key'],releaseId:fixtureReleaseId,sourceRevision:'0',publishedAt:fixtureNow}});});
 await page.goto('/link-in-bio');const publish=page.getByRole('button',{name:'Publier la page',exact:true});await publish.click();await expect(publish).toBeDisabled();await expect(page.getByTestId('publication-result')).toContainText('Publication en cours');release();await expect(page.getByTestId('publication-result')).toContainText('Publication confirmée');
});
test('renders a sandboxed inert preview, with an explicit unavailable-theme warning',async({page})=>{
 await page.goto('/link-in-bio');await page.getByRole('button',{name:'Voir l’aperçu',exact:true}).click();const frame=page.locator('iframe[title="Aperçu Link in bio"]');await expect(frame).toBeVisible();expect(await frame.getAttribute('sandbox')).toBe('');await expect(page.getByText(/thème publié.*indisponible/i)).toBeVisible();await expect(frame.contentFrame().locator('a,button,script')).toHaveCount(0);
});
test('recovers an uncertain publication after a reload without sending a new intention',async({page})=>{
 let writes=0,key='';await page.route('**/api/link-in-bio/publications',async route=>{writes++;key=route.request().headers()['idempotency-key']!;return route.fulfill({status:503,json:{error:{code:'dependency_unavailable',message:'Réponse perdue',requestId:fixtureSiteId,details:[]}}});});
 await page.route('**/api/link-in-bio/publications/*',route=>route.fulfill({json:{schemaVersion:1,operationId:key,releaseId:fixtureReleaseId,sourceRevision:'0',publishedAt:fixtureNow}}));
 await page.goto('/link-in-bio');await page.getByRole('button',{name:'Publier la page',exact:true}).click();await expect(page.getByRole('button',{name:'Rechercher le reçu'})).toBeVisible();await page.reload();await expect(page.getByRole('button',{name:'Publier la page',exact:true})).toBeDisabled();await page.getByRole('button',{name:'Rechercher le reçu'}).click();await expect(page.getByTestId('publication-result')).toContainText('Le reçu a été retrouvé');expect(writes).toBe(1);
});

test('supports keyboard selection dialogs and restores focus without submitting on Escape',async({page})=>{await page.goto('/link-in-bio');const trigger=page.getByRole('button',{name:'Associer le post 1',exact:true});await trigger.focus();await page.keyboard.press('Enter');await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Tab');expect(await page.getByRole('dialog').evaluate(node=>node.contains(document.activeElement))).toBe(true);await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);await expect(trigger).toBeFocused();});
