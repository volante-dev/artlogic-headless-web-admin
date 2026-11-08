export const scopeLabels:Record<string,{label:string;description:string}>={
 "site.read":{label:"Consulter le site",description:"Lire les contenus, les brouillons et les réglages autorisés."},
 "site.draft":{label:"Préparer et enregistrer des brouillons",description:"Préparer des propositions et enregistrer les modifications demandées."},
 "site.publish":{label:"Publier des modifications",description:"Appliquer une publication explicitement demandée et vérifiée."},
 "site.sync":{label:"Synchroniser le catalogue",description:"Lancer une synchronisation Artlogic et en suivre le résultat."},
 "site.connector.manage":{label:"Gérer les connexions",description:"Révoquer d’autres connexions ou désactiver le connecteur."}
};
export function csrfValue(name:string){return decodeURIComponent(document.cookie.split("; ").find(v=>v.startsWith(name+"="))?.slice(name.length+1)??"");}
