# Link in bio : édition des liens Instagram

Mode: Operate. Primary target: app/link-in-bio/page.tsx. Related targets: components/link-in-bio/.

L’écran prolonge l’atelier de galerie documenté dans DESIGN.md et le brief admin. La spec035 et contracts/ui.md fixent les quatre zones, le brouillon distinct du publié, les états de conflit, la notification et l’aperçu inactif. Cette composition est déjà arrêtée par le plan demandé ; aucune refonte du système ni nouvelle direction visuelle n’est introduite.

Direction: panneaux de travail en relief existants, Futura/Gill Sans, contrôles plats et accent ultramarine. Les posts portent les visuels plutôt que des cartes décoratives. Les aperçus publics emploient leurs propres polices dans un iframe sandboxé, sans effet sur le shell admin. Les tâches fréquentes n’attendent pas d’animation. Le mobile empile les zones et conserve les actions explicites.

Vérification prévue: Chromium/WebKit, clavier, petit écran, erreurs de champ, 412 préservant la saisie, recherche annulable, publication pending et reçu retrouvé. Les données de recette restent synthétiques et identifiées.

## Preuves de finition du 20 novembre 2026

Extension Operate US2/US3 admin uniquement. Le rapport `backend/specs/035-link-in-bio/review/us2-visual-review.md` porte `disposition: ship` ; la comparaison et ses limites sont consignées dans `us2-design-documentation.md` au même emplacement. PRODUCT.md et DESIGN.md restent les autorités ; aucune maquette approuvée ni nouvelle direction visuelle n'est ajoutée.

Captures ouvertes et validées : `.impeccable/review/link-in-bio/desktop.png` (1440 x 2033, viewport 1440 x 1000) et `mobile.png` (375 x 2749, viewport 375 x 900). Sommet du document, images et fin de grille présents, titres dégagés, contenu lisible et aucun débordement horizontal visible. Futura/Gill Sans, papier bleuté, panneaux en relief, contrôles plats, navigation et empilement mobile prolongent l'atelier existant. Brouillon/publié, actions explicites et indisponibilité du worker restent visibles.

Les contrôles Chromium 6 / WebKit 7 sont rapportés par le parent et leurs scénarios ont été lus ; cette passe documentaire ne les rejoue pas. Ils utilisent des données simulées et ne qualifient ni OAuth/Meta/worker, ni un téléphone physique, ni la parité complète de l'aperçu avec un thème public publié. Le libellé de compte reste générique ; « Texte Instagram, si disponible » est un placeholder de provenance, sans preuve d'un texte source réel. Les captures utilisent le poster synthétique préexistant et restent des preuves de recette.

Avis locaux non bloquants : petite mention « Sans visuel » à .75rem, valeurs de repli du document public d'aperçu et exceptions de fonte strictement limitées à ce document sandboxé. Aucun de ces détails ne devient un token admin. DESIGN.md et `.impeccable/design.json` restent intacts ; leur dérive préexistante est constatée sans réparation. Aucun nouveau raster de production ni mouvement global.

## Preuves finales de connexion et d’aperçu du 20 novembre 2026

Le rapport `backend/specs/035-link-in-bio/review/final-ui-review.md` conserve sa revue initiale et termine avec F1 résolu, `disposition: ship`. Le retour OAuth emploie désormais « Autorisation Instagram enregistrée. Consultez l’état des comptes ci-dessous. » : il couvre aussi une reconnexion sans impliquer de republication. La comparaison documentaire finale est dans `final-design-documentation.md`, au même emplacement.

Les six captures actuelles ont été ouvertes pour cette passe documentaire. `desktop.png` (1440 × 2453, viewport 1440 × 1000) et `mobile.png` (375 × 3450, viewport 375 × 900) montrent `/link-in-bio?instagram=connected`, la notice neutre, les quatre zones, images et fin de grille, sans débordement horizontal visible. Elles remplacent les dimensions historiques de l’appendice précédent. `preview-desktop.png` et `public-reference-desktop.png` mesurent 1440 × 2273 ; les deux variantes mobile mesurent 375 × 912. Titre, description, bandeau, douze portraits, trois colonnes et intervalles de 2 px concordent. La référence autonome utilise le CSS et les fontes publics réels mais omet volontairement les badges de type ; elle ne représente pas le shell public complet.

Le code transmet les métriques typographiques publiées et prévoit fontes intégrées, fontes importées prêtes et avertissements de repli, dans le seul document sandboxé et inactif. La fixture de parité couvre les fontes intégrées du thème par défaut ; la branche des fontes importées reste examinée par lecture de source. Le journal `/private/tmp/link-bio-admin-review-fix-035.log` atteste deux tests Chromium réussis, captures et comparaison géométrie/taille de fonte/interligne/couleur, sans réexécution ici. Les 14 cas fonctionnels Chromium antérieurs restent une preuve rapportée par le parent, antérieure à l’assertion finale de notification.

Futura/Gill Sans, panneaux de papier en relief, commandes plates, confirmations de compte, progression et fallback worker prolongent l’atelier existant. Aucune nouvelle direction visuelle ni règle globale. PRODUCT.md, DESIGN.md, sidecar, configuration, sources, tests et PNG restent préservés ; dérive préexistante DESIGN/sidecar et `buildPath` absent de la configuration constatés sans réparation. Aucun contexte/détecteur relancé. API réelle, Meta, SSO réel, worker, appareil physique, clavier/zoom complet et production restent hors qualification visuelle ; aucun déploiement ni publication.
