import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {ProductEditor} from '@/components/commerce/ProductEditor';

export default function Page(){return <CommerceAdminPage path="/store/products/new" render={async({csrfCookie})=><ProductEditor initial={null} csrfCookie={csrfCookie} locales={(await readAdminLanguagePolicy()).locales.map(l=>l.code)}/>}/>;}
