# Medeinė Deginaitė — Registered Dietitian

A production-grade, bilingual (English + Lithuanian) marketing website for a UK registered dietitian.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and next-intl.

## What's inside

- **Bilingual from day one.** Every page works in English (`/`) and Lithuanian (`/lt`). Full `hreflang` setup for SEO.
- **Central config file.** Edit `src/config/site.ts` to change prices, contact info, social links, Cal.com URL, etc. — one place, all pages update.
- **Central content files.** All copy lives in `messages/en.json` and `messages/lt.json`. Edit text there, not in components.
- **Working contact form.** Sends through Resend to your inbox.
- **Blog infrastructure.** Drop Markdown files into `src/content/blog/en/` or `/lt/` and they appear automatically with category filtering.
- **SEO ready.** JSON-LD structured data (LocalBusiness + Person + WebSite), sitemap, robots.txt, `llms.txt` for AI agents, Open Graph, Twitter cards, canonical URLs, language alternates.
- **Privacy-friendly analytics.** Vercel Analytics (no cookies, no banner needed).
- **Accessible, fast, responsive.** Mobile-first design, reduced-motion support, semantic HTML, proper focus states.

## Tech stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — type safety
- **Tailwind CSS** — styling with custom brand palette
- **next-intl** — internationalisation
- **Lucide React** — icons
- **React Markdown + gray-matter** — blog posts
- **Resend** — contact form email delivery (free tier)
- **Vercel Analytics + Speed Insights** — performance and traffic

---

## Setup — run locally

### Prerequisites

