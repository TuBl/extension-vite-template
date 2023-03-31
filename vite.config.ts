import { resolve } from "path";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { chromeExtension } from "vite-plugin-chrome-extension";


export default defineConfig(({ command }) => {
  const isProduction = command === "build";

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [
      react(),
      (chromeExtension() as unknown) as Plugin,
    ],
    build: {
      emptyOutDir: true,
      // sourcemap: "inline",
      rollupOptions: {
        input: "src/manifest.json",
      },
    },
  };
});
