# ByteSpace New

A responsive recreation of the ByteSpace New website based on the provided Figma design, built with Next.js, React, TypeScript and Tailwind CSS.

## Live Demo

Not deployed yet. Run the project locally by following [Getting Started](#getting-started).

## Repository

https://github.com/HimelDvNath/bytespace

## Design

https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static generation, Turbopack)
- [React 19](https://react.dev/) with the React Compiler
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- ESLint (`eslint-config-next`)

No UI or state-management libraries are used. Every component is written from scratch.

## Features

- Responsive landing page that matches the Figma design at 1440px and adapts to mobile, tablet and desktop
- Mobile navigation with an accessible disclosure menu (closes on Escape and returns focus)
- Course explorer on the home page with category tabs and hero search
- Course search page with search scope (courses or creators), rating, level and category filters, sorting and pagination
- Course details with **About**, **Lessons** and **Reviews** tabs, a shared enroll sidebar, a share link and a review rating filter
- Creator profile with a follow toggle and a filterable course grid
- Sign In and Sign Up pages with validation, loading, error and success states
- Custom 404 page from the Figma design
- Shareable URLs: filters, search terms and pages are stored in the query string
- Accessible UI: semantic landmarks, heading hierarchy, labelled controls, keyboard-friendly menus and visible focus states
- SEO metadata, Open Graph image and favicon
- Every route is statically prerendered

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page |
| `/courses` | Course search (`?q=`, `scope`, `category`, `level`, `rating`, `sort`, `page`) |
| `/courses/[slug]` | Course details: About |
| `/courses/[slug]/lessons` | Course details: Lessons |
| `/courses/[slug]/reviews` | Course details: Reviews |
| `/creators/[slug]` | Creator profile |
| `/login` | Sign In |
| `/register` | Sign Up |

Example: `/courses/build-digital-asset` and `/creators/purepearl-studio`.

## Getting Started

**Requirements:** Node.js 20.9 or later and npm.

```bash
git clone https://github.com/HimelDvNath/bytespace.git
cd bytespace
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Build

```bash
npm run build
npm run start
```

## Environment Variables

No environment variables are required. Optionally, copy `.env.example` to `.env.local` and set:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public base URL used for absolute Open Graph links |

## Project Structure

```text
src/
├── app/                  # Routes, layouts, metadata, favicon and OG image
│   ├── (auth)/           # Login and register pages
│   ├── courses/          # Search page and course details (About / Lessons / Reviews)
│   └── creators/         # Creator profile
├── assets/               # Self-hosted fonts and optimised images exported from Figma
├── components/
│   ├── auth/             # Auth shell, forms and text field
│   ├── buttons/          # Button and ButtonLink
│   ├── cards/            # Course, stat, learning-path and testimonial cards
│   ├── catalog/          # Filter toolbar, results grid and pagination
│   ├── common/           # Container, logo, select menu, ornaments, backgrounds
│   ├── course-detail/    # Course hero, sidebar, tabs and reviews
│   ├── creator/          # Creator stats and follow toggle
│   ├── hero/             # Landing hero and search form
│   ├── icons/            # SVG icons exported from Figma
│   ├── layout/           # Footer and newsletter form
│   ├── navbar/           # Navbar and mobile menu
│   ├── search/           # Search bar and results
│   └── sections/         # Landing page sections
├── lib/                  # Content data, filtering, validation, fonts and site config
└── types/                # Shared TypeScript types
```

## Implementation Notes

- **Design tokens:** colors, typography and spacing come from the Figma style guide and are defined as Tailwind theme tokens in `src/app/globals.css`.
- **Assets:** photos, icons, logos and 3D shapes were exported directly from Figma and converted to WebP or SVG.
- **Fonts:** Poppins is loaded through `next/font/google` and Satoshi is self-hosted with `next/font/local`.
- **Data-driven UI:** courses, categories, creators, testimonials and navigation live in `src/lib` and are rendered with `.map()`.
- **Client components:** only interactive parts use `"use client"` (menus, filters, forms, share and follow buttons). Everything else is a Server Component.
- **Backend:** none. Form submissions are simulated on the client, and social sign-in shows an "unavailable" notice.

## Deployment

Not deployed yet. The project builds as a fully static Next.js app and can be deployed to Vercel without extra configuration.
