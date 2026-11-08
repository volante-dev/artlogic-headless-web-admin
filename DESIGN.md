---
name: "Artlogic — Administration"
description: "Un atelier de galerie à relief doux, en Futura PT et ultramarine."
colors:
  primary: "#2952DE"
  primary-hover: "#161513"
  primary-light: "#5878E6"
  paper: "#F5F6FA"
  ink: "#161513"
  muted: "#66635E"
  control: "#E7E5DF"
  border: "#C8C7C0"
  divider: "#DAD8D2"
  accent: "#DCE4FA"
  selected: "#E8ECF7"
  white: "#FFFFFF"
  success: "#27634B"
  success-surface: "#E3ECE4"
  warning: "#6A4D1C"
  warning-surface: "#F4EDDC"
  error: "#9C302D"
  field: "rgba(231,229,223,0.45)"
typography:
  display:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  headline:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  title:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  body:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "\"futura-pt\", \"Gill Sans\", \"Gill Sans MT\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  control: "4px"
  popover: "8px"
  dialog: "12px"
  panel: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  panel: "28px"
  section: "32px"
  xl: "40px"
  page: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  navigation-item:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  workspace-tabs:
    backgroundColor: "{colors.control}"
    rounded: "{rounded.popover}"
    padding: "4px"
  chip:
    backgroundColor: "{colors.control}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "28px"
  work-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "28px"
  dialog:
    backgroundColor: "rgba(245,246,250,0.84)"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    width: "calc(100% - 32px)"
---
# Design System: Artlogic — Administration

## Overview

**Creative North Star: "L’atelier de galerie"**

Un atelier calme et tactile : les grands panneaux émergent d’un papier au subtil sous-ton bleuté, tandis que les commandes restent plates et lisibles. Le graphite porte le texte ; l’ultramarine indique l’action et le bleu pâle la sélection.

Ce système adapte les reliefs de Volante avec la palette et les typographies confirmées pour Artlogic. Il appartient exclusivement à l’administration : les thèmes et polices contribués pour le site public ne le modifient pas.

**Key Characteristics:**
- Relief blanc en haut à gauche, ombre douce en bas à droite.
- Futura PT, titres en casse normale et poids moyen.
- Contrôles compacts, focus visible, navigation persistante puis tiroir mobile.

## Colors

Le papier au subtil sous-ton bleuté, le graphite et l’ultramarine donnent une palette sobre, adaptée à une interface de gestion de galerie.

### Primary

L’ultramarine porte les actions principales, liens, focus et sélection de texte. Le graphite prend le relais au survol des boutons pleins ; le bleu éclairci intervient sur les bordures de champ au survol.

### Secondary

Le bleu pâle marque la navigation et les onglets actifs. Le fond sélection accompagne notamment l’avatar, les informations et certains survols hérités.

### Neutral

Papier au subtil sous-ton bleuté commun au fond, aux panneaux et à la navigation latérale ; graphite pour le texte ; gris chaud pour le texte secondaire. Les contrôles, bordures et séparateurs ont chacun leur tonalité. Les champs emploient un gris translucide. Le blanc contraste avec les actions pleines.

Le vert et l’ocre servent aux retours de succès et d’avertissement ; le rouge des messages hérités demeure fonctionnel. Les composants MUI conservent aussi leurs états sémantiques natifs : le rouge hérité ne remplace pas leur palette d’erreur.

**The Action and Selection Rule.** Réserver l’ultramarine aux actions et au focus ; utiliser le bleu pâle pour la sélection.

## Typography

**Display Font:** Futura PT. **Body Font:** Futura PT. La pile commune poursuit avec Gill Sans, Gill Sans MT, Helvetica Neue, Arial et sans-serif. Le kit Adobe est chargé par `app/layout.tsx` depuis `https://use.typekit.net/mah7tat.css`. Futura PT a été observée chargée pendant la recette ; Gill Sans reste une solution de repli locale.

