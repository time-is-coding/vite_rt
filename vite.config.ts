/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import mdx from '@mdx-js/rollup';
import commonjs from 'vite-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import viteCompression from 'vite-plugin-compression';
const mdx_options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
  ],
  rehypePlugins: [],
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    resolve(),
    commonjs(),
    react(),
    mdx(mdx_options),
    viteCompression({
      threshold: 512000,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test.config.ts'],
    //..
  },
  resolve: {
    alias: [
      {
        find: '@', // 别名
        replacement: path.resolve(__dirname, 'src'), // 别名对应地址
      },
      {
        find: '@/test',
        replacement: path.resolve(__dirname, 'src/test'),
      },
    ],
  },
  esbuild: {
    charset: 'ascii',
  },
});
