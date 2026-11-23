import {inventoryMessages} from "./messages.generated";
export type InventoryMessageKey=typeof inventoryMessages.messages[number]["key"] extends `inventory.${infer Key}`?Key:never;
const messages=new Map<string,Readonly<Record<string,string>>>(inventoryMessages.messages.map(message=>[message.key,message.initial]));
/** Admin chrome keeps its existing French voice; callers can select another registered UI locale. */
export function inventoryText(key:InventoryMessageKey,values:Record<string,string|number>={},locale="fr"){
 const translations=messages.get("inventory."+key)!,text=translations[locale]??translations.fr??translations.en!;return text.replace(/\{(\w+)\}/g,(match,name)=>values[name]===undefined?match:String(values[name]));
}
