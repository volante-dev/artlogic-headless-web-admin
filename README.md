# Administration Artlogic

Next.js 16.4 / React 19.3, TypeScript, MUI9 et CSS Modules. Le BFF garde les tokens OAuth côté backend. Le navigateur reçoit un handle opaque HttpOnly et un jeton CSRF ; chaque accès sensible vérifie les droits Volante et l’allowlist de sujets configurée.

## Installation

`nvm install && nvm use`, puis `pnpm install --frozen-lockfile`. Ce dépôt utilise Node 24.22.0 et pnpm 12.14.0 ; conserver pnpm pour les installations et le lockfile. En cas d’échec de npm sur les liens du node_modules, revenir à Node 24 et à cette commande pnpm.

Cloner le backend à côté sous `../backend` pour les mocks, les contrats, le guide et les tests d’intégration. Voir les [trois dépôts](../backend/README.md).

## Utilisation

Suivre le [quickstart](../backend/specs/001-artlogic-site-boilerplate/quickstart.md). `.env.local` est généré par `backend setup:local` ou renseigné depuis `.env.example`. `pnpm dev --port 3002`, `pnpm build`, `pnpm start --port 3002`. Dev/build utilisent Webpack. Aucune dépendance Tailwind/Turbopack.

Variables serveur : SITE_ID/SITE_NAME, SITE_LOCALES_JSON/SITE_DEFAULT_LOCALE, origines, BACKEND_URL, BFF_SERVICE_KEY et paramètres de session (scope B). Aucun `NEXT_PUBLIC_` ni secret Supabase/Artlogic/SSO dans ce package. L’identité est lue à la requête : changer les variables et redémarrer suffit, sans reconstruire l’image.

Le login suit le fournisseur OIDC, la sync donne un suivi durable, et le catalogue permet recherche, filtres, prévisualisation et publication individuelle. En conflit 412, la fiche est relue et une nouvelle décision explicite est demandée. Une œuvre retirée ne peut pas être publiée. Une erreur de logout conserve les cookies pour permettre une nouvelle tentative ; une panne du SSO n’empêche pas la révocation locale.

### Connexion en local

Avec `DEPLOYMENT_ENV=local` et `DATA_MODE=mock`, le bouton **Se connecter en local** utilise le fournisseur d’identité synthétique. Aucun compte ni mot de passe Volante n’est nécessaire. Depuis le dossier parent, garder ces trois processus ouverts dans des terminaux distincts (Supabase local déjà démarré et base provisionnée) :

```sh
pnpm --dir backend/mock dev:identity
pnpm --dir backend dev:api
pnpm --dir web-admin dev
```

Ouvrir **http://127.0.0.1:3002**, cliquer **Se connecter en local**, puis **Continuer avec le compte de test**. Le bouton utilise l’origine configurée pour que la transaction et le callback partagent leurs cookies, même si la page d’accueil a été ouverte avec `localhost`. Pour un accès direct à `/auth/login`, utiliser également `127.0.0.1`.

`next.config.ts` autorise explicitement `127.0.0.1` dans `allowedDevOrigins` : Next démarre par défaut avec `localhost`, mais doit aussi accepter les ressources de développement et HMR après le retour OAuth sur `127.0.0.1`. Cette option concerne uniquement le serveur de développement.

Le fournisseur de test doit rester lancé : le backend vérifie les droits à chaque accès admin. Si le navigateur ne joint pas le port 4011, relancer `dev:identity`. Après son redémarrage, se déconnecter puis se reconnecter si la session précédente n’est plus reconnue. L’API, le fournisseur et l’admin suffisent à éditer les traductions et le logo ; le mock Artlogic et le worker sont nécessaires pour synchroniser les œuvres.

Les fichiers créés par `setup:local` associent `SSO_ISSUER`/`SSO_SUPABASE_URL` à `http://127.0.0.1:4011`, le callback à `http://127.0.0.1:3002/auth/callback`, et les mêmes identifiants synthétiques entre `backend/.env` et `backend/mock/.env`. Conserver ces fichiers ; ne pas relancer une initialisation pour réparer une simple absence de processus. Les gardes de session, droits et CSRF restent actives ; le simulateur refuse le mode réel et les déploiements de production.

## Étendre

