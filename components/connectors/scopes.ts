export const scopeLabels:Record<string,{label:string;description:string}>={
 "site.read":{label:"Consulter le site",description:"Lire les contenus, les brouillons et les réglages autorisés."},
 "site.draft":{label:"Préparer et enregistrer des brouillons",description:"Préparer des propositions et enregistrer les modifications demandées."},
 "site.publish":{label:"Publier des modifications",description:"Appliquer une publication explicitement demandée et vérifiée."},
 "site.sync":{label:"Synchroniser le catalogue",description:"Lancer une synchronisation Artlogic et en suivre le résultat."},
 "site.inventory.read":{label:"Consulter l’inventaire",description:"Lire les œuvres, les images et la logistique autorisées, sans accès financier implicite."},
 "site.inventory.write":{label:"Modifier l’inventaire",description:"Enregistrer des fiches et des opérations autorisées, sans publication automatique."},
 "site.inventory.publish":{label:"Publier les œuvres",description:"Publier ou dépublier explicitement les fiches et les images sélectionnées."},
 "site.inventory.finance":{label:"Accéder aux données financières",description:"Consulter et gérer les coûts, les ventes et les documents, avec une affectation administrateur."},
 "site.inventory.manage":{label:"Gérer l’inventaire",description:"Gérer les accès, les imports et la migration, avec une affectation administrateur."},
 "site.connector.manage":{label:"Gérer les connexions",description:"Révoquer d’autres connexions ou désactiver le connecteur."}
};
export function csrfValue(name:string){return decodeURIComponent(document.cookie.split("; ").find(v=>v.startsWith(name+"="))?.slice(name.length+1)??"");}
