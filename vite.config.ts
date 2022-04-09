import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
    }),
  ],
  resolve: {
    alias: [
      {
        find:'@',
        replacement:path.resolve('./src')
      },
      {
        find:'assets',
        replacement:path.resolve('/src/assets')
      },
      {
        find:'component',
        replacement:path.resolve('/src/components')
      },
      {
        find:'views',
        replacement:path.resolve('/src/views')
      },
      {
        find:'store',
        replacement:path.resolve('/src/store')
      },
    ]

  },
  build: {
    minify: "terser",
    assetsDir: "assets",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    https: false,
    open: true,
    port: 8081,
  },
  css: {
    preprocessorOptions: {
      scss: {
        modifyVars: {},
        javascriptEnabled: true,
        charset: false,
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
  },
});
