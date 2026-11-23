import type {components} from "../bff/generated";
import {presentationFetch,PresentationError} from "@/components/presentation/usePresentationDraft";
export type TeamPerson=components["schemas"]["OurTeamPerson"];
export type TeamDraft=components["schemas"]["OurTeamTeamDraft"];
export type TeamPlacement=components["schemas"]["OurTeamTeamPlacement"];
export type TeamState=components["schemas"]["OurTeamTeamEditorState"];
export async function teamCapabilities(){try{return (await presentationFetch<components["schemas"]["OurTeamCapabilities"]>("/team/capabilities",{signal:AbortSignal.timeout(3000)})).data;}catch(error){if(error instanceof PresentationError&&error.status===404)return {schemaVersion:1 as const,available:false,writable:false,maxWriteBytes:262144 as const};throw error;}}
