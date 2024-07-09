import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://carsonseese.com",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
    robotsTxt(),
    webmanifest({
      name: "Carson Seese",
      icon: "src/assets/favicon.png",
      short_name: "Carson Seese",
      start_url: "/",
      display: "standalone",
    }),
  ],
});
