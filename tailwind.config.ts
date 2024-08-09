import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gothic A1', 'sans-serif'],
      },
      colors:{
        'slate-850': 'rgb(23, 32, 51)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
