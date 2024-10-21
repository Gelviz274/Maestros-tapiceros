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
        cafe: "#4e3e35",
        cafeclaro: "#685340",
        beige: "#f3d7c6",
        cafehover: "#695b53",
        beigehover: "#e6ac8b",
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
