import {readAdminLanguagePolicy} from "@/lib/bff/site-language-policy";
import Link from 'next/link';
import {Typography,Stack,Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';
import {CommerceAdminPage} from '@/components/commerce/CommerceAdminPage';
import {commerceServerRequest} from '@/lib/commerce/api';
import {requiredSession} from '@/lib/bff/sync-runs';

import type {components} from '@/lib/commerce/contract-types.generated';
export default function Page({searchParams}:{searchParams:Promise<Record<string,string|undefined>>}){return <CommerceAdminPage path="/store/products" render={async()=>{
 const search=await searchParams,query=new URLSearchParams();for(const key of ['cursor','status','kind'])if(search[key])query.set(key,search[key]!);
 const {data}=await commerceServerRequest<components['schemas']['CommerceProductAdminPage']>('GET',['products'],{session:await requiredSession(),query}),locale=(await readAdminLanguagePolicy()).defaultLocale;
 return <Stack spacing={3}><div><Typography component="h1" variant="h1">Produits et stock</Typography><p>Livres et objets de la boutique, indépendants du catalogue d’œuvres.</p><Link href="/store/products/new" prefetch={false}>Créer un produit</Link></div>
 <form method="get"><label>État <select name="status" defaultValue={search.status??''}><option value="">Tous</option><option value="draft">Brouillons</option><option value="published">Publiés</option><option value="archived">Archivés</option></select></label> <label>Type <select name="kind" defaultValue={search.kind??''}><option value="">Tous</option><option value="book">Livres</option><option value="goodie">Objets</option></select></label> <button type="submit">Filtrer</button></form>
 <div style={{overflowX:'auto'}}><Table aria-label="Produits du Store"><TableHead><TableRow>{['Produit','SKU','État','Prix TTC','Disponible','Réservé','Alloué'].map(title=><TableCell key={title}>{title}</TableCell>)}</TableRow></TableHead><TableBody>{data.items.map(p=><TableRow key={p.id}><TableCell><Link href={'/store/products/'+p.id} prefetch={false}>{p.translations[locale]?.title||p.sku}</Link></TableCell><TableCell>{p.sku}</TableCell><TableCell>{{draft:'Brouillon',published:'Publié',archived:'Archivé'}[p.status]}</TableCell><TableCell>{new Intl.NumberFormat('fr',{style:'currency',currency:'EUR'}).format(p.grossUnitAmount/100)}</TableCell><TableCell>{p.inventory.available}</TableCell><TableCell>{p.inventory.reserved}</TableCell><TableCell>{p.inventory.allocated}</TableCell></TableRow>)}</TableBody></Table></div>
 {!data.items.length&&<p>Aucun produit dans cette sélection.</p>}{data.nextCursor&&<Link href={'/store/products?'+new URLSearchParams({...Object.fromEntries(query),cursor:data.nextCursor})} prefetch={false}>Produits suivants</Link>}
 </Stack>;
 }}/>;}
