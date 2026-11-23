"use client";
import {Alert,Box,Button,CircularProgress,Stack,Typography} from "@mui/material";
import {useTeamEditor} from "./useTeamEditor";
import {TeamOrderControls} from "./TeamOrderControls";
import {TeamMemberRow} from "./TeamMemberRow";
import type {TeamPerson,TeamDraft} from "@/lib/presentation/team-client";
export function TeamEditor(){
 const s=useTeamEditor();
 if(s.loading)return <CircularProgress aria-label="Chargement de l’équipe"/>;
 return <Stack spacing={3}><Box><Typography component="h1" variant="h2">Équipe</Typography><Typography>Présentez les fondateurs et les membres de la galerie. Les fiches sont partagées par toutes les pages qui affichent l’équipe.</Typography></Box>
 {s.error&&<Alert severity="error">{s.error}</Alert>}{s.status&&<Typography role="status">{s.status}</Typography>}
 {!s.enabled?<Alert severity="info">La gestion de l’équipe n’est pas disponible sur cette version. Les autres réglages restent accessibles.</Alert>:<>
 <Typography color="text.secondary">Le mail et le numéro sont facultatifs. Les coordonnées renseignées seront visibles des visiteurs après publication.</Typography>
 {s.team&&(['founders','members'] as const).map(group=><Box key={group}><Typography component="h2" variant="h3">{group==='founders'?'Fondateurs':'Membres'}</Typography>{!s.team![group].length&&<Typography color="text.secondary">{group==='founders'?'Aucun fondateur ajouté.':'Aucun membre ajouté.'}</Typography>}{s.team![group].map((person,index)=><TeamMemberRow key={person.id} person={person} group={group} disabled={s.busy||s.conflict} csrfCookie={s.csrfCookie} errors={s.details} patch={patch=>s.setTeam(current=>current?{...current,[group]:current[group].map(p=>p.id===person.id?{...p,...patch}:p)}:current)} onGroup={target=>{if(target===group||!s.team||!window.confirm('Déplacer cette personne à la fin du groupe choisi ?'))return;const next:TeamDraft={...s.team,[group]:s.team[group].filter(p=>p.id!==person.id),[target]:[...s.team[target],person]};s.setTeam(next);void s.save(next);}}><TeamOrderControls name={`${person.firstName} ${person.lastName}`} index={index} total={s.team![group].length} disabled={s.busy||s.conflict} onMove={delta=>{if(!s.team)return;const list=[...s.team[group]],target=index+delta;[list[index],list[target]]=[list[target],list[index]];const next={...s.team,[group]:list};s.setTeam(next);void s.save(next).then(saved=>{if(saved)s.announce(`${person.firstName} ${person.lastName}, position ${target+1} sur ${list.length}`);requestAnimationFrame(()=>document.querySelector<HTMLElement>(`[data-person-id="${person.id}"]`)?.focus({preventScroll:true}));});}}/></TeamMemberRow> )}</Box>)}
 <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap"}}><Button variant="outlined" disabled={s.busy||s.conflict} onClick={()=>{const person:TeamPerson={id:crypto.randomUUID(),firstName:'',lastName:'',email:null,phone:null,photoAssetId:null,visible:false,focalPoint:{x:.5,y:.5}};s.setTeam(t=>t?{...t,members:[...t.members,person]}:t);}}>Ajouter une personne</Button><Button variant="contained" disabled={s.busy||s.conflict||!s.dirty} onClick={()=>void s.save()}>Enregistrer l’équipe</Button></Stack>
 {s.conflict&&<Button onClick={()=>void s.compare()} disabled={s.busy}>Comparer avec la version enregistrée</Button>}
 {s.comparison&&<Box><Typography component="h2" variant="h3">Version enregistrée</Typography>{[...s.comparison.data.team.founders,...s.comparison.data.team.members].map(p=><Typography key={p.id} sx={{overflowWrap:"anywhere"}}>{p.firstName} {p.lastName} · {p.email??'Sans mail'} · {p.phone??'Sans numéro'} · {p.visible?'Visible':'Masqué'}</Typography>)}<Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap"}}><Button onClick={()=>s.resume(true)}>Continuer avec ma saisie</Button><Button onClick={()=>s.resume(false)}>Recharger les fiches enregistrées</Button></Stack></Box>}
 </>}
 </Stack>;
}
