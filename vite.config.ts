import { defineConfig, Plugin } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { chromeExtension } from "vite-plugin-chrome-extension";

function toVitePlugin(plugin: any): Plugin {
  return plugin;
}

export default defineConfig(({ command }) => {
  const isProduction = command === "build";
  const vitePluginChromeExtension = toVitePlugin(chromeExtension());

  const basePlugins: Plugin[] = [vitePluginChromeExtension];
  const reactPlugins: Plugin[] = react() as Plugin[];

  const plugins = [...basePlugins, ...reactPlugins];

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins,
    build: {
      // sourcemap: "inline",
      rollupOptions: {
        input: "src/manifest.json",
      },
    },
  };
});
