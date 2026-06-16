// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));





import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/counter": {
        target: "https://api.counterapi.dev",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/counter/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            // Inject API key header on server-side to avoid CORS preflight in browser
            proxyReq.setHeader(
              "x-api-key",
              "ut_SyRlq2AfX0oWra5UhQ7EGoi7GFPy1P0GTqNcYU0r"
            );
          });
        },
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 👇 this ensures correct routing for Vercel deployment
  base: "/",
  build: {
    outDir: "dist",
  },
}));

