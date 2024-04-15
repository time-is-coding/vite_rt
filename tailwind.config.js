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
    extend: {
      fontFamily: {
        sans: ['PingFang SC', 'Arial', 'Helvetica', 'sans-serif'],
        // 按需添加其他字体族
      },
      fontSize: {
        xs: ['12px', '20px'], // 字体大小和行高
        sm: ['14px', '22px'],
        base: ['16px', '24px'],
        lg: ['18px', '26px'],
        xl: ['24px', '32px'],
        '2xl': ['30px', '38px'],
        '3xl': ['38px', '46px'],
        '4xl': ['46px', '54px'],
        // 按需添加其他字体大小
      },
      // 按需扩展其他主题配置...
    },
  },
  plugins: [typography],
};
