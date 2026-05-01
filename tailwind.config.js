/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7A0C0C',
          light: '#A01414',
          dark: '#540808',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          border: '#E5E7EB',
        },
        corporate: {
          bg: '#FAFAFA',
          black: '#0A0A0A',
        },
        text: {
          primary: '#111827',
          secondary: '#4B5563',
        }
      },
      borderRadius: {
        'premium': '1rem',
      },
      spacing: {
        '8px': '8px',
      }
    },
  },
  plugins: [],
}
