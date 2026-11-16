import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {LegalDocumentEditor} from '@/components/commerce/LegalDocumentEditor';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';
import {configuredLocalePolicy,loadConfig} from '@/lib/config/env';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({searchParams}:{searchParams:Promise<{cursor?:string}>}){return <CommerceAdminPage path="/store/documents" render={async context=>{const {cursor}=await searchParams,{data}=await commerceServerRequest<components['schemas']['CommerceLegalDocumentPage']>('GET',['documents'],{session:await requiredSession(),query:new URLSearchParams(cursor?{cursor}:{})}),policy=configuredLocalePolicy(loadConfig());return <LegalDocumentEditor initial={data} locales={policy.locales.map(l=>l.code)} csrfCookie={context.csrfCookie}/>;}}/>;}
