// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
import {ensure} from './rule-error.generated';
import {requireAmount} from './policy.generated';
import {commerceRules} from './rules.generated';
type MoneyBreakdown=components['schemas']['CommerceMoneyBreakdown'];
import type {components} from './contract-types.generated';
export interface ChargeLimits {minimum:number;maximum:number}
export function requireCharge(amount:number,limits:ChargeLimits={minimum:commerceRules.minimumCharge,maximum:commerceRules.maximumCharge}){
 requireAmount(limits.minimum,commerceRules.minimumCharge);requireAmount(limits.maximum,limits.minimum);
 return requireAmount(amount,limits.minimum,limits.maximum);
}
export function includedTax(gross:number,rateBps:number){
 requireAmount(gross);requireAmount(rateBps,0,10000);
 const numerator=BigInt(gross)*BigInt(rateBps),denominator=BigInt(10000)+BigInt(rateBps);
 return Number((numerator*BigInt(2)+denominator)/(BigInt(2)*denominator));
}
/** Largest remainders; stable input order breaks equal remainders. No floating-point money. */
export function allocateLargestRemainders(amount:number,weights:readonly number[]):number[]{
 requireAmount(amount);ensure(weights.length>0&&weights.length<=50,'amount_out_of_range');weights.forEach(w=>requireAmount(w));
 const total=weights.reduce((a,w)=>a+BigInt(w),BigInt(0));ensure(total>BigInt(0),'amount_out_of_range');
 const parts=weights.map((weight,index)=>{const n=BigInt(amount)*BigInt(weight);return {index,value:Number(n/total),remainder:n%total};});
 const missing=amount-parts.reduce((a,p)=>a+p.value,0);
 const ranked=[...parts].sort((a,b)=>a.remainder===b.remainder?a.index-b.index:a.remainder>b.remainder?-1:1);
 for(let i=0;i<missing;i++)ranked[i]!.value++;
 return parts.map(p=>p.value);
}
export function calculateAmounts(lines:readonly {gross:number;rateBps:number;taxCategory:string;exemptionReason?:string}[],shippingGross:number,limits?:ChargeLimits):{amounts:MoneyBreakdown;shippingTaxLines:components['schemas']['CommerceTaxLine'][]}{
 ensure(lines.length>0&&lines.length<=50,'amount_out_of_range');requireAmount(shippingGross);
 const groups=new Map<string,{gross:number;rateBps:number;category:string;exemptionReason?:string}>();
 let itemsGross=0,itemsTax=0;
 for(const line of lines){requireAmount(line.gross,1);itemsGross=requireAmount(itemsGross+line.gross);itemsTax+=includedTax(line.gross,line.rateBps);
  const key=line.taxCategory+':'+line.rateBps,old=groups.get(key);
  groups.set(key,{gross:(old?.gross??0)+line.gross,rateBps:line.rateBps,category:line.taxCategory,...(line.exemptionReason?{exemptionReason:line.exemptionReason}:{})});
 }
 const sorted=[...groups.values()].sort((a,b)=>a.category<b.category?-1:a.category>b.category?1:a.rateBps-b.rateBps);
 const shares=allocateLargestRemainders(shippingGross,sorted.map(g=>g.gross));
 const shippingTaxLines=sorted.map((g,i)=>{const gross=shares[i]!,tax=includedTax(gross,g.rateBps);return {category:g.category,rateBps:g.rateBps,gross,net:gross-tax,tax,...(g.exemptionReason?{exemptionReason:g.exemptionReason}:{})};});
 const shippingTax=shippingTaxLines.reduce((a,l)=>a+l.tax,0),totalGross=requireCharge(itemsGross+shippingGross,limits);
 return {amounts:{currency:'EUR',itemsGross,itemsNet:itemsGross-itemsTax,itemsTax,shippingGross,shippingNet:shippingGross-shippingTax,shippingTax,totalGross},shippingTaxLines};
}
