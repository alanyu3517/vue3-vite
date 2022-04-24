import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import Icons from 'unplugin-icons/vite'
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-imports.d.ts",
      eslintrc: { enabled: false },
    }),
    Icons()
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("./src"),
      },
    ],
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
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "vue-test",
      fileName: (format) => `vue-test.${format}.js`,
    },
    sourcemap: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
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
