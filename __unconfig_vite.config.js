
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const Unocss = __unconfig_stub;
import { presetAttributify, presetUno } from 'unocss'
import rules from './unocss.rules'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import * as path from 'path';

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  base: '/2022-f2e-week1/',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    Components(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.js'
    }),
    vue(),
    Unocss({
      // presets: [
      //   presetAttributify({ /* preset options */}),
      //   presetUno(),
      // ],
      rules: rules,
      theme: {
        colors: {
          primary1: '#52C4CC',
          primary2: '#6633FF',
          primary3: '#FF7A00',
          secondary1: '#FBBF00',
          black: '#131415'
        },
      },
    })
  ]
})

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;