import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@asset': path.resolve(__dirname, './src/assets'),
      '@styled': path.resolve(__dirname, './src/styled-components'),
    },
  },
  server: {
    port: 3000,
  },
});