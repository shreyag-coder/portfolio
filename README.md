# Shreya Gupta — Portfolio

Personal portfolio site for [Shreya Gupta](https://www.linkedin.com/in/shreya-gupta-0367b11b8): software engineer in Pittsburgh, Pennsylvania, focused on recommendations and product discovery, incoming M.S. Computational Data Science (MCDS) student at Carnegie Mellon University.

Built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. It is a static single-page site with in-page navigation.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173/portfolio/`).

The `/portfolio/` path matches GitHub Pages. To serve at the root instead:

```bash
VITE_BASE=/ npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`. Preview the production build with:

```bash
npm run preview
```

## GitHub Pages

The Vite `base` defaults to `/portfolio/` so the site can be published at:

`https://shreyag-coder.github.io/portfolio/`

A workflow in `.github/workflows/deploy.yml` builds on push to `main` and deploys with GitHub Pages.

To enable it:

1. In the repository settings, set **Pages** → **Source** to **GitHub Actions**.
2. Merge to `main` (or run the workflow manually).

For a custom domain or a user site served from the root, build with:

```bash
VITE_BASE=/ npm run build
```

## Headshot

Place Shreya’s professional headshot at:

```text
public/shreya-headshot.png
```

The hero is built around that file (object-fit crop, sage frame, alt text). If the image is missing, the portrait frame falls back to an SG monogram so the layout stays intact.

## Stack

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4
- Static export only — no backend or CMS
