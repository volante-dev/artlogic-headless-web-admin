"use client";
import {PresentationTabs} from "./PresentationTabs";

import {Alert,Box,Button,Skeleton,Stack,Typography} from "@mui/material";
import {usePresentationDraft} from "./usePresentationDraft";
export function PresentationWorkspace({children}:{children:React.ReactNode}){
 const state=usePresentationDraft();
 return <Stack spacing={3}><PresentationTabs/>
 {state.error&&<Alert severity="error">{state.error}</Alert>}{state.status&&<Alert severity="success" role="status">{state.status}</Alert>}
 {state.uncertain&&<Button variant="outlined" onClick={state.compare} disabled={state.busy} sx={{alignSelf:"start"}}>Comparer avec la version enregistrée</Button>}
 {state.comparison&&<Box sx={{border:1,borderColor:"divider",p:3}}><Typography component="h2" variant="h3">Version enregistrée {state.comparison.data.revision}</Typography><Typography>Version chargée : {state.draft?.revision}. La relecture conserve les champs actuellement saisis ; vérifiez les différences avant de les enregistrer.</Typography><Button onClick={state.acceptComparison}>Utiliser la version enregistrée comme référence</Button></Box>}
 {!state.draft?<Box aria-busy="true"><Skeleton height={60}/><Skeleton height={140}/></Box>:<Box className="workspace-panel">{children}</Box>}
 </Stack>;
}
