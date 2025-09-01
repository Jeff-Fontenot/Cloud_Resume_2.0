// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: { 950: "#0f172a" },
        yellow: { 400: "#fde047" },
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "rgb(203 213 225)",      // slate-300
            "--tw-prose-headings": "rgb(254 249 195)",  // yellow-400
            "--tw-prose-links": "rgb(253 224 71)",      // yellow-400
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
