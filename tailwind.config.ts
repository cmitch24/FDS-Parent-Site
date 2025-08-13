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
        'fds-bg': '#050914',
        'fds-deep': '#0a1530',
        'fds-glow': '#3ddcff',
        'fds-cyan': '#00e5ff',
        'fds-accent': '#7efcff',
        'fds-text': '#e6f7ff',
      },
      boxShadow: {
        glow: '0 0 25px rgba(61,220,255,0.35)',
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
