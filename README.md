# How to Fish Game Wiki

An SEO-ready, content-first guide and wiki site for **How to Fish**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment environment variables

Set these variables in the deployment platform before publishing:

```env
NEXT_PUBLIC_SITE_URL=https://www.howtofishgame.best
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_GA_ID` is optional for local development. When it is present,
the root layout loads Google Analytics 4 after the page becomes interactive.

## Production check

```bash
npm run lint
npm run build
npm run start
```

The first version uses local TypeScript content data and static rendering. It is intentionally free of authentication, payments, AI generation, and database dependencies so it can be deployed to a standard Next.js host.

## Content note

Some guide facts are research drafts and may change with the game version. Re-verify volatile details and source notes before publishing.
