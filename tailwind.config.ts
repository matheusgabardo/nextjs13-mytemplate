/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      '4sm': '320px',
      '3sm': '380px',
      '2sm': '420px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1780px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    minWidth: {
      'xs':	'20rem', /* 320px */
      'sm':	'24rem', /* 384px */
      'md':	'28rem', /* 448px */
      'lg':	'32rem', /* 512px */
      'xl':	'36rem', /* 576px */
      '2xl':	'42rem', /* 672px */
      '3xl':	'48rem', /* 768px */
      '4xl':	'56rem', /* 896px */
      '5xl':	'64rem', /* 1024px */
      '6xl':	'72rem', /* 1152px */
      '7xl':	'80rem', /* 1280px */
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: '#F9F9F9',
        gray: { 50: '#F9F9F9', 400: '#ECECEC', 700: '#676767', 900: '#2D2D2D' },
        blue: { 500: '#3C4D5', 700: '#232B54', 900: '#13172f'},
        red: { 400: '#FF4545', 700: '#BF2424' },
        disabled: { 200: '#e9e9e9', 400: '#d4d4d4' },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        'base': '.75rem',
        'title': '1.625rem',
        'sub-title': '1.425rem',
        'alert': '0.75rem',
        'table-title': '0.938rem',
        'table-content': '0.875rem',
      },
      fontFamily: {
        base: ['Inter', 'sans'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}