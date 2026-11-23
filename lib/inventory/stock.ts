import type {components} from "./contract-types.generated";
import type {InventoryMessageKey} from "./messages";
export type InventoryUnit=components["schemas"]["InventoryUnitLogistics"];
export type InventoryLogisticsOperation=components["schemas"]["InventoryLogisticsOperation"];
export type InventoryUnitFinance=components["schemas"]["InventoryUnitFinance"];
export type InventoryExpense=components["schemas"]["InventoryExpense"];
export type InventoryMoney=components["schemas"]["InventoryMoney"];
export type LogisticsReferenceKind="party"|"location";
export interface LogisticsReference{kind:LogisticsReferenceKind;id:string;fields:Record<string,unknown>;revision:string}
export const logisticsPaths={party:"parties",location:"locations"} as const;
export const commercialLabels:Record<InventoryUnit["commercialState"],InventoryMessageKey>={unqualified:"stockUnqualified",available:"stockAvailable",reserved:"stockReserved",sold:"stockSold"};
export const custodyLabels:Record<InventoryUnit["custodyState"],InventoryMessageKey>={unknown:"stockCustodyUnknown",held:"stockHeld",loaned_out:"stockLoaned",deposited_out:"stockDeposited",returned_to_owner:"stockReturnedOwner"};
export const operationLabels:Record<InventoryLogisticsOperation["kind"],InventoryMessageKey>={reservation:"stockReservation",movement:"stockMovement",loan:"stockLoanKind",return:"stockReturnKind",correction:"stockCorrection",deposit_in:"stockDepositIn",deposit_out:"stockDepositOut"};
export const operationStatusLabels:Record<InventoryLogisticsOperation["status"],InventoryMessageKey>={draft:"stockDraft",active:"stockActive",completed:"stockCompleted",cancelled:"stockCancelled"};
export function localInventoryDateTime(date=new Date()){const adjusted=new Date(date.getTime()-date.getTimezoneOffset()*60000);return adjusted.toISOString().slice(0,16);}
/** Decimal entry never passes through a floating-point monetary value. */
export function parseInventoryMoney(text:string,currency:string,scale:number):InventoryMoney|null{
 const match=/^(\d+)(?:[.,](\d*))?$/.exec(text.trim());if(!match||!Number.isInteger(scale)||scale<0||scale>8||! /^[A-Z]{3}$/.test(currency)||(match[2]?.length??0)>scale)return null;
 const minor=BigInt(match[1]!+(match[2]??"").padEnd(scale,"0")).toString();return minor.length<=38?{minor,currency,scale}:null;
}
export function inventoryMoneyInput(amount:InventoryMoney|null){if(!amount)return "";const digits=amount.minor.padStart(amount.scale+1,"0");return amount.scale?digits.slice(0,-amount.scale)+"."+digits.slice(-amount.scale):digits;}
export function formatInventoryMoney(amount:InventoryMoney,locale="fr-FR"){const digits=amount.minor.padStart(amount.scale+1,"0"),whole=amount.scale?digits.slice(0,-amount.scale):digits,fraction=amount.scale?digits.slice(-amount.scale):"",separator=locale.startsWith("fr")?",":".";return BigInt(whole).toLocaleString(locale)+(fraction?separator+fraction:"")+" "+amount.currency;}
export function inventoryUnitReferences(unit:InventoryUnit,operations:readonly InventoryLogisticsOperation[]){const refs=new Map<string,{kind:LogisticsReferenceKind;id:string}>(),add=(kind:LogisticsReferenceKind,id:string|null)=>{if(id)refs.set(kind+":"+id,{kind,id});};add("party",unit.ownerPartyId);add("location",unit.locationId);for(const op of operations){add("party",op.partyId);add("location",op.fromLocationId);add("location",op.toLocationId);}return [...refs.values()];}
