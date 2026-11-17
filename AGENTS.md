<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Compatibilité entre versions

- Appliquer les [règles communes de mises à jour compatibles](../backend/docs/rolling-upgrades.md). Une nouvelle version de l’admin doit fonctionner avec l’API précédente ; une API nouvelle doit préserver l’admin encore déployé.
- Négocier les nouvelles capacités et afficher un fallback explicite lorsqu’elles sont absentes, sans bloquer les autres écrans. Garder les validations, les autorisations et les écritures existantes compatibles.
- Inclure les contrats précédents, les tâches en cours et le rollback dans les contrôles des changements de schéma ou de contrat.
