# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build to dist/
npm run serve    # Preview production build
```

There is no test suite and no linter configured. TypeScript type-checking: `npx tsc --noEmit`.

## Architecture

This is the **Flyer Design Solutions** company website — a single-page React + TypeScript app built with Vite.

**Entry point:** `src/main.tsx` → mounts `<App />` into `#root`.

**`src/App.tsx`** is the entire active UI: a header, three navigation cards (About Us, Pricing, Portfolio), and a footer. The card buttons are not yet wired to any routes or actions.

**`src/components/`** contains three components (`CompanyInfo`, `VideoGallery`, `DesignGallery`) that are **not currently used** in `App.tsx`. They were scaffolded for future sections:
- `VideoGallery` — expects video files at `public/videos/*.mp4`
- `DesignGallery` — uses `require.context('../assets/designs', ...)` to load images from `src/assets/designs/` (Webpack API; needs replacement if used, since this project uses Vite)

**`src/types/index.ts`** defines prop interfaces (`CompanyInfoProps`, `VideoGalleryProps`, `DesignGalleryProps`) that match the unused components but are not imported anywhere yet.

**Styling:** Plain CSS — `src/index.css` (global reset/root) and `src/App.css` (component styles). No CSS framework. Brand colors are a purple gradient (`#667eea → #764ba2`) and dark navy (`#2c3e50`).

**Path alias:** `@` resolves to `/src` (configured in `vite.config.ts`).

**`src/assets/designs/`** and `src/assets/videos/` directories exist but are empty.
