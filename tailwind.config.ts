import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fds-bg': '#0a0500',
        'fds-deep': '#1a0800',
        'fds-glow': '#f97316',
        'fds-cyan': '#f97316',
        'fds-accent': '#fb923c',
        'fds-text': '#fff7ed',
      },
      boxShadow: {
        glow: '0 0 25px rgba(249,115,22,0.35)',
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      borderColor: {
        'white-10': 'rgba(255,255,255,0.1)'
      }
    },
  },
  plugins: [typography()],
}
export default config
