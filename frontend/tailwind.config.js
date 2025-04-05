/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'colored': '0 4px 2px 0 rgba(107, 114, 128, 0.5)',
      },
    },
  },
  plugins: [],
}

