"use client";
import {Alert,Box,Button,Checkbox,FormControlLabel,Skeleton,Stack,Typography} from "@mui/material";
import {useNavigationCsrf} from "./PresentationArea";
import {useNavigationSettings} from "./useNavigationSettings";
export function NavigationEditor(){
 const state=useNavigationSettings(useNavigationCsrf()),disabled=state.busy||!state.context?.editingEnabled;
 function move(from:number,to:number){if(to<0||to>=state.items.length||disabled)return;const items=[...state.items],item=items.splice(from,1)[0]!;items.splice(to,0,item);state.setItems(items);state.setStatus("Position "+(to+1)+" sur 7.");requestAnimationFrame(()=>{const row=document.querySelector(`[data-testid="navigation-${item.pageKey}"]`);if(document.activeElement===document.body||document.activeElement instanceof HTMLButtonElement&&document.activeElement.disabled)(row?.querySelector("button[draggable]") as HTMLButtonElement|null)?.focus();});}
 return <Stack spacing={3}><Box><Typography component="h1" variant="h1">Navigation</Typography><Typography>Le menu s’applique immédiatement après enregistrement, dans toutes les langues et sur tous les appareils.</Typography></Box>
 {state.error&&<Alert severity="error">{state.error}</Alert>}<Typography role="status" aria-live="polite">{state.status}</Typography>
 {!state.saved?<><Skeleton height={80}/><Button onClick={state.load}>Réessayer</Button></>:<>
 {!state.context?.editingEnabled&&<Alert severity="info">La contribution du menu est actuellement fermée. Les choix enregistrés restent actifs.</Alert>}
 <Typography>{state.dirty?"Modifications non enregistrées":"Menu enregistré"}</Typography>
 <Stack component="ol" spacing={2} sx={{p:0,m:0,listStyle:"none"}}>{state.items.map((item,index)=>{const page=state.context?.pages.find(p=>p.pageKey===item.pageKey),name=page?.name??"Le galeriste";return <Box component="li" key={item.pageKey} data-testid={"navigation-"+item.pageKey} onDragOver={e=>{if(!disabled)e.preventDefault();}} onDrop={e=>{e.preventDefault();const key=e.dataTransfer.getData("application/x-navigation-page"),from=state.items.findIndex(i=>i.pageKey===key);if(from>=0)move(from,index);}} sx={{p:2,border:1,borderColor:"divider",borderRadius:2,display:"flex",flexWrap:"wrap",alignItems:"center",gap:2,bgcolor:"background.paper"}}>
 <button type="button" draggable={!disabled} disabled={disabled} aria-label={"Déplacer "+name} title="Glisser ou utiliser Monter et Descendre" onDragStart={e=>{e.dataTransfer.setData("application/x-navigation-page",item.pageKey);e.dataTransfer.effectAllowed="move";}}>⠿</button>
 <Box sx={{flex:"1 1 150px",minWidth:0,overflowWrap:"anywhere"}}><Typography sx={{fontWeight:500}}>{name}</Typography>{!page?.publicAvailable&&<Typography variant="caption">Page inactive : le lien restera absent jusqu’à sa publication.</Typography>}</Box>
 <FormControlLabel label="Afficher" control={<Checkbox disabled={disabled} checked={item.visible} onChange={e=>state.setItems(state.items.map(i=>i.pageKey===item.pageKey?{...i,visible:e.target.checked}:i))} slotProps={{input:{"aria-label":"Afficher "+name}}}/>}/>
 <Button disabled={disabled||index===0} aria-label={"Monter "+name} onClick={()=>move(index,index-1)}>↑</Button><Button disabled={disabled||index===6} aria-label={"Descendre "+name} onClick={()=>move(index,index+1)}>↓</Button>
 </Box>;})}</Stack>
 <Stack direction="row" sx={{flexWrap:"wrap",gap:2}}><Button variant="contained" disabled={disabled||!state.dirty||state.uncertain} onClick={state.save}>Enregistrer le menu</Button><Button disabled={state.busy||!state.dirty} onClick={state.cancel}>Annuler</Button>{state.uncertain&&<Button onClick={state.compare} disabled={state.busy}>Comparer avec le menu enregistré</Button>}</Stack>
 {state.comparison&&<Box sx={{p:2,border:1,borderColor:"divider"}}><Typography component="h2" variant="h3">Menu enregistré — version {state.comparison.data.revision}</Typography><ol>{state.comparison.data.items.map(i=><li key={i.pageKey}>{state.context?.pages.find(p=>p.pageKey===i.pageKey)?.name??"Le galeriste"} — {i.visible?"visible":"masqué"}</li>)}</ol><Button onClick={state.acceptComparison}>Utiliser cette version comme référence en gardant ma saisie</Button></Box>}
 </>}
 </Stack>;
}
