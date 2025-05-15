
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from "unplugin-auto-import/vite";
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      eslintrc: {
        enabled: true,
      },
      imports: ["vue", "vue-router"],
    }),
  ],
  resolve: {
    extensions: ['.vue', '.ts','.js','.gltf'],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
})