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
    server: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        proxy: {
            "/api/chat": {
                target: "http://172.21.207.59:8080",
                secure: false, // 跳过https安全证书校验
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\api\/chat/, ""),
                configure: (proxy) => {
                    proxy.on("proxyRes", (proxyRes, req) => {
                        proxyRes.headers.Authorization =
                            req.headers.authorization || "";
                        proxyRes.headers.Connection = "keep-alive";
                        // proxyRes.headers.host = "127.0.0.1";
                        proxyRes.headers.Cookie = req.headers.cookie;
                    });
                },
            },
            "/v1": {
                target: "http://bjyz-qianmo-f42-ssd-com-144-207-23.bjyz.baidu.com:8887",
                secure: false, // 跳过https安全证书校验
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\v1/, ""),
                configure: (proxy) => {
                    proxy.on("proxyRes", (proxyRes, req) => {
                        proxyRes.headers.Authorization =
                            req.headers.authorization || "";
                        proxyRes.headers.Connection = "keep-alive";
                        // proxyRes.headers.host = "127.0.0.1";
                        proxyRes.headers.Cookie = req.headers.cookie;
                    });
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // 将 '@' 映射到 './src' 目录
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    },
});
