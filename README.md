# ByteSpace New

A responsive recreation of the ByteSpace New website based on the provided Figma design.

## Design

https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Features

- Responsive landing page (mobile, tablet, desktop), matched to the Figma frame at 1440px
- Mobile navigation (accessible disclosure menu, closes on Escape)
- Course explorer: category filters and hero search, synced to the URL (`?category=`, `?q=`)
- Sign In and Sign Up pages with validation, loading and success states
- Custom 404 page from the Figma design
- Reusable, data-driven components (`src/lib/data.ts`)
- Accessible UI: semantic landmarks, labelled forms, visible focus states
- SEO metadata, Open Graph image and favicon

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
├── app/            # routes: home, (auth)/login, (auth)/register, not-found, metadata files
├── assets/         # self-hosted fonts and optimised images exported from Figma
├── components/
│   ├── auth/       # auth shell, forms, text field
│   ├── buttons/    # Button / ButtonLink
│   ├── cards/      # course, stat, learning-path and testimonial cards
│   ├── common/     # container, logo, ornaments, glow background, avatar stack
│   ├── hero/       # hero section and search form
│   ├── icons/      # SVG icons exported from Figma
│   ├── layout/     # footer and newsletter form
│   ├── navbar/     # navbar and mobile menu
│   └── sections/   # landing page sections
├── lib/            # content data, filters, validation, fonts, site config
└── types/          # shared TypeScript types
```

## Notes

- Colors, typography and spacing tokens come from the Figma style guide (`src/app/globals.css`).
- There is no backend: form submissions are simulated on the client.
- Optional: set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to produce absolute Open Graph URLs.
