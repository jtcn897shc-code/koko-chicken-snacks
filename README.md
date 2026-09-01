# KOKO Chicken & Snacks — website

One-page presentational site for KOKO Chicken & Snacks, 2644 Montrose Ave,
Abbotsford BC. Built with Astro (static output), hand-authored CSS, one typeface,
no UI framework. Spec / pitch build — nothing is deployed yet.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321  (this repo also has a :4319 launch entry)
npm run build    # static site to ./dist
npm run preview  # serve ./dist locally
```

Node 22.12+ (see `package.json` engines). No environment variables, no services.

## Editing content

Everything the client would change lives in **`src/data/site.ts`**: menu groups
and prices, hours, address and phone, delivery links, favourites, review quotes,
the About paragraphs. Edit that file and every section re-renders. No CMS.

Images are in `src/assets/` and referenced by filename. Drop a replacement in
with the same name and Astro picks it up (it generates responsive sizes at build).

## Deploy (after KOKO signs)

Vercel serves the Astro build natively, no adapter:

1. Push to a private GitHub repo.
2. New Vercel project from the repo. Framework preset: Astro. Build `npm run
   build`, output `dist`. No env vars.
3. Point `kokochicken.ca` at it and set `site` in `astro.config.mjs` to the live
   URL (currently `https://kokochicken.ca`).

## TODO before launch — needs KOKO

- [ ] **Photos.** Every image in `src/assets/` is a stock placeholder
      (`src/assets/CREDITS.md`). Replace with KOKO's own food + interior shots.
- [ ] **Hours.** Values in `site.ts` are the best available from Google / DoorDash
      and the sources disagreed. Confirm the real weekly hours.
- [ ] **Delivery links.** `orderLinks.uberEats` in `site.ts` is a guessed URL.
      Replace with KOKO's real Uber Eats store page. DoorDash link is verified.
- [ ] **Social.** `social` in `site.ts` is empty. Add Instagram etc. if they have it.
- [ ] **About copy.** Written from public info, no invented history. Confirm it is
      accurate (and add the real story / founding year if they want it).
- [ ] **Alcohol.** Shown as a single line, "Beer and soju available in-store."
      Confirm that is how they want it presented.
- [ ] Menu prices are from third-party aggregators (Aug 2026). Have KOKO verify.

## Design

See `PRODUCT.md` and `DESIGN.md`. Short version: pure-white page, one gochujang
brick-red accent, one typeface (Bricolage Grotesque), big photography, light
theme only, minimal motion.
