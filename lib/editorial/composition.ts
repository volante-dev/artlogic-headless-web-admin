import type{components}from"../bff/generated";
export type CompositionBrief=components["schemas"]["CompositionBrief"];
export type CompositionSubmit=components["schemas"]["SubmitComposition"];
export type CompositionCapabilities=components["schemas"]["CompositionCapabilities"];
export type CompositionRequest=components["schemas"]["CompositionRequest"];
export type CompositionProposal=components["schemas"]["CompositionProposal"];
export type CompositionCandidate=components["schemas"]["CompositionCandidate"];
export type CompositionRequestPage=components["schemas"]["CompositionRequestPage"];
export const compositionTerminal=(status:CompositionRequest["status"])=>!["queued","running"].includes(status);
