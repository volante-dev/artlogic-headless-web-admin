import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {WithdrawalDetail} from '@/components/commerce/WithdrawalDetail';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({params}:{params:Promise<{id:string}>}){return <CommerceAdminPage path="/store/withdrawals" render={async context=>{const {id}=await params,{data}=await commerceServerRequest<components['schemas']['CommerceWithdrawalAdmin']>('GET',['withdrawals',id],{session:await requiredSession()});return <WithdrawalDetail initial={data} csrfCookie={context.csrfCookie}/>;}}/>;}
