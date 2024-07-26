import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        d_bg: '#1A1A1A',
        h_bg: '#FFF8E7',
        d_te: '#FFF8E7',
        h_te: '#4B3621',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
