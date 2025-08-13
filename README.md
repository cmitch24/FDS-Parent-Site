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
- Vercel recommended. Add domain `flyerdesignsolutions.com`.

## Notes
- Images are unoptimized to avoid remote loader config.
- Forms POST to simple API routes that return `{ ok: true }` and log the payload on the server.
