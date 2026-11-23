import type {Page,Section} from "./types";
import type {EditorField,SectionDefinition} from "./manifest";
export const sectionLabels:Record<Section["type"],string>={form:"Formulaire",formImage:"Formulaire et image",heroMedia:"Hero vidéo",text:"Texte",textImage:"Texte et image",artworkSelection:"Sélection d’œuvres",articleSelection:"Sélection d’articles",editorialCards:"Cartes éditoriales",imageGallery:"Galerie d’images",contact:"Contact",artworkCatalog:"Catalogue d’œuvres",artworkDetails:"Fiche d’œuvre"};
export const variantLabels:Record<string,string>={default:"Standard",immersive:"Immersive",centered:"Centrée",standard:"Standard",narrow:"Colonne étroite",imageLeft:"Image à gauche",imageRight:"Image à droite",grid:"Grille",strip:"Bandeau",list:"Liste",compact:"Compacte",split:"Deux colonnes"};
export function getField(props:Record<string,unknown>,path:string):unknown{return path.split(".").reduce<unknown>((v,key)=>v&&typeof v==="object"?(v as Record<string,unknown>)[key]:undefined,props);}
export function setField(props:Record<string,unknown>,path:string,value:unknown){const next=structuredClone(props),parts=path.split(".");let cursor=next;for(const part of parts.slice(0,-1)){cursor[part]??=part==="focalPoint"?{x:.5,y:.5}:{};cursor=cursor[part] as Record<string,unknown>;}if(value===undefined)delete cursor[parts.at(-1)!];else cursor[parts.at(-1)!]=value;return next;}
export function createSection(definition:SectionDefinition):Section{return {id:crypto.randomUUID(),type:definition.type,schemaVersion:1,variant:definition.variants[0],hidden:false,props:definition.type==="form"?{formId:""}:definition.type==="formImage"?{formId:"",imageSide:"right",imageId:null,alt:{},focalPoint:{x:.5,y:.5}}:definition.type==="articleSelection"?{mode:"manual",kinds:["publication","news"],articleIds:[],taxonomyAssignments:[],limit:3}:{}} as Section;}
/** Copy active contributions only; archived locales remain immutable on the original identity. */
export function duplicateProps(props:Record<string,unknown>,fields:EditorField[],active:string[]):Record<string,unknown>{const copy=structuredClone(props);if(typeof copy.id==="string")copy.id=crypto.randomUUID();for(const field of fields){if(field.kind==="localizedText"&&copy[field.path])copy[field.path]=Object.fromEntries(Object.entries(copy[field.path] as object).filter(([locale])=>active.includes(locale)));if(field.kind==="list"&&Array.isArray(copy[field.path]))copy[field.path]=(copy[field.path] as Record<string,unknown>[]).map(item=>duplicateProps(item,field.fields??[],active));}return copy;}
export function duplicateSection(section:Section,definition:SectionDefinition,active:string[]):Section{return {...section,id:crypto.randomUUID(),props:duplicateProps(section.props,definition.fields,active)} as Section;}
export function moveSection(page:Page,index:number,offset:number):Page{const sections=[...page.sections],target=index+offset;if(target<0||target>=sections.length)return page;[sections[index],sections[target]]=[sections[target],sections[index]];return {...page,sections};}

export function composedSectionIds(page:Page&{teamPlacement?:import("@/lib/presentation/team-client").TeamPlacement|null}){
 const ids=page.sections.map(s=>s.id),p=page.teamPlacement;if(!p)return ids;
 const at=p.afterSectionId===null?0:ids.includes(p.afterSectionId)?ids.indexOf(p.afterSectionId)+1:ids.length;
 ids.splice(at,0,p.id);return ids;
}
export function moveComposedSection<T extends Page&{teamPlacement?:import("@/lib/presentation/team-client").TeamPlacement|null}>(page:T,id:string,delta:number):T{
 const ids=composedSectionIds(page),index=ids.indexOf(id),target=index+delta;if(index<0||target<0||target>=ids.length)return page;
 [ids[index],ids[target]]=[ids[target],ids[index]];
 if(page.pageKey==="artworkDetail"&&ids[0]===page.teamPlacement?.id)return page;
 const sections=[...page.sections].sort((a,b)=>ids.indexOf(a.id)-ids.indexOf(b.id)),teamIndex=page.teamPlacement?ids.indexOf(page.teamPlacement.id):-1;
 return {...page,sections,...(page.teamPlacement?{teamPlacement:{...page.teamPlacement,afterSectionId:teamIndex>0?ids[teamIndex-1]!:null}}:{})};
}
