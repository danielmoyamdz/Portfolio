/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        surface: {
          light: '#F2F2F7',
          dark: '#1C1C1E',
        },
        text: {
          light: '#1F2937',
          dark: '#FFFFFF',
        },
        border: {
          light: '#E5E7EB',
          dark: '#374151',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        heading: {
          light: '#111827',
          dark: '#F9FAFB',
        },
        subtext: {
          light: '#4B5563',
          dark: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      boxShadow: {
        'card-light': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-dark': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} 