/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7879f1",
          foreground: "#9f9ff9",
        },
        secondary: "#3E334E",
        accent: "#AFA2C3",
      },
    },
  },
  plugins: [],
}

