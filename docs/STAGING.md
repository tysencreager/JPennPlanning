# Staging & go-live workflow

The current site at **jpennplanning.com** stays exactly as it is until Jessica
approves the revamp. The revamp lives on the branch
`claude/site-revamp-staging-86paqg` and is reviewed on a separate staging URL.

## The staging site already exists (Cloudflare Pages)

This repo is connected to a Cloudflare Pages project named `jpennplanning`.
Production builds from `main` and serves the live domain. Every other branch
gets its own preview automatically, so the revamp is already live for review at:

- **Branch preview (stable, updates on every push):**
  https://claude-site-revamp-staging-8.jpennplanning.pages.dev
- Each commit also gets a unique URL, posted by the Cloudflare bot on the PR.

Nothing else needs to be set up. Push to the branch → Cloudflare rebuilds the
preview in about a minute → Jessica refreshes.

What makes a build "staging":

- The app shows a small **"Staging preview · not live"** badge and injects
  `<meta name="robots" content="noindex, nofollow">` whenever it is served from
  a `*.pages.dev`, `*.netlify.app`, `*.vercel.app`, or `staging.*` hostname, or
  when built with `VITE_STAGING=true`. The live domain never matches, so
  Google can't index or confuse the preview with the real site.

### Optional: a friendlier URL

If Jessica would rather have `staging.jpennplanning.com`: in the Cloudflare
dashboard for the `jpennplanning.com` zone, add a **CNAME** record
`staging` → `claude-site-revamp-staging-8.jpennplanning.pages.dev` (proxied).
The badge and `noindex` still apply because the hostname starts with `staging.`.

### Optional: password

Cloudflare Pages previews can be locked behind **Cloudflare Access** (Pages
project → Settings → Enable access policy), which emails a one-time code to
allowed addresses. Otherwise the URL is simply unlisted and `noindex`.

### Fallbacks

`netlify.toml` and `vercel.json` are included in case hosting ever moves; the
site is a static Vite build (`npm run build:client` → `dist/public`) so it can
be hosted anywhere static with an SPA fallback.

## Collecting Jessica's feedback

Tysen already has a review tool that lets Jessica scroll the site, drop
comments, and record video (Markup.io, Ruttl, Pastel, BugHerd and Userback all
work by pasting the preview URL). Nothing in the code needs to change for that.
If a tool needs a script tag injected, add it to `client/index.html` guarded by
`isStaging` and it will only run on previews.

## Iterating

Push changes to the revamp branch → preview redeploys. Keep iterating until
Jessica says "this is it."

## Go-live checklist

1. Fill in every item in `docs/CONTENT-STATUS.md` (social links, Bad Moms URL,
   Jessica's story, photos, pricing, spoken testimonial).
2. Mark the PR ready and merge it into `main`. Cloudflare Pages rebuilds
   production from `main` and the live domain switches over automatically.
   (If the Replit deployment is still attached to the domain, retire it; the
   `server/` code is not needed for the static site.)
3. Submit the new `client/public/sitemap.xml` in Google Search Console.
4. Redirects for old URLs are handled inside the app (see `client/src/App.tsx`):
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
   page with a text editor that saves to a database (Cloudflare D1 or the Neon
   Postgres already configured). Fully hers, fully on-brand.

Recommendation: start with 1 for launch, add 2 or 3 in the first month.
