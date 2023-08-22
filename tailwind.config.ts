import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#2E2828',
        primary: '#F65151',
        secondary: 'FEF4F4',
        third: '503A3A',
      },
    },
  },
  plugins: [],
}
export default config