Les titres ont une géométrie nette et un poids moyen, sans capitalisation imposée. Le frontmatter décrit les rôles réutilisés : display pour le titre de page, headline pour les sections, title pour les sous-sections, body pour les descriptions, body-small et caption pour les informations secondaires. Les paragraphes hérités se limitent à (72ch). Leur h1 passe à (2rem) sous (600px) ; le h1 MUI conserve sa taille de thème. Ne pas confondre cette différence actuelle avec une échelle responsive universelle.

**The Shared Voice Rule.** Conserver la même famille dans les pages héritées et les éditeurs MUI ; Gill Sans est un repli, pas une seconde voix simultanée.

## Layout

À partir de (900px), navigation fixe à gauche sur (280px), identité en haut et compte en bas. Le contenu principal utilise une marge gauche équivalente, un padding (48px 32px 48px 24px) et un contenu plafonné à (1400px). Les deux panneaux d’accueil deviennent une colonne sous (1200px).

Sous (900px), une barre collante d’au moins (64px) ouvre un tiroir de (280px), limité à la largeur disponible moins (32px). Les marges de travail deviennent (32px 24px), puis (24px 16px) sous (600px). Les onglets hérités se répartissent alors sur deux colonnes. Les lignes d’actions peuvent revenir à la ligne. L’identité et la fermeture du tiroir occupent les deux extrémités de leur ligne.

Le rythme associe petits écarts de contrôle et respirations de section. Les panneaux hérités utilisent le padding panel, ramené à (24px 16px) sur petit écran ; les contenus de cartes MUI utilisent lg. L’historique de synchronisation garde une séparation supérieure de section.

## Elevation & Depth

La profondeur est matérielle : fond et face des grands panneaux ont la même couleur, distingués par une lumière blanche et une ombre bleutée opposées. Les dialogues et popovers utilisent une surface translucide, un dégradé blanc discret, une bordure claire et du flou. Les valeurs exactes de ces effets sont dans le sidecar ; ce sont les valeurs du code, pas des variantes proposées. Les rampes colorées du sidecar sont uniquement des interpolations pour son panneau de prévisualisation, pas des tokens supplémentaires utilisés par l’application.

**The Work Surface Rule.** Porter le relief sur les grands panneaux de travail ; garder les boutons sans ombre.

Le dialogue entre par une légère translation et variation d’échelle. Les transitions courtes accompagnent les états, sans rebond. Le mouvement réduit neutralise animations et transitions ; la transparence réduite rend les surfaces flottantes opaques. Un repli opaque est également prévu lorsque le flou n’est pas disponible.

## Shapes

Angles légèrement adoucis pour commandes, champs, badges et liens actifs ; arrondis plus généreux pour groupes d’onglets et surfaces flottantes ; grands panneaux doux. L’avatar est circulaire (48px). Les champs et séparateurs emploient une bordure fine (1px) ; les grands panneaux restent sans bordure. Les tailles et rayons normatifs sont dans le frontmatter.

## Components

### Buttons

Faces plates et libellés en casse normale. Bouton principal ultramarine, survol graphite ; secondaire transparent et bordé, survol teinté ; action texte MUI en ultramarine. Le bouton compact MUI utilise (7px 12px), une hauteur minimale de (36px) et body-small. Les boutons hérités et icônes ont une cible minimale de (44px). Le focus commun trace un contour ultramarine (2px), généralement décalé de (3px). Aucun ripple ni élévation MUI.

### Inputs / Fields

Fond gris translucide, contour discret et padding du frontmatter. Les champs MUI sont outlined/small ; leur contour reste à (1px) au focus et s’éclaircit au survol. Les champs hérités conservent le focus extérieur commun. Garder les labels et messages d’aide visibles, y compris les erreurs et limites de saisie.

### Navigation

Liens verticaux d’au moins (54px), texte et icônes alignés, sélection bleu pâle. Une flèche SVG apparaît pour la page active, le survol ou le focus. Le tiroir mobile possède une fermeture explicite et conserve le comportement clavier fourni par MUI.

