import {Suspense} from 'react';
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {ShippingTaxSettings} from '@/components/commerce/ShippingTaxSettings';
import {commerceServerRequest} from '@/lib/commerce/api';
import type {components} from '@/lib/commerce/contract-types.generated';
import {requiredSession} from '@/lib/bff/sync-runs';
import {BffError} from '@/lib/bff/client';
import {configuredLocalePolicy,loadConfig} from '@/lib/config/env';
type S=components['schemas'];
export default function Page(){return <Suspense fallback={<div aria-busy="true" aria-label="Paramètres Store"/>}><CommerceAdminPage path="/store/settings" render={async({csrfCookie})=>{
 const session=await requiredSession();
 const [settings,zones,taxes]=await Promise.all([
  commerceServerRequest<S['CommerceSettings']>('GET',['settings'],{session}).then(r=>r.data).catch(e=>{if(e instanceof BffError&&e.status===404)return null;throw e;}),
  commerceServerRequest<S['CommerceShippingZones']>('GET',['shipping-zones'],{session}).then(r=>r.data),
  commerceServerRequest<S['CommerceTaxRules']>('GET',['tax-rules'],{session}).then(r=>r.data),
 ]);
 const config=loadConfig();return <ShippingTaxSettings initialSettings={settings} initialZones={zones} initialTaxes={taxes} csrfCookie={csrfCookie} enabled={settings?.enabled??config.COMMERCE_ENABLED==='true'} locales={configuredLocalePolicy(config).locales.map(l=>l.code)}/>;
 }}/></Suspense>;}
