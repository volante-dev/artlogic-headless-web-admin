"use client";
import {Button,Divider,Stack,Typography,Alert,Box} from "@mui/material";
import {usePresentationDraft} from "./usePresentationDraft";
import {reasonLabels,type Validation} from "./types";
import {PreviewAction} from "./PreviewAction";
import {PublicationHistory} from "./PublicationHistory";
export function PublicationPanel(){const state=usePresentationDraft();
 async function validate(){try{const result=await state.mutate<Validation>("/validation",{});state.setValidation(result.data);}catch{}}
 async function publish(){try{const check=await state.mutate<Validation>("/validation",{});state.setValidation(check.data);if(!check.data.publishable)return;await state.mutate("/publications",{});await state.reload();state.confirmPublication();state.setStatus("Publication confirmée. La présentation du site est en ligne.");}catch{}}
 return <Stack spacing={4}><Box><Typography variant="h1" component="h1">Apparence et pages</Typography><Typography>Préparez le thème et les pages, vérifiez l’aperçu, puis publiez l’ensemble en une seule fois.</Typography></Box>
 <Alert severity="info" icon={false}>Le logo et les textes du menu, gérés dans « Contenu du site », ont un effet immédiat. Ils ne font pas partie du brouillon de présentation.</Alert>
 <Box><Typography variant="h2" component="h2">Brouillon enregistré</Typography><Typography>Version {state.draft?.revision} · {state.draft?.activeReleaseId?"Une version du site est publiée.":"Le site utilise encore sa présentation initiale."}</Typography><Stack direction="row" spacing={2} useFlexGap sx={{mt:2,flexWrap:"wrap"}}><PreviewAction/><Button variant="outlined" disabled={state.busy||state.uncertain} onClick={validate}>Vérifier le brouillon</Button><Button variant="contained" disabled={state.busy||state.uncertain} onClick={publish}>Publier</Button></Stack></Box>
 {state.validation&&<Box><Typography variant="h3" component="h2">{state.validation.publishable?"Le brouillon peut être publié":"Points à corriger avant publication"}</Typography>{state.validation.diagnostics.length?<ul>{state.validation.diagnostics.map((d,i)=><li key={d.field+i}>{d.field.startsWith("footer")?<a href="/presentation/footer">{reasonLabels[d.reason]} · {d.field}</a>:<>{reasonLabels[d.reason]} <span>{d.field}</span></>}</li>)}</ul>:<Typography>Aucune anomalie détectée.</Typography>}</Box>}
 <Divider/><PublicationHistory/>
 </Stack>;
}
