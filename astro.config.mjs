import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [tailwind(), partytown(), sitemap(), prefetch(), image()],
});
