import {backendSiteLogo,failure} from "@/lib/bff/client";
import {requiredSession} from "@/lib/bff/sync-runs";
export async function GET(_request:Request,{params}:{params:Promise<{logoId:string}>}){try{return await backendSiteLogo((await params).logoId,await requiredSession());}catch(error){return failure(error);}}
