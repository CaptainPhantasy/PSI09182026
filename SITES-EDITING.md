# Precision Sewer Inspection editing copy

GitHub origin: https://github.com/CaptainPhantasy/precision-sewer-inspection.git

This copy is authorized for edits and public publication only at https://precision-sewer-inspection-edits.captainphantasy.chatgpt.site. Do not push to the original GitHub repository until Floyd explicitly requests it. The checkout's GitHub push address is disabled; the separate `sites` remote is authorized.

All original pages, assets, API routes, data models, and service integrations are retained. Sites uses a static editing preview generated in a temporary directory by `scripts/build-sites-preview.mjs`. The script does not overwrite the original application source. It exports public pages, locally stored articles, service-area pages using the repository's fallback data, and staff sign-in screens.

The editing host has no production database, payment processing, calendars, AI keys or staff accounts. Public inquiry forms use the shared team's existing FormSubmit delivery provider and Douglas@PrecisionSewerInspections.com recipient, check provider acceptance and never call a request a confirmed appointment. The original checkout/payment component and API routes remain in source. Chat and site-tracker widgets are omitted only in the static build because their APIs are unavailable there. Provider acceptance is not proof of inbox delivery; local tests intercept requests and do not dispatch jobs.

For Sites, use `npm run build`, package `out/`, and publish only to the project ID in `.openai/hosting.json`. The original Yarn lockfile is preserved under `.sites-original/yarn.lock`; npm uses the original npm lockfile and legacy peer handling to retain the existing dependency versions.