L’interface admin reprend l’organisation et les reliefs de `volante-moderator-admin`, avec une palette ultramarine/graphite dédiée. Futura PT est chargée par le kit Adobe de référence ; Gill Sans puis les fontes locales prennent le relais si le kit est indisponible. Le système est décrit dans [DESIGN.md](DESIGN.md). Ses tokens MUI sont dans `app/theme/`, les équivalents des composants natifs dans `app/globals.css` : conserver leur cohérence lors d’une modification. Ce thème admin est indépendant des couleurs et polices contribuées pour le site public.

Le shell utilise une navigation latérale sur desktop et un tiroir sous 900px, avec focus clavier, fermeture par Échap et destination active. Les tests `tests/admin-navigation.spec.ts` couvrent aussi le changement de largeur et la sortie annulée d’un brouillon.

Ajouter les pages dans `app/`, les éléments réutilisables dans `components/` et leurs styles CSS Modules. Toute nouvelle opération passe par une entrée fixe dans `lib/bff/` et une route `app/api/` dédiée ; conserver Origin/CSRF, validation des IDs/body, limites, statuts et headers. Aucun proxy vers une URL fournie par le navigateur. L’autorisation métier reste dans le backend.

Toutes les réponses privées sont no-store. Ne pas activer préchargement/cache d’une œuvre ni une optimisation image réutilisable après révocation. En HTTPS, les cookies utilisent le préfixe __Host-, Secure et path=/ ; HTTP n’est autorisé que sur loopback mock local/test.

Vérification : `pnpm typecheck`, `pnpm lint`, `pnpm build`. Depuis la racine, les commandes backend `test:auth:browser`, `test:sync:browser`, `test:editorial:browser` et `test:security:browser` provisionnent leurs destinations isolées. `pnpm test:e2e` seul exige les variables et services du harness. Voir [validation](../backend/specs/001-artlogic-site-boilerplate/validation.md).

## Contenu du site

`/site-content` regroupe les traductions par thème. Choisir une langue, comparer avec la référence, puis **Enregistrer**. Les limites sont 80/500 points de code par texte et 64 couples modifiés par sauvegarde. Une valeur secondaire vide reprend la référence actuelle ; la référence ne peut pas être vide. Les clés, slugs et langues ne sont pas modifiables depuis ce formulaire. L’admin reste en français.

Le logo accepte PNG/JPEG/WebP fixe, ≤ 2 Mio et 4 MP. La sélection donne un aperçu local. Enregistrer prépare le fichier privé puis applique textes et logo dans le même PATCH versionné. Un upload refusé n’envoie aucun PATCH. En cas de conflit ou de réponse perdue, le brouillon reste présent : **Comparer avec la version enregistrée** puis choisir explicitement de conserver le brouillon ou de charger l’état enregistré. Aucun retry automatique avec une nouvelle version. La reconnexion s’ouvre dans un autre onglet. Le brouillon reste en mémoire de la page, sans localStorage/sessionStorage ; recharger/fermer la page l’abandonne. Un candidat expiré est préparé à nouveau depuis le fichier conservé.

Les routes BFF sont fixes : GET/PATCH `/api/site-content`, POST `/api/site-logos`, GET `/api/site-logos/{id}`. Origin/CSRF sont vérifiés avant lecture des mutations ; les limites de 256 Kio JSON et 2 Mio binaire sont locales à ces opérations. Les statuts/codes/détails autorisés sont filtrés, avec messages français locaux ; aucune erreur fournisseur brute ne traverse le BFF. Les limites et préconditions des routes de publication restent inchangées.

