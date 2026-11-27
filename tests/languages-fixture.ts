import type {BrowserContext} from '@playwright/test';
import {readFile} from 'node:fs/promises';
export async function languageFixture(context:BrowserContext){
 const file=process.env.E2E_LANGUAGES_FIXTURE;if(!file)throw new Error('Start the local site language harness.');
 const value=JSON.parse(await readFile(file,'utf8')) as {adminOrigin:string;siteOrigin:string;previewOrigin?:string;consumerCount?:number;session:{sessionToken:string;csrfToken:string}};
 if(!['127.0.0.1','localhost'].includes(new URL(value.adminOrigin).hostname))throw new Error('Only the local language harness is allowed.');
 await context.addCookies([{name:'artlogic_admin_session',value:value.session.sessionToken,url:value.adminOrigin,httpOnly:true,sameSite:'Lax'},{name:'artlogic_csrf',value:value.session.csrfToken,url:value.adminOrigin,sameSite:'Strict'}]);return value;
}
