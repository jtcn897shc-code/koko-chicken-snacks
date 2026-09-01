// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Vercel serves the build folder directly, no adapter.
// `site` + `base` drive canonical / Open Graph / asset URLs. Currently set for
// the GitHub Pages project site. At launch: set site to https://kokochicken.ca,
// remove `base`, and (if hosting elsewhere) adjust to that host.
export default defineConfig({
  site: 'https://jtcn897shc-code.github.io',
  base: '/koko-chicken-snacks',
});
