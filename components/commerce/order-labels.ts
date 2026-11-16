export const fulfillmentLabels={confirmed:'Commande confirmée',processing:'Commande en traitement',shipped:'Commande expédiée',delivered:'Commande livrée'};
export const financialLabels={paid:'Payée',partially_refunded:'Partiellement remboursée',refunded:'Remboursée'};
export const money=(cents:number)=>new Intl.NumberFormat('fr',{style:'currency',currency:'EUR'}).format(cents/100);
export const orderDate=(date:string)=>new Intl.DateTimeFormat('fr',{dateStyle:'medium',timeStyle:'short'}).format(new Date(date));
/** Decimal euros are parsed exactly, without floating point rounding. */
export function euroCents(value:FormDataEntryValue|null){const text=String(value??'').trim().replace(',','.');if(!/^\d{1,6}(\.\d{1,2})?$/.test(text))throw new Error('Montant invalide');const [whole,decimal='']=text.split('.');return Number(whole)*100+Number(decimal.padEnd(2,'0'));}
