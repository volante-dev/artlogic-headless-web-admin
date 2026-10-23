# Administration Artlogic

Next.js 16.4 / React 19.3, TypeScript et CSS Modules. Le BFF garde les tokens OAuth côté backend. Le navigateur reçoit un handle opaque HttpOnly et un jeton CSRF ; chaque accès sensible vérifie les droits Volante et l’allowlist de sujets configurée.

## Installation

`nvm install && nvm use`, puis `pnpm install --frozen-lockfile`. Ce dépôt utilise Node 24.22.0 et pnpm 12.14.0 ; conserver pnpm pour les installations et le lockfile. En cas d’échec de npm sur les liens du node_modules, revenir à Node 24 et à cette commande pnpm.

Cloner le backend à côté sous `../backend` pour les mocks, les contrats, le guide et les tests d’intégration. Voir les [trois dépôts](../backend/README.md).

## Utilisation

Suivre le [quickstart](../backend/specs/001-artlogic-site-boilerplate/quickstart.md). `.env.local` est généré par `backend setup:local` ou renseigné depuis `.env.example`. `pnpm dev --port 3002`, `pnpm build`, `pnpm start --port 3002`. Dev/build utilisent Webpack. Aucune dépendance Tailwind/Turbopack.

Variables serveur : SITE_ID/SITE_NAME, origines, BACKEND_URL, BFF_SERVICE_KEY et paramètres de session (scope B). Aucun `NEXT_PUBLIC_` ni secret Supabase/Artlogic/SSO dans ce package. L’identité est lue à la requête : changer les variables et redémarrer suffit, sans reconstruire l’image.

Le login suit le fournisseur OIDC, la sync donne un suivi durable, et le catalogue permet recherche, filtres, prévisualisation et publication individuelle. En conflit 412, la fiche est relue et une nouvelle décision explicite est demandée. Une œuvre retirée ne peut pas être publiée. Une erreur de logout conserve les cookies pour permettre une nouvelle tentative ; une panne du SSO n’empêche pas la révocation locale.

## Étendre

Ajouter les pages dans `app/`, les éléments réutilisables dans `components/` et leurs styles CSS Modules. Toute nouvelle opération passe par une entrée fixe dans `lib/bff/` et une route `app/api/` dédiée ; conserver Origin/CSRF, validation des IDs/body, limites, statuts et headers. Aucun proxy vers une URL fournie par le navigateur. L’autorisation métier reste dans le backend.

Toutes les réponses privées sont no-store. Ne pas activer préchargement/cache d’une œuvre ni une optimisation image réutilisable après révocation. En HTTPS, les cookies utilisent le préfixe __Host-, Secure et path=/ ; HTTP n’est autorisé que sur loopback mock local/test.

Vérification : `pnpm typecheck`, `pnpm lint`, `pnpm build`. Depuis la racine, les commandes backend `test:auth:browser`, `test:sync:browser`, `test:editorial:browser` et `test:security:browser` provisionnent leurs destinations isolées. `pnpm test:e2e` seul exige les variables et services du harness. Voir [validation](../backend/specs/001-artlogic-site-boilerplate/validation.md).
