import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {Alert} from '@mui/material';
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {DeliverySettings} from '@/components/commerce/DeliverySettings';
import {commerceServerRequest} from '@/lib/commerce/api';
import {BffError} from '@/lib/bff/client';
import {requiredSession} from '@/lib/bff/sync-runs';

import type {components} from '@/lib/commerce/contract-types.generated';
type S=components['schemas'];
export default function Page(){return <CommerceAdminPage path="/store/delivery" render={async({csrfCookie})=>{
 const session=await requiredSession();const capability=await commerceServerRequest<S['CommerceDeliveryCapabilities']>('GET',['delivery-capabilities'],{session}).then(r=>r.data).catch(e=>{if(e instanceof BffError&&e.status===404)return null;throw e;});
 if(!capability?.supported)return <Alert severity="info">Cette version de l’API ne propose pas encore la gestion des méthodes de livraison. Les réglages de livraison existants restent accessibles dans Paramètres.</Alert>;
 const [methods,pickup]=await Promise.all([commerceServerRequest<S['CommerceDeliveryMethods']>('GET',['delivery-methods'],{session}),commerceServerRequest<S['CommercePickupSettings']>('GET',['pickup'],{session})]);
 return <DeliverySettings initial={methods.data} initialPickup={pickup.data} defaults={capability.calendarDefaults} enabled={capability.enabled} csrfCookie={csrfCookie} locales={(await readAdminLanguagePolicy()).locales.map(l=>l.code)}/>;
 }}/>;}
