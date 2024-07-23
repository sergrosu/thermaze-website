import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    minify: false,
    // rollupOptions: {
    //   output: {
    //     assetFileNames: "[name].[ext]",
    //   },
    // },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
});