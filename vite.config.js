import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      ['process.env.' + key]: `"${val}"`,
    };
  }, {});

  return {
    preview: {
      port: 8080,
    },
    define: envWithProcessPrefix,
    build: {
      outDir: 'build',
    },
    plugins: [
      reactRefresh(),
      svgrPlugin({
        svgrOptions: {
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
    ],
    server: {
      open: true,
    },
  };
});
