import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f3d7c6",
        beigecard: "#E8DAD3",
        beigehover: "#e6ac8b",
        beigefondo: "rgba(245, 245, 220, 0.5)",
        
        cafe: "#4e3e35",
        cafeclaro: "#7D6855",
        cafehover: "#695b53",
        
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('@tailwindcss/aspect-ratio'),
  ],
}
