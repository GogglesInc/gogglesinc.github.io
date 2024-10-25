import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChun​: {
          core: ["react", "react-dom", "react-router-dom", "@tanstack/react-query", "prop-types"],
          tailwind: ["tailwind-merge", "clsx"],
          ui: ["@headlessui/react", "@heroicons/react", "framer-motion"],
        },
      },
    },
  },
  server: {
    port: 8000,
  },
});
