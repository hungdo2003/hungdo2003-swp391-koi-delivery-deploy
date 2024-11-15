import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/react-deploy/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true, 
    strictPort: true,
    port: 5173, 
  },
});
