/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixeloidmono: ['PixeloidMono', 'monospace'],
        pixeloidsans: ['PixeloidSans', 'sans-serif'],
        pixeloidsansbold: ['PixeloidSansBold', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratItalic: ['Montserrat-Italic', 'sans-serif'],
      },
      colors: {
        primary: '#fad',
        secondary: '#8af',
        primarydark: '#165c8a',
        secondarydark: '#101334',
        cyan: '#8ff',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
