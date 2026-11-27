import 'server-only';
import {readAdminLanguagePolicy} from './site-language-policy';
import {nativeEditorLanguageHeaders} from '../site-languages/business-contract';
/** Only trusted server policy can opt a native editor into the runtime contract. */
export function adminLanguageBusinessHeaders(path:string,session?:string){return nativeEditorLanguageHeaders(path,session,readAdminLanguagePolicy);}
