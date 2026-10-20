# Garden of the Gods Trading Post — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.gardenofthegodstradingpost.com/ (Manitou Springs, CO).
Preview: https://ggtp.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `garden-of-the-gods-trading-post` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `ggtp.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Motif: the stepped Pueblo Revival roofline of the 1929 adobe, used as the hero's bottom edge, the footer's top edge and the icon tiles, plus a Balanced Rock silhouette.
- Alfa Slab One headlines with Karla; red-rock rust, turquoise, adobe tan and deep earth brown.
- Their own summer video plays in the hero (poster: the porch photo), with a "today" bar for hours, phone and directions right below.
- Four "inside the post" cards (gallery, jewelry, gifts, restaurant), real stats, a "visit like a local" section with seasonal hours, a 1917–1979 history timeline with their archive photos, and groups, private events and the family of stores.

## What changed from the current site

- Removes the duplicated navigation and "Where to next?" menus and the placeholder `javascript:void(0)` links.
- Hours, phone and directions are visible above the fold instead of buried.
- The founding story is a scannable timeline; the 2014 Tripadvisor note is kept as context, not a headline.
- Mobile layout checked at 390px with no sideways scrolling.

## Owner should confirm

- "400,000 visitors a year" is from the current site; confirm whether it counts the park or the store.
- Jewelry and gallery descriptions are short summaries; add artists, brands or tribes represented.
- Group, private event and family-of-stores links point to the current site or email until real pages exist.
- Brand colors and the logo file (hotlinked from the current site).
- Photos and video are hotlinked from gardenofthegodstradingpost.com and must be replaced with licensed originals before launch.
