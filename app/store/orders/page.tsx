import Link from 'next/link';
import {Stack,Typography,Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {financialLabels,fulfillmentLabels,money,orderDate} from '@/components/commerce/order-labels';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|undefined>>}){return <CommerceAdminPage path="/store/orders" render={async()=>{
 const search=await searchParams,query=new URLSearchParams();for(const key of ['cursor','query','fulfillmentStatus','financialStatus'])if(search[key])query.set(key,search[key]!);
 const {data}=await commerceServerRequest<components['schemas']['CommerceOrderSummaryPage']>('GET',['orders'],{session:await requiredSession(),query});
 return <Stack spacing={3}><Typography component="h1" variant="h1">Commandes</Typography>
 <form method="get"><Stack direction={{xs:'column',sm:'row'}} spacing={2} useFlexGap sx={{flexWrap:"wrap"}}><label>Référence ou e-mail <input name="query" maxLength={254} defaultValue={search.query??''}/></label><label>Traitement <select name="fulfillmentStatus" defaultValue={search.fulfillmentStatus??''}><option value="">Tous</option>{Object.entries(fulfillmentLabels).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label><label>Paiement <select name="financialStatus" defaultValue={search.financialStatus??''}><option value="">Tous</option>{Object.entries(financialLabels).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label><button type="submit">Filtrer</button></Stack></form>
 <div style={{overflowX:'auto'}}><Table aria-label="Commandes du Store"><TableHead><TableRow>{['Commande','Date','Traitement','Paiement','Total','Attention'].map(t=><TableCell key={t}>{t}</TableCell>)}</TableRow></TableHead><TableBody>{data.items.map(o=><TableRow key={o.id}><TableCell><Link href={'/store/orders/'+o.id} prefetch={false}>{o.orderNumber}</Link></TableCell><TableCell>{orderDate(o.createdAt)}</TableCell><TableCell>{o.fulfillmentStatus?fulfillmentLabels[o.fulfillmentStatus]:'Stock en vérification'}</TableCell><TableCell>{financialLabels[o.financialStatus]}</TableCell><TableCell>{money(o.totalGross)}</TableCell><TableCell>{[o.paidUnfulfillable&&'Stock à affecter',o.financialUncertain&&'État financier à vérifier',o.hasDispute&&'Litige'].filter(Boolean).join(' · ')||'Aucune'}</TableCell></TableRow>)}</TableBody></Table></div>
 {!data.items.length&&<p>Aucune commande dans cette sélection.</p>}{data.nextCursor&&<Link href={'/store/orders?'+new URLSearchParams({...Object.fromEntries(query),cursor:data.nextCursor})} prefetch={false}>Commandes suivantes</Link>}</Stack>;
 }}/>;}
