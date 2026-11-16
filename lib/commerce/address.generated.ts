// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
import {DomainError} from './rule-error.generated';
import type {components} from './contract-types.generated';
type Address=components['schemas']['CommerceAddress'];
import {commerceRules} from './rules.generated';
import {hasCommerceControls} from './policy.generated';

export interface CountryAddressRule {postalCodeRequired:boolean;regionRequired:boolean}
export type CountryAddressRules=Readonly<Record<string,CountryAddressRule>>;
/** Country requirements are seller configuration, never inferred from locale or a French postcode pattern. */
export function validateAddress(input:Address,rules:CountryAddressRules,options:{path?:string;phoneRequired?:boolean}={}):Address{
 const path=options.path??'address',issues:{path:string;code:string}[]=[];
 const values:Record<string,string>={};
 const limits={...commerceRules.addressLimits,phone:40,country:2};
 for(const key of ['fullName','line1','line2','locality','region','postalCode','country','phone'] as const){
  const raw=input?.[key];
  if(raw!==undefined&&typeof raw!=='string'){issues.push({path:path+'.'+key,code:'invalid'});continue;}
  if(raw===undefined)continue;
  const value=raw.normalize('NFC').trim();values[key]=value;
  if(value.length>limits[key]||hasCommerceControls(value))issues.push({path:path+'.'+key,code:'invalid'});
 }
 const country=values.country??'';
 if(!/^[A-Z]{2}$/.test(country))issues.push({path:path+'.country',code:'invalid'});
 if(issues.length)throw new DomainError('validation_failed',{issues});
 const rule=rules[country];if(!rule)throw new DomainError('destination_unavailable',{issues:[{path:path+'.country',code:'unsupported'}]});
 const required=['fullName','line1','locality',...(rule.postalCodeRequired?['postalCode']:[]),...(rule.regionRequired?['region']:[]),...(options.phoneRequired?['phone']:[])];
 for(const key of required)if(!values[key])issues.push({path:path+'.'+key,code:'required'});
 if(issues.length)throw new DomainError('validation_failed',{issues});
 return values as unknown as Address;
}
export function checkoutAddresses(shipping:Address,same:boolean,billing:Address|undefined,rules:CountryAddressRules,phoneRequired:boolean){
 const validated=validateAddress(shipping,rules,{path:'shippingAddress',phoneRequired});
 if(!phoneRequired)delete validated.phone;
 if(same)return {shipping:validated,billing:{...validated}};
 if(!billing)throw new DomainError('validation_failed',{issues:[{path:'billingAddress',code:'required'}]});
 const validatedBilling=validateAddress(billing,rules,{path:'billingAddress'});delete validatedBilling.phone;
 return {shipping:validated,billing:validatedBilling};
}
export function normalizeCommerceEmail(input:string){
 const email=typeof input==='string'?input.normalize('NFC').trim().toLowerCase():'';
 if(email.length>commerceRules.addressLimits.email||!/^\S+@[^\s@]+\.[^\s@]+$/u.test(email)||hasCommerceControls(email))throw new DomainError('validation_failed',{issues:[{path:'email',code:'invalid'}]});
 return email;
}
