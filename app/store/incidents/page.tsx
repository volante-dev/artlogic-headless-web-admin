import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {OrderIncidents} from '@/components/commerce/OrderIncidents';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({searchParams}:{searchParams:Promise<{cursor?:string}>}){return <CommerceAdminPage path="/store/incidents" render={async context=>{const search=await searchParams,query=new URLSearchParams();if(search.cursor)query.set('cursor',search.cursor);const {data}=await commerceServerRequest<components['schemas']['CommerceIncidentPage']>('GET',['incidents'],{session:await requiredSession(),query});return <OrderIncidents initial={data} csrfCookie={context.csrfCookie}/>;}}/>;}
