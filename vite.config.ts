import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use '/' on Vercel (or when VERCEL env is set), otherwise default to root or repo path for GitHub Pages
  base: process.env.VERCEL ? "/" : (mode === "production" ? "/Portfolio_site_LianMollick/" : "/"),
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
