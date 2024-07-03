import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3000, // Puedes cambiar esto al puerto que prefieras
  },
  build: {
    outDir: "build", // Directorio de salida para la construcción
  },
});
