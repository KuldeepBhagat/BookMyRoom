import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr"

export default defineConfig({
    plugins: [react(), tailwindcss(), svgr({
        include: '**/*.svg?react'
    })],
    server: {
        port: 5173,
        proxy: {
            "/api": {
                target: "http://localgost:5000",
                changeOrigin: true
            }
        }
    }
})