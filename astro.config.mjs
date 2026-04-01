// @ts-check
import { defineConfig, fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://sakurapreschool.com",
  i18n: {
    locales: ["en", "as", "bd", "hi"],
    defaultLocale: "en",
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-jakarta-sans",
    },
    {
      provider: fontProviders.google(),
      name: "Be Vietnam Pro",
      cssVariable: "--font-vietnam-pro",
    },
  ],
  experimental: {},
})
