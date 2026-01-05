# Prashamsa Pandey — Portfolio

Live: https://prashamsapandey.com.np

## Short description

CV-driven personal portfolio for Prashamsa Pandey. The site is built with React + Vite and populated from an uploaded CV (PDF). It highlights research and projects (including the B.Tech thesis), experience, education, skills, achievements, and references, and provides a downloadable CV for easy access.

## Highlights

- CV-driven content with a downloadable PDF at `public/Prashamsa_Pandey_CV.pdf`
- Featured Work (projects & thesis) with tools, methods and key outcomes
- Clear, responsive layout using Tailwind CSS and motion-based UI
- Scrollspy navigation and accessible external links

## Tech stack

- React + Vite
- TypeScript (TSX)
- Tailwind CSS
- motion/react for animations
- lucide-react for icons

## Quick start

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Key files

- `public/Prashamsa_Pandey_CV.pdf` — downloadable CV used on the site
- `src/app/components/Projects.tsx` — Featured work and thesis card
- `src/app/components/` — other site sections (About, Experience, Education, Skills, Achievements, References, Contact)

## Deployment

The site is live at the custom domain shown above. To update the production site:

1. Make edits locally.
2. Commit and push to your Git remote.
3. Redeploy via your hosting provider (Vercel, Netlify, GitHub Pages, etc.) or trigger your CI pipeline.
