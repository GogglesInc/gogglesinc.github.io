import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
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
        compact: true,
        banner: '/* This source code is licensed under the MIT License. For more information, please refer to https://github.com/GogglesInc/gogglesinc.github.io/blob/main/LICENSE. */', 		
        footer: '/* This source code is licensed under the MIT License. For more information, please refer to https://github.com/GogglesInc/gogglesinc.github.io/blob/main/LICENSE. */'
      },
    },
  },
  server: {
    port: 8000,
  },
});
