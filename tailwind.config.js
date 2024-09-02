/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixeloidmono: ['PixeloidMono', 'monospace'],
        pixeloidsans: ['PixeloidSans', 'sans-serif'],
        pixeloidsansbold: ['PixeloidSansBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
