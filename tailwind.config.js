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
        secondarydark: '#101544',
        cyan: '#4ff',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