- **Node.js 20+** installed ([download](https://nodejs.org))
- A code editor (VS Code is free and good)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template
cp .env.example .env.local

# 3. (Optional) Edit .env.local to add your Resend API key
#    — the site works without it, but the contact form won't send emails

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes hot-reload.

Lithuanian version: [http://localhost:3000/lt](http://localhost:3000/lt)

---

## Before going live — checklist

### 1. Register the domain

Buy `medeinedietitian.co.uk` from a registrar. Recommended:

- **Cloudflare Registrar** (cheapest, no upsells) — cloudflare.com/products/registrar
- Namecheap or 123-reg work too

### 2. Deploy to Vercel

```bash
# Install Vercel CLI (once)
npm install -g vercel

# In the project folder:
vercel
```

Follow the prompts. Alternative: push to GitHub, then import the repo at vercel.com — click through the defaults.

Once deployed, in the Vercel dashboard → Project Settings → Domains, add `medeinedietitian.co.uk` and follow their DNS instructions.

### 3. Set up Resend (for the contact form)

1. Sign up at [resend.com](https://resend.com) (free: 100 emails/day, 3,000/month)
2. In Resend → **API Keys**, create a key. Copy it.
3. In Vercel → **Settings** → **Environment Variables**, add:
   - `RESEND_API_KEY` = the key you copied
   - `RESEND_FROM` = leave as default (`Website <onboarding@resend.dev>`) for now
4. Redeploy (Vercel does this automatically when env vars change)
5. **Later, when ready for a real sender address:**
   - In Resend → **Domains**, add `medeinedietitian.co.uk`
   - Add the DNS records they give you (at your domain registrar or Cloudflare)
   - Once verified, change `RESEND_FROM` in Vercel to:
     `Medeinė Deginaitė <hello@medeinedietitian.co.uk>`

### 4. Set up Cal.com (for bookings)

1. Sign up at [cal.com](https://cal.com) (free for individuals)
2. Set your username as `medeine` (or whatever you prefer — update `src/config/site.ts` to match)
3. Create these event types:
   - **15min-discovery** — 15 minutes, free
   - **initial-assessment** — 60 minutes, £85 (connect Stripe in Cal.com to charge)
   - **follow-up** — 30 minutes, £45
4. In Cal.com settings, connect your Google Calendar so blocked times sync automatically

### 5. Set up email forwarding

Once the domain is registered:

- **If using Cloudflare** for DNS: Cloudflare offers free Email Routing. In Cloudflare → Email → Email Routing, add `hello@medeinedietitian.co.uk` → forwards to `medeine.deginaite@gmail.com`. Takes 5 minutes.
- **If using another registrar:** most offer free email forwarding. Check their docs.

Then in Gmail: Settings → Accounts → "Send mail as" → add `hello@medeinedietitian.co.uk` so you can reply from that address.

### 6. Professional / regulatory prerequisites

**Before publishing the site, Medeinė should confirm:**

- [ ] **NHS employer's secondary employment policy** — declare private practice to line manager (usually a 10-minute conversation)
- [ ] **BDA professional indemnity insurance** — confirm it covers private practice and covers online consultations. Email BDA directly and get this in writing before seeing any paying client.
- [ ] **HCPC registration** — confirm it's current (free to check at hcpc-uk.org/check-the-register)
- [ ] **Clinical records system** — decide where session notes will be securely stored (Cliniko, Power Diary, or encrypted local system). WhatsApp / Google Docs are not GDPR-compliant for clinical notes.

### 7. Customise the site

Open `src/config/site.ts` and update:

- Social media URLs (or set to empty strings `''` to hide the icons)
- Contact email addresses
- HCPC registration number (optional, but good for trust)

Open `messages/en.json` and `messages/lt.json` to edit any copy.

Replace the placeholder hero photo:

- Source a professional headshot (see main advice)
- Save as `public/portrait.jpg`
- In `src/app/[locale]/page.tsx`, change the `src="https://images.unsplash.com/..."` to `src="/portrait.jpg"`

---

## Project structure

```
medeine-dietitian/
├── messages/
│   ├── en.json                 ← All English copy
│   └── lt.json                 ← All Lithuanian copy (edit here, not in components)
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── llms.txt                ← AI-agent-friendly summary
│   └── manifest.webmanifest
├── src/
│   ├── app/
│   │   ├── [locale]/           ← All pages (bilingual)
│   │   │   ├── page.tsx        ← Home
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── pricing/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── legal/
│   │   │   └── layout.tsx
│   │   ├── api/contact/        ← Contact form API
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── layout.tsx
│   ├── components/             ← Reusable UI
│   ├── config/
│   │   └── site.ts             ← ⭐ SINGLE SOURCE OF TRUTH
│   ├── content/blog/           ← Markdown blog posts
│   ├── i18n/                   ← i18n configuration
│   ├── lib/                    ← Utilities
│   └── middleware.ts           ← Locale routing
├── .env.example
├── tailwind.config.ts          ← Brand palette, fonts, design tokens
└── package.json
```

---

## How to add a blog post

1. Create a new file in `src/content/blog/en/my-new-post.md`
2. Add the frontmatter at the top:

```md
---
title: 'Your post title'
description: 'One-sentence summary for SEO and preview cards.'
date: '2026-04-20'
category: 'fertility' # or weightLoss, glp1, womensHealth, nutrition, recipes
cover: 'https://images.unsplash.com/...?w=1200&q=85'
---

Your post content in Markdown.

## Section headings work.

- Lists work.
- **Bold** and *italic* work.
- [Links](https://example.com) work.
```

3. Create the Lithuanian version at `src/content/blog/lt/my-new-post.md` (same filename — this is how translations are matched)
4. Save. Refresh. It appears automatically.

---

## How to change prices

Open `src/config/site.ts`. Scroll to the `pricing` export. Change values. Save.

Prices also show in `messages/en.json` and `messages/lt.json` (under `pricing.sessions` and `pricing.packages`). Update these too to keep the display text consistent. **Yes, this is two places** — the copy file is deliberately editable by non-developers.

---

## How to change colours

Open `tailwind.config.ts`. The `colors` block defines the sage, clay, cream, charcoal, and gold palettes. Change the hex values; everything updates.

---

## SEO notes

The site is technically optimised out of the box:

- ✅ JSON-LD structured data (LocalBusiness, HealthAndBeautyBusiness, Person, WebSite)
- ✅ Sitemap with language alternates
- ✅ Robots.txt
- ✅ `hreflang` tags for English / Lithuanian
- ✅ Open Graph + Twitter card tags
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Mobile-first, Core Web Vitals friendly
- ✅ `llms.txt` for AI agents

**SEO is a 6–12 month game for competitive health terms.** This site sets up the technical foundation perfectly. Ranking top for "fertility dietitian UK" requires:

1. **Publishing consistently.** One substantial, genuinely useful article per month minimum.
2. **Getting backlinks.** BDA Find a Dietitian, guest posts on reputable sites, local GP surgeries, podcasts.
3. **Google Business Profile.** Set one up — this is critical for local search and currently missing. (It's free.)
4. **Patience.** New domains take 3–6 months before Google trusts them.

---

## Support

If you hit an error running `npm install` or `npm run dev`, common fixes:

- **Node version too old:** Upgrade to Node 20 or 22
- **Port 3000 in use:** Run `npm run dev -- -p 3001`
- **TypeScript errors:** Run `npm install` again to make sure all packages are present

---

## Licence

Private — © Medeinė Deginaitė. All rights reserved.
