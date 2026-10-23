import {backendMedia,failure} from "@/lib/bff/client";
import {requiredSession} from "@/lib/bff/sync-runs";
export async function GET(_request:Request,{params}:{params:Promise<{mediaId:string}>}){try{return await backendMedia((await params).mediaId,await requiredSession());}catch(error){return failure(error);}}
