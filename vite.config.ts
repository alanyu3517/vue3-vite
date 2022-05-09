import vue from "@vitejs/plugin-vue";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vuex"],
      dts: "src/auto-imports.d.ts",
      eslintrc: { enabled: false },
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "icon",
        }),
      ],
    }),
    Icons({ autoInstall: true, compiler: "vue3" }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("./src"),
      },
    ],
    extensions: [".sass", ".scss", ".css", ".wasm", ".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"],
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
    open: false,
    port: 8081,
  },
  css: {
    preprocessorOptions: {
      scss: {
        exclude: "node_modules",
        javascriptEnabled: true,
      },
    },
  },
});
