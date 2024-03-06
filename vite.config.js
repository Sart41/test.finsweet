import { resolve } from 'path'
import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import svgr from "vite-plugin-svgr";

const unfontsConfig = {
  // Google Fonts API V2
  google: {
    /**
     * enable preconnect link injection
     *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
     * default: true
     */
    preconnect: false,

    preload: true,


    /**
     * values: auto, block, swap(default), fallback, optional
     * default: 'swap'
     */
    display: 'swap',

    /**
     * define which characters to load
     * default: undefined (load all characters)
     */
    text: '',

    /**
     * define where the font load tags should be inserted
     * default: 'head-prepend'
     *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
     */
    injectTo: 'head-prepend',

    /**
     * Fonts families lists
     */
    families: [
      // families can be either strings (only regular 400 will be loaded)
      // 'Source Sans Pro',

      // or objects
      {
        /**
         * Family name (required)
         */
        name: 'Roboto',

        /**
         * Family styles
         */
        styles: 'wght@400;500;700',

        /**
         * enable non-blocking renderer
         *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
         * default: true
         */
        defer: true,
      },
    ],
  },
}


export default defineConfig({
  base: '/test.finsweet/',
  esbuild: {
    jsxFactory: 'factory',
    jsxInject: 'import {factory} from "/src/shared/factory.js"',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/PageAbout/index.html'),
      },
    },
  },
  plugins: [
    Unfonts(unfontsConfig),
    svgr(),
  ],
  resolve: {
    alias: {
      'pages': resolve(__dirname, '/pages/'),
      '@': resolve(__dirname, '/src/shared/*')
    }
  },
})