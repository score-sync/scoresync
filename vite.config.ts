import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(mode, env);
  return {
    plugins: [
      react(),
      visualizer({ open: false }),
      VitePWA({
        registerType: 'prompt',
        devOptions: {
          enabled: true,
        },
        workbox: {
          cleanupOutdatedCaches: true,
        },
      }),
      mockDevServerPlugin(),
    ],
    build: { chunkSizeWarningLimit: 625 },
    server: {
      proxy: {
        '^/mock': { target: 'http://localhost:5173' },
      },
    },
  };
});
