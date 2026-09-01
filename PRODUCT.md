# Product

## Register

brand

## Users

Hungry locals in Abbotsford and the Fraser Valley, mostly on a phone, deciding
where to get dinner in the next ten minutes. They already know KOKO by word of
mouth or a delivery app and want three things fast: the menu, whether it is open,
and how to order. A smaller group is planning a group order or a first visit.

## Product Purpose

A one-page site for KOKO Chicken & Snacks, a Korean double-fried chicken counter
at 2644 Montrose Ave, downtown Abbotsford. It is presentational: no reservations,
no cart. Success = the visitor sees the full menu, gets the hours and address,
and taps to call or to order on a delivery app. The page should look like the
food tastes: hot, crisp, unfussy.

## Brand Personality

**Hot, direct, unpretentious.** A neighbourhood snack bar, not a franchise. Copy
is plain and a little playful ("Order extra napkins."), never markety. One loud
colour, one typeface, big photos, short words.

## Anti-references

- The category cliché: fire-engine red plus black plus K-pop neon, glossy stock
  "food on white", a hero carousel.
- Warm cream / beige backgrounds (the current AI default). Warmth here comes from
  the gochujang red and the photography, on a pure-white page.
- Reservation-widget and online-ordering-cart energy. KOKO does neither on-site.
- Eyebrow kickers above every section; numbered section markers.

## Design Principles

1. **Menu first.** The full menu with prices is the reason people are here. It is
   readable, complete, and one tap from the hero.
2. **One committed colour.** Gochujang brick-red carries the brand: hero, CTAs,
   menu headings, the values band, the footer. No second accent.
3. **Photography does the selling.** Every section that can hold a photo holds
   one. Placeholders now, KOKO's own later.
4. **Restraint in motion.** No scroll-entrance choreography. A slow hero drift and
   hover feedback, nothing that can leave a section blank if it fails.
5. **Fast and static.** Astro static output, zero UI framework, optimized images,
   one small script. It should open instantly on a phone on mobile data.

## Accessibility & Inclusion

WCAG AA contrast throughout (body text well past AA on white; white on the red
passes for all sizes). Full keyboard nav, visible focus rings, a skip link,
semantic landmarks and headings. `prefers-reduced-motion` disables the hero
drift and all transitions. Every image has descriptive alt text.
