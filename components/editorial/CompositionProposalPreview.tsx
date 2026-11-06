"use client";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, CircularProgress, useMediaQuery, MenuItem, Stack, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { articleFetch, articleErrorMessage } from "@/lib/editorial/client";
import type { CompositionCandidate } from "@/lib/editorial/composition";
import { postPreviewCode } from "@/lib/presentation/post-preview-code";
type Grant = {
    exchangeCode: string;
    exchangeUrl: string;
    expiresAt: string;
};
export function CompositionProposalPreview({ candidate, csrfCookie, siteOrigin, locales, defaultLocale, disabled, onViewed }: {
    candidate: CompositionCandidate;
    csrfCookie: string;
    siteOrigin: string;
    locales: {
        code: string;
        label: string;
    }[];
    defaultLocale: string;
    disabled: boolean;
    onViewed(): void;
}) {
    const compact = useMediaQuery("(max-width:800px)", { noSsr: true });
    const [chosenViewport, setViewport] = useState<375 | 1440 | null>(null), [locale, setLocale] = useState(defaultLocale), [busy, setBusy] = useState(false), [loaded, setLoaded] = useState(false), [error, setError] = useState<unknown>(null), [externalOpened, setExternalOpened] = useState(false), [frameSize, setFrameSize] = useState({ width: 720, height: 600 });
    const readyTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
    const container = useRef<HTMLDivElement | null>(null), frame = useRef<HTMLIFrameElement | null>(null), popup = useRef<Window | null>(null), current = useRef(candidate.id), viewed = useRef(onViewed);
    useEffect(() => { current.current = candidate.id; viewed.current = onViewed; }, [candidate.id, onViewed]);
    const viewport = chosenViewport ?? (compact ? 375 : 1440);
    useEffect(() => { const element = container.current; if (!element)
        return; const observer = new ResizeObserver(entries => { const rect = entries[0]?.contentRect; if (rect)
        setFrameSize({ width: rect.width, height: rect.height }); }); observer.observe(element); return () => observer.disconnect(); }, []);
    useEffect(() => { const message = (event: MessageEvent) => { if (event.origin !== siteOrigin || event.source !== frame.current?.contentWindow && event.source !== popup.current || event.data?.type !== "editorial-preview-ready")
        return; if(readyTimer.current)clearTimeout(readyTimer.current); setLoaded(true); setBusy(false); viewed.current(); }; window.addEventListener("message", message); return () => {window.removeEventListener("message", message);if(readyTimer.current)clearTimeout(readyTimer.current);}; }, [siteOrigin]);
    const preview = async (separate = false) => { const windowRef = separate ? window.open("about:blank", "_blank") : null; if (separate && !windowRef) {
        setError(new Error("popup_blocked"));
        return;
    } if (windowRef) {
        windowRef.opener = null;
        popup.current = windowRef;
    } if(readyTimer.current)clearTimeout(readyTimer.current);if(!separate)container.current?.scrollIntoView({block:"nearest",behavior:"instant"});setBusy(true); setLoaded(false); setError(null); const id = candidate.id; try {
        const result = await articleFetch<Grant>("/articles/" + candidate.articleId + "/composition-candidates/" + id + "/preview", { method: "POST", tag: candidate.articleEtag, csrfCookie, body: { locale, viewport } });
        if (current.current !== id) {
            windowRef?.close();
            return;
        }
        if (result.data.exchangeUrl !== siteOrigin + "/preview/exchange")
            throw new Error("invalid_exchange_origin");
        let target = windowRef;
        if (!target) {
            const element = frame.current;
            if (!element)
                throw new Error("preview_context_missing");
            await new Promise<void>((resolve, reject) => { const timer = setTimeout(() => reject(new Error("preview_context_unavailable")), 5000); element.addEventListener("load", () => { clearTimeout(timer); resolve(); }, { once: true }); element.src = "about:blank"; });
            target = element.contentWindow;
        }
        if (!target)
            throw new Error("preview_context_missing");
        postPreviewCode(target, result.data.exchangeUrl, result.data.exchangeCode, !separate);
        if(separate){setBusy(false);setExternalOpened(true);}else readyTimer.current=setTimeout(()=>{setBusy(false);setError(new Error("preview_timeout"));},30000);
    }
    catch (error) {
        windowRef?.close();
        setError(error);
        setBusy(false);
    } };
    return <Stack spacing={2}><div className="composition-preview-toolbar"><ToggleButtonGroup exclusive value={viewport} onChange={(_, value) => { if (value)
        setViewport(value); }} aria-label="Format de l’aperçu"><ToggleButton value={1440}>Ordinateur</ToggleButton><ToggleButton value={375}>Mobile</ToggleButton></ToggleButtonGroup><TextField select size="small" label="Langue de l’aperçu" sx={{ minWidth: 180 }} value={locale} onChange={event => setLocale(event.target.value)}>{locales.map(l => <MenuItem key={l.code} value={l.code}>{l.label}</MenuItem>)}</TextField></div>{Boolean(error) && <Alert severity="error">{articleErrorMessage(error)}</Alert>}<Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}><Button variant="outlined" disabled={busy || disabled} onClick={() => void preview()}>Afficher l’aperçu</Button><Button disabled={busy || disabled} aria-label="Ouvrir dans une fenêtre" onClick={() => void preview(true)}>{compact ? "Fenêtre" : "Ouvrir dans une fenêtre"}</Button></Stack>{externalOpened && <Button onClick={() => viewed.current()}>J’ai consulté l’aperçu dans la fenêtre</Button>}<div ref={container} className={"composition-preview-viewport " + (viewport === 375 ? "is-mobile" : "")} aria-busy={busy}>{busy && <div className="composition-preview-loading" role="status" aria-label="Préparation de l’aperçu"><CircularProgress size={28}/></div>}<iframe ref={frame} title="Aperçu privé de la composition" src="about:blank" referrerPolicy="no-referrer" allow="fullscreen" aria-hidden={!loaded} tabIndex={loaded?0:-1} style={{ pointerEvents: loaded ? "auto" : "none", width: viewport, height: frameSize.height / Math.min(1, frameSize.width / viewport), transform: "scale(" + Math.min(1, frameSize.width / viewport) + ")", transformOrigin: "top left" }}/>{!loaded && !busy && <p className="composition-preview-placeholder">Consultez le rendu du site avant d’adopter cette composition.</p>}</div><p className="composition-preview-note">Si votre navigateur bloque l’aperçu intégré, utilisez la fenêtre séparée. Changer de format ou de langue ne relance aucune génération.</p></Stack>;
}
