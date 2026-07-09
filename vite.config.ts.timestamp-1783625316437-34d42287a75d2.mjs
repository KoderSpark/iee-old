// vite.config.ts
import { defineConfig } from "file:///C:/IEEE%20-%20New%20Version/iee-old/node_modules/vite/dist/node/index.js";
import react from "file:///C:/IEEE%20-%20New%20Version/iee-old/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/IEEE%20-%20New%20Version/iee-old/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\IEEE - New Version\\iee-old";
var vite_config_default = defineConfig(({ mode }) => ({
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
            proxyReq.setHeader(
              "x-api-key",
              "ut_SyRlq2AfX0oWra5UhQ7EGoi7GFPy1P0GTqNcYU0r"
            );
          });
        }
      }
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // 👇 this ensures correct routing for Vercel deployment
  base: "/",
  build: {
    outDir: "dist"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxJRUVFIC0gTmV3IFZlcnNpb25cXFxcaWVlLW9sZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcSUVFRSAtIE5ldyBWZXJzaW9uXFxcXGllZS1vbGRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0lFRUUlMjAtJTIwTmV3JTIwVmVyc2lvbi9pZWUtb2xkL3ZpdGUuY29uZmlnLnRzXCI7Ly8gaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuLy8gaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuLy8gaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuLy8gaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG4vLyAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4vLyAgIHNlcnZlcjoge1xyXG4vLyAgICAgaG9zdDogXCI6OlwiLFxyXG4vLyAgICAgcG9ydDogODA4MCxcclxuLy8gICB9LFxyXG4vLyAgIHBsdWdpbnM6IFtyZWFjdCgpLCBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCldLmZpbHRlcihCb29sZWFuKSxcclxuLy8gICByZXNvbHZlOiB7XHJcbi8vICAgICBhbGlhczoge1xyXG4vLyAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gfSkpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgICBwcm94eToge1xyXG4gICAgICBcIi9jb3VudGVyXCI6IHtcclxuICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly9hcGkuY291bnRlcmFwaS5kZXZcIixcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHApID0+IHAucmVwbGFjZSgvXlxcL2NvdW50ZXIvLCBcIlwiKSxcclxuICAgICAgICBjb25maWd1cmU6IChwcm94eSkgPT4ge1xyXG4gICAgICAgICAgcHJveHkub24oXCJwcm94eVJlcVwiLCAocHJveHlSZXEpID0+IHtcclxuICAgICAgICAgICAgLy8gSW5qZWN0IEFQSSBrZXkgaGVhZGVyIG9uIHNlcnZlci1zaWRlIHRvIGF2b2lkIENPUlMgcHJlZmxpZ2h0IGluIGJyb3dzZXJcclxuICAgICAgICAgICAgcHJveHlSZXEuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICAgIFwieC1hcGkta2V5XCIsXHJcbiAgICAgICAgICAgICAgXCJ1dF9TeVJscTJBZlgwb1dyYTVVaFE3RUdvaTdHRlB5MVAwR1RxTmNZVTByXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKV0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIFx1RDgzRFx1REM0NyB0aGlzIGVuc3VyZXMgY29ycmVjdCByb3V0aW5nIGZvciBWZXJjZWwgZGVwbG95bWVudFxyXG4gIGJhc2U6IFwiL1wiLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUF1QkEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQTFCaEMsSUFBTSxtQ0FBbUM7QUE2QnpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGNBQWMsRUFBRTtBQUFBLFFBQzFDLFdBQVcsQ0FBQyxVQUFVO0FBQ3BCLGdCQUFNLEdBQUcsWUFBWSxDQUFDLGFBQWE7QUFFakMscUJBQVM7QUFBQSxjQUNQO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDOUUsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
