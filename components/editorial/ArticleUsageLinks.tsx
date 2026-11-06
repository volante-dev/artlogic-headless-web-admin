import Link from "next/link";
import {ArticleError} from "@/lib/editorial/client";
import {articleRoot,type ArticleKind} from "@/lib/editorial/article-kind";
/** Only the BFF's bounded, public/pending usage diagnostics become navigation links. */
export function ArticleUsageLinks({error}:{error:unknown}){
 if(!(error instanceof ArticleError))return null;
 const usages=error.details.filter(detail=>/^article\.(publication|news|exhibition)$/.test(detail.field)&&/^[a-f0-9-]{36}$/i.test(detail.reason));
 return usages.length?<ul>{usages.map(detail=><li key={detail.reason}><Link prefetch={false} href={articleRoot(detail.field.slice(8) as ArticleKind)+"/"+detail.reason}>Consulter l’article concerné</Link></li>)}</ul>:null;
}
