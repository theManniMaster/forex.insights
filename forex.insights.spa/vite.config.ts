import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/forex.insights/",
    build: {
        chunkSizeWarningLimit: 1600
    }
})
