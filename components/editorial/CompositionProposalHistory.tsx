"use client";
import { useEffect, useState } from "react";
import { Alert, Button, Stack } from "@mui/material";
import { articleFetch, articleErrorMessage } from "@/lib/editorial/client";
type Row = {
    id: string;
    requestId: string;
    createdAt: string;
    contentHash: string;
};
type Page = {
    items: Row[];
    nextCursor: string | null;
};
export function CompositionProposalHistory({ articleId, selectedId, refreshKey, disabled, onSelect }: {
    articleId: string;
    selectedId: string | null;
    refreshKey: string | null;
    disabled: boolean;
    onSelect(id: string): void;
}) {
    const [rows, setRows] = useState<Row[]>([]), [cursor, setCursor] = useState<string | null>(null), [error, setError] = useState<unknown>(null), [busy, setBusy] = useState(false);
    useEffect(() => { const abort = new AbortController(); articleFetch<Page>("/articles/" + articleId + "/composition-proposals?limit=20", { signal: abort.signal }).then(r => { setRows(r.data.items); setCursor(r.data.nextCursor); }).catch(error => { if (!abort.signal.aborted)
        setError(error); }); return () => abort.abort(); }, [articleId, refreshKey]);
    const more = async () => { if (!cursor || busy)
        return; setBusy(true); try {
        const r = await articleFetch<Page>("/articles/" + articleId + "/composition-proposals?limit=20&cursor=" + encodeURIComponent(cursor));
        setRows(previous => [...previous, ...r.data.items.filter(item => !previous.some(p => p.id === item.id))]);
        setCursor(r.data.nextCursor);
    }
    catch (error) {
        setError(error);
    }
    finally {
        setBusy(false);
    } };
    if (!rows.length && !error)
        return null;
    return <details className="composition-proposal-history"><summary>Propositions précédentes <span>{rows.length}</span></summary>{Boolean(error) && <Alert severity="error">{articleErrorMessage(error)}</Alert>}<Stack spacing={1} sx={{ mt: 2 }}>{rows.map((row, index) => <Button key={row.id} aria-pressed={row.id === selectedId} variant={row.id === selectedId ? "outlined" : "text"} disabled={disabled} onClick={() => onSelect(row.id)} sx={{ justifyContent: "space-between" }}><span>{index === 0 ? "La plus récente" : "Proposition précédente"}</span><time dateTime={row.createdAt}>{new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "short" }).format(new Date(row.createdAt))}</time></Button>)}{cursor && <Button disabled={busy || disabled} onClick={() => void more()}>Voir les propositions précédentes</Button>}</Stack><p className="composition-preview-note">Consulter l’historique ne relance aucune génération.</p></details>;
}
