# Glen Theatre

Public campaign site for the restoration of the Glen Rock Theater.

## Stack

SvelteKit + Vite + Tailwind CSS v4, deployed to Cloudflare Workers via
`@sveltejs/adapter-cloudflare`.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script            | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Local dev server                                      |
| `npm run build`   | Production build (emits `.svelte-kit/cloudflare`)     |
| `npm run preview` | Preview the production build locally                  |
| `npm run check`   | Type-check with svelte-check                          |
| `npm run test`    | Run vitest tests                                      |
| `npm run deploy`  | Deploy to Cloudflare Workers (`wrangler deploy`)      |
