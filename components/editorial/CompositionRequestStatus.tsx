"use client";
import {CompositionProgress} from "./CompositionProgress";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Stack } from "@mui/material";
import { articleFetch, articleErrorMessage } from "@/lib/editorial/client";
import type { CompositionRequest } from "@/lib/editorial/composition";
export function CompositionRequestStatus({ request, csrfCookie, onRead }: {
    request: CompositionRequest;
    csrfCookie: string;
    onRead(): Promise<unknown>;
}) {
    const [busy, setBusy] = useState(false), [error, setError] = useState<unknown>(null), [at, setAt] = useState(() => Date.now()), key = useRef(crypto.randomUUID()), active = ["queued", "running"].includes(request.status);
    useEffect(() => { if (!active)
        return; const timer = setInterval(() => setAt(Date.now()), 1000); return () => clearInterval(timer); }, [active]);
    const expired = active && at >= Date.parse(request.deadlineAt);
    const abandon = async () => { setBusy(true); setError(null); try {
        await articleFetch("/articles/" + request.articleId + "/composition-requests/" + request.id + "/abandon", { method: "POST", key: key.current, csrfCookie, body: {} });
        await onRead();
    }
    catch (error) {
        setError(error);
    }
    finally {
        setBusy(false);
    } };
    return <Stack spacing={2} sx={{ mb: 3 }}><CompositionProgress request={request}/>{Boolean(error) && <Alert severity="error">{articleErrorMessage(error)}</Alert>}{expired && <Alert severity="warning" action={<Button onClick={() => void onRead()} disabled={busy}>Vérifier l’état</Button>}>Le délai prévu est dépassé. Vérifiez cette demande avant d’en lancer une autre ; aucune relance automatique n’a lieu.</Alert>}{request.costStatus === "unknown" && <Alert severity="warning">Une éventuelle facturation reste inconnue. La réservation maximale est conservée ; votre brouillon est intact.</Alert>}{request.sourcesAvailability === "purged" && <Alert severity="info">Les sources de cette ancienne demande ne sont plus conservées. Fournissez de nouvelles sources pour une nouvelle proposition.</Alert>}{active && <div><Button disabled={busy} onClick={() => void abandon()}>Abandonner la demande</Button><p className="composition-preview-note">Un traitement déjà transmis peut rester facturable. L’abandon empêche l’utilisation d’un résultat tardif.</p></div>}</Stack>;
}
