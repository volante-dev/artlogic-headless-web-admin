# Réception des formulaires — extension de l’administration

Mode: Operate. Scope: `/forms/reception`, détail de demande, filtres, vues personnelles, actions en lot, export privé, objets Expertise et notes. Le parcours et les états ont été validés dans la spec017 et le démarrage de son implémentation. Extension de l’inbox Contact existante, sans changement d’identité ni nouveau choix de stack.

THESIS: Une réception commune qui permet d’identifier les nouvelles demandes, lire leur contenu puis décider du traitement sans confondre lecture, traitement et livraison d’e-mail.

OWN-WORLD: Hériter de DESIGN.md et du CSS actuel : papier bleuté, panneaux en relief, commandes plates, Futura/Gill Sans, graphite et ultramarine. Les captures Contact historiques gouvernent les proportions mais leur ancien fond chaud ne remplace pas le papier bleuté confirmé depuis.

STORY: Filtrer les demandes ; ouvrir un dossier ; le marquer lu seulement après affichage visible ; affecter, traiter, noter ou supprimer explicitement. Les vues personnelles retrouvent les filtres. Exporter prépare un CSV privé à téléchargement temporaire. Les anciens liens Contact restent joignables pendant la reprise.

FIRST VIEWPORT: Shell existant. Titre « Demandes reçues », accès bibliothèque et anciennes demandes. Un panneau de travail : filtres repliables sur mobile, sélection explicite et liste lisible avec formulaire, date, origine, lecture et traitement. Le détail consacre la grande colonne aux réponses/objets et place les actions dans une colonne latérale sur desktop ; mobile les place dans le fil sans défilement horizontal.

FORM: Code-led, extension précisément cadrée de l’inbox existante. Pas de maquette ni nouvelle identité à valider. Liste sémantique, noms de champs de la version reçue, images privées avec chargement borné, aucune introduction animée. Aucun chiffre de synthèse inventé. Erreurs locales sans effacement du dossier ni de la saisie. Traitement quotidien au clavier et au toucher.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Validation: 1440 et375px, zoom, clavier, liste vide/filtrée, texte long, détail classique/Expertise, conflits ETag, export pending/ready/failed et suppression confirmée. Captures de données synthétiques uniquement. Le rapport doit distinguer les états réellement capturés des recettes encore en attente.
