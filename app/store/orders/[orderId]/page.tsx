import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {OrderDetail} from '@/components/commerce/OrderDetail';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({params}:{params:Promise<{orderId:string}>}){return <CommerceAdminPage path="/store/orders" render={async context=>{const {orderId}=await params,{data}=await commerceServerRequest<components['schemas']['CommerceAdminOrder']>('GET',['orders',orderId],{session:await requiredSession()});return <OrderDetail initial={data} csrfCookie={context.csrfCookie}/>;}}/>;}
