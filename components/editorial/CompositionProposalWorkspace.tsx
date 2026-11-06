"use client";
import { editorialIssueMessage } from "@/lib/editorial/issues";
import { CompositionRequestStatus } from "./CompositionRequestStatus";
import { CompositionProposalHistory } from "./CompositionProposalHistory";
import { CompositionRefinementForm } from "./CompositionRefinementForm";
import { CompositionProposalConflict } from "./CompositionProposalConflict";
import { useEffect, useState, useRef } from "react";
import { Alert, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Tab, Tabs } from "@mui/material";
import { ArticleError, articleFetch, articleErrorMessage, type AdminArticle, type ArticleDocument, type ArticleCapabilities } from "@/lib/editorial/client";
import type { CompositionCapabilities, CompositionProposal, CompositionCandidate } from "@/lib/editorial/composition";
import { CompositionBriefForm } from "./CompositionBriefForm";
import { useCompositionRequests } from "./useCompositionRequests";
import { CompositionProposalPreview } from "./CompositionProposalPreview";
import { ApplyCompositionProposalDialog } from "./ApplyCompositionProposalDialog";
export function CompositionProposalWorkspace({ article, document, capabilities, csrfCookie, ready, onClose, onAdopt, onReview }: {
    onReview(): Promise<void>;
    article: AdminArticle;
    document: ArticleDocument;
    capabilities: ArticleCapabilities;
    csrfCookie: string;
    ready: boolean;
    onClose(): void;
    onAdopt(): Promise<void>;
}) {
    const [completionRequest,setCompletionRequest]=useState(0);
    const [ai, setAi] = useState<CompositionCapabilities | null>(null), [error, setError] = useState<unknown>(null), [aiError, setAiError] = useState<unknown>(null), [proposal, setProposal] = useState<CompositionProposal | null>(null), [candidate, setCandidate] = useState<CompositionCandidate | null>(null), [busy, setBusy] = useState(false), [viewed, setViewed] = useState(false), [confirm, setConfirm] = useState(false), [panel, setPanel] = useState("sources");
    const sourcesPane = useRef<HTMLElement | null>(null);
    const applyCommand = useRef<{
        candidateId: string;
        key: string;
        clientMutationId: string;
    } | null>(null);
    const job = useCompositionRequests(article.id, csrfCookie), path = "/articles/" + article.id, tag = '"article-' + article.id + '-' + article.revision + '"';
    useEffect(() => { const abort = new AbortController(); let pending = false; const load = async () => { if (pending)
        return; pending = true; try {
        const result = await articleFetch<CompositionCapabilities>("/composition/capabilities", { signal: abort.signal });
        if (!abort.signal.aborted) {
            setAi(result.data);
            setAiError(null);
        }
    }
    catch (error) {
        if (!abort.signal.aborted) {
            setAi(previous => previous ? { ...previous, canSubmit: false } : null);
            setAiError(error);
        }
    }
    finally {
        pending = false;
    } }; void load(); const timer = setInterval(() => void load(), 10000); return () => { clearInterval(timer); abort.abort(); }; }, []);
    useEffect(() => { const id = job.request?.proposalId ?? job.request?.baseProposalId; if (!id)
        return; const abort = new AbortController(); articleFetch<CompositionProposal>(path + "/composition-proposals/" + id, { signal: abort.signal }).then(r => { setProposal(r.data); setCandidate(null); setViewed(false); }).catch(error => { if (!abort.signal.aborted)
        setError(error); }); return () => abort.abort(); }, [path, job.request?.proposalId, job.request?.baseProposalId]);
    const [now, setNow] = useState(() => Date.now());
    useEffect(() => { const timer = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(timer); }, []);
    const publicationIssues=candidate?.publicationIssues??proposal?.issues??[];
    const publishable=Boolean(proposal)&&publicationIssues.length===0;
    const completeInformation=()=>{setPanel("sources");setCompletionRequest(value=>value+1);requestAnimationFrame(()=>{const target=sourcesPane.current?.querySelector<HTMLTextAreaElement>("#composition-additional-text");(target?.closest("[data-completion-source]")??target)?.scrollIntoView({block:"start",behavior:"instant"});target?.focus({preventScroll:true});});};
    const conflict = error instanceof ArticleError && [409, 412].includes(error.status);
    const chooseProposal = async (id: string) => { setBusy(true); setError(null); try {
        const result = await articleFetch<CompositionProposal>(path + "/composition-proposals/" + id);
        setProposal(result.data);
        setCandidate(null);
        setViewed(false);
    }
    catch (error) {
        setError(error);
    }
    finally {
        setBusy(false);
    } };
    const active = job.request && (job.request.status === "queued" || job.request.status === "running"), stale = Boolean(candidate && (candidate.articleEtag !== tag || !ready || Date.parse(candidate.expiresAt) <= now)), disabled = busy || job.busy;
    const prepare = async () => { if (!proposal || !ready || disabled)
        return; setBusy(true); setError(null); try {
        const result = await articleFetch<CompositionCandidate>(path + "/composition-proposals/" + proposal.id + "/candidates", { method: "POST", csrfCookie, tag, body: {} });
        setCandidate(result.data);
        setViewed(false);
        setPanel("preview");
        sourcesPane.current?.scrollTo({top:0});
    }
    catch (error) {
        setError(error);
    }
    finally {
        setBusy(false);
    } };
    const apply = async () => { if (!candidate || !proposal || stale || !viewed || disabled)
        return; setBusy(true); setError(null); try {
        if (applyCommand.current?.candidateId !== candidate.id)
            applyCommand.current = { candidateId: candidate.id, key: crypto.randomUUID(), clientMutationId: crypto.randomUUID() };
        const command = applyCommand.current;
        await articleFetch(path + "/composition-proposals/" + proposal.id + "/apply", { method: "POST", csrfCookie, tag: candidate.articleEtag, key: command.key, body: { confirmReplacement: true, clientMutationId: command.clientMutationId, candidateId: candidate.id, candidateHash: candidate.contentHash } });
        setConfirm(false);
        await onAdopt();
    }
    catch (error) {
        setError(error);
        setConfirm(false);
    }
    finally {
        setBusy(false);
    } };
    return <Dialog open fullWidth maxWidth={false} onClose={() => { if (!disabled)
        onClose(); }} slotProps={{ paper: { className: "composition-workspace" } }}><DialogTitle component="div"><div className="composition-workspace-heading"><div><h2>Composer avec l’IA</h2><p>Vos sources. Une proposition. Votre décision.</p></div><Button onClick={onClose} disabled={disabled}>Fermer</Button></div></DialogTitle><DialogContent className="composition-workspace-content">{ai?.providerLabel.startsWith("Simulation")&&<Alert severity="info" sx={{mb:2}}>Mode simulé : aucun modèle IA n’est appelé. La mise en page est déterministe ; les traductions et descriptions ne sont pas générées.</Alert>}{Boolean(error || job.error || aiError) && <Alert severity="error" sx={{ mb: 3 }} action={<Button onClick={() => void job.recover().catch(setError)}>Vérifier la demande</Button>}>{articleErrorMessage(error ?? job.error ?? aiError)}</Alert>}{job.hasUnconfirmedRequest && <Alert severity="warning" sx={{ mb: 3 }} action={<Button disabled={disabled} onClick={() => { if (window.confirm("La première demande pourrait avoir été reçue sans confirmation. Une demande distincte pourrait être facturée en plus. Créer une nouvelle demande ?")) {
        job.resetRecovery();
        setError(null);
    } }}>Créer une demande distincte</Button>}>La réception de la demande n’est pas confirmée. Vérifiez son état avant toute nouvelle génération. Aucune relance automatique n’a lieu.</Alert>}{!ready && <Alert severity="warning" sx={{ mb: 3 }}>Enregistrez le brouillon avant de préparer ou d’adopter une composition.</Alert>}{ai && !ai.canSubmit && <Alert severity="info" sx={{ mb: 3 }}>Les nouvelles générations sont indisponibles. Les propositions enregistrées et le mode manuel restent accessibles.</Alert>}{job.request && <CompositionRequestStatus key={job.request.id} request={job.request} csrfCookie={csrfCookie} onRead={job.recover}/>}{proposal && panel === "sources" && <div className="composition-mobile-result" role="status"><span>Une proposition est disponible.</span><Button onClick={() => setPanel("preview")}>Voir la proposition</Button></div>}<Tabs value={panel} onChange={(_, value) => setPanel(value)} className="composition-mobile-tabs" aria-label="Étapes de composition"><Tab value="sources" label="Sources"/><Tab value="preview" label="Proposition"/></Tabs>{conflict && <CompositionProposalConflict busy={disabled} onReview={() => void onReview()}/>}<CompositionProposalHistory articleId={article.id} selectedId={proposal?.id ?? null} refreshKey={job.request?.proposalId ?? null} disabled={disabled || Boolean(active)} onSelect={id => void chooseProposal(id)}/><div className="composition-workspace-grid" data-mobile-panel={panel}><section className="composition-preview-pane" aria-label="Proposition de composition">{active && proposal && <Alert severity="info" sx={{ mb: 3 }}>Une nouvelle proposition est en préparation. Celle-ci reste consultable.</Alert>}{proposal ? <Stack spacing={3}><div className="composition-proposal-heading" aria-live="polite"><div><h3>{publishable?"Votre proposition est prête":"Proposition à compléter"}</h3></div><span>Proposition privée · {proposal.document.blocks.length} blocs</span></div>{proposal.changedTextPaths.length > 0 && <Alert severity="info">{proposal.changedTextPaths.length} champ(s) proposé(s) ou complété(s). Relisez les textes, traductions et métadonnées avant de les adopter.</Alert>}{publicationIssues.length > 0 && <details className="composition-diagnostics"><summary>{publicationIssues.length} information(s) nécessaire(s) avant publication</summary><ul>{publicationIssues.map((issue, index) => <li key={index}>{editorialIssueMessage({field:issue.path,reason:issue.code},proposal.document)}</li>)}</ul></details>}{stale && <Alert severity="warning">Le brouillon ou cet aperçu a changé. Préparez un nouvel aperçu avant adoption.</Alert>}{(!candidate || stale) && <Button variant="contained" disabled={!ready || disabled} onClick={() => void prepare()} sx={{ alignSelf: "start" }}>{candidate ? "Actualiser le candidat d’aperçu" : "Préparer l’aperçu"}</Button>}{candidate && !stale && <><CompositionProposalPreview key={candidate.id} candidate={candidate} csrfCookie={csrfCookie} siteOrigin={capabilities.siteOrigin} locales={[...capabilities.activeLocales, ...capabilities.preparingLocales]} defaultLocale={job.request?.brief?.locale ?? capabilities.defaultLocale} disabled={disabled} onViewed={() => setViewed(true)}/></>}</Stack> : job.request ? <Stack spacing={3}><h3>{active ? "Votre prochaine proposition" : "État de la demande"}</h3><p role="status">{active ? "Vous pouvez fermer cette fenêtre et retrouver la demande sans relancer la génération." : job.request.costStatus === "unknown" ? "Le résultat n’est pas confirmé. Une éventuelle facturation reste inconnue ; aucune relance automatique n’a lieu." : "Votre brouillon est conservé. Vous pouvez poursuivre manuellement."}</p>{job.request.sourcesAvailability === "purged" && <Alert severity="info">Le brief de cette ancienne demande n’est plus conservé.</Alert>}</Stack> : <div className="composition-empty"><span className="composition-empty-number" aria-hidden="true">01</span><h3>La composition commence<br />par vos sources.</h3><p>Textes, images, vidéos, œuvres : rassemblez la matière de votre article. Vous garderez la main sur chaque bloc.</p><span className="composition-empty-rule" aria-hidden="true"/></div>}</section><aside ref={sourcesPane} aria-label="Sources de composition"><h3 className="composition-sources-title">La matière de l’article</h3>{ai && (proposal || document.blocks.length > 0) ? <CompositionRefinementForm key={job.request?.id ?? "manual"} completionGuidance={completionRequest?"Informations à compléter : "+publicationIssues.slice(0,6).map(issue=>editorialIssueMessage({field:issue.path,reason:issue.code},proposal?.document).split(" : ")[0]).join(" ; "):undefined} initialBrief={job.request?.status !== "ready" ? job.request?.brief ?? undefined : undefined} initialScope={job.request?.scope} initialBase={job.request?.baseProposalId ? "proposal" : undefined} draft={document} proposal={proposal} capabilities={capabilities} ai={ai} csrfCookie={csrfCookie} locale={job.request?.brief?.locale ?? capabilities.defaultLocale} disabled={disabled || Boolean(active) || !job.identityReady || !ready} onSubmit={async (input) => { setError(null); try {
        await job.submit(input, tag);
    }
    catch (error) {
        setError(error);
    } }}/> : ai ? <CompositionBriefForm key={job.request?.id ?? "new"} capabilities={capabilities} ai={ai} csrfCookie={csrfCookie} document={document} initialBrief={job.request?.brief ?? undefined} disabled={disabled || Boolean(active) || !job.identityReady || !ready} onSubmit={async (brief) => { setError(null); try {
        await job.submit({ baseProposalId: null, scope: { kind: "global", blockIds: [] }, brief }, tag);
    }
    catch (error) {
        setError(error);
    } }}/> : <CircularProgress size={24} aria-label="Préparation du formulaire"/>}</aside></div></DialogContent>{candidate && <DialogActions className="composition-workspace-actions"><span>{publishable?"Contrôles de publication réussis.":"Cette proposition n’est pas prête à publier."}</span>{!publishable&&<Button variant="contained" onClick={completeInformation} disabled={disabled}>Compléter les informations</Button>}<Button variant={publishable?"contained":"outlined"} disabled={stale || !viewed || !ready || disabled || Boolean(active)} onClick={() => setConfirm(true)}>{publishable?"Adopter et éditer":"Conserver comme brouillon"}</Button></DialogActions>}{candidate && <ApplyCompositionProposalDialog candidate={candidate} open={confirm} busy={busy} onClose={() => setConfirm(false)} onConfirm={() => void apply()}/>}</Dialog>;
}
