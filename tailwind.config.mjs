import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANSansWeb', 'Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff5f5',
          100: '#fed7d7',
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#742a2a',
          900: '#521b1b',
        },
        accent: {
          gold: '#d4af37',
          dark: '#1a202c',
        }
      }
    },
  },
  plugins: [
    typography,
  ],
};
