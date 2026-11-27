// Generated from the canonical feature038 runtime registry. Legacy002 is unchanged.
export const runtimeMessageCatalogueId="runtime-038-ed22df152e1b8acd9a85ada5fe541c7ff496442d29dbd60925c89c972e9162a9";
export const legacyMessageCatalogueId="legacy-002-aa17cfc4c0b45e997717fde5d5ed96b0170694c90911f5885ab34292027b1de1";
export const runtimeSupportedCatalogueIds=["runtime-038-ed22df152e1b8acd9a85ada5fe541c7ff496442d29dbd60925c89c972e9162a9","runtime-038-3362a556ff6b9eb683731f6c39feb651a37f010ce14a8c34b8b896bf2a70d23e"] as const;
export const runtimeMessageDefinitions=[
  {
    "id": "artwork.artist",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Libellé artiste"
  },
  {
    "id": "artwork.back",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Retour au catalogue"
  },
  {
    "id": "artwork.dimensions",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Libellé dimensions"
  },
  {
    "id": "artwork.imageAlt",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Texte alternatif de secours"
  },
  {
    "id": "artwork.imageUnavailable",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Image indisponible"
  },
  {
    "id": "artwork.loading",
    "module": "core",
    "group": "artwork",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement de la fiche"
  },
  {
    "id": "artwork.medium",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Libellé technique"
  },
  {
    "id": "artwork.nextView",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vue suivante"
  },
  {
    "id": "artwork.previousView",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vue précédente"
  },
  {
    "id": "artwork.provenance",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Provenance"
  },
  {
    "id": "artwork.selectionBrowse",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Parcourir les œuvres"
  },
  {
    "id": "artwork.selectionHeading",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Œuvres sélectionnées"
  },
  {
    "id": "artwork.selectionPosition",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {
      "index": {
        "type": "number",
        "required": true,
        "mustAppear": true
      },
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Œuvre {index} sur {count}"
  },
  {
    "id": "artwork.unknownArtist",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Artiste absent"
  },
  {
    "id": "artwork.unspecified",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Valeur absente"
  },
  {
    "id": "artwork.untitled",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre absent"
  },
  {
    "id": "artwork.year",
    "module": "core",
    "group": "artwork",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Libellé année"
  },
  {
    "id": "catalog.empty",
    "module": "core",
    "group": "catalog",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Catalogue vide"
  },
  {
    "id": "catalog.errorMessage",
    "module": "core",
    "group": "catalog",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message erreur catalogue"
  },
  {
    "id": "catalog.errorTitle",
    "module": "core",
    "group": "catalog",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre erreur catalogue"
  },
  {
    "id": "catalog.loading",
    "module": "core",
    "group": "catalog",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement du catalogue"
  },
  {
    "id": "catalog.next",
    "module": "core",
    "group": "catalog",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page suivante"
  },
  {
    "id": "catalog.restarted",
    "module": "core",
    "group": "catalog",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Pagination réinitialisée"
  },
  {
    "id": "catalog.retry",
    "module": "core",
    "group": "catalog",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "catalog.unavailableTitle",
    "module": "core",
    "group": "catalog",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre de page indisponible"
  },
  {
    "id": "commerce.acceptTerms",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "J’accepte les conditions générales de vente"
  },
  {
    "id": "commerce.addedToCart",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ajouté au panier"
  },
  {
    "id": "commerce.addToCart",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ajouter au panier"
  },
  {
    "id": "commerce.billingAddress",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Adresse de facturation"
  },
  {
    "id": "commerce.cart",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Panier"
  },
  {
    "id": "commerce.checking",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vérification en cours"
  },
  {
    "id": "commerce.checkout",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commander"
  },
  {
    "id": "commerce.close",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer"
  },
  {
    "id": "commerce.confirmed",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commande confirmée"
  },
  {
    "id": "commerce.continue",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer"
  },
  {
    "id": "commerce.continueShopping",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer mes achats"
  },
  {
    "id": "commerce.cookieAccept",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Tout accepter"
  },
  {
    "id": "commerce.cookieCustomize",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Personnaliser"
  },
  {
    "id": "commerce.cookiePreferences",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Préférences de confidentialité"
  },
  {
    "id": "commerce.cookieReject",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Tout refuser"
  },
  {
    "id": "commerce.cookieSave",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Enregistrer mes choix"
  },
  {
    "id": "commerce.delivered",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commande livrée"
  },
  {
    "id": "commerce.email",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Adresse e-mail"
  },
  {
    "id": "commerce.emptyCart",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Votre panier est vide"
  },
  {
    "id": "commerce.externalMedia",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Autorisez les médias externes pour lire ce contenu"
  },
  {
    "id": "commerce.mockPayment",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Paiement simulé"
  },
  {
    "id": "commerce.notFound",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commande introuvable avec ces informations"
  },
  {
    "id": "commerce.orderNumber",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Numéro de commande"
  },
  {
    "id": "commerce.orderTracking",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Suivi de commande"
  },
  {
    "id": "commerce.pay",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Payer"
  },
  {
    "id": "commerce.paymentDeclined",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Le paiement a été refusé"
  },
  {
    "id": "commerce.paymentPending",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Paiement en cours de vérification"
  },
  {
    "id": "commerce.privacy",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Confidentialité"
  },
  {
    "id": "commerce.processing",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commande en traitement"
  },
  {
    "id": "commerce.quantity",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Quantité"
  },
  {
    "id": "commerce.remove",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Retirer"
  },
  {
    "id": "commerce.retry",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "commerce.reviewOrder",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier ma commande"
  },
  {
    "id": "commerce.salesSuspended",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Les nouvelles commandes sont momentanément suspendues"
  },
  {
    "id": "commerce.sameBilling",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Utiliser la même adresse pour la facturation"
  },
  {
    "id": "commerce.saved",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Modifications enregistrées"
  },
  {
    "id": "commerce.saving",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Enregistrement en cours"
  },
  {
    "id": "commerce.shipped",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commande expédiée"
  },
  {
    "id": "commerce.shippingAddress",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Adresse de livraison"
  },
  {
    "id": "commerce.store",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Store"
  },
  {
    "id": "commerce.subtotal",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Sous-total"
  },
  {
    "id": "commerce.terms",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Conditions générales de vente"
  },
  {
    "id": "commerce.unavailable",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ce produit est indisponible"
  },
  {
    "id": "commerce.withdrawal",
    "module": "store",
    "group": "commerce",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Déclarer une rétractation"
  },
  {
    "id": "contact.artworkCta",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Demander des informations"
  },
  {
    "id": "contact.artworkHeading",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Œuvre concernée"
  },
  {
    "id": "contact.artworkSubject",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Informations sur une œuvre"
  },
  {
    "id": "contact.artworkUnavailable",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Cette œuvre ne peut pas être associée à votre demande."
  },
  {
    "id": "contact.backArtwork",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Revenir à l’œuvre"
  },
  {
    "id": "contact.confirmationHelp",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "La galerie pourra vous répondre à l’adresse fournie."
  },
  {
    "id": "contact.confirmed",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Votre demande a été enregistrée."
  },
  {
    "id": "contact.conflict",
    "module": "core",
    "group": "contact",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette intention correspond à une autre saisie. Commencez une nouvelle demande ex"
  },
  {
    "id": "contact.demonstration",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Démonstration : aucune demande ne sera envoyée."
  },
  {
    "id": "contact.disabled",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Le formulaire de contact est momentanément indisponible."
  },
  {
    "id": "contact.email",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Adresse e-mail"
  },
  {
    "id": "contact.general",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer en contact général"
  },
  {
    "id": "contact.invalid",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez les champs signalés."
  },
  {
    "id": "contact.invalidEmail",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Saisissez une adresse e-mail valide."
  },
  {
    "id": "contact.leaveConfirm",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Changer de langue abandonnera les champs non envoyés. Continuer ?"
  },
  {
    "id": "contact.limits",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Nom :120 caractères. E-mail :254. Sujet :160. Message :5 000."
  },
  {
    "id": "contact.load",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement du formulaire…"
  },
  {
    "id": "contact.message",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Message"
  },
  {
    "id": "contact.name",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Nom"
  },
  {
    "id": "contact.newConfirm",
    "module": "core",
    "group": "contact",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commencer une nouvelle demande ? Si une précédente a été reçue sans confirmation"
  },
  {
    "id": "contact.newEnquiry",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Commencer une nouvelle demande"
  },
  {
    "id": "contact.notificationArtwork",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Œuvre"
  },
  {
    "id": "contact.notificationGallery",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Galerie"
  },
  {
    "id": "contact.notificationGeneral",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Contact général"
  },
  {
    "id": "contact.notificationHeading",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Nouvelle demande"
  },
  {
    "id": "contact.notificationLocale",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Langue du visiteur"
  },
  {
    "id": "contact.notificationType",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Type de demande"
  },
  {
    "id": "contact.privacy",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vos coordonnées servent à répondre à votre demande."
  },
  {
    "id": "contact.privacyLink",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Confidentialité"
  },
  {
    "id": "contact.rateLimited",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Trop de demandes. Attendez le délai indiqué avant de réessayer."
  },
  {
    "id": "contact.recover",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier la prise en compte"
  },
  {
    "id": "contact.recovering",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vérification de la prise en compte…"
  },
  {
    "id": "contact.reference",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Référence de la demande"
  },
  {
    "id": "contact.required",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Tous les champs sont obligatoires."
  },
  {
    "id": "contact.requiredError",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ce champ est obligatoire."
  },
  {
    "id": "contact.retryAfter",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Secondes avant nouvel essai"
  },
  {
    "id": "contact.sending",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Enregistrement de votre demande…"
  },
  {
    "id": "contact.sentCopy",
    "module": "core",
    "group": "contact",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "L’enregistrement est confirmé ; il ne constitue pas une confirmation de livraiso"
  },
  {
    "id": "contact.subject",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Sujet"
  },
  {
    "id": "contact.submit",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Envoyer la demande"
  },
  {
    "id": "contact.tooLong",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "La longueur autorisée est dépassée."
  },
  {
    "id": "contact.unavailable",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Impossible de confirmer l’enregistrement. Conservez votre saisie et réessayez."
  },
  {
    "id": "contact.unknownReceipt",
    "module": "core",
    "group": "contact",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Aucune confirmation retrouvée. Aucun nouvel envoi automatique n’a été effectué."
  },
  {
    "id": "core.externalMediaBlocked",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {
      "provider": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Cette vidéo {provider} reste bloquée tant que les médias externes ne sont pas autorisés."
  },
  {
    "id": "core.readWithoutJavaScript",
    "module": "core",
    "group": "accessibility",
    "maxLength": 160,
    "parameters": {},
    "fallback": "none",
    "label": "Lien de lecture sans JavaScript"
  },
  {
    "id": "editorial.allCategories",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Toutes les catégories"
  },
  {
    "id": "editorial.artworkTitle",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre de l’œuvre (libellé)"
  },
  {
    "id": "editorial.authorProfile",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "À propos de l’auteur"
  },
  {
    "id": "editorial.authors",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Auteurs"
  },
  {
    "id": "editorial.autoplayBlocked",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Lancez la lecture pour découvrir la vidéo."
  },
  {
    "id": "editorial.carousel",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Galerie de médias"
  },
  {
    "id": "editorial.close",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer"
  },
  {
    "id": "editorial.filterLimit",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Limite des classements sélectionnés"
  },
  {
    "id": "editorial.filters",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Filtres"
  },
  {
    "id": "editorial.fullscreen",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Plein écran"
  },
  {
    "id": "editorial.imageDialog",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Image agrandie"
  },
  {
    "id": "editorial.imageUnavailable",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ce visuel n’est pas disponible."
  },
  {
    "id": "editorial.loadError",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Les articles ne sont pas disponibles pour le moment."
  },
  {
    "id": "editorial.nextPage",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page suivante"
  },
  {
    "id": "editorial.nextSlide",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Slide suivante"
  },
  {
    "id": "editorial.noResults",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Aucun article ne correspond à votre recherche."
  },
  {
    "id": "editorial.page",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page"
  },
  {
    "id": "editorial.pause",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Mettre en pause"
  },
  {
    "id": "editorial.pauseCarousel",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Arrêter le défilement"
  },
  {
    "id": "editorial.play",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Lire la vidéo"
  },
  {
    "id": "editorial.previousPage",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page précédente"
  },
  {
    "id": "editorial.previousSlide",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Slide précédente"
  },
  {
    "id": "editorial.publishedOn",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "publié le"
  },
  {
    "id": "editorial.readArticle",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Lire l’article"
  },
  {
    "id": "editorial.related",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "À lire aussi"
  },
  {
    "id": "editorial.resetSearch",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Réinitialiser la recherche"
  },
  {
    "id": "editorial.resumeCarousel",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Reprendre le défilement"
  },
  {
    "id": "editorial.retry",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "editorial.search",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Rechercher un article"
  },
  {
    "id": "editorial.searchTerms",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Rechercher un classement"
  },
  {
    "id": "editorial.slide",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Slide"
  },
  {
    "id": "editorial.soundOff",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Couper le son"
  },
  {
    "id": "editorial.soundOn",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Activer le son"
  },
  {
    "id": "editorial.videoUnavailable",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "La vidéo est indisponible."
  },
  {
    "id": "editorial.zoomImage",
    "module": "core",
    "group": "editorial",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Agrandir l’image"
  },
  {
    "id": "error.artworkNotFoundMessage",
    "module": "core",
    "group": "errors",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message œuvre introuvable"
  },
  {
    "id": "error.artworkNotFoundTitle",
    "module": "core",
    "group": "errors",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre œuvre introuvable"
  },
  {
    "id": "error.pageNotFoundMessage",
    "module": "core",
    "group": "errors",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message page introuvable"
  },
  {
    "id": "error.pageNotFoundTitle",
    "module": "core",
    "group": "errors",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre page introuvable"
  },
  {
    "id": "error.presentationMessage",
    "module": "core",
    "group": "errors",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message de présentation indisponible"
  },
  {
    "id": "error.presentationTitle",
    "module": "core",
    "group": "errors",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Présentation indisponible"
  },
  {
    "id": "error.viewArtworks",
    "module": "core",
    "group": "errors",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Lien vers les œuvres"
  },
  {
    "id": "forms.expertise.contact",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Coordonnées"
  },
  {
    "id": "forms.expertise.contactCompact",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Contact"
  },
  {
    "id": "forms.expertise.description",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Description"
  },
  {
    "id": "forms.expertise.dimensions",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Dimensions"
  },
  {
    "id": "forms.expertise.photoCount",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "{count} photo(s)"
  },
  {
    "id": "forms.expertise.photos",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Photos"
  },
  {
    "id": "forms.expertise.photoUnit",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "photo(s)"
  },
  {
    "id": "forms.expertise.provenance",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Provenance"
  },
  {
    "id": "forms.expertise.review",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Récapitulatif"
  },
  {
    "id": "forms.expertise.reviewCompact",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Résumé"
  },
  {
    "id": "forms.unavailable",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce formulaire est indisponible."
  },
  {
    "id": "gallery.backToImages",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Revenir aux images"
  },
  {
    "id": "gallery.closeArtwork",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer la fiche de l’œuvre"
  },
  {
    "id": "gallery.description",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Description"
  },
  {
    "id": "gallery.mobileGestureHelp",
    "module": "core",
    "group": "gallery",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Navigation tactile entre les vues"
  },
  {
    "id": "gallery.nextPage",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page suivante"
  },
  {
    "id": "gallery.noResults",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Aucune œuvre ne correspond à cette recherche."
  },
  {
    "id": "gallery.of",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "sur"
  },
  {
    "id": "gallery.openInformation",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Voir les informations"
  },
  {
    "id": "gallery.opening",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ouverture de l’œuvre…"
  },
  {
    "id": "gallery.page",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page"
  },
  {
    "id": "gallery.paginationLabel",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Pagination des œuvres"
  },
  {
    "id": "gallery.panHelp",
    "module": "core",
    "group": "gallery",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Déplacement dans l’image sur mobile"
  },
  {
    "id": "gallery.presentation",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Présentation"
  },
  {
    "id": "gallery.previousPage",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Page précédente"
  },
  {
    "id": "gallery.progressLabel",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vues de l’œuvre"
  },
  {
    "id": "gallery.restart",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Revenir à la première page"
  },
  {
    "id": "gallery.revalidate",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vérification de la disponibilité…"
  },
  {
    "id": "gallery.searchClear",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Effacer la recherche"
  },
  {
    "id": "gallery.searchLabel",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Rechercher par titre ou artiste"
  },
  {
    "id": "gallery.searchSubmit",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Rechercher"
  },
  {
    "id": "gallery.typeClear",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Effacer les filtres"
  },
  {
    "id": "gallery.typeEmpty",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Aucun type disponible"
  },
  {
    "id": "gallery.typeFilters",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Filtres"
  },
  {
    "id": "gallery.typeHeading",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Types d’œuvres"
  },
  {
    "id": "gallery.typeLimit",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Limite de types sélectionnés"
  },
  {
    "id": "gallery.typeNormalized",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Certains filtres ne sont plus disponibles et ont été retirés."
  },
  {
    "id": "gallery.typeUnavailable",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Les filtres sont momentanément indisponibles."
  },
  {
    "id": "gallery.unavailable",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Cette œuvre n’est plus disponible."
  },
  {
    "id": "gallery.view",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vue"
  },
  {
    "id": "gallery.viewWholeImage",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Voir l’image entière"
  },
  {
    "id": "gallery.zoomHelp",
    "module": "core",
    "group": "gallery",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Déplacement dans l’image agrandie"
  },
  {
    "id": "gallery.zoomIn",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Agrandir l’image ×2"
  },
  {
    "id": "gallery.zoomOut",
    "module": "core",
    "group": "gallery",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Revenir à la taille normale"
  },
  {
    "id": "header.closeMenu",
    "module": "core",
    "group": "header",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer le menu"
  },
  {
    "id": "header.homeLabel",
    "module": "core",
    "group": "header",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Retour à l’accueil"
  },
  {
    "id": "header.languageLabel",
    "module": "core",
    "group": "header",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Choix de langue"
  },
  {
    "id": "header.navigationLabel",
    "module": "core",
    "group": "header",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Navigation principale"
  },
  {
    "id": "header.openMenu",
    "module": "core",
    "group": "header",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Ouvrir le menu"
  },
  {
    "id": "header.skipToContent",
    "module": "core",
    "group": "header",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Accès au contenu"
  },
  {
    "id": "language.retiredMessage",
    "module": "core",
    "group": "language",
    "maxLength": 300,
    "parameters": {},
    "fallback": "none",
    "label": "Langue retirée"
  },
  {
    "id": "language.returnToMain",
    "module": "core",
    "group": "language",
    "maxLength": 300,
    "parameters": {},
    "fallback": "none",
    "label": "Lien vers la langue principale"
  },
  {
    "id": "legal.printCopy",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Imprimer ou conserver une copie"
  },
  {
    "id": "nav.artworks",
    "module": "core",
    "group": "navigation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Œuvres"
  },
  {
    "id": "nav.contact",
    "module": "core",
    "group": "navigation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Contact"
  },
  {
    "id": "nav.exhibitions",
    "module": "core",
    "group": "navigation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Expositions"
  },
  {
    "id": "nav.expertise",
    "module": "core",
    "group": "navigation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Demande d’expertise"
  },
  {
    "id": "nav.news",
    "module": "core",
    "group": "navigation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Actualités"
  },
  {
    "id": "nav.publications",
    "module": "core",
    "group": "navigation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Publications"
  },
  {
    "id": "notification.commerce.carrier",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {
      "carrier": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Transporteur : {carrier}"
  },
  {
    "id": "notification.commerce.confirmed",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Votre commande est confirmée. Vous recevrez un message lors de son expédition."
  },
  {
    "id": "notification.commerce.documentAcceptedTerms",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Conditions acceptées"
  },
  {
    "id": "notification.commerce.documentBilling",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Facturation"
  },
  {
    "id": "notification.commerce.documentCreditAmount",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Montant de l’avoir"
  },
  {
    "id": "notification.commerce.documentCreditNote",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Avoir"
  },
  {
    "id": "notification.commerce.documentGross",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Montant TTC"
  },
  {
    "id": "notification.commerce.documentInvoice",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Facture"
  },
  {
    "id": "notification.commerce.documentNet",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Montant HT"
  },
  {
    "id": "notification.commerce.documentOriginal",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Pièce d’origine :"
  },
  {
    "id": "notification.commerce.documentProduct",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Produit"
  },
  {
    "id": "notification.commerce.documentQuantity",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Quantité"
  },
  {
    "id": "notification.commerce.documentReceipt",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Justificatif de paiement"
  },
  {
    "id": "notification.commerce.documentSeller",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Vendeur"
  },
  {
    "id": "notification.commerce.documentShipping",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Livraison"
  },
  {
    "id": "notification.commerce.documentTax",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Taxe incluse"
  },
  {
    "id": "notification.commerce.documentTotalPaid",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Total payé"
  },
  {
    "id": "notification.commerce.parcelSubject",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {
      "reference": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Un envoi de votre commande {reference}"
  },
  {
    "id": "notification.commerce.pickup",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Votre commande est confirmée pour un retrait à la galerie. Consultez la date estimée dans votre récapitulatif."
  },
  {
    "id": "notification.commerce.separateShipments",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 200,
    "parameters": {
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "{count} envois séparés"
  },
  {
    "id": "notification.commerce.shipmentDisclosure",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 2000,
    "parameters": {
      "number": {
        "type": "number",
        "required": true,
        "mustAppear": true
      },
      "amount": {
        "type": "string",
        "required": true,
        "mustAppear": true
      },
      "date": {
        "type": "date",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Envoi {number} : {amount} ({date})."
  },
  {
    "id": "notification.commerce.shippingSubject",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {
      "reference": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Votre commande {reference} est expédiée"
  },
  {
    "id": "notification.commerce.subject",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {
      "reference": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Votre commande {reference}"
  },
  {
    "id": "notification.commerce.tracking",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Conservez la référence et utilisez l’adresse e-mail de cette commande pour consulter son suivi. Votre justificatif et les conditions acceptées sont joints."
  },
  {
    "id": "notification.commerce.trackParcel",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Suivre le colis"
  },
  {
    "id": "notification.commerce.unfulfillable",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Votre paiement a été reçu. La disponibilité est en cours de vérification. Le vendeur vous contactera avant de confirmer une expédition."
  },
  {
    "id": "notification.commerce.withdrawalNotice",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Cet accusé confirme votre déclaration. Il ne confirme ni la réception d’un retour ni l’exécution d’un remboursement."
  },
  {
    "id": "notification.commerce.withdrawalReceivedAt",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {
      "receivedAt": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Déposé le (UTC) : {receivedAt}"
  },
  {
    "id": "notification.commerce.withdrawalSubject",
    "module": "notification",
    "group": "notification.commerce",
    "maxLength": 1000,
    "parameters": {
      "reference": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Rétractation reçue : {reference}"
  },
  {
    "id": "notification.forms.artistOrCulture",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Artiste / culture"
  },
  {
    "id": "notification.forms.description",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Description"
  },
  {
    "id": "notification.forms.dimensions",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Dimensions"
  },
  {
    "id": "notification.forms.materials",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Matériaux"
  },
  {
    "id": "notification.forms.new",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Nouvelle demande"
  },
  {
    "id": "notification.forms.no",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Non"
  },
  {
    "id": "notification.forms.object",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {
      "number": {
        "type": "number",
        "required": true,
        "mustAppear": true
      },
      "name": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Objet {number} : {name}"
  },
  {
    "id": "notification.forms.period",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Époque"
  },
  {
    "id": "notification.forms.photos",
    "module": "notification",
    "group": "notification",
    "maxLength": 500,
    "parameters": {
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "pluralParameter": "count",
    "fallback": "none",
    "label": "Photographies optimisées"
  },
  {
    "id": "notification.forms.provenance",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Provenance"
  },
  {
    "id": "notification.forms.read",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Marquer comme lu"
  },
  {
    "id": "notification.forms.received",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Demande reçue"
  },
  {
    "id": "notification.forms.receivedBody",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Votre demande a bien été reçue."
  },
  {
    "id": "notification.forms.yes",
    "module": "notification",
    "group": "notification",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Oui"
  },
  {
    "id": "page.artworks.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre Œuvres"
  },
  {
    "id": "page.contact.empty",
    "module": "core",
    "group": "pages",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message Contact"
  },
  {
    "id": "page.contact.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre Contact"
  },
  {
    "id": "page.exhibitions.empty",
    "module": "core",
    "group": "pages",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message Expositions"
  },
  {
    "id": "page.exhibitions.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre Expositions"
  },
  {
    "id": "page.expertise.empty",
    "module": "core",
    "group": "pages",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message Demande d’expertise"
  },
  {
    "id": "page.expertise.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre Demande d’expertise"
  },
  {
    "id": "page.home.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre de l’accueil"
  },
  {
    "id": "page.news.empty",
    "module": "core",
    "group": "pages",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message Actualités"
  },
  {
    "id": "page.news.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre Actualités"
  },
  {
    "id": "page.publications.empty",
    "module": "core",
    "group": "pages",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Message Publications"
  },
  {
    "id": "page.publications.title",
    "module": "core",
    "group": "pages",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Titre Publications"
  },
  {
    "id": "presentation.demonstration",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Mention de démonstration"
  },
  {
    "id": "presentation.discover",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Découvrir la galerie"
  },
  {
    "id": "presentation.empty",
    "module": "core",
    "group": "presentation",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Page en attente de contenu"
  },
  {
    "id": "presentation.explore",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Descendre après le film"
  },
  {
    "id": "presentation.galleryLabel",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Galerie d’images"
  },
  {
    "id": "presentation.next",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Suivant"
  },
  {
    "id": "presentation.previous",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Précédent"
  },
  {
    "id": "presentation.readMore",
    "module": "core",
    "group": "presentation",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "En savoir plus"
  },
  {
    "id": "preview.backToAdmin",
    "module": "core",
    "group": "preview",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Retour à l’administration"
  },
  {
    "id": "preview.checking",
    "module": "core",
    "group": "preview",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérification de l’aperçu"
  },
  {
    "id": "preview.close",
    "module": "core",
    "group": "preview",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer l’aperçu"
  },
  {
    "id": "preview.desktop",
    "module": "core",
    "group": "preview",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vue ordinateur"
  },
  {
    "id": "preview.expired",
    "module": "core",
    "group": "preview",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Aperçu expiré"
  },
  {
    "id": "preview.mobile",
    "module": "core",
    "group": "preview",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Vue mobile"
  },
  {
    "id": "preview.notice",
    "module": "core",
    "group": "preview",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Mention de brouillon privé"
  },
  {
    "id": "preview.title",
    "module": "core",
    "group": "preview",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Aperçu privé du brouillon"
  },
  {
    "id": "preview.unavailable",
    "module": "core",
    "group": "preview",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérification de l’aperçu impossible"
  },
  {
    "id": "privacyPolicy.externalDescription",
    "module": "core",
    "group": "privacy_policy",
    "maxLength": 2000,
    "parameters": {},
    "fallback": "none",
    "label": "Autoriser les fournisseurs indiqués à charger leurs lecteurs. Ils peuvent recevoir des données de connexion."
  },
  {
    "id": "privacyPolicy.externalLabel",
    "module": "core",
    "group": "privacy_policy",
    "maxLength": 200,
    "parameters": {},
    "fallback": "none",
    "label": "Vidéos externes"
  },
  {
    "id": "privacyPolicy.necessaryDescription",
    "module": "core",
    "group": "privacy_policy",
    "maxLength": 2000,
    "parameters": {},
    "fallback": "none",
    "label": "Langue, panier et sécurité des fonctions demandées. Le paiement est chargé uniquement à son étape."
  },
  {
    "id": "privacyPolicy.necessaryLabel",
    "module": "core",
    "group": "privacy_policy",
    "maxLength": 200,
    "parameters": {},
    "fallback": "none",
    "label": "Fonctionnement nécessaire"
  },
  {
    "id": "seo.galeristDescription",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Découvrez l’histoire et la vision de la {siteName}, galerie parisienne consacrée aux arts d’Afrique, d’Océanie et des Amériques."
  },
  {
    "id": "seo.legalDescription",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Informations légales, hébergement et protection des données de la {siteName}."
  },
  {
    "id": "seo.section.artworks",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : artworks"
  },
  {
    "id": "seo.section.contact",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : contact"
  },
  {
    "id": "seo.section.exhibitions",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : exhibitions"
  },
  {
    "id": "seo.section.expertise",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : expertise"
  },
  {
    "id": "seo.section.home",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : home"
  },
  {
    "id": "seo.section.news",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : news"
  },
  {
    "id": "seo.section.publications",
    "module": "core",
    "group": "metadata",
    "maxLength": 1000,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Description de référencement : publications"
  },
  {
    "id": "store.catalog.empty",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le Store ne propose aucun produit pour le moment."
  },
  {
    "id": "store.catalog.more",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Voir la suite"
  },
  {
    "id": "store.checkout.delivery",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Livraison"
  },
  {
    "id": "store.checkout.details",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Coordonnées"
  },
  {
    "id": "store.checkout.payment",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Paiement"
  },
  {
    "id": "store.checkout.yourDelivery",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre livraison"
  },
  {
    "id": "store.checkout.yourDetails",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vos coordonnées"
  },
  {
    "id": "store.checkout.yourPayment",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre paiement"
  },
  {
    "id": "store.delivery.parcelEstimates",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "{count} colis, estimations détaillées ci-dessous"
  },
  {
    "id": "store.delivery.parcelLabel",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Livraison · {count} colis"
  },
  {
    "id": "store.delivery.parcelNotice",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {
      "count": {
        "type": "number",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Un seul paiement, {count} colis avec leurs propres suivis."
  },
  {
    "id": "store.error.attempt_in_progress",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Un paiement est déjà en cours de vérification. Consultez son état avant de recommencer."
  },
  {
    "id": "store.error.checkout_unavailable",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les achats sont momentanément indisponibles. Votre panier est conservé."
  },
  {
    "id": "store.error.out_of_stock",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Un produit n’est plus disponible dans cette quantité. Votre panier est conservé."
  },
  {
    "id": "store.error.quote_changed",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le prix ou les conditions ont changé. Vérifiez un nouveau récapitulatif."
  },
  {
    "id": "store.error.quote_expired",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce récapitulatif a expiré. Vérifiez un nouveau récapitulatif."
  },
  {
    "id": "store.error.terms_not_current",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les conditions ont changé. Vérifiez la nouvelle version."
  },
  {
    "id": "store.error.unauthorized",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre session a expiré. Rechargez cette page pour reprendre."
  },
  {
    "id": "store.error.uncertain_response",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La réponse n’a pas été reçue. Vérifiez l’état avant de recommencer."
  },
  {
    "id": "store.meta.checkoutDescription",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre commande invitée, livraison et paiement sécurisé."
  },
  {
    "id": "store.meta.checkoutTitle",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commander"
  },
  {
    "id": "store.meta.confirmationDescription",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Consultez le résultat de votre paiement et votre confirmation."
  },
  {
    "id": "store.meta.confirmationTitle",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confirmation de commande"
  },
  {
    "id": "store.meta.description",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {
      "siteName": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Livres et objets proposés par {siteName}."
  },
  {
    "id": "store.meta.trackingDescription",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Consultez les étapes de préparation et de livraison de votre commande."
  },
  {
    "id": "store.payment.languageFallback",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le formulaire bancaire utilise une langue proposée par Stripe."
  },
  {
    "id": "store.product.format",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Format"
  },
  {
    "id": "store.testModeNotice",
    "module": "store",
    "group": "store",
    "maxLength": 1000,
    "parameters": {},
    "fallback": "none",
    "label": "Information du paiement de recette"
  },
  {
    "id": "store.validation.invalid",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez cette valeur."
  },
  {
    "id": "store.validation.required",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Complétez ce champ."
  },
  {
    "id": "ui.01d2b390ce73bcaf",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Modifier"
  },
  {
    "id": "ui.03ed8efaa637ac8e",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer"
  },
  {
    "id": "ui.046cab8d809465a1",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer le reçu"
  },
  {
    "id": "ui.059ee358ba641cbb",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Refermer le dossier"
  },
  {
    "id": "ui.05dc02fa4391c931",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Matériaux"
  },
  {
    "id": "ui.05e1a0d2b64f5d26",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Si le dépôt échoue, une autre voie de contact reste disponible :"
  },
  {
    "id": "ui.06dca37aef2862d5",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Zone de dépôt d’images"
  },
  {
    "id": "ui.06e43ad59e533955",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vos coordonnées"
  },
  {
    "id": "ui.06f044fda5435dcf",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Photographies du produit"
  },
  {
    "id": "ui.06f7b1e855290d53",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier l’envoi"
  },
  {
    "id": "ui.074f9131b8ea6033",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Nous vérifions l’état enregistré de votre paiement. Ne lancez pas un nouveau paiement pendant cette "
  },
  {
    "id": "ui.082a54bc02f3c153",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "contacter le vendeur"
  },
  {
    "id": "ui.0837ab65e4ab644e",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "photo(s) · ouvrir le dossier"
  },
  {
    "id": "ui.08c197bd63655971",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Version interactive"
  },
  {
    "id": "ui.08ea1b4b2cf1d471",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": " les coordonnées"
  },
  {
    "id": "ui.0b456353e7a3b862",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Image indisponible"
  },
  {
    "id": "ui.0b5bfff297518eb8",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Aucun compte ni commande retrouvée automatiquement ne sont nécessaires. Décrivez le contrat si vous "
  },
  {
    "id": "ui.0bf4be9db0b77735",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Consulter la commande"
  },
  {
    "id": "ui.0e95078bbc377004",
    "module": "team",
    "group": "team",
    "maxLength": 500,
    "parameters": {
      "name": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Écrire à {name}"
  },
  {
    "id": "ui.0f9ab1a29b5ea024",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Consultez les étapes de préparation et de livraison de votre commande."
  },
  {
    "id": "ui.0ff425451edbbf9b",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Adresse et horaires"
  },
  {
    "id": "ui.11933abe55f85f91",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Étapes de votre demande"
  },
  {
    "id": "ui.12db022acd85e86e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Région / État"
  },
  {
    "id": "ui.13451b79442bc107",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "À l’étape suivante"
  },
  {
    "id": "ui.138b2f2662a8935f",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {
      "maxFiles": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Vous pouvez ajouter jusqu’à {maxFiles} images dans ce champ, et 50 par demande."
  },
  {
    "id": "ui.13d1ac6ea9e16a5f",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ces coordonnées sont communes à tous les objets de votre demande."
  },
  {
    "id": "ui.14c8341370e1e6a4",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande confirmée"
  },
  {
    "id": "ui.14eca9d553d813b9",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer vers la livraison"
  },
  {
    "id": "ui.164d0a732a2ea204",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce formulaire est fermé."
  },
  {
    "id": "ui.16c0a8db1fcd624b",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Renseigner cet objet"
  },
  {
    "id": "ui.16f56784817559ba",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Préparation du paiement"
  },
  {
    "id": "ui.16ff70374190da28",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionnez le même fichier pour reprendre cet envoi."
  },
  {
    "id": "ui.1900c2f68f458039",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer"
  },
  {
    "id": "ui.191ec4c066646787",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Paiement refusé dans la simulation. Vous pouvez réessayer sur cette même tentative."
  },
  {
    "id": "ui.19c9aefbd7d1eba4",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Période"
  },
  {
    "id": "ui.1a8eca1338599d8f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Code postal"
  },
  {
    "id": "ui.1b9f363d73f36624",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Télécharger le justificatif"
  },
  {
    "id": "ui.1cd33ed6b22b2081",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Téléphone de livraison"
  },
  {
    "id": "ui.1d2d15df845ca8c1",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Informations du produit"
  },
  {
    "id": "ui.1ddde940eed2c9fe",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Pays"
  },
  {
    "id": "ui.1f46fbedae5f2916",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Transporteur"
  },
  {
    "id": "ui.1f636f6d02711ef1",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre préférence"
  },
  {
    "id": "ui.1f67925950a74bd0",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Transfert"
  },
  {
    "id": "ui.1f98ecf08617cbbc",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commandez simplement, sans créer de compte."
  },
  {
    "id": "ui.1fc09e805e060410",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chaque objet doit avoir au moins une photo. Revenez à l’organisation des photos."
  },
  {
    "id": "ui.202e91fa4e0b0ebc",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Reprendre ma demande"
  },
  {
    "id": "ui.20fe0c2b17796557",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Tout accepter"
  },
  {
    "id": "ui.21d245f645b6b0ce",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Glissez ici les vues de cet objet, ou utilisez Déplacer la sélection."
  },
  {
    "id": "ui.225e0550f19fe945",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Quitter la lecture"
  },
  {
    "id": "ui.23465b87e0615cfe",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Acceptez les conditions pour accéder au paiement. Aucun débit n’a lieu à cette étape."
  },
  {
    "id": "ui.24a4072cb952d0f0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Quantité"
  },
  {
    "id": "ui.266c8fdad5bebf70",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confirmer ma rétractation"
  },
  {
    "id": "ui.27983a3ab68e63db",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre paiement est reçu. Le vendeur vérifie le stock avant de confirmer la préparation."
  },
  {
    "id": "ui.27ec68541c4150f2",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Je vous notifie ma rétractation du contrat identifié ci-dessus."
  },
  {
    "id": "ui.2839c44d36d0df5f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": " la facturation"
  },
  {
    "id": "ui.28e192eec2786e89",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Gratuit"
  },
  {
    "id": "ui.296f2ed7068a603a",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Nom complet"
  },
  {
    "id": "ui.2a6e7d4f62e52ba3",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retrait"
  },
  {
    "id": "ui.2a7fa58ad8dcf96b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "J’ai lu et j’accepte les "
  },
  {
    "id": "ui.2ac674c28176659d",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "CGV"
  },
  {
    "id": "ui.2bc0b13885dd6a73",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "carrousel"
  },
  {
    "id": "ui.2c069ebaa3178287",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Envoyer"
  },
  {
    "id": "ui.2ccdea9dff22f3ae",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Personnaliser"
  },
  {
    "id": "ui.2cdb5dba0e739268",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retrait gratuit à la galerie"
  },
  {
    "id": "ui.2d3501718d7ee51b",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "L’envoi n’a pas pu être confirmé. Vérifiez sa réception avant de réessayer."
  },
  {
    "id": "ui.2d974b5a22e990ef",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Principale"
  },
  {
    "id": "ui.2da45bd8a3c9d6a1",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Objet "
  },
  {
    "id": "ui.2e3ee4a95ed03a9f",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "ui.2f86ef5247089a1a",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Recharger la grille"
  },
  {
    "id": "ui.302df681f1ecbbad",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Suivre le colis"
  },
  {
    "id": "ui.309cfc810dec30c9",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Télécharger l’avoir"
  },
  {
    "id": "ui.31a1706035212993",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Suivez-nous"
  },
  {
    "id": "ui.32248821106c021a",
    "module": "core",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Version publiée"
  },
  {
    "id": "ui.32ddfbdc384a3517",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Reprendre ce paiement"
  },
  {
    "id": "ui.3389f88e4ed78201",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {
      "value0": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "{value0} photo(s) sélectionnée(s)"
  },
  {
    "id": "ui.3411d7c07ef1a9b9",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Section suivante"
  },
  {
    "id": "ui.3441aba7f56bbf53",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette tentative est clôturée"
  },
  {
    "id": "ui.354fef729e5778d1",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Livraison estimée le "
  },
  {
    "id": "ui.35e848c9d5ffc082",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Renseignez les informations dont vous disposez. Seule la désignation est obligatoire."
  },
  {
    "id": "ui.36bad9024ec9d71e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre paiement reste à terminer"
  },
  {
    "id": "ui.3732d2b69f5ea982",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Monter cet objet"
  },
  {
    "id": "ui.373a94352525900c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Précédent"
  },
  {
    "id": "ui.374dacede393546b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Accusé de rétractation"
  },
  {
    "id": "ui.3863f1609ee15be1",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez cet objet."
  },
  {
    "id": "ui.39535ae98eaa105a",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "ui.39a65ec935cf71e4",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "ou choisissez plusieurs fichiers · JPG, PNG, WebP, HEIC · 25 Mo par image"
  },
  {
    "id": "ui.3b27372462bad958",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Précédent"
  },
  {
    "id": "ui.3c6ee5adbde9bdad",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ces photos ne peuvent pas être déplacées. Relisez votre sélection."
  },
  {
    "id": "ui.3d328213a80f4d79",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Télécharger la facture"
  },
  {
    "id": "ui.3dce525ab21c6bcb",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Un accusé par e-mail est programmé. Ce reçu ne confirme ni un retour physique ni un remboursement."
  },
  {
    "id": "ui.3dd5f7f877964088",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement"
  },
  {
    "id": "ui.3fad405b11bcfeed",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Envoi livré"
  },
  {
    "id": "ui.406b33a5a6eef677",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce site utilise actuellement des stockages nécessaires uniquement, pour la langue, le panier et la s"
  },
  {
    "id": "ui.41092472d5033fbc",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commander"
  },
  {
    "id": "ui.4206689be9f6660d",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Estimation détaillée ci-dessous"
  },
  {
    "id": "ui.42b340468cfe518b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Destination envisagée pour une expédition"
  },
  {
    "id": "ui.43135ba732961e20",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Objet "
  },
  {
    "id": "ui.4390f24857cb7a47",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Adresse"
  },
  {
    "id": "ui.43dead022fb2bca8",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Dernière étape avant de confirmer votre commande."
  },
  {
    "id": "ui.449ca0d3920ce48c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette session a expiré. Vos textes et objets sont conservés ; reprenez la demande pour ajouter à nou"
  },
  {
    "id": "ui.44d603ccdaf100b0",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Toutes vos photos sont attribuées. Vous pouvez en ajouter ou ouvrir un dossier pour modifier sa séle"
  },
  {
    "id": "ui.4506e93ff37fec29",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre commande"
  },
  {
    "id": "ui.4556161b8379bfa8",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Impossible de reprendre la demande. Votre saisie est conservée ; réessayez."
  },
  {
    "id": "ui.477cf47d83a54e78",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Préparation"
  },
  {
    "id": "ui.481b48e27ab7736d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {
      "excluded": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "{excluded} photo(s) non attribuée(s) ne seront pas envoyées."
  },
  {
    "id": "ui.483b19875b9b4666",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Tout refuser"
  },
  {
    "id": "ui.4a60c095af403b1c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "à attribuer"
  },
  {
    "id": "ui.4a81ae035917847c",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Suivi de commande"
  },
  {
    "id": "ui.4af521a649a32cab",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Nouvelle demande"
  },
  {
    "id": "ui.4b28abc87cd06c68",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Trop de recherches. Patientez avant de réessayer."
  },
  {
    "id": "ui.4b4b2884225bf394",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Détail de la livraison"
  },
  {
    "id": "ui.4b507f9ad08b8e99",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Récapitulatif de commande"
  },
  {
    "id": "ui.4baff574c7ab393b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Aucune commande ne correspond à ces informations. Vérifiez le numéro et l’e-mail."
  },
  {
    "id": "ui.4bb80ba23883c72f",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez ce champ."
  },
  {
    "id": "ui.4bd5e7410ecfb32c",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La grille Instagram est momentanément indisponible."
  },
  {
    "id": "ui.4c4d46af13cd85d6",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Créer un objet avec la sélection"
  },
  {
    "id": "ui.4e0c4b2a2cb40359",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Choisir mes préférences"
  },
  {
    "id": "ui.4ea36a40effc8280",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La vérification a échoué. Votre panier est conservé. Réessayez."
  },
  {
    "id": "ui.4f7e6e09abbd29e1",
    "module": "team",
    "group": "team",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Aucune personne complète et visible n’est disponible dans cet aperçu."
  },
  {
    "id": "ui.4fa8c81948d8abc6",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande expédiée"
  },
  {
    "id": "ui.5037cd8fc564b03d",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retrait estimé à partir du "
  },
  {
    "id": "ui.50d5ec85fb64c900",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Photos de l’objet"
  },
  {
    "id": "ui.5153a4e197828aed",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vue principale"
  },
  {
    "id": "ui.55a9b3aed5cb65a0",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vos objets"
  },
  {
    "id": "ui.55c753f498a943b0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Modifier la commande"
  },
  {
    "id": "ui.5827cf4814c09d1f",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La suite n’a pas pu être chargée. Les publications affichées sont conservées."
  },
  {
    "id": "ui.58284d7a14399450",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sous-total"
  },
  {
    "id": "ui.582ede75d19776b3",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confidentialité"
  },
  {
    "id": "ui.58d416583a41e3db",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le paiement ne peut pas être chargé. Votre panier est conservé."
  },
  {
    "id": "ui.58f2a16f220109bb",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "À retirer à la galerie"
  },
  {
    "id": "ui.58fa30363d4174d5",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Suivi de commande"
  },
  {
    "id": "ui.58fd91438be1a0f0",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement"
  },
  {
    "id": "ui.5a7a0bc871f97969",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Total estimé"
  },
  {
    "id": "ui.5ac9630d9cfbdc91",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Pour confirmer et suivre votre commande."
  },
  {
    "id": "ui.5b0362b601d17271",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Déposez vos images ici"
  },
  {
    "id": "ui.5b34ab45d736efe0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retour aux coordonnées"
  },
  {
    "id": "ui.5bb4b60a3e1af654",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ces photos ne peuvent pas être déplacées. Relisez votre sélection."
  },
  {
    "id": "ui.5c34587f1ad2fe3e",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "ui.5db1d4f513c35169",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Quantité"
  },
  {
    "id": "ui.5f086c4f6d8a89d3",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Compris"
  },
  {
    "id": "ui.5f0ffe5c831342a9",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vos photos"
  },
  {
    "id": "ui.5f17a6ed9474ee70",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Attendez la préparation des photos attribuées avant l’envoi."
  },
  {
    "id": "ui.6125c8d88098622e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Expédition"
  },
  {
    "id": "ui.634756a170e7433c",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Produit"
  },
  {
    "id": "ui.6417e1a288fa74ef",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement en cours"
  },
  {
    "id": "ui.6467b72302931593",
    "module": "team",
    "group": "team",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Membres"
  },
  {
    "id": "ui.647316bc2bf4844b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Heure limite prise en compte : "
  },
  {
    "id": "ui.65a6e7e15aede2c3",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {
      "value0": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "{value0} photo(s) · la vue principale est présentée ici"
  },
  {
    "id": "ui.660d2ed8f57ddfb4",
    "module": "core",
    "group": "forms",
    "maxLength": 500,
    "parameters": {
      "identity": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Bonjour,\n\nJe souhaiterais obtenir davantage d’informations concernant l’œuvre « {identity} ».\n\nMerci"
  },
  {
    "id": "ui.661ea2552127e9e0",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "De nouvelles publications apparaîtront bientôt ici."
  },
  {
    "id": "ui.6695ea63811388d0",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Venir à la galerie"
  },
  {
    "id": "ui.67034b4049267f9c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "objet(s)"
  },
  {
    "id": "ui.674fde782f129a30",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Nouvelle demande"
  },
  {
    "id": "ui.675631bca7652341",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chargement en cours"
  },
  {
    "id": "ui.6a1821af7d6278f3",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Choisir"
  },
  {
    "id": "ui.6becf1fba43de4b9",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Total livraison : "
  },
  {
    "id": "ui.6d633440598f017f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Conservez votre numéro de commande pour consulter son suivi."
  },
  {
    "id": "ui.6d913741f6b99680",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "À lire aussi"
  },
  {
    "id": "ui.6dfbbdb19728d58a",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Photographie "
  },
  {
    "id": "ui.6fe336b706acb1c4",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Déclaration de rétractation"
  },
  {
    "id": "ui.72add161f520204e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Modifier"
  },
  {
    "id": "ui.7358eb044a00e590",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Préférences de confidentialité"
  },
  {
    "id": "ui.73952b08f5d3271e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Numéro de commande ou description du contrat"
  },
  {
    "id": "ui.7397c71c393eac37",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce formulaire est momentanément indisponible. Réessayez plus tard."
  },
  {
    "id": "ui.742a7fc5f1048d00",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier l’état du paiement"
  },
  {
    "id": "ui.74378bed691a7ff2",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre choix est appliqué ici. Le reçu serveur n’a pas pu être confirmé."
  },
  {
    "id": "ui.74523e2253d7fe1f",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Nouvelle demande"
  },
  {
    "id": "ui.767d48e590edfab6",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Choisissez comment recevoir votre sélection."
  },
  {
    "id": "ui.76d41d32d44cade1",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retrouvez votre commande avec son numéro et l’e-mail utilisé lors de l’achat. Aucun compte n’est néc"
  },
  {
    "id": "ui.773c8c25264f8c39",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce formulaire n’est pas disponible dans cette langue. Vos réponses sont conservées."
  },
  {
    "id": "ui.77a54101ef1071e0",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayez dans quelques instants."
  },
  {
    "id": "ui.7894113117e73909",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Étapes de votre commande"
  },
  {
    "id": "ui.7a7fd0651d890d75",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confirmez l’exclusion des photos non attribuées avant l’envoi."
  },
  {
    "id": "ui.7b1f15894f16d8d4",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Organisation"
  },
  {
    "id": "ui.7cbeac7d5a24eaa5",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "ui.7d223b829ebc30d7",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre sélection"
  },
  {
    "id": "ui.7d55bb61c28faaa9",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Décrivez cet objet"
  },
  {
    "id": "ui.7ee6699670b7726f",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "nécessaire"
  },
  {
    "id": "ui.7eeae238c66e6ee4",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Gratuit"
  },
  {
    "id": "ui.7ef3ccbc906cdff1",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Mentions légales"
  },
  {
    "id": "ui.80735eaf73fd119e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Total payé"
  },
  {
    "id": "ui.80b3d3248e4189fc",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Méthode de livraison"
  },
  {
    "id": "ui.817551aac1f5c796",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Parcours de lecture"
  },
  {
    "id": "ui.82451b9c13af9655",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Impossible de reprendre la demande. Votre saisie est conservée ; réessayez."
  },
  {
    "id": "ui.8269e1ec6a6db000",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vous cherchez un objet en particulier ? Nous pouvons le chercher pour vous."
  },
  {
    "id": "ui.82e9fb881fef3ffc",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Voir les publications suivantes"
  },
  {
    "id": "ui.83098ce596330d98",
    "module": "team",
    "group": "team",
    "maxLength": 500,
    "parameters": {
      "name": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Appeler {name}"
  },
  {
    "id": "ui.830f929e787366b4",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Consulter les conditions applicables"
  },
  {
    "id": "ui.8361d5bf83e8cf50",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Référence"
  },
  {
    "id": "ui.839a9542d7182dd5",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez ce champ."
  },
  {
    "id": "ui.84abc2820229b4ca",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retour au Store"
  },
  {
    "id": "ui.84eebb311d6410c0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Taxes incluses"
  },
  {
    "id": "ui.8524a73f17c0c0cd",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Objets"
  },
  {
    "id": "ui.865f3d943098d939",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le paiement est indisponible. Votre commande n’a pas été confirmée."
  },
  {
    "id": "ui.86d93dffcd42a973",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Voir la suite"
  },
  {
    "id": "ui.88aabb718ef0529a",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La grille a changé. Rechargez-la pour continuer."
  },
  {
    "id": "ui.88abc9f744e29a97",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Facturation"
  },
  {
    "id": "ui.8a0f01a2b7d5daee",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les objets seront envoyés ensemble, dans une seule demande."
  },
  {
    "id": "ui.8a3ea277a047de2a",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Produit"
  },
  {
    "id": "ui.8afdb6925824e46c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Désignation"
  },
  {
    "id": "ui.8b68c4c85da70886",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La confirmation enregistre la déclaration et son heure de dépôt. Elle ne lance pas de remboursement "
  },
  {
    "id": "ui.8ba5b3dbff281b94",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Tout accepter"
  },
  {
    "id": "ui.8bbf4b0776f6c574",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Indiquez les dimensions et les unités dont vous disposez."
  },
  {
    "id": "ui.8c9ecb2f7ed3ae90",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Simuler le paiement"
  },
  {
    "id": "ui.8cb83b74453a9c1e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retrouvez votre commande avec son numéro et l’e-mail utilisé lors de l’achat."
  },
  {
    "id": "ui.8cc5a431c8e3d3e5",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le document n’a pas pu être téléchargé. Réessayez plus tard."
  },
  {
    "id": "ui.8d0f9c504786ac29",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chaque objet peut réunir plusieurs vues. Sélectionnez ses photos pour créer son dossier."
  },
  {
    "id": "ui.8e3d5fb1859c8df5",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ajouter un objet"
  },
  {
    "id": "ui.8e3e82c5527ad688",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Chaque objet doit avoir au moins une photo."
  },
  {
    "id": "ui.8ecf06dc65e6e7c6",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Créez au moins un objet pour continuer."
  },
  {
    "id": "ui.90f8b267c4c1892b",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Préférences de confidentialité"
  },
  {
    "id": "ui.94b9ff09e8304d1d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ajoutez les nouveaux fichiers dans Vos photos, puis attribuez-les à un objet."
  },
  {
    "id": "ui.94d68eab7ce56abb",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Nom complet"
  },
  {
    "id": "ui.94f2f04a98a3dfbd",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Détails"
  },
  {
    "id": "ui.950825b14c8f2b27",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Choisir un pays"
  },
  {
    "id": "ui.95c62aa6bb2dbc0f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Relire ma déclaration"
  },
  {
    "id": "ui.9764370b26f2c7b5",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Un produit du panier ne peut pas être expédié vers cette destination. Le retrait s’applique à tout l"
  },
  {
    "id": "ui.97712ef6a2ae9c15",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Livraison"
  },
  {
    "id": "ui.97899b1a20b3560b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Suivre le colis"
  },
  {
    "id": "ui.986f651ee8558e80",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "En savoir plus"
  },
  {
    "id": "ui.987f32658bda519c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionnez vos photos"
  },
  {
    "id": "ui.9a48a6140d285775",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Simuler un refus"
  },
  {
    "id": "ui.9af90d8e517f16bc",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette tentative n’a pas abouti"
  },
  {
    "id": "ui.9b157c09e2013c01",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Prête"
  },
  {
    "id": "ui.9b2a0034666fef8f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le montant a changé. La confirmation est bloquée."
  },
  {
    "id": "ui.9e2cb09c207a54b1",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Selon votre destination"
  },
  {
    "id": "ui.9e327f08a349fbc7",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vos choix de confidentialité"
  },
  {
    "id": "ui.9e35288e4f357660",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retirer "
  },
  {
    "id": "ui.9e6445144e27f1b8",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer"
  },
  {
    "id": "ui.9e893d2b35397407",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Télécharger l’avoir"
  },
  {
    "id": "ui.9ec3b23da5294ef5",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Saisissez une adresse e-mail valide."
  },
  {
    "id": "ui.9ee58e449480e1f5",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Navigation de lecture"
  },
  {
    "id": "ui.a05d1eabf731c88d",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {
      "name": {
        "type": "string",
        "required": true,
        "mustAppear": true
      }
    },
    "fallback": "none",
    "label": "Livres et objets proposés par {name}."
  },
  {
    "id": "ui.a0c1c410dc6144d8",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande en traitement"
  },
  {
    "id": "ui.a11439864601573d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ajoutez les photos de vos objets pour préparer votre demande d’expertise. Vous pourrez ensuite les o"
  },
  {
    "id": "ui.a1fb158c86ae9558",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier l’état"
  },
  {
    "id": "ui.a37d5fc60654f52d",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Liens à découvrir"
  },
  {
    "id": "ui.a451b8150e303ec4",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Corriger ma déclaration"
  },
  {
    "id": "ui.a4d7acfe2bf14bd8",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Pour votre retrait, renseignez votre adresse de facturation."
  },
  {
    "id": "ui.a4ff4ba4558f9d0f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Complétez ce champ."
  },
  {
    "id": "ui.a5b54530d3af83d9",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Total TTC"
  },
  {
    "id": "ui.a64153c0d7c9f8b1",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Supprimer l’objet"
  },
  {
    "id": "ui.a718ebad6301cdb3",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Tout refuser"
  },
  {
    "id": "ui.a75f1a8fa1484682",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Déplacer la sélection"
  },
  {
    "id": "ui.a8f3f92553ae6f8b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Afficher le paiement sécurisé"
  },
  {
    "id": "ui.a9209bd83c8b79aa",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Période"
  },
  {
    "id": "ui.a9d4191dda49b711",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Envoyer"
  },
  {
    "id": "ui.aa797ffdfb99658d",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retour à la livraison"
  },
  {
    "id": "ui.ab3c6b9a7c70ff87",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce visuel est indisponible."
  },
  {
    "id": "ui.ab4fc587c1a89a88",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Modifier"
  },
  {
    "id": "ui.abc7a446c0d69046",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "sur"
  },
  {
    "id": "ui.abda3a229c42aaa6",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Choisissez des images JPG, PNG, WebP ou HEIC, de 25 Mo maximum chacune."
  },
  {
    "id": "ui.abfdb4da882c10d0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Envoi expédié"
  },
  {
    "id": "ui.ac3a3ee90acd2c33",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ses photos retourneront dans Vos photos."
  },
  {
    "id": "ui.ac67b12e811b035c",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Envoyer"
  },
  {
    "id": "ui.acdfd45e836a43d8",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer les détails"
  },
  {
    "id": "ui.ae394b89b79c0f1d",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre choix est conservé six mois. Le retrait coupe les prochains chargements, sans effacer les donn"
  },
  {
    "id": "ui.b0691557a5c9b1d9",
    "module": "team",
    "group": "team",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Fondateurs"
  },
  {
    "id": "ui.b16c63520fc1f812",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Annuler"
  },
  {
    "id": "ui.b1be283a06259555",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ouvrir les photos de "
  },
  {
    "id": "ui.b1f03bcbf8b5bac3",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Reprendre plus tard"
  },
  {
    "id": "ui.b24ddd3e0aa9b658",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Conserver mon reçu"
  },
  {
    "id": "ui.b25c1e8c5f5556ee",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Impossible de confirmer la demande. Votre saisie est conservée."
  },
  {
    "id": "ui.b403a8b5d40d46da",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ville"
  },
  {
    "id": "ui.b4264f97583e2f69",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vos produits seront envoyés séparément."
  },
  {
    "id": "ui.b46606a7fcf25685",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Se rétracter d’une commande"
  },
  {
    "id": "ui.b4b854f675ada01d",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande livrée"
  },
  {
    "id": "ui.b4d9fd8ab9e715d3",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Télécharger la facture"
  },
  {
    "id": "ui.b6482b94f45e8575",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "État de la commande"
  },
  {
    "id": "ui.b6c576c8a2e402fb",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier le même envoi"
  },
  {
    "id": "ui.b6fcd4391ed8a47f",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer"
  },
  {
    "id": "ui.b91303ffe4984870",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Complétez ce champ."
  },
  {
    "id": "ui.ba3959eaae9955ee",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Supprimer cet objet ?"
  },
  {
    "id": "ui.ba661060769db7e0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Télécharger le justificatif"
  },
  {
    "id": "ui.bab67f1f1ba38cc1",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Descendre cet objet"
  },
  {
    "id": "ui.bad6170f52ecda74",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La demande est limitée à 500 Mo d’images."
  },
  {
    "id": "ui.bc37366c4b5034ea",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette commande a été remboursée. Le suivi physique du colis reste affiché."
  },
  {
    "id": "ui.bc755592f3b80aab",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Photos non attribuées"
  },
  {
    "id": "ui.bc8b7b41795ddc88",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Paiement simulé"
  },
  {
    "id": "ui.bf9dbad15efcc140",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le Store ne propose aucun produit pour le moment."
  },
  {
    "id": "ui.c0ad5eeab3a26e96",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La demande n’a pas pu être confirmée. Votre saisie est conservée."
  },
  {
    "id": "ui.c0ff85d6b611751a",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionner "
  },
  {
    "id": "ui.c25c4ceefa9f93df",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Aperçu du formulaire — aucun envoi"
  },
  {
    "id": "ui.c2853d4593edf6c2",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez cette valeur."
  },
  {
    "id": "ui.c49fd43565fc97c3",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les conditions de livraison actuelles sont indiquées dans le récapitulatif."
  },
  {
    "id": "ui.c4e4b950f64ed743",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": " la livraison"
  },
  {
    "id": "ui.c5bdb1ac13ca64fc",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "E-mail pour l’accusé de réception"
  },
  {
    "id": "ui.c764189f2275f7ee",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Section précédente"
  },
  {
    "id": "ui.c7cf7c4fb61979e7",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Paiement reçu, disponibilité en vérification"
  },
  {
    "id": "ui.c8c0728ad4ca16c2",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le montant définitif est vérifié avant le paiement."
  },
  {
    "id": "ui.c8d9d3ff4cbe994e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Revenez à la modification de votre commande pour changer le panier."
  },
  {
    "id": "ui.c9c18aa33cec683d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Préparation"
  },
  {
    "id": "ui.c9fac07a7f9f1317",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Créer le premier objet"
  },
  {
    "id": "ui.ca1f10b8f8dc6625",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Enregistrer mes choix"
  },
  {
    "id": "ui.ca7b42fcec6ae903",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Relisez avant d’envoyer"
  },
  {
    "id": "ui.cb95925078aadd18",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Total à payer"
  },
  {
    "id": "ui.cba1bf6ca9a122d5",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce reçu ne confirme ni un retour ni un remboursement."
  },
  {
    "id": "ui.cbcbbfcc003ec1b8",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retirer"
  },
  {
    "id": "ui.cc91397fcc2fbb35",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionnez le même fichier pour reprendre cet envoi."
  },
  {
    "id": "ui.ccadbc8098e723d3",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionnez les vues d’un même objet, puis rassemblez-les dans son dossier."
  },
  {
    "id": "ui.cd038e5e6e391a59",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier l’état du paiement"
  },
  {
    "id": "ui.cdaa06464d69c3e9",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ajoutez une photo à cet objet."
  },
  {
    "id": "ui.cde56bce0d9d8a96",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le document n’a pas pu être téléchargé. Réessayez."
  },
  {
    "id": "ui.ce02c14a3bfcd81d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre demande a été reçue."
  },
  {
    "id": "ui.ce34c12d17968498",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Détails"
  },
  {
    "id": "ui.ce533bd9596b6a69",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ajoutez les premières photos de vos objets."
  },
  {
    "id": "ui.ce5eee74455fca39",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confirmation de commande"
  },
  {
    "id": "ui.ce748e783ddfdc63",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer les détails"
  },
  {
    "id": "ui.cf98b6084fc1b3c0",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Éditeur"
  },
  {
    "id": "ui.d0c816054be9db6c",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Préparation de votre session"
  },
  {
    "id": "ui.d2cb3d3d35228e53",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Livraison"
  },
  {
    "id": "ui.d2fa89571f9854c3",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Colis "
  },
  {
    "id": "ui.d34844212e3170f2",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande retirée"
  },
  {
    "id": "ui.d374ebd8136bc614",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Total payé"
  },
  {
    "id": "ui.d400cc660e6e46d6",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Artiste ou culture"
  },
  {
    "id": "ui.d4ec0228585f7202",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Ce formulaire nécessite la version interactive."
  },
  {
    "id": "ui.d5ccdbc9150f73f6",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Recette locale uniquement. Aucun moyen de paiement ni débit réel."
  },
  {
    "id": "ui.d6216b2163e9a60e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le vendeur va vérifier la disponibilité et vous contacter. Aucune expédition n’est encore confirmée."
  },
  {
    "id": "ui.d6f714a031df4c5a",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre commande invitée, livraison et paiement sécurisé."
  },
  {
    "id": "ui.d767bdb60af17184",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Mode de réception"
  },
  {
    "id": "ui.d983f2243f6d1161",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les informations financières sont en cours de vérification."
  },
  {
    "id": "ui.db2f64b3f052b11d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "L’image n’a pas pu être préparée"
  },
  {
    "id": "ui.dc22549f5bf02890",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Créez un objet depuis vos photos pour continuer."
  },
  {
    "id": "ui.deb908839dd964d9",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifier l’envoi"
  },
  {
    "id": "ui.def4f53456129951",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Référence"
  },
  {
    "id": "ui.df57b6393b19404d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez votre demande"
  },
  {
    "id": "ui.dfc7e2476570ae71",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande retirée"
  },
  {
    "id": "ui.dfd4b1797903273d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Fermer la demande"
  },
  {
    "id": "ui.e17a82a45d3018ab",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Coordonnées communes"
  },
  {
    "id": "ui.e2e657a655a46fe2",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Afficher plus"
  },
  {
    "id": "ui.e3a7137008fcaaa1",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confirmer la suppression"
  },
  {
    "id": "ui.e424ecdaaa96fdc2",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette session a expiré. Vos informations restent visibles ; les images devront être ajoutées dans un"
  },
  {
    "id": "ui.e63280727e903e4b",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Mode test Stripe : aucun débit réel ni expédition. Les frais et taxes peuvent être simulés. Aucun e-"
  },
  {
    "id": "ui.e6c142fd85fa9f00",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionner"
  },
  {
    "id": "ui.e82a7aaceff94d6b",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les vidéos externes sont chargées avec votre accord. Le refus ne bloque ni la navigation ni les acha"
  },
  {
    "id": "ui.e90a336a092b5b9f",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre commande est confirmée"
  },
  {
    "id": "ui.e9a9e15a9951a84e",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Continuer vers le paiement"
  },
  {
    "id": "ui.e9b23bab7910e993",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Vérifiez cette valeur."
  },
  {
    "id": "ui.e9c0f8eefac8c7b3",
    "module": "link_in_bio",
    "group": "link_in_bio",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Réessayer"
  },
  {
    "id": "ui.ea5c83fb999a15d3",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Votre sélection"
  },
  {
    "id": "ui.eac42220b22ffa21",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Déclaration reçue"
  },
  {
    "id": "ui.ec5db058a2b94e6a",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Sélectionnez à nouveau ce fichier"
  },
  {
    "id": "ui.edb686589c27e894",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Calcul de la livraison"
  },
  {
    "id": "ui.ee139c6e9ad2f238",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Objet "
  },
  {
    "id": "ui.ee9cf4fd9e21aa5a",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Confidentialité et cookies"
  },
  {
    "id": "ui.eed4bf475334d230",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La demande n’a pas pu être confirmée. Votre saisie est conservée."
  },
  {
    "id": "ui.f01f417e72a428c6",
    "module": "editorial",
    "group": "editorial",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "published on"
  },
  {
    "id": "ui.f064b66698d33712",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Matériaux"
  },
  {
    "id": "ui.f124c77cd172ad1c",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Trop de dépôts. Patientez ou utilisez l’autre voie de contact."
  },
  {
    "id": "ui.f27ebfd47136b382",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Modifiez la commande depuis le paiement pour clôturer la tentative en cours."
  },
  {
    "id": "ui.f2df254756bbcd07",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "La réception n’a pas pu être confirmée. Vérifiez l’envoi avant de réessayer ; votre demande est cons"
  },
  {
    "id": "ui.f302e5ff53f2f0dc",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Principale"
  },
  {
    "id": "ui.f32a0a113fdc8364",
    "module": "core",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Document de simulation"
  },
  {
    "id": "ui.f33f00081f1b3554",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Consultez le résultat de votre paiement et votre confirmation."
  },
  {
    "id": "ui.f4606d861055bad1",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Complétez les informations signalées pour cet objet."
  },
  {
    "id": "ui.f4b6cc5f77293776",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Gratuit"
  },
  {
    "id": "ui.f537800ab1666d47",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Accusé de rétractation"
  },
  {
    "id": "ui.f58230d0fabea1b1",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Cette commande est annulée. Le vendeur reste votre interlocuteur pour le retour ou le remboursement."
  },
  {
    "id": "ui.f6564e5d3dbe82d9",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "DISPONIBLE"
  },
  {
    "id": "ui.f6d35e1d4ddbedae",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Un dossier par objet. Rassemblez ses vues et choisissez sa photo principale."
  },
  {
    "id": "ui.f8200104ad30d446",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Rétractation"
  },
  {
    "id": "ui.f8c6c23b6ff4f076",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Retrait à la galerie"
  },
  {
    "id": "ui.f8e0b2e3e5e54b2d",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Complétez vos coordonnées pour ce mode de livraison."
  },
  {
    "id": "ui.f90e4743057c4c54",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le montant du paiement diffère du récapitulatif. Revenez à la vérification."
  },
  {
    "id": "ui.f934417f42d5c894",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Contactez-nous"
  },
  {
    "id": "ui.f934f1ef5fcc7b20",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Commande"
  },
  {
    "id": "ui.f93ee0e24a0bf4cf",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Modifier"
  },
  {
    "id": "ui.f9961e0c7f81daff",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Complément d’adresse"
  },
  {
    "id": "ui.fa331732f2ef7673",
    "module": "core",
    "group": "core",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Les préférences sont momentanément indisponibles. Les médias externes restent bloqués."
  },
  {
    "id": "ui.fa5a2b19cd97d4a6",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Choisir une photographie"
  },
  {
    "id": "ui.fa9687158243f1fc",
    "module": "store",
    "group": "store",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Le résultat du paiement est en cours de vérification. Consultez son état avant de recommencer."
  },
  {
    "id": "ui.fd5b670cf2dd86a0",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Attendez la préparation des images, ou retirez celles que vous ne souhaitez pas envoyer."
  },
  {
    "id": "ui.ff39f9728257537d",
    "module": "forms",
    "group": "forms",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Je confirme l’envoi sans ces photos."
  },
  {
    "id": "video.pause",
    "module": "core",
    "group": "video",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Mettre le film en pause"
  },
  {
    "id": "video.pauseLabel",
    "module": "core",
    "group": "video",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Libellé court pause"
  },
  {
    "id": "video.play",
    "module": "core",
    "group": "video",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Lire le film"
  },
  {
    "id": "video.playLabel",
    "module": "core",
    "group": "video",
    "maxLength": 80,
    "parameters": {},
    "fallback": "none",
    "label": "Libellé court lecture"
  },
  {
    "id": "video.reducedMotion",
    "module": "core",
    "group": "video",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Mouvement réduit"
  },
  {
    "id": "video.unavailable",
    "module": "core",
    "group": "video",
    "maxLength": 500,
    "parameters": {},
    "fallback": "none",
    "label": "Film indisponible"
  }
] as const;
