import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {ProductEditor} from '@/components/commerce/ProductEditor';
import {commerceServerRequest} from '@/lib/commerce/api';

import {requiredSession} from '@/lib/bff/sync-runs';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({params}:{params:Promise<{productId:string}>}){return <CommerceAdminPage path="/store/products" render={async({csrfCookie})=>{
 const {productId}=await params,{data}=await commerceServerRequest<components['schemas']['CommerceProductAdmin']>('GET',['products',productId],{session:await requiredSession()});return <ProductEditor initial={data} csrfCookie={csrfCookie} locales={(await readAdminLanguagePolicy()).locales.map(l=>l.code)}/>;
 }}/>;}
