/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'groupize-green': '#7BC143',
        'groupize-dark': '#2C3E50',
        'aime-green': '#8FD14F',
        'aime-light': '#E8F5E9',
      },
    },
  },
  plugins: [],
}