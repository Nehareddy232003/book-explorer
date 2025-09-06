import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/book-explorer/",
  preview: {
    allowedHosts: true, // ✅ Allow CodeSandbox host
  },
  server: {
    allowedHosts: ["k8j6jl-5173.csb.app"], // 👈 add this line
  },
});
