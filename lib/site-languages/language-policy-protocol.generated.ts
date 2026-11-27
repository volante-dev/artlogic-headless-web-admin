// Generated from feature038. Independent of all legacy contract fingerprints.
import type {components} from '../bff/language-contract.generated';
export type PublicLanguagePolicy=components['schemas']['PublicPolicy'];
export class LanguagePolicyProtocolError extends Error {constructor(){super('invalid_language_policy');}}
const code=/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/;
const revision=/^[1-9][0-9]{0,18}$/;
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function record(v:unknown):v is Record<string,unknown>{return v!==null&&typeof v==='object'&&!Array.isArray(v);}
function keys(v:Record<string,unknown>,allowed:string[]){return Object.keys(v).length===allowed.length&&Object.keys(v).every(k=>allowed.includes(k));}
function text(v:unknown,max:number){return typeof v==='string'&&v.length>0&&Array.from(v).length<=max&&!Array.from(v).some(c=>c.charCodeAt(0)<32||c.charCodeAt(0)===127);}
function locale(v:unknown):v is string{return typeof v==='string'&&v.length<=35&&code.test(v);}
export function decodeLanguagePolicy(value:unknown,siteId:string):PublicLanguagePolicy{
 const fail=()=>{throw new LanguagePolicyProtocolError();};
 if(!record(value)||!keys(value,['contractVersion','siteId','mode','publicRevision','defaultLocale','locales','retiredCodes','catalogueId','issuedAt','validUntil']))return fail();
 if(value.contractVersion!==1||value.siteId!==siteId||!uuid.test(siteId)||!['bootstrap','managed'].includes(String(value.mode))||typeof value.publicRevision!=='string'||!revision.test(value.publicRevision)||!locale(value.defaultLocale)||!text(value.catalogueId,160))return fail();
 if(!Array.isArray(value.locales)||value.locales.length<1||value.locales.length>8||!Array.isArray(value.retiredCodes))return fail();
 const seen=new Set<string>();
 for(const l of value.locales){
  if(!record(l)||!keys(l,['code','intlLocale','label','direction'])||!locale(l.code)||!text(l.intlLocale,35)||!text(l.label,80)||!['ltr','rtl'].includes(String(l.direction))||seen.has(l.code))return fail();
  try{if(Intl.getCanonicalLocales(l.code)[0]!==l.intlLocale)return fail();}catch{return fail();}
  seen.add(l.code);
 }
 if(!seen.has(value.defaultLocale))return fail();
 for(const retired of value.retiredCodes){if(!locale(retired)||seen.has(retired))return fail();seen.add(retired);}
 const issued=typeof value.issuedAt==='string'?Date.parse(value.issuedAt):NaN,until=typeof value.validUntil==='string'?Date.parse(value.validUntil):NaN;
 if(!Number.isFinite(issued)||!Number.isFinite(until)||until<=issued||until-issued>30000)return fail();
 const cloned=structuredClone(value) as unknown as PublicLanguagePolicy;
 for(const l of cloned.locales)Object.freeze(l);Object.freeze(cloned.locales);Object.freeze(cloned.retiredCodes);return Object.freeze(cloned);
}
/** Never rely on the visitor's wall clock. Date/Age and elapsed monotonic time bound freshness. */
export function languageLeaseRemaining(policy:PublicLanguagePolicy,headers:Pick<Headers,'get'>,elapsedMs=0):number{
 const date=Date.parse(headers.get('date')??''),rawAge=headers.get('age')??'0';
 if(!Number.isFinite(date)||!/^\d{1,9}$/.test(rawAge)||!Number.isFinite(elapsedMs)||elapsedMs<0)throw new LanguagePolicyProtocolError();
 const issued=Date.parse(policy.issuedAt),until=Date.parse(policy.validUntil);
 if(issued>date+1000)throw new LanguagePolicyProtocolError();
 // HTTP Age has one-second granularity; expire conservatively rather than rearming a lease.
 return Math.max(0,Math.min(30000,until-Math.max(date,issued)-Number(rawAge)*1000-1000-elapsedMs));
}
export class LanguagePolicyLeaseCache {
 private readonly entries=new Map<string,{policy:PublicLanguagePolicy;receivedAt:number;remaining:number}>();
 constructor(private readonly monotonic:()=>number=()=>performance.now()){}
 get(key:string){const e=this.entries.get(key);if(!e)return null;const elapsed=this.monotonic()-e.receivedAt,remaining=e.remaining-elapsed;if(elapsed>=5000||elapsed<0||remaining<=0){this.entries.delete(key);return null;}return {policy:e.policy,remainingMs:remaining};}
 set(key:string,policy:PublicLanguagePolicy,remainingMs:number){if(remainingMs<=0||remainingMs>30000)throw new LanguagePolicyProtocolError();if(this.entries.size>=16&&!this.entries.has(key))this.entries.delete(this.entries.keys().next().value!);this.entries.set(key,{policy,receivedAt:this.monotonic(),remaining:remainingMs});}
 invalidate(key:string){this.entries.delete(key);}
}
