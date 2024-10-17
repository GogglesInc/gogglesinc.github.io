import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {},
  server: {
    port: 8000,
  },
});
