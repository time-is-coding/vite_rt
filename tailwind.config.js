/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  mode: 'jit',
  corePlugins: {
    preflight: false,
    aspectRatio: true,
    divideStyle: true,
  },
  theme: {
    extend: {},
  },
  plugins: [typography],
};
