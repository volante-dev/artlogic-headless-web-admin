import type {components} from "../bff/generated";
export type Vocabulary=components["schemas"]["EditorialVocabulary"];
export type Term=components["schemas"]["EditorialTerm"];
export type Author=components["schemas"]["EditorialAuthorInput"];
export const vocabularyTag=(value:Vocabulary)=>'"editorial-vocabulary-'+value.id+'-'+value.revision+'"';
export const termTag=(value:Term)=>'"editorial-term-'+value.id+'-'+value.revision+'"';
export const taxonomyKinds={category:"Catégories",tag:"Tags",author:"Auteurs",custom:"Classement personnalisé"};
