/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { keycloakify } from 'keycloakify/vite-plugin';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2022'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular(),
    keycloakify({
      accountThemeImplementation: 'Multi-Page',
      // @ts-expect-error wrong typing
      keycloakVersionTargets: {
        '21-and-below': false,
        '25-and-above': true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
