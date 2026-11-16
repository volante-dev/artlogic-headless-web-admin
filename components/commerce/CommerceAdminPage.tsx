import {Suspense} from 'react';
import Link from 'next/link';
import {Alert,Stack} from '@mui/material';
import {AuthorizedPage} from '../AuthorizedPage';
import {loadConfig} from '@/lib/config/env';
export function CommerceAdminPage({path,render}:{path:string;render:(context:{csrfCookie:string})=>Promise<React.ReactNode>}){return <Suspense fallback={<p role="status">Chargement du Store…</p>}><AuthorizedPage loginNext={path} render={async context=><Stack spacing={3}>
 <nav aria-label="Gestion du Store" style={{display:'flex',gap:20,flexWrap:'wrap'}}>{[['products','Produits et stock'],['orders','Commandes'],['settings','Paramètres'],['documents','Documents'],['incidents','Incidents'],['withdrawals','Rétractations']].map(([route,label])=><Link key={route} href={'/store/'+route} prefetch={false}>{label}</Link>)}</nav>
 {loadConfig().COMMERCE_ENABLED!=='true'&&<Alert severity="info">Les nouvelles ventes sont désactivées. Les réglages et l’historique restent accessibles.</Alert>}
 {await render(context)}
 </Stack>}/></Suspense>;}
