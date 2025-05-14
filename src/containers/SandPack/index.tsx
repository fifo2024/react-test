import React, { useEffect } from "react";
import {
    Sandpack,
    SandpackProvider,
    SandpackLayout,
    SandpackFileExplorer,
    SandpackCodeEditor,
    SandpackPreview,
    useSandpack,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

export default function App() {
    const files = {};

    // 子组件中通过 useSandpack 获取实例
    const UpdateFileDemo = () => {
        const { sandpack } = useSandpack(); // 获取 sandpack 实例

        useEffect(() => {
            //   // 模拟从接口获取 HTML
            //   const fetchHTML = async () => {
            //     const response = await fetch("https://api.example.com/html-content");
            //     const html = await response.text();
            //     sandpack.updateFile("/index.html", html); // 动态更新文件
            //   };

            //   fetchHTML();
            setTimeout(() => {
                // 动态更新 Sandpack 中的 index.html
                sandpack.updateFile(
                    "/index.html",
                    "<html><body>hello body</body></html>"
                );
            }, 2000);
        }, []);

        return <SandpackPreview />;
    };

    return (
        // <SandpackProvider files={files} theme={nightOwl} template="react">
        //     <SandpackLayout>
        //         <SandpackFileExplorer />
        //         <SandpackCodeEditor showLineNumbers closableTabs showTabs />
        //         <SandpackPreview />
        //     </SandpackLayout>
        // </SandpackProvider>
        // <Sandpack
        //     files={files}
        //     theme={nightOwl}
        //     // theme="dark"
        //     template="react"
        //     options={{
        //         showConsole: true,
        //         showConsoleButton: true,
        //         showInlineErrors: true,
        //         showNavigator: true,
        //         showLineNumbers: true,
        //         showTabs: true,
        //     }}
        // />
        <SandpackProvider
            files={{
                "/index.html": {
                    code: `<div>Loading...</div>`, // 初始占位内容
                },
            }}
            theme={nightOwl}
            template="static"
        >
            <UpdateFileDemo />
        </SandpackProvider>
    );
}
