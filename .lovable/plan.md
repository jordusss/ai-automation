# Domain-for-sale landing page for ai-automation.nl

Replace the current marketing site's homepage with a single, striking "this domain is for sale" page.

## What the visitor sees

One full-screen page, no scrolling required:

- Small badge: "Premium domain · For sale"
- Huge headline: **ai-automation.nl**
- One line of positioning: a short, exact-match Dutch AI domain — instantly credible for anyone building in AI automation.
- Primary button: **Make an offer** — opens the visitor's email client, pre-filled.
- Secondary button: **Copy email address** (fallback for people without a mail client configured), with a "Copied" confirmation.
- Three small trust points: exact-match keywords, `.nl` ccTLD authority, immediate transfer.
- Discreet footer line: owner contact email, "Serious offers only."

Design keeps the site's existing dark-with-violet-glow look (animated gradient, particle backdrop, glass cards) so it still feels premium rather than a parked-domain page.

## The email link

Opens the default mail client with:

- To: `debruijn.jordy@gmail.com`
- Subject: `New bid on ai-automation.nl`
- Body (improved version of the requested text):

```text
Hi Jordy,

I'm interested in acquiring ai-automation.nl.

My offer: EUR
Name:
Company (optional):
Preferred contact:

Looking forward to hearing from you.
```

## Technical notes

- New `src/pages/ForSale.tsx`, routed at `/` in `src/App.tsx`. Existing pages (About, service detail, Terms, Privacy) stay in the codebase but are removed from the nav/footer links so the page reads as a clean sales page.
- Navbar and Footer hidden on the sale page; keep `ParticleBackground` and the gradient layer from `App.tsx`.
- `mailto:` built with `encodeURIComponent` on subject and body so line breaks and the euro sign survive.
- Copy button uses `navigator.clipboard.writeText` with a toast.
- Styling via existing semantic tokens and `glass-card`; no hardcoded colors.
- SEO: update `index.html` title to "ai-automation.nl is for sale" plus matching meta description, og and twitter tags; single H1 on the page.
- No backend needed — no Cloud, no database.
