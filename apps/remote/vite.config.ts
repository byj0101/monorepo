import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      components: `${path.resolve(__dirname, "./src/components")}`,
      public: `${path.resolve(__dirname, "./public")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      types: `${path.resolve(__dirname, "./src/@types")}`,
      containers: `${path.resolve(__dirname, "./src/containers")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers")}`,
      modules: `${path.resolve(__dirname, "./src/modules")}`,
      config: `${path.resolve(__dirname, "./src/config")}`,
      material: `${path.resolve(__dirname, "./src/material")}`,
      lib: `${path.resolve(__dirname, "./src/lib")}`,
      images: `${path.resolve(__dirname, "./src/images")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      locales: `${path.resolve(__dirname, "./src/locales")}`,
    },
  },
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./reducers": "./src/store/reducers",
      },
      remotes: {
        hostApp: "http://localhost:5174/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "ES2022",
  },
});
