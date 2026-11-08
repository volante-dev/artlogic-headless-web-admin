# Éditeur du footer

Mode : Operate. Extension de « L'atelier de galerie » existant. Surface : `components/presentation/FooterEditor.tsx` et `Footer{Fields,ServiceEditor,GroupEditor,SocialEditor}.tsx`. Le thème public et sa référence de composition ne modifient pas le shell admin. PRODUCT.md, DESIGN.md et les sidecars sont conservés ; le drift global connu reste hors périmètre.

## Direction contract

THESIS : contribuer une fin de page commune au site, dans le brouillon de présentation, puis prévisualiser et publier explicitement.
OWN-WORLD : famille Futura PT/Gill Sans, palette ultramarine, champs et contrôles MUI existants ; groupes sobres séparés par des lignes, sans nouvelle matière.
STORY : éditer les textes par langue tout en gardant l'ordre, les destinations et la visibilité communs aux langues.
FIRST VIEWPORT : titre Footer, rappel du brouillon, Enregistrer, Prévisualiser, Publication et Langue des textes ; services, colonnes, réseaux puis signature dans le même flux.
FORM : extension code-led du monde actuel ; aucune image de produit créée, aucun éditeur de structure libre.
FINISH : documenter les états et limites avec le verdict ciblé de la revue ; la recette reste en cours.

## Composition et contraintes

L'éditeur réutilise les surfaces, typographies, espacements, boutons et champs du thème administration. Une pile verticale sépare les quatre sections ; chaque entrée est précédée d'un séparateur. Les commandes de ligne « Afficher », « Monter », « Descendre », « Supprimer » reviennent à la ligne sur petit écran. Les boutons de déplacement se désactivent aux extrémités ; la suppression rend le focus au bouton d'ajout du groupe principal ou au conteneur de la colonne pour un lien imbriqué.

| Section | Contenu | Limite et état vide |
| --- | --- | --- |
| Services | Titre traduit, description facultative traduite, destination | 0–3 ; bouton d'ajout seul quand vide, désactivé à la limite |
| Colonnes de liens | Titre traduit, liens avec destination et libellé | 0–4 colonnes ; 0–12 liens par colonne ; mêmes commandes d'ordre, visibilité et retrait |
| Réseaux sociaux | Nom traduit, URL HTTPS | 0–8 ; URL limitée à 2048 caractères dans le champ |
| Signature | Description de l'identité et sélecteur de langue | Deux cases ; logo, nom et description viennent de l'identité du site |

Les titres et libellés utilisent une limite de (160 caractères) ; la description de service (600 caractères). Une description entièrement vide devient `null`. Pour un lien de colonne vers une page, « Utiliser le nom de la page » représente `label: null` et masque le champ de libellé personnalisé ; cette option est désactivée pour une autre destination. L'ajout d'un lien initialise une destination Accueil et ce libellé automatique. Les destinations utilisent le `LinkField` existant ; cet éditeur n'ajoute ni formulaire public ni collecte.

## Langues et héritage

« Langue des textes » choisit la langue des champs, initialement la langue de référence. Ordre, affichage et destinations restent communs à toutes les langues. `LocalizedField` garde les compteurs, l'aide de repli vers la référence et les traductions archivées ; une valeur secondaire vide est enregistrée comme `null`. L'aide de repli n'est pas une preuve de rendu public : le footer public reçoit les textes résolus en amont.

Un footer absent ou `null` initialise localement une configuration vide (`schemaVersion: 1`, trois listes vides, description et langues activées). Tant qu'aucune modification n'est faite, cet état est propre et Enregistrer est désactivé ; ouvrir l'éditeur ne remplace pas à lui seul le repli legacy public. Ce dernier conserve identité et description, sans zone de langues. Les nouveaux éléments reçoivent un identifiant et sont initialement affichés.

## États et parcours

- Capacité footer absente : message d'information « La configuration du footer n'est pas activée pour ce site. » à la place de l'éditeur.
- Propre : bouton Enregistrer désactivé. Modifié : statut « Modifications non enregistrées », avertissement de sortie existant et aperçu désactivé jusqu'à sauvegarde.
- Enregistrement : désactivé si occupé, réponse incertaine ou aucun changement. La mutation conserve le mécanisme partagé de brouillon, concurrence et erreurs ; ne pas inventer de succès si elle échoue.
- Sauvegarde réussie : diagnostics footer conservés, rechargement du brouillon puis rappel « Footer enregistré. Prévisualisez-le, puis publiez la présentation pour le mettre en ligne. » La sauvegarde ne publie pas.
- Diagnostics : liste de boutons dans une alerte, de niveau avertissement si elle contient une erreur, information sinon. Chaque bouton tente d'ouvrir la langue concernée puis de focaliser le conteneur footer le plus précis disponible.
- Prévisualiser et Publication restent les commandes existantes de présentation ; les permissions, CSRF et règles de concurrence restent celles du produit.

Le sélecteur de langue a une largeur minimale de (240px), une largeur de (240px) à partir du breakpoint MUI `sm` et occupe la largeur disponible sous ce breakpoint. La rangée d'actions peut revenir à la ligne. Garder le libellé complet « Langue des textes » ; ce point correspond au correctif matériel F1.

## Preuves et limites

Les captures `.impeccable/review/footer/{desktop,mobile}.png` montrent l'éditeur de démonstration aux largeurs (1440px) et (375px), après correction F1. Le rapport `../artlogic-frontend/.impeccable/review/footer/finish-review.md` conclut à `ship` sur ce seul correctif ; les états décrits ici sont relevés dans le code, sans nouvelle exécution de tests par ce handoff. Les cibles de liens publics ajustées ensuite en CSS ne sont pas certifiées par ces captures. Aucun test matériel ni déploiement n'est affirmé ; recette toujours en cours.
