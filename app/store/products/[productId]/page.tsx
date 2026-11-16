import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {ProductEditor} from '@/components/commerce/ProductEditor';
import {commerceServerRequest} from '@/lib/commerce/api';
import {configuredLocalePolicy,loadConfig} from '@/lib/config/env';
import {requiredSession} from '@/lib/bff/sync-runs';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({params}:{params:Promise<{productId:string}>}){return <CommerceAdminPage path="/store/products" render={async({csrfCookie})=>{
 const {productId}=await params,{data}=await commerceServerRequest<components['schemas']['CommerceProductAdmin']>('GET',['products',productId],{session:await requiredSession()});return <ProductEditor initial={data} csrfCookie={csrfCookie} locales={configuredLocalePolicy(loadConfig()).locales.map(l=>l.code)}/>;
 }}/>;}
