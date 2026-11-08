# Admin Artlogic — adaptation du système Volante

Mode: Operate. Périmètre: shell, connexion, accueil, catalogue, synchronisation, contenu, présentation et dialogues. Référence explicite: `/Users/william.r/Perso/volante-moderator-admin`, tokens actuels et géométrie des captures Tournesol. Les captures roses sont historiques. La clarification utilisateur conserve la matière et remplace les fontes par Futura/Gill Sans ainsi que la palette par une proposition proche d’Artlogic.

## Direction contract

THESIS: Transposer l’atelier Volante aux tâches Artlogic, avec une seule grammaire pour les écrans hérités et les nouveaux éditeurs.

OWN-WORLD: Fond et panneaux blanc bleuté #F5F6FA, relief blanc haut-gauche / ombre bas-droite, ultramarine #2952DE, graphite #161513, sélection bleu pâle #DCE4FA. Futura PT via le même kit Adobe, Gill Sans en repli, titres500 en casse normale. Boutons plats4px, panneaux16px, dialogues frostés12px.

STORY: Identifier la galerie, choisir œuvres ou présentation, contribuer, vérifier puis publier ; conserver tous les retours et garde-fous existants.

FIRST VIEWPORT: Navigation280px à gauche, identité en haut et compte en bas. Zone de travail à droite avec titre36px, description17px et panneaux de travail. Mobile: barre64px et tiroir clavier/Escape. Onglets groupés à sélection bleu pâle ; listes et contrôles conservent leurs états.

FORM: Référence imposée par l’utilisateur, prioritaire sur le tirage7e7799b2 (mode dégradé sans challengers). Pas de proposition concurrente ni de maquette générée : le code source de référence gouverne les valeurs, ses captures gouvernent la géométrie. Identité de galerie conservée ; la clarification utilisateur gouverne les différences de couleur et de typographie.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Palette vérifiée le28 octobre2026 : https://artlogic.net/ ; CSS public https://cdn.prod.website-files.com/69807ded00401fa19e141988/css/artlogic-dev.shared.423f413f5.min.css : graphite #161513, ultramarine #2952de, canvas #eeede8. Le fond a été ajusté à #F5F6FA à la demande de l’utilisateur pour retrouver le sous-ton bleuté de Tournesol ; les ombres de relief suivent rgba(41,55,88,0.13). Les autres couleurs et les typographies Artlogic restent celles du système approuvé.


## Surface Œuvres — 021

Grille dominante/réserve latérale défilante, compteurs contextuels et Placer… pour les destinations hors portion. Titres et commandes visibles sans survol, disponibilité distincte du choix de publication. La réserve passe sous la grille sur mobile ; les 2×2 restent conditionnés au mode et aux colonnes disponibles. Les erreurs/conflits/incertitudes ne sont jamais présentés comme un succès. Motion et variantes de profondeur documentées dans DESIGN.md ; validation et captures dans backend/specs/021-admin-artwork-grid/review depuis le workspace.
