# Strip to a single domain-sale page, rebranded light

Turn the site into one page: ai-automation.nl is for sale. Everything else goes, and the visual identity moves from dark neon purple to a confident, light editorial look.

## New branding

- Palette: Paper & Ink — warm off-white background (#f5f3ee), soft paper tone for surfaces (#e8e4dd), near-black ink for text and the primary accent (#0d0d0d / #2d2d2d).
- Typography: Space Grotesk for headings, DM Sans for body.
- Feel: lots of whitespace, a very large domain name as the hero, thin hairline rules instead of glass cards, minimal motion (short fade-and-rise only). No gradients, no glow, no particles.
- No price shown — offers only.

## Page content (single screen, centered)

1. Small uppercase label: "Premium domain · For sale"
2. Huge wordmark: ai-automation.nl
3. One-line pitch about the exact-match Dutch AI domain
4. Two actions: "Make an offer" (opens email, prefilled) and "Copy email address"
5. Three short value points separated by hairline rules: exact-match keywords, .nl authority, clean immediate transfer
6. Footer line: the contact email

The offer email keeps the current behaviour: recipient debruijn.jordy@gmail.com, subject "New bid on ai-automation.nl", prefilled body with offer/name/contact fields.

## What gets removed

- Pages: Index, About, ServiceDetail, Terms, Privacy
- Components: Navbar, nav menus, Hero, Services, Contact, ContactForm, Footer and all footer parts, Logo, CookieBanner, ParticleBackground, service header/benefits
- Data and helpers: serviceBenefits, serviceStyles, use-contact-form
- The database contact/newsletter wiring on the frontend (Supabase client files and the tables stay untouched in the backend, just unused)
- Unused packages: tsparticles / react-tsparticles / tsparticles-slim, Supabase auth-ui packages
- App.css leftovers

## Technical notes

- Rewrite `src/index.css` tokens to the light Paper & Ink palette (background, foreground, primary, muted, border) and swap the Google Fonts import to Space Grotesk + DM Sans; drop `.glass-card` and `.neon-border`.
- Simplify `src/App.tsx`: keep TooltipProvider, Toaster (used by the copy confirmation) and BrowserRouter; a single `/` route to `ForSale`, plus a catch-all `*` that also renders `ForSale` so any old deep link lands on the sale page.
- Rewrite `src/pages/ForSale.tsx` for the light layout; keep the mailto and clipboard logic.
- Update `index.html` title/description/OG tags to the for-sale message (already partly done) and remove the tanstack query provider only if nothing else needs it — it can stay harmlessly, but I'll drop it since no data fetching remains.
- Google Analytics tag stays in place.
