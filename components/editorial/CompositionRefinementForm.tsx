"use client";
import { useState } from "react";
import { Alert, MenuItem, Stack, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { ArticleCapabilities, ArticleDocument } from "@/lib/editorial/client";
import type { CompositionCapabilities, CompositionBrief, CompositionProposal, CompositionSubmit } from "@/lib/editorial/composition";
import { CompositionBriefForm } from "./CompositionBriefForm";
import { BlockList } from "./BlockList";
const labels = {form:"Formulaire",formImage:"Formulaire et image", text: "Texte", media: "Média", textMedia: "Texte et média", carousel: "Carrousel", imageGroup: "Images côte à côte" };
export function CompositionRefinementForm({ draft, proposal, capabilities, ai, csrfCookie, disabled, locale, onSubmit, initialBrief, initialScope, initialBase, completionGuidance }: {
    completionGuidance?:string;
    initialBase?: "proposal" | "draft";
    initialBrief?: CompositionBrief;
    initialScope?: CompositionSubmit["scope"];
    draft: ArticleDocument;
    proposal: CompositionProposal | null;
    capabilities: ArticleCapabilities;
    ai: CompositionCapabilities;
    csrfCookie: string;
    disabled: boolean;
    locale: string;
    onSubmit(input: CompositionSubmit): Promise<void>;
}) {
    const [base, setBase] = useState(initialBase ?? (proposal ? "proposal" : "draft")), [scope, setScope] = useState(initialScope?.kind ?? "global"), [selection, setSelection] = useState<string[]>(initialScope?.blockIds ?? []), [error, setError] = useState("");
    const document = base === "proposal" && proposal ? proposal.document : draft, selected = document.blocks.filter(b => selection.includes(b.id)).map(b => b.id), initial: CompositionBrief = initialBrief ?? { locale, instruction: "", textMode: "preserve", textSources: [], mediaSources: [], disclosureVersion: ai.disclosureVersion, acknowledgedExternalProcessing: true };
    return <Stack spacing={3}><div><h3>Affiner la composition</h3><p className="composition-preview-note">Une nouvelle proposition conservera celle-ci dans l’historique. Votre brouillon reste intact.</p></div><TextField select label="Point de départ" value={base} disabled={disabled} onChange={event => { setBase(event.target.value as "proposal" | "draft"); setSelection([]); }}>{(proposal || base === "proposal") && <MenuItem value="proposal">Proposition affichée</MenuItem>}<MenuItem value="draft">Brouillon enregistré</MenuItem></TextField><ToggleButtonGroup exclusive value={scope} onChange={(_, value) => { if (value)
        setScope(value); }} aria-label="Portée de l’affinage" disabled={disabled}><ToggleButton value="global">Toute la composition</ToggleButton><ToggleButton value="blocks">Blocs sélectionnés</ToggleButton></ToggleButtonGroup>{scope === "blocks" && <BlockList blocks={document.blocks} onDrop={() => { }} selection={{ ids: selected, onToggle: id => setSelection(ids => ids.includes(id) ? ids.filter(value => value !== id) : [...ids, id]) }} render={(block, index) => <p className="composition-block-summary"><strong>{index + 1} · {labels[block.type]}</strong>{!block.visible && " · Masqué"}</p>}/>} {error && <Alert severity="warning">{error}</Alert>}<CompositionBriefForm completionGuidance={completionGuidance} capabilities={capabilities} ai={ai} csrfCookie={csrfCookie} document={document} selectedIds={scope === "blocks" ? selected : undefined} initialBrief={initial} disabled={disabled} onSubmit={async (brief) => { if (scope === "blocks" && !selected.length) {
        setError("Choisissez au moins un bloc à affiner.");
        return;
    } setError(""); await onSubmit({ baseProposalId: base === "proposal" && proposal ? proposal.id : null, scope: scope === "blocks" ? { kind: "blocks", blockIds: selected } : { kind: "global", blockIds: [] }, brief }); }}/></Stack>;
}
