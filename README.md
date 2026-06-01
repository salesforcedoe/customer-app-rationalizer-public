# Customer App Rationalizer — Public Surface

EA Hackathon 2026-06-01 — public github.io page that hosts the same Agentforce
agent powering the Experience Cloud site, embedded via Salesforce Messaging for
Web. Same agent, three doors (Experience Cloud, Slack, github.io).

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds Vite and
publishes `dist/` to GitHub Pages.

Site URL: `https://<owner>.github.io/customer-app-rationalizer-public/`

If the repo name changes, update `base` in `vite.config.ts`.

## Wiring the agent embed

1. In the SDO, finish Embedded Service Deployment for the Rationalizer agent.
2. Add the github.io origin to **Trusted Sites** and **CORS** allowlist.
3. Paste the Messaging for Web bootstrap snippet into `index.html` before
   `</body>`, replacing `ORG_ID`, `DEPLOYMENT_NAME`, and `SCRT2_URL`.
4. Style overrides go in `src/App.css` under `.agent-slot`.
