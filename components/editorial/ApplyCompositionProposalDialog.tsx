"use client";
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { CompositionCandidate } from "@/lib/editorial/composition";
export function ApplyCompositionProposalDialog({ candidate, busy, open, onClose, onConfirm }: {
    candidate: CompositionCandidate;
    busy: boolean;
    open: boolean;
    onClose(): void;
    onConfirm(): void;
}) { return <Dialog open={open} onClose={() => { if (!busy)
    onClose(); }} fullWidth maxWidth="sm"><DialogTitle>Adopter cette composition ?</DialogTitle><DialogContent>{Boolean(candidate.publicationIssues?.length)&&<Alert severity="warning">Cette proposition est incomplète et ne peut pas encore être publiée. Elle sera conservée uniquement comme brouillon à compléter.</Alert>}<p>Les blocs du brouillon seront remplacés par ceux de cet aperçu. Une version de récupération conservera le brouillon précédent.</p><p>Les champs déjà renseignés sont conservés. Les champs vides peuvent être complétés par la proposition ; vérifiez les titres, traductions, textes alternatifs et dates dans l’aperçu. La couverture et les réglages de lecture restent inchangés ; seules les dates d’exposition manquantes peuvent être proposées à partir des sources. La version publique et sa programmation restent inchangées.</p>{candidate.protectedChangedPaths.length > 0 && <Alert severity="info">Les réglages actuels de l’article ont été repris dans cet aperçu : {candidate.protectedChangedPaths.join(", ")}.</Alert>}</DialogContent><DialogActions><Button disabled={busy} onClick={onClose}>Revenir à l’aperçu</Button><Button disabled={busy} variant="contained" onClick={onConfirm}>Adopter et éditer</Button></DialogActions></Dialog>; }
