import type{EditorialBlock}from"./media";
export const immersiveLabels={
 "form-fade":"Formulaire en fondu","form-rise":"Élévation du formulaire","form-reveal":"Dévoilement du formulaire",
  "text-fade": "Fondu éditorial",
  "text-rise": "Élévation douce",
  "text-stagger": "Rythme des paragraphes",
  "media-fade": "Fondu photographique",
  "media-zoom-out": "Recul du regard",
  "media-reveal": "Dévoilement latéral",
  "split-fade": "Diptyque en fondu",
  "split-cross-reveal": "Rencontre des panneaux",
  "split-stagger": "Dialogue texte et image",
  "carousel-fade": "Entrée en fondu",
  "carousel-zoom-out": "Cadre en recul",
  "carousel-reveal": "Cadre dévoilé",
 "group-fade":"Images en fondu", "group-reveal":"Dévoilement vers le centre", "group-zoom-out":"Images en recul"
} as const;
const choices={form:["form-fade","form-rise","form-reveal"],formImage:["form-fade","form-rise","form-reveal"],"imageGroup":["group-fade","group-reveal","group-zoom-out"],"text": ["text-fade", "text-rise", "text-stagger"], "media": ["media-fade", "media-zoom-out", "media-reveal"], "textMedia": ["split-fade", "split-cross-reveal", "split-stagger"], "carousel": ["carousel-fade", "carousel-zoom-out", "carousel-reveal"]} as const;
export function appearanceChoices(block:EditorialBlock){return choices[block.type];}
export function defaultAppearance(block:EditorialBlock){return choices[block.type][0];}
export function withAppearance<T extends EditorialBlock>(block:T,id:string):T{if(!(choices[block.type]as readonly string[]).includes(id))throw Error("invalid_editorial_appearance");return{...block,immersiveAnimation:id}as T;}
