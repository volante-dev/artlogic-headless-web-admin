"use client";
import {articleRoot} from "@/lib/editorial/article-kind";
import Link from "next/link";
import {Alert} from "@mui/material";
import type {components} from "@/lib/bff/generated";
export function TrashArticleList({items}:{items:components["schemas"]["EditorialArticleSummary"][]}){
 return <><Alert severity="info" sx={{mb:3}}>La restauration remet l’article en brouillon. Après l’échéance indiquée, l’article et son historique peuvent être effacés par le nettoyage automatique.</Alert><div className="editorial-table-scroll"><table className="editorial-table"><thead><tr><th>Article</th><th>Mis à la corbeille</th><th>Restauration jusqu’au</th><th>Action</th></tr></thead><tbody>{items.map(article=><tr key={article.id}><td>{article.title||"Sans titre"}</td><td>{article.trashedAt?<time dateTime={article.trashedAt}>{new Intl.DateTimeFormat("fr",{dateStyle:"medium"}).format(new Date(article.trashedAt))}</time>:"—"}</td><td>{article.purgeAfter?<time dateTime={article.purgeAfter}>{new Intl.DateTimeFormat("fr",{dateStyle:"medium",timeStyle:"short"}).format(new Date(article.purgeAfter))}</time>:"—"}</td><td><Link href={articleRoot(article.kind)+"/"+article.id} prefetch={false} aria-label={"Consulter et restaurer « "+(article.title||"Sans titre")+" »"}>Consulter et restaurer</Link></td></tr>)}</tbody></table></div></>;
}
