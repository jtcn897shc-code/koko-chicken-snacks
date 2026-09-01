// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). `site` + `base` drive canonical / Open Graph / asset
// URLs, currently set for the GitHub Pages project site.
// At launch: set site to https://kokochicken.ca and remove `base`.
export default defineConfig({
  site: 'https://jtcn897shc-code.github.io',
  base: '/koko-chicken-snacks',
});
