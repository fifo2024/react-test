import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { comlink } from "vite-plugin-comlink";

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
    plugins: [react(), tailwindcss(), comlink()],
    worker: {
        plugins: () => [comlink()],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // 将 '@' 映射到 './src' 目录
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    },
});
