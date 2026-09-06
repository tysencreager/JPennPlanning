# Staging & go-live workflow

The current site at **jpennplanning.com** stays exactly as it is until Jessica
approves the revamp. The revamp lives on the branch
`claude/site-revamp-staging-86paqg` and is reviewed on a separate staging URL.

## How the staging site works

The site is a static Vite build (React SPA). Nothing on the Express server is
used at runtime, so the built `dist/public` folder can be hosted anywhere static.

Two things make a build "staging":

- `VITE_STAGING=true` at build time shows a small **"Staging preview · not live"**
  badge in the corner and injects `<meta name="robots" content="noindex, nofollow">`
  so Google never indexes the preview or confuses it with the live site.
- It is served from a different host/subdomain than the live domain.

## Option A (recommended): Netlify branch deploy

1. Sign in to Netlify → **Add new site → Import an existing project** → pick the
   `tysencreager/JPennPlanning` GitHub repo.
2. Netlify reads `netlify.toml` automatically (build command, publish dir, SPA
   redirect, staging env vars).
3. **Site settings → Build & deploy → Branches**: set *Production branch* to
   `main`, and add `claude/site-revamp-staging-86paqg` under *Branch deploys*.
4. Every push to the revamp branch publishes to
   `https://claude-site-revamp-staging-86paqg--<site-name>.netlify.app`.
5. Optional, nicer for Jessica: **Domain management → Add domain alias**
   `staging.jpennplanning.com`, then add a CNAME record at the DNS provider
   pointing `staging` → `<site-name>.netlify.app`.
6. Optional password: Netlify **Site protection** (paid tier) or leave it
   unlisted; the page is `noindex` and the URL is unguessable.

Vercel works the same way (`vercel.json` is included); Cloudflare Pages too.

## Collecting Jessica's feedback

Tysen mentioned already having a review tool that lets Jessica scroll the
site, drop comments, and record video (Markup.io, Ruttl, Pastel, BugHerd and
Userback all work by pasting the staging URL). Nothing in the code needs to
change for that. If a tool needs a script tag injected, add it to
`client/index.html` guarded by `VITE_STAGING` (ask and it will be wired up).

## Iterating

Push changes to the revamp branch → staging redeploys in ~1 minute. Keep
iterating until Jessica says "this is it."

## Go-live checklist

1. Fill in every item in `docs/CONTENT-STATUS.md` (social links, Bad Moms URL,
   Jessica's story, photos, pricing, spoken testimonial).
2. Merge the PR into `main`.
3. Point the live domain at the new build:
   - **If staying on Replit:** the Replit deployment builds from `main`; run
     `npm run build` and redeploy. `VITE_STAGING` is unset there, so no badge.
   - **If moving hosting to Netlify/Vercel:** set the site's production branch
     to `main`, add `jpennplanning.com` + `www` as the primary domain, update
     DNS, and remove the Replit deployment once DNS has propagated.
4. Submit the new `client/public/sitemap.xml` in Google Search Console.
5. Redirects for old URLs are handled inside the app (see `client/src/App.tsx`):
   `/services → /coaching`, `/blog → /journal`, `/gallery` & `/testimonials →
   /connections`, `/quiz → /assessment`.

## The Journal: letting Jessica publish herself

Today posts live in `client/src/data/journal.ts`. Three ways to let Jessica
publish without touching code, in order of effort:

1. **Email-to-Tysen** (works now): she emails the entry, Tysen pastes it into
   `journal.ts` and pushes. Five minutes.
2. **Substack / Medium RSS** (small build): Jessica writes on Substack, the
   Journal page pulls her RSS feed and renders it, and Substack doubles as her
   email list. Best fit for "RSS feed" from the meeting.
3. **Tiny admin page + database** (bigger build): a password-protected `/admin`
   page with a text editor that saves to the Neon Postgres already configured
   for this project. Fully hers, fully on-brand.

Recommendation: start with 1 for launch, add 2 or 3 in the first month.
