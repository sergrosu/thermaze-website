import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // build: {
  //   minify: true,
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: "assets/[name].[ext]",
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
});