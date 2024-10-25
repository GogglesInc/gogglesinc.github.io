import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-core": ["react", "react-dom", "react-router-dom"],
          "react-libs": ["@tanstack/react-query", "prop-types"],
          tailwind: ["tailwind-merge", "clsx"],
          ui: "@headlessui/react",
          icons: "@heroicons/react",
          animation: "framer-motion",
        },
      },
    },
  },
  server: {
    port: 8000,
  },
});
