# KOKO Chicken & Snacks — Design System

> One committed colour (gochujang brick-red) on pure white, with one charred
> near-black immersive frame. One typeface (Bricolage Grotesque) across every
> weight. Big food photography. Light theme only, locked.

**Theme:** light only (deliberate; a restaurant menu read in daylight and on phones).

## Colour — OKLCH, defined in `src/styles/tokens.css`

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(1 0 0)` | Pure white page. Not warm paper. |
| `--surface` | `oklch(0.972 0.006 32)` | Barely-warm off-white, the About section only |
| `--frame` | `oklch(0.17 0.010 32)` | Charred near-black immersive frame (Favourites, Footer, hero base) |
| `--ink` | `oklch(0.20 0.010 32)` | Body text on light, ~15:1 on `--bg` |
| `--muted` | `oklch(0.44 0.014 32)` | Secondary text on light, ~5.4:1 on `--bg` |
| `--on-frame` | `oklch(0.95 0.008 70)` | Text on `--frame`, ~13:1 |
| `--muted-on-frame` | `oklch(0.74 0.012 70)` | Secondary text on `--frame`, ~7:1 |
| `--primary` | `oklch(0.47 0.17 32)` | Gochujang brick-red. The one accent. White text on it ~5.5:1 |
| `--primary-deep` | `oklch(0.34 0.13 32)` | Hover / pressed |
| `--primary-bright` | `oklch(0.62 0.19 34)` | Small accents on `--frame` only (footer wordmark) |

Hairlines are `--ink` / `--on-frame` at 14–26% alpha. **Colour appears only as the
brand red and inside photography — never a stray blue link or green badge.**
The red hue (32) is a warm brick, chosen over a cool crimson so it reads
"gochujang" rather than "generic RED restaurant".

## Typography — one family

- **Bricolage Grotesque Variable** (`@fontsource-variable/bricolage-grotesque`),
  self-hosted. Weights used: 400 body, 500 menu item names, 600 UI / labels,
  700 section headings, 800 display + wordmark. `font-optical-sizing: auto`.
- A single characterful grotesque, not a display+body pair: two similar
  sans-serifs is a tell, and the reflex serif options are overused. Hierarchy
  comes from weight and size contrast.
- Fluid scale in `tokens.css` (`--step--1` … `--step-5`), ratio ≥ 1.25. Hero
  ceiling `--step-5` max 5.75rem (< 6rem). Display letter-spacing −0.02 to
  −0.035em. `text-wrap: balance` on headings, `pretty` on prose.

## Shape & depth

- Radius: **14px** on cards / images, **pill** on buttons and tags. Nothing else.
- Shadows are rare, tinted to the red-brown hue, never pure black. Depth is
  mostly tonal: white sections against the charred frame.

## Layout

- `.shell`: max 1200px, fluid gutter `clamp(1.25rem, 0.6rem + 3vw, 3.5rem)`.
- Section rhythm `--space-2xl` `clamp(4.5rem, 3.5rem + 5vw, 8rem)`.
- Seven sections, each a different layout family: full-bleed hero → red values
  band → multi-column menu list → dark asymmetric favourites + pull-quotes →
  text/image About → full-bleed photo strip → info + map. No two share a family;
  no zigzag repetition.
- Menu items use CSS multicolumn (`columns: 2`) so long groups balance; short
  groups (≤ 4 items) stay single-column.

## Motion

- **No scroll-entrance animation.** Content is always visible; nothing is gated on
  a transition or scroll-timeline (which freeze in headless/background renderers).
- Hero image: slow `scale(1 → 1.06)` drift, 22s, `prefers-reduced-motion` off.
- Nav solidifies (background + hairline) once the hero passes, via one
  IntersectionObserver on a sentinel. No scroll listeners.
- Buttons: `translateY(1px)` on `:active`, background shift on hover.
- `@media (prefers-reduced-motion: reduce)` neutralises all animation and
  transition globally.

## Files

```
src/
  data/site.ts          all copy, menu, hours, links — the one edit point
  styles/tokens.css      OKLCH palette, type scale, spacing, shape, motion tokens
  styles/global.css      reset, base elements, .shell / .section / .btn, reduced-motion
  layouts/Base.astro     <head>, meta, Open Graph, JSON-LD Restaurant, skip link, nav script
  pages/index.astro      composes the nine components
  components/            Nav, Hero, KokoWay, Menu, Favourites, About, Gallery, Visit, Footer
  assets/                8 stock placeholders (see assets/CREDITS.md) — swap for KOKO's photos
```

## SEO

`<title>`, meta description, canonical, Open Graph + Twitter tags, and a JSON-LD
`Restaurant` object (address, geo-less, telephone, `servesCuisine`, `priceRange`,
`openingHoursSpecification` derived from `site.ts`, `hasMenu`, `acceptsReservations:
False`). No `aggregateRating` in the markup: the ratings shown on the page are
third-party (Uber Eats / Google) and self-hosted rating schema is a penalty risk.
