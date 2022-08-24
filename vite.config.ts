/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";
// https://vitejs.dev/config/

export default defineConfig({

  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'YangUI',
      fileName: 'yang-ui',
      formats: ['es', 'umd', 'iife']
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});