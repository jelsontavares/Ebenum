import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      serif: ["Baskerville", "Georgia", "serif"],
      sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
     },
    },
  },
  plugins: [],
} satisfies Config

