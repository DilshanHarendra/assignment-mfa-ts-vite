import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'app',
      remotes: {
        dashboardApp: 'http://localhost:3001/assets/remoteEntry.js',
        userApp: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    {
      name: 'vite-plugin-reload-endpoint',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // @ts-ignore
          if (req.url === '/__fullReload') {
            server.hot.send({ type: 'full-reload' });

            res.end('Full reload triggered');
          } else {
            next();
          }
        });
      },
    },
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