Pour changer la politique des langues, suivre [la procédure backend](../backend/README.md#header-traductions-et-logo) : environnement, provisionnement respectant contributions/NULL, puis redémarrage coordonné. [Recette et preuves 002](../backend/specs/002-header-navigation-i18n/validation.md).


## Apparence et pages

`/presentation` distingue le brouillon du site publié, propose validation, aperçu, publication et historique des dix dernières versions compatibles. La restauration demande confirmation et remplace explicitement le brouillon. Le logo, les textes globaux002 et la visibilité des œuvres gardent leur propre workflow.

- `/presentation/identity` :22 rôles couleur, diagnostics de contraste, sept rôles typographiques, familles intégrées ou WOFF2 préparées, reset par propriété et origine de la valeur. Enregistrer, puis prévisualiser accueil/catalogue/fiche avant de publier. Les couleurs peu lisibles peuvent rester au brouillon ; leur publication est refusée.
- `/presentation/pages/{pageKey}` : huit pages fixes, neuf types de sections avec variantes autorisées. Ajouter, déplacer au clavier, dupliquer, masquer, traduire et supprimer avec confirmation. Les blocs catalogue/fiche restent obligatoires. Les sélections ne contiennent que des œuvres publiques ; le backend revérifie leur disponibilité.
- `/presentation/media` : import en deux étapes, droits, limites, état et réutilisation des médias. Une réponse perdue impose de relire l’état avant nouvel envoi ; un fichier référencé ne peut pas être supprimé.

Le journal d’annulation de structure vit dans la page ouverte, même après sauvegarde. Annuler restaure les champs/UUID dans le formulaire ; enregistrer reste explicite. Publication confirmée ou sortie termine ce journal. Le formulaire avertit avant navigation/rechargement avec modifications ou journal ; aucune copie de brouillon n’est stockée dans localStorage. En cas de412, service indisponible ou session expirée, la saisie reste présente et une comparaison/reconnexion explicite est proposée.

Prévisualiser ouvre le frontend dans un onglet séparé par POST. Changer la largeur/langue dans le canvas ; fermer l’aperçu conserve la session admin. Le web-admin ne reçoit jamais PREVIEW_SERVICE_KEY. Une session ou un droit parent révoqué masque le canvas et interdit ses données/médias au contrôle suivant.

Pour la recette locale, garder le mock SSO lancé ; aucun bypass n’a été ajouté. Depuis le workspace : `pnpm --dir backend test:presentation:browser` lance les parcours complets sur des destinations temporaires. [Quickstart003](../backend/specs/003-configurable-frontend-template/quickstart.md) et [résultats/limites](../backend/specs/003-configurable-frontend-template/validation.md).


## Contact et notifications (004)

Le formulaire public général fonctionne sans catalogue ni release de présentation. Une demande liée à une œuvre n’est acceptée que si celle-ci est encore disponible et publiée au commit. Les messages sont privés ; la consultation et les relances passent par les droits SSO courants du web-admin.

Contact désactivé par défaut. `CONTACT_SERVICE_KEY` doit être identique sur API/frontend, distinct des clés BFF, preview et ingress, et reste obligatoire pour retrouver les reçus après désactivation. L’API requiert aussi `CONTACT_NETWORK_HMAC_KEY` (base64,32octets). Aucun de ces secrets n’utilise de préfixe NEXT_PUBLIC_. Garder la clé/version précédente dans `CONTACT_NETWORK_HMAC_PREVIOUS_KEYS_JSON` au moins jusqu’à extinction des fenêtres de quotas ; conserver les anciennes clés AES-GCM tant que des demandes les utilisent.

Pour activer : `CONTACT_ENABLED=true` sur API/worker/frontend ; `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `CONTACT_SMTP_HOST`, `CONTACT_SMTP_PORT`, `CONTACT_SMTP_TLS_MODE` sur API/worker, et `CONTACT_PRIVACY_URL` sur API. Une seule adresse destinataire, From configuré et Reply-To visiteur validé. En réel, port465/implicit ou587/starttls, certificat CA vérifié, authentification SMTP requise. En mock : SMTP loopback/plain, adresses .test uniquement. Les mots de passe restent dans les fichiers privés ou le gestionnaire de secrets du déploiement.

En réel, le frontal de confiance doit **écraser** un en-tête IP dédié configuré par `CONTACT_TRUSTED_INGRESS_HEADER` et `X-Contact-Ingress-Key`, avec la valeur de `CONTACT_INGRESS_KEY`. Il retire les valeurs envoyées par le visiteur ; le serveur Next vérifie cette clé avant d’utiliser l’IP canonique. Pas de fallback vers X-Forwarded-For ou X-Real-IP. Cette chaîne reste obligatoire quand le contact est désactivé, car le reçu reste récupérable. Les trois relais sont fixes : `/api/contact/config`, `/api/contact/inquiries`, `/api/contact/receipt` ; aucun proxy libre et preuve uniquement dans le corps POST.

Admission : champs nom120, e-mail254, sujet160, message5000 points de code ; corps JSON98304octets. Une preuve aléatoire de32octets retrouve la même référence pendant24h, même après retrait de l’œuvre ou désactivation ; le réemploi avec un contenu différent est refusé. Le navigateur ne persiste que preuve/expiration/référence en sessionStorage. Un reçu confirme l’enregistrement durable, pas la livraison d’un e-mail.

Quotas par défaut :5acceptations/900s par visiteur et100/3600s par site, atomiques ; transport distinct600/site/min et60/visiteur/min cumulé entre endpoints. Les IP brutes ne sont pas conservées : aliases HMAC seulement. Les erreurs et jobs contiennent des codes/IDs, jamais le texte du message, la preuve ou la réponse SMTP brute.

Les notifications sont asynchrones :3tentatives initiales maximum, délais60/300s sur24h. Seuls les refus temporaires certains sont réessayés. Après DATA sans acceptation finale, crash armé ou échec SQL après SMTP, l’état devient **incertain**, sans renvoi automatique. Le worker fige timeout SMTP et marge de lease à l’armement (10s+30s par défaut), puis fence chaque finalisation. Le web-admin demande une confirmation explicite pour une tentative manuelle ; en état incertain, un doublon reste possible. Un SMTP déjà engagé ne peut pas être rappelé.

Conservation capturée à réception :90jours par défaut (`CONTACT_RETENTION_DAYS`,1..365), sans prolongation par lecture/relance/config. Le worker réconcilie et purge toutes les30s, y compris lorsque le nouveau contact est désactivé ; demandes/preuves/tentatives/intentions expirées sont supprimées par cascade, jobs annulés et budgets périmés nettoyés. Pour tenir le délai de purge≤24h, maintenir un worker et surveiller sa disponibilité. Les anciennes preuves expirées restent des tombstones jusqu’à purge de leur demande.

Mise à niveau coordonnée : générer contrats/config/messages, appliquer `pnpm db:migrate` et `pnpm jobs:migrate` avec le rôle migration, puis `pnpm site:provision` pour les nouvelles clés de traduction ; déployer API/worker/admin/frontend ensemble. Le provisionnement préserve les contributions existantes et les valeurs NULL secondaires. Le démarrage ne crée aucune table. Aucune base pilote ni boîte réelle n’est modifiée par les harnesses.

Recette autonome depuis backend : `pnpm test:contact:delivery`, `pnpm test:contact:browser`, `pnpm test:contact:browser --admin`, `pnpm test:contact:performance`. Ces outils créent des destinations temporaires sur le Supabase de test55321/55322 et un SMTP synthétique loopback avec capture privée en mémoire. `--serve` garde les interfaces de recette ouvertes jusqu’à Ctrl-C ; aucun contenu client réel, aucune sortie SMTP réelle. Si le CLI tsx ne peut pas créer son socket IPC dans une sandbox, utiliser `node --import tsx scripts/test-contact-<delivery|browser|performance>.ts`.

Les aperçus authentifiés et Storybook sont explicitement **inert** ; le public mock utilise **captured** et le public réel **live**. Le slot client ContactForm remplace la vue typée seulement : preuves, I/O et autorisation restent dans le contrôleur commun. Couleurs et polices suivent les thèmes existants.

## Descriptions d’œuvres et aperçus liés (005)

La fiche admin d’une œuvre comporte « Description sur le site ». Choisir une langue active, saisir un texte simple (5 000 points Unicode maximum), enregistrer le brouillon, puis prévisualiser l’œuvre sélectionnée. « Effacer cette traduction » retire sa contribution ; la langue de référence sert de repli si elle existe. Les synchronisations Artlogic conservent ce contenu.

« Publier le site » publie ensemble tous les changements enregistrés : thème, pages et descriptions. Une sauvegarde seule ne modifie pas le public. Le même ETag protège cet ensemble : après conflit412 ou réponse incertaine, la saisie reste dans le formulaire. « Comparer avec la version enregistrée » montre l’autre texte ; accepter cette référence conserve les champs saisis avant une nouvelle sauvegarde explicite.

Dans le composeur de fiche, choisir explicitement une œuvre publique pour l’aperçu ; aucune première œuvre n’est sélectionnée silencieusement. Sur la fiche d’œuvre elle-même, le bouton cible directement son UUID. Le grant impose cet UUID et sa langue ; ouvrir un nouvel aperçu depuis l’admin pour changer la langue. Une œuvre masquée/retirée n’est pas prévisualisable.

Le relais fermé GET/PUT `/api/presentation/artworks/{UUID}` conserve cookies côté serveur, contrôle Origin/CSRF, transmet l’ETag exact, borne le corps à256Kio et filtre les erreurs. Les tags historiques de publication et de traduction conservent leur validateur propre. Le style reste celui de l’admin : Futura PT/Gill Sans, papier au sous-ton bleu et panneaux en relief.

Test isolé après build : depuis backend, `node --import tsx scripts/test-gallery-browser.ts --two-sites gallery- admin:gallery-editorial.spec.ts`. Il utilise SSO fictif et SMTP local, puis supprime ses destinations temporaires. Voir [le guide005](../backend/specs/005-artwork-gallery-experience/quickstart.md).

## Expositions

L’entrée Expositions réutilise le module éditorial : quatre familles de blocs, couverture, taxonomies, versions et programmation. Début/fin sont communs à toutes les langues ; les champs acceptent un brouillon incomplet et bloquent les dates impossibles/inversées. La publication exige les deux dates. Les périodes figurent dans la liste et la comparaison ; restaurer reste une modification privée.

La capacité API `exhibitionsWritable` commande les contributions ; les lectures, aperçus et retraits restent accessibles quand le gate ferme. Ajouter Expositions à un vocabulaire ou à une section est volontaire. Les anciennes sélections conservent leur périmètre. Déployer après migration025 et transition coordonnée de manifeste, puis ouvrir le gate API. Conserver les lecteurs compatibles au rollback. [Runbook](../backend/specs/010-editorial-exhibitions/release.md).

### Editorial immersive mode

Article reading mode and block appearance choices are common to all languages. API contribution is gated by `EDITORIAL_IMMERSIVE_ENABLED` (default `false`) and a conformant frontend profile. `EDITORIAL_IMMERSIVE_RENDER_ENABLED` controls the frontend reader (default `true`); setting it to `false` renders classic flow without deleting settings. No migration or site provision is required. See `../backend/specs/012-editorial-immersive-mode/release.md` for rollout and rollback order.


### Composition éditoriale assistée par IA

Publications, actualités et expositions partagent le choix manuel/automatique, des sources privées, l’affinage global ou par blocs, un historique de propositions et un aperçu avant adoption explicite. L’adoption reste un brouillon et crée une version de secours. Le mode immersif demeure un réglage indépendant.

Le gate `EDITORIAL_AI_ENABLED` est fermé par défaut. La clé `EDITORIAL_AI_API_KEY` appartient uniquement au worker ; le mode mock est réservé aux environnements de test. Les nouvelles demandes exigent une lease worker saine et des paramètres compatibles. Aucun retry fournisseur automatique après envoi incertain. Les migrations028–030 sont additives et n’ont été appliquées par cette recette que dans les bases isolées.

Voir le [guide de configuration, recette et exploitation](../backend/specs/013-ai-editorial-composition/quickstart.md) pour les commandes, les limites, la reprise GET, les candidats exacts et la conservation. La qualification synthétique de GPT-6 Luna est consignée dans validation.md de la feature013 ; la recette avec cinq contributeurs reste distincte.


## Déploiement depuis main

Les changements validés sont publiés sur la branche `main`. Le projet Vercel est connecté à ce dépôt GitHub : chaque mise à jour de `main` déclenche automatiquement un build puis la mise en production sur le domaine canonique. Vérifier le résultat du déploiement et le domaine après le push.

`BACKEND_URL` est défini dans les variables du projet Vercel et pointe vers l’API Render ; aucune adresse API ne doit être codée en dur. Un changement de variable nécessite un nouveau déploiement.

### Connexion ChatGPT

Quand le module est configuré, `/connectors/chatgpt` gère les connexions et leur révocation, `/connectors/chatgpt/consent` réutilise le SSO et le CSRF existants, les propositions ont un aperçu facultatif sous session et `/connectors/chatgpt/operations` présente l’audit des opérations appliquées aux administrateurs habilités. Les liens de propositions ne contiennent aucun jeton ; l’ouverture d’aperçu passe par un échange POST. Un administrateur ne voit pas les propositions privées d’un autre compte. Le BFF ne remplace pas la validation des droits côté backend. Voir le [runbook backend](../backend/docs/runbooks/chatgpt-connector.md) et les [gates de qualification](../backend/specs/027-chatgpt-site-connector/review/qualification.md).
