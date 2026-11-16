import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {ProductEditor} from '@/components/commerce/ProductEditor';
import {configuredLocalePolicy,loadConfig} from '@/lib/config/env';
export default function Page(){return <CommerceAdminPage path="/store/products/new" render={async({csrfCookie})=><ProductEditor initial={null} csrfCookie={csrfCookie} locales={configuredLocalePolicy(loadConfig()).locales.map(l=>l.code)}/>}/>;}
