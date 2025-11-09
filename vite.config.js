import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // for Netlify; change to "/todo-react/" if using GitHub Pages
  build: {
    outDir: "dist",
  },
});