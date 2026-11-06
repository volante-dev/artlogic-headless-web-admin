import type {components} from "../../lib/bff/generated";
export type Draft=components["schemas"]["PresentationDraft"];
export type DraftPage=components["schemas"]["PresentationDraftPage"];
export type Theme=components["schemas"]["PresentationTheme"];
export type Overrides=components["schemas"]["PresentationThemeOverrides"];
export type Page=components["schemas"]["PresentationPage"];
export type PageKey=Page["pageKey"];
export type Section=components["schemas"]["PresentationSection"];
export type Asset=components["schemas"]["PresentationAsset"];
export type Validation=components["schemas"]["PresentationValidation"];
export type Release=components["schemas"]["PresentationRelease"];
export type Capabilities=components["schemas"]["PresentationCapabilities"];
export const pageLabels:Record<PageKey,string>={galerist:"Le galeriste",home:"Accueil",news:"Actualités",artworks:"Œuvres",exhibitions:"Expositions",publications:"Publications",expertise:"Demande d’expertise",contact:"Contact",artworkDetail:"Fiche d’œuvre"};
export const reasonLabels:Record<Validation["diagnostics"][number]["reason"],string>={empty_footer_group:"Cette colonne ne contient aucun lien actif et ne sera pas affichée.",reserved_slug:"Cette adresse est réservée à une rubrique du site.",invalid_slug:"Choisissez une adresse valide en un seul segment.",empty_page:"Ajoutez au moins une section visible avec un contenu affichable.",required:"Renseignez la valeur de référence.",unsupported_locale:"Cette langue est inactive.",unsupported_variant:"Variante indisponible.",incompatible_schema:"Ce composant nécessite une mise à jour.",duplicate_id:"Identifiant de section ou d’élément dupliqué.",missing_required_block:"Le bloc métier obligatoire manque.",invalid_placement:"Ce bloc n’est pas autorisé sur cette page.",invalid_link:"Corrigez la destination du lien.",asset_not_ready:"Le média n’est pas prêt.",asset_not_found:"Le média n’est plus disponible.",poster_required:"Choisissez une image d’attente pour la vidéo.",font_weight_missing:"La graisse demandée manque dans cette famille.",font_glyph_missing:"La police ne couvre pas les caractères requis.",contrast_insufficient:"Le contraste est insuffisant pour publier.",artwork_unavailable:"Une œuvre n’est plus visible sur le site.",aggregate_too_large:"Le contenu dépasse la taille autorisée."};

export type FooterConfiguration=components["schemas"]["PresentationFooterConfiguration"];
