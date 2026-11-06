"use client";
import { Alert, Button } from "@mui/material";
export function CompositionProposalConflict({ busy, onReview }: {
    busy: boolean;
    onReview(): void;
}) { return <Alert severity="warning" action={<Button disabled={busy} onClick={onReview}>Relire le brouillon</Button>}>Le brouillon a changé depuis la génération ou l’aperçu. Votre proposition est conservée. Relisez les changements, puis préparez explicitement un nouvel aperçu ; une modification hors sélection peut nécessiter un affinage global.</Alert>; }
