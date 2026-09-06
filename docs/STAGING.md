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

### staging.jpennplanning.com (needs Cloudflare dashboard access)

The app already treats any `staging.*` hostname as staging (badge + noindex),
so this is DNS only:

1. Cloudflare dashboard → **jpennplanning.com** zone → **DNS → Records → Add record**.
2. Type **CNAME**, Name `staging`, Target
   `claude-site-revamp-staging-8.jpennplanning.pages.dev`, Proxy status **Proxied**. Save.
3. Wait a minute, then open https://staging.jpennplanning.com. If Cloudflare
   returns a 522/530 error, also add the domain under **Workers & Pages →
   jpennplanning → Custom domains → Set up a custom domain** (`staging.jpennplanning.com`)
   so the Pages project accepts the hostname; Cloudflare will point it at the
   branch alias.

The plain `pages.dev` branch URL keeps working either way.

### Optional: password

Cloudflare Pages previews can be locked behind **Cloudflare Access** (Pages
project → Settings → Enable access policy), which emails a one-time code to
allowed addresses. Otherwise the URL is simply unlisted and `noindex`.

### Fallbacks

`netlify.toml` and `vercel.json` are included in case hosting ever moves; the
site is a static Vite build (`npm run build:client` → `dist/public`) so it can
be hosted anywhere static with an SPA fallback.

## Collecting Jessica's feedback

**Feedbucket** is wired in, staging-only. Take the values from the Feedbucket
install snippet and set `feedbackWidget` in `client/src/data/site.ts`:

```ts
export const feedbackWidget = {
  src: 'https://cdn.feedbucket.app/assets/feedbucket.js',
  attrs: { 'data-feedbucket': 'YOUR_PROJECT_ID' },
};
```

`StagingBanner` injects that script only when `isStaging` is true, so the
widget never appears on jpennplanning.com. Jessica can then click any element
on the staging site, leave a comment, or record a video, and it lands in
Feedbucket.

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
3. **Tiny admin page + database** (bigger build, the plan): the same shape as
   the `dresslerGBP` post-approval dashboard, in reverse. Jessica logs in to a
   password-protected `/admin`, writes an entry (title, category, body, an
   optional image upload), and hits Publish; the Journal page reads entries
   from the database instead of `journal.ts`. Tysen keeps a review toggle if
   he wants a look before something goes live.

   Because this site is static on Cloudflare Pages, the "backend" is Cloudflare
   Pages Functions in a `functions/` folder (`/api/journal`, `/api/auth`,
   `/api/upload`), storing entries in Cloudflare D1 (or the existing Neon
   Postgres over HTTP) and images in Cloudflare R2. No separate server to run.
   `ADMIN_PASSWORD` lives in the Pages project's environment variables, exactly
   like the dresslerGBP setup on Vercel. Markdown in, rendered with the same
   `MarkdownContent` the Journal already uses.

Decision (Sept 6): launch with 1, build 3 once the site is approved.
