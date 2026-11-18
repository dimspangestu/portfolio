# Dimas Pangestu Restu Putra · Portfolio

Personal portfolio built with Next.js 14 (App Router) and plain CSS. Exported as a static site.

## Edit content

All text (projects, experience, skills, contact) lives in [`data/content.js`](data/content.js). Change it there and the page updates.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository (for example `portfolio`).
2. Go to https://vercel.com/new, sign in with GitHub and import the repository.
3. Keep the defaults (Framework: Next.js) and click **Deploy**.

Or with the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

`npm run build` also writes a static copy to `out/`, which can be hosted on Netlify, GitHub Pages or any static server.
