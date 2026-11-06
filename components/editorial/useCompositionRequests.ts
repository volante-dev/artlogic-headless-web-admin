"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { articleFetch, ArticleError } from "@/lib/editorial/client";
import { compositionTerminal, type CompositionSubmit, type CompositionRequest, type CompositionRequestPage } from "@/lib/editorial/composition";
export function useCompositionRequests(articleId: string, csrfCookie: string) {
    const [request, setRequest] = useState<CompositionRequest | null>(null), [error, setError] = useState<unknown>(null), [busy, setBusy] = useState(false), [identityReady, setIdentityReady] = useState(false), [hasPending, setHasPending] = useState(false), storageKey = useRef<string | null>(null), mounted = useRef(true), pendingKey = useRef<string | null>(null), epoch = useRef(0), controller = useRef<AbortController | null>(null), requestId = useRef<string | null>(null);
    useEffect(() => { requestId.current = request?.id ?? null; }, [request?.id]);
    const path = "/articles/" + articleId + "/composition-requests", pollId = request?.id, pollStatus = request?.status;
    const recover = useCallback(async (key?: string) => { const token = epoch.current, lookupKey = key ?? pendingKey.current; if (!lookupKey) {
        if (!requestId.current)
            return null;
        const detail = await articleFetch<CompositionRequest>(path + "/" + requestId.current);
        if (mounted.current && epoch.current === token) {
            setRequest(detail.data);
            setError(null);
        }
        return detail.data;
    } const result = await articleFetch<CompositionRequestPage>(path + "?idempotencyKey=" + encodeURIComponent(lookupKey)); const row = result.data.items[0]; if (!row)
        return null; const detail = await articleFetch<CompositionRequest>(path + "/" + row.id); if (mounted.current && epoch.current === token) {
        setRequest(detail.data);
        setError(null);
        pendingKey.current = null;
        setHasPending(false);
    } return detail.data; }, [path]);
    useEffect(() => { mounted.current = true; const token = ++epoch.current, abort = new AbortController(); void fetch("/api/session", { cache: "no-store", signal: abort.signal }).then(async (response) => { if (!response.ok)
        throw new ArticleError(response.status, "unauthorized"); const identity = await response.json() as {
        siteId: string;
        subject: string;
    }; if (!identity.siteId || !identity.subject)
        throw new ArticleError(0, "invalid_session"); if (!mounted.current || epoch.current !== token)
        return; storageKey.current = "volante:composition:" + identity.siteId + ":" + identity.subject + ":" + articleId; const key = sessionStorage.getItem(storageKey.current); setIdentityReady(true); if (key && /^[a-f0-9-]{36}$/i.test(key)) {
        pendingKey.current = key;
        setHasPending(true);
        await recover(key);
    } }).catch(error => { if (mounted.current && !abort.signal.aborted)
        setError(error); }); return () => { mounted.current = false; epoch.current = token + 1; abort.abort(); const pendingController = controller.current; pendingController?.abort(); }; }, [articleId, recover]);
    useEffect(() => { if (!pollId || !pollStatus || compositionTerminal(pollStatus))
        return; let stopped = false; const abort = new AbortController(); let timer: ReturnType<typeof setTimeout>; const poll = async () => { try {
        const result = await articleFetch<CompositionRequest>(path + "/" + pollId, { signal: abort.signal });
        if (stopped)
            return;
        setRequest(result.data);
        setError(null);
        if (!compositionTerminal(result.data.status))
            timer = setTimeout(() => void poll(), document.hidden ? 10000 : 2000);
    }
    catch (error) {
        if (!stopped) {
            setError(error);
            timer = setTimeout(() => void poll(), document.hidden ? 10000 : 2000);
        }
    } }; timer = setTimeout(() => void poll(), document.hidden ? 10000 : 2000); return () => { stopped = true; clearTimeout(timer); abort.abort(); }; }, [path, pollId, pollStatus]);
    const submit = async (input: CompositionSubmit, tag: string) => { if (busy || !identityReady || !storageKey.current)
        return null; if (pendingKey.current) {
        const found = await recover();
        if (found)
            return found;
        throw new ArticleError(0, "composition_check_pending");
    } const key = crypto.randomUUID(); sessionStorage.setItem(storageKey.current, key); pendingKey.current = key; setHasPending(true); setBusy(true); setError(null); const token = epoch.current; const abort = new AbortController(); controller.current = abort; try {
        const result = await articleFetch<CompositionRequest>(path, { method: "POST", body: input, tag, key, csrfCookie, signal: AbortSignal.any([abort.signal, AbortSignal.timeout(30000)]) });
        if (mounted.current && epoch.current === token) {
            setRequest(result.data);
            pendingKey.current = null;
            setHasPending(false);
        }
        return result.data;
    }
    catch (error) {
        if (mounted.current && epoch.current === token) {
            setError(error);
            if (error instanceof ArticleError && ([400, 401, 403, 404, 409, 412, 413, 415, 428, 429].includes(error.status) || error.code === "composition_unavailable")) {
                pendingKey.current = null;
                setHasPending(false);
                sessionStorage.removeItem(storageKey.current!);
            }
            else {
                const recovered = await recover(key).catch(() => null);
                if (recovered)
                    return recovered;
            }
        }
        throw error;
    }
    finally {
        if (mounted.current && epoch.current === token)
            setBusy(false);
    } };
    const resetRecovery = () => { if (busy || !pendingKey.current)
        return; pendingKey.current = null; setHasPending(false); if (storageKey.current)
        sessionStorage.removeItem(storageKey.current); setError(null); };
    return { request, error, busy, identityReady, submit, recover, setError, hasUnconfirmedRequest: hasPending && !request, resetRecovery };
}
