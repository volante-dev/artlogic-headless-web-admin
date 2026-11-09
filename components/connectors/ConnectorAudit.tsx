"use client";
import Link from "next/link";
import {Alert,Box,Divider,Stack,Typography} from "@mui/material";
import type {ConnectorAuditPage,ConnectorAuditSummary,ConnectorOperationDetail} from "@/lib/bff/connectors";
const actions:Record<string,string>={save_change_to_draft:"Brouillon enregistré",apply_public_change:"Modification publiée",start_artlogic_sync:"Synchronisation lancée"};
const kinds:Record<string,string>={page:"Page",section:"Section",release:"Présentation",theme:"Thème",footer:"Pied de page",artwork_settings:"Réglages des œuvres",navigation:"Navigation",site_content:"Contenu du site",article:"Article",artwork:"Œuvre",sync:"Synchronisation"};
function date(value:string){return new Date(value).toLocaleString("fr-FR",{timeZone:"UTC",dateStyle:"long",timeStyle:"short"})+" UTC";}
function resource(entry:ConnectorAuditSummary){return [...new Set(entry.resources.map(r=>kinds[r.kind]??r.kind))].join(" · ")||"Site";}
export function ConnectorAuditList({page}:{page:ConnectorAuditPage}){return <Stack spacing={4}>
 <div><Typography component="h1" variant="h1">Historique des opérations</Typography><Typography sx={{mt:2}}>Les modifications appliquées depuis ChatGPT restent consultables après la révocation d’une connexion.</Typography></div>
 {page.items.length?<Stack component="ol" spacing={3} divider={<Divider/>} sx={{listStyle:"none",m:0,p:0}}>{page.items.map(entry=><Stack component="li" key={entry.operationId} spacing={1}><Typography component="h2" variant="h5"><Link prefetch={false} href={"/connectors/chatgpt/operations/"+entry.operationId}>{actions[entry.action]??entry.action}</Link></Typography><Typography>{resource(entry)}</Typography><Typography variant="body2" color="text.secondary">{date(entry.occurredAt)} · Depuis ChatGPT</Typography></Stack>)}</Stack>:<Box className="work-panel"><Typography>Aucune opération appliquée pour le moment.</Typography></Box>}
 {page.nextCursor&&<Link prefetch={false} href={"/connectors/chatgpt/operations?cursor="+encodeURIComponent(page.nextCursor)}>Opérations plus anciennes</Link>}
 <Link prefetch={false} href="/connectors/chatgpt">Revenir aux connexions</Link>
 </Stack>;}
export function ConnectorAuditDetail({detail}:{detail:ConnectorOperationDetail}){
 const {operation,audit}=detail;if(!audit)return <Alert severity="info">Aucun détail appliqué disponible.</Alert>;
 const visibility={unverified:"La diffusion sur le site n’a pas été vérifiée.",pending:"La diffusion sur le site est en cours.",confirmed:"La diffusion sur le site a été confirmée.",failed:"La diffusion sur le site a échoué. Le changement reste enregistré."};
 return <Stack spacing={4} sx={{minWidth:0}}>
  <div><Link prefetch={false} href="/connectors/chatgpt/operations">Historique des opérations</Link><Typography component="h1" variant="h1" sx={{mt:3}}>{actions[audit.entry.action]??audit.entry.action}</Typography><Typography sx={{mt:2}}>{resource(audit.entry)} · {date(audit.entry.occurredAt)}</Typography></div>
  <Alert severity={operation.visibility.status==="failed"?"warning":"info"}>{visibility[operation.visibility.status]}</Alert>
  <Box component="section" aria-labelledby="connector-audit-fields"><Typography id="connector-audit-fields" component="h2" variant="h5" sx={{mb:3}}>Changements enregistrés</Typography><Stack spacing={4} divider={<Divider/>}>{audit.diff.map((item,index)=><Box key={item.fieldId+index} sx={{minWidth:0}}><Typography component="h3" variant="subtitle1" sx={{overflowWrap:"anywhere",mb:2}}>{item.fieldId}</Typography><Box sx={{display:"grid",gridTemplateColumns:{xs:"minmax(0,1fr)",md:"repeat(2,minmax(0,1fr))"},gap:3}}>{[["Avant",item.beforeText],["Après",item.afterText]].map(([label,value])=><Box key={label} sx={{minWidth:0}}><Typography variant="body2" color="text.secondary" sx={{mb:1}}>{label}</Typography><Typography sx={{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}}>{value||"Valeur vide"}</Typography></Box>)}</Box></Box>)}</Stack>{!audit.diff.length&&<Typography color="text.secondary">Aucune valeur modifiée.</Typography>}</Box>
  {audit.nextCursor&&<Link prefetch={false} href={"/connectors/chatgpt/operations/"+operation.id+"?cursor="+encodeURIComponent(audit.nextCursor)}>Changements suivants</Link>}
  <Box component="details" sx={{overflowWrap:"anywhere"}}><Typography component="summary">Références de l’opération</Typography><Stack spacing={1} sx={{mt:2}}><Typography variant="body2">Origine : ChatGPT</Typography><Typography variant="body2">Compte : {audit.entry.actor.subject}</Typography><Typography variant="body2">Autorité du compte : {audit.entry.actor.issuer}</Typography><Typography variant="body2">Opération : {operation.id}</Typography>{operation.businessRevision&&<Typography variant="body2">Révision enregistrée : {operation.businessRevision}</Typography>}</Stack></Box>
 </Stack>;
}
