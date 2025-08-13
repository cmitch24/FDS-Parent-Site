# Flyer Design Solutions — Parent Site

Production-ready Next.js 14 (App Router + TypeScript) site with Tailwind CSS.

## Setup
1. Place your assets:
   - `public/logo.png`
   - `public/hero.jpg`
2. Install deps and run:

```bash
npm i
npm run dev
```

## Deploy

## Deployment

Recommended: Vercel

- Push to GitHub (done). Connect the repo in vercel.com/new.
- Set these Environment Variables in Vercel Project Settings → Environment Variables:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
- Trigger a deploy. Next.js 14 App Router builds automatically.

CI

- GitHub Actions workflow `.github/workflows/ci.yml` builds and lints on pushes/PRs to `main`.

## Notes
