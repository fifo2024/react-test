import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                javascriptEnabled: true,
                // additionalData: '@import "src/common/style/global.less";',
            },
        },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
