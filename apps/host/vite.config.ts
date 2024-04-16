import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host-app",
      remotes: {
        remoteApp: "http://localhost:5173/dist/assets/remoteEntry.js",
      },
      shared: ["vue", "react", "react-dom"],
    }),
  ],
  build: {
    target: "ES2022",
  },
});
