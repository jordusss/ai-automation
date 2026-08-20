# Get the sale page found without any account setup

Everything here is on-page: search engines and AI answer engines pick it up on their own crawl, no Search Console, no verification, no logins.

## What gets added

**1. robots.txt** — the site currently has none, so crawlers get a 404 where they first look. Add `public/robots.txt` allowing all crawlers (including AI crawlers like GPTBot and PerplexityBot) and pointing to the sitemap.

**2. sitemap.xml** — also missing today. Add a one-entry `public/sitemap.xml` for the homepage so the page is submitted passively via robots.txt.

**3. Structured data (JSON-LD)** — the page has none. Add a `Product` + `Offer` block to `index.html` describing ai-automation.nl as a domain name available for sale, plus a `Person`/seller contact. This is what lets Google and AI assistants understand "this domain is for sale" rather than guessing from the copy.

**4. Canonical on the real domain** — canonical and og:url currently point at `ai-automation.lovable.app`, which tells Google the lovable.app URL is the real page. Point both at `https://ai-automation.nl/` so ranking signals land on the domain being sold. (Note: `www.ai-automation.nl` shows as not yet live in domain settings — worth finishing that connection.)

**5. og:image tag** — `public/og-image.png` exists in the project but no tag references it. Wire it up so links shared in forums, Slack, LinkedIn and marketplaces render a real preview card.

**6. A little more indexable text** — search engines have very few words to work with on a one-screen page. Keep the design exactly as is, but add:
   - A short Dutch line alongside the English pitch (the buyer pool searching "ai automation domein te koop" is Dutch).
   - A one-sentence hidden-but-crawlable page summary is not used; instead the existing three value blocks get slightly richer wording that naturally contains phrases like "domain for sale", "domeinnaam te koop", "ai automation".

## What this does not include

No Search Console, no analytics setup, no marketplace listing, no backend. Nothing that needs an account.

## Technical notes

- New files: `public/robots.txt`, `public/sitemap.xml` (static, single URL, no `lastmod`).
- `index.html`: update `<link rel="canonical">` and `og:url` to `https://ai-automation.nl/`, add `og:image` + `twitter:image` pointing at the absolute `https://ai-automation.nl/og-image.png`, add one `application/ld+json` script with Product/Offer.
- `src/pages/ForSale.tsx`: copy edits only, same layout, tokens and motion.
- Title and meta description stay exactly as you set them.
