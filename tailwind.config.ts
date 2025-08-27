// tailwind.config.ts
import type { Config } from "tailwindcss"
// Option A (TS-friendly)
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [animate], // Option B possible: require("tailwindcss-animate")
}
export default config
