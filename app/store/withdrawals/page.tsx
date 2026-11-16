import Link from 'next/link';
import {Typography,Stack} from '@mui/material';
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';
import {orderDate} from '@/components/commerce/order-labels';
import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({searchParams}:{searchParams:Promise<{cursor?:string}>}){return <CommerceAdminPage path="/store/withdrawals" render={async()=>{const {cursor}=await searchParams,{data}=await commerceServerRequest<components['schemas']['CommerceWithdrawalAdminPage']>('GET',['withdrawals'],{session:await requiredSession(),query:new URLSearchParams(cursor?{cursor}:{})});return <Stack spacing={3}><Typography component="h1" variant="h1">Rétractations</Typography><p>Une déclaration n’est ni un retour physique ni un remboursement. Les dépôts identiques sont regroupés dans un dossier ; chaque dépôt conserve son propre reçu.</p><ul>{data.items.map(d=><li key={d.id}><Link href={'/store/withdrawals/'+d.id} prefetch={false}>{d.fullName} · {orderDate(d.receivedAt)} · {{received:'Reçue',reviewing:'En cours d’examen',resolved:'Traitée'}[d.status]}</Link></li>)}</ul>{!data.items.length&&<p>Aucune demande dans cette sélection.</p>}{data.nextCursor&&<Link href={'/store/withdrawals?'+new URLSearchParams({cursor:data.nextCursor})} prefetch={false}>Demandes suivantes</Link>}</Stack>;}}/>;}
