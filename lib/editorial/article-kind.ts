export const articleKindDescriptors={
 publication:{root:"/publications",plural:"publications",label:"Publications",singular:"Publication",create:"Nouvelle publication"},
 news:{root:"/news",plural:"actualités",label:"Actualités",singular:"Actualité",create:"Nouvelle actualité"},
 exhibition:{root:"/exhibitions",plural:"expositions",label:"Expositions",singular:"Exposition",create:"Nouvelle exposition"},
}as const;
export type ArticleKind=keyof typeof articleKindDescriptors;
export function articleRoot(kind:ArticleKind){return articleKindDescriptors[kind].root;}
