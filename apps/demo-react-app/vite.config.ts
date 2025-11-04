// apps/demo-react-app/vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Визначаємо корінь монорепозиторію
const root = resolve(__dirname, "..", "..");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    // Важливо для Vite, щоб він обробляв ці пакети як залежності
    include: ["card-core", "react-card-adapter"],
  },

  resolve: {
    alias: {
      // 🔥 КРИТИЧНО: Примусове перенаправлення імпорту на СКОМПІЛЬОВАНИЙ файл
      // Це дозволяє писати import { ... } from 'card-core';
      "card-core": resolve(root, "packages/card-core/dist/index.d.ts"),
      "react-card-adapter": resolve(
        root,
        "packages/react-card-adapter/dist/index.js"
      ),
    },
  },

  server: {
    fs: {
      // Дозволяємо доступ до кореневого каталогу та всіх пакетів
      allow: [root],
    },
  },
});
