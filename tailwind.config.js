/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    'src/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind scans JSX/TSX files
  ],

  theme: {
    extend: {
      colors: {
        autogenerateShades: true,
      },
    },
  },
  plugins: [],
}

export default config
