// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        'primary-focus': 'var(--color-primary-focus)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-accent': 'var(--color-text-accent)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config