### Tabs

Un fond de contrôle regroupe les choix ; chaque sélection forme une face bleu pâle sans soulignement. Les onglets MUI gardent une hauteur minimale de (44px) dans un groupe de (52px). Les onglets hérités peuvent se réorganiser sur deux colonnes.

### Chips

Badges compacts rectangulaires adoucis, sans poids typographique renforcé. Fond neutre par défaut ; avertissement en ocre sur fond clair. Les autres états MUI conservent leurs variantes sémantiques.

### Cards / Containers

Panneaux en papier et relief double, sans bordure. Les composants MUI et les panneaux hérités partagent matière et arrondi, avec leurs espacements propres. Les listes d’historique réutilisent cette matière avec des séparateurs intérieurs.

### Dialogs

Verre dépoli, ombre diffuse et bordure blanche. Marges extérieures (16px), largeur et hauteur maximales protégées pour le petit écran. Titre (28px 28px 16px), contenu (8px 28px 24px), actions (16px 28px 24px). Les actions restent explicites ; le style ne modifie pas les confirmations métier.

## Do's and Don'ts

### Do:
- Do conserver l’identité réelle de la galerie et la séparation entre thème admin et thème du site.
- Do réutiliser les panneaux en relief, les contrôles plats et les sélections bleu pâle.
- Do garder les libellés français, les états métier et un focus visible au clavier.
- Do permettre le retour à la ligne et réduire le mouvement selon les préférences système.

### Don't:
- Don’t importer le logo Tournesol ni les couleurs historiques de la référence.
- Don’t appliquer les polices ou couleurs du site contribué au shell de l’administration.
- Don’t ajouter une ombre aux boutons ni couvrir les panneaux en relief de gradients.
- Don’t masquer un avertissement ou un état désactivé pour simplifier visuellement un écran.


## Page du galeriste

Dans le constructeur de pages existant, les réglages « Nom et adresse » précèdent les sections. Nom/slug sont édités dans la langue courante, avec repli explicite et diagnostics attachés aux champs ; activation et présence dans la navigation sont deux contrôles distincts. Sauvegarde, aperçu privé et publication gardent les mêmes commandes. Sur mobile, les champs et les contrôles se placent à la suite, sans nouvelle surface ni nouvelle couleur. Le titre de page, le nom de la galerie et le thème de l’admin restent indépendants.

## Navigation du site —016

Même palette, Futura/Gill Sans et contrôles MUI que le reste de l’admin. Sept lignes stables, préférence « Afficher » distincte de la disponibilité publique, poignée et commandes Monter/Descendre accessibles. Écran indépendant du brouillon de présentation, message d’application immédiate, Annuler/Enregistrer et comparaison explicite après conflit ou réponse incertaine. Aucun sélecteur de langue ni éditeur de lien supplémentaire.


## Classement des œuvres — 021

Mode Operate : grille classique/masonry selon le réglage public, cartes standard/2×2 et légendes toujours accessibles ; commandes distinctes du lien de fiche. Réserve latérale de 300px, défilement propre et compteur, puis sous la grille sur petit écran. Le panneau de réserve utilise une variante intentionnellement plus légère du relief établi : ombre rgba(41,55,88,.10), lumière blanche décalée ; le proxy de déplacement utilise rgba(41,55,88,.20) pour signaler sa prise. Ce sont des niveaux de profondeur de la matière existante, sans nouvelle couleur sémantique.

Pointer Events sur poignée, destination avant/après et dialogue global « Placer… ». Flip 220ms power2.out à confirmation du pointeur, retour proxy 140ms ; clavier et saisie directs, mouvement réduit sans déplacement spatial. Aucun stagger/inertie ni attente d’animation pour utiliser les commandes. Un titre secondaire facultatif reste une contribution de brouillon, avec référence Artlogic lisible et publication explicite.
