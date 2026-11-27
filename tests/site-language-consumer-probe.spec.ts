import {test,expect} from '@playwright/test';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {resolve} from 'node:path';
function validEnvironment():Record<string,string>{return JSON.parse(execFileSync(process.execPath,['--import','tsx','--input-type=module','-e',"import {validEnvironment} from './tests/helpers/config.ts';process.stdout.write(JSON.stringify(validEnvironment()));"],{cwd:resolve(process.cwd(),'../backend'),encoding:'utf8'}));}
import {runtimeMessageInitialValues} from '../../artlogic-frontend/lib/i18n/runtime-initials.generated';
import {runtimeMessageCatalogueId} from '../lib/site-languages/message-definitions.generated';
import {GET} from '../app/api/internal/languages/ready/route';
const key='LOCAL_SYNTHETIC_PROBE_KEY_ONLY_FOR_038',slotId=randomUUID(),initialEnvironment={...process.env},originalFetch=globalThis.fetch,calls:{url:string;headers:Headers}[]=[];
let wrongRevision=false;
test.beforeAll(()=>{Object.assign(process.env,validEnvironment(),{RENDER:'',VERCEL_DEPLOYMENT_ID:'',E2E_LANGUAGES_DEPLOYMENT_ID:'admin-probe',SITE_LANGUAGES_RUNTIME_REQUIRED:'true',SITE_LANGUAGES_CONSUMER_SLOT_ID:slotId,SITE_LANGUAGES_PROBE_KEY:key});});
test.afterAll(()=>{for(const key of Object.keys(process.env))if(!(key in initialEnvironment))delete process.env[key];Object.assign(process.env,initialEnvironment);});
test.beforeEach(()=>{calls.length=0;wrongRevision=false;globalThis.fetch=async(input,init)=>{
 const url=String(input),headers=new Headers(init?.headers);calls.push({url,headers});const at=Date.now(),policy={contractVersion:1,siteId:process.env.SITE_ID,mode:'bootstrap',publicRevision:'1',defaultLocale:'fr',locales:[{code:'fr',intlLocale:'fr',label:'Français',direction:'ltr'},{code:'en',intlLocale:'en',label:'English',direction:'ltr'}],retiredCodes:[],catalogueId:runtimeMessageCatalogueId,issuedAt:new Date(at).toISOString(),validUntil:new Date(at+30000).toISOString()};
 if(url.endsWith('/api/languages/policy'))return Response.json(policy,{headers:{Date:new Date(at).toUTCString()}});
 if(url.includes('/v1/public/languages/content?'))return Response.json({contractVersion:1,contentRevision:'1',locale:'fr',selectedCatalogueId:runtimeMessageCatalogueId,policy:{...policy,publicRevision:wrongRevision?'2':'1'},messages:runtimeMessageInitialValues.fr,logo:null,whiteLogo:null,legalPage:null});
 throw Error('Unexpected external request in the local probe test');
};});
test.afterEach(()=>{globalThis.fetch=originalFetch;});
const request=(suffix='')=>new Request('https://admin.example.test/api/internal/languages/ready?challengeId='+randomUUID()+suffix,{headers:{'x-site-languages-probe-key':key,'x-site-languages-probe-expires-at':new Date(Date.now()+8000).toISOString()}});
test('US3 admin probe reads anonymous runtime policy and content without an SSO session',async()=>{const response=await GET(request()),body=await response.json();expect(response.status).toBe(200);expect(body).toMatchObject({siteId:process.env.SITE_ID,slotId,deploymentId:'local:admin-probe',runtimeRequired:true,observedPublicRevision:'1'});expect(body.modules).toContain('core');expect(calls).toHaveLength(2);for(const call of calls){expect(call.headers.has('cookie')).toBe(false);expect(call.headers.has('x-admin-session')).toBe(false);expect(call.headers.has('x-site-languages-probe-key')).toBe(false);}expect(response.headers.get('cache-control')).toBe('private, no-store');expect(JSON.stringify(body)).not.toContain(key);});
test('US3 admin probe rejects a cookie-only request and a forged slot before fetching',async()=>{expect((await GET(new Request('https://admin.example.test/api/internal/languages/ready?challengeId='+randomUUID(),{headers:{cookie:'session=synthetic'}}))).status).toBe(401);expect((await GET(request('&slotId='+randomUUID()))).status).toBe(400);expect(calls).toHaveLength(0);});
test('US3 admin probe never confirms a changed publication as the observed revision',async()=>{wrongRevision=true;expect((await GET(request())).status).toBe(503);});
