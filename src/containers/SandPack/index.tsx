import React from "react";
import {
    Sandpack,
    SandpackProvider,
    SandpackLayout,
    SandpackFileExplorer,
    SandpackCodeEditor,
    SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

export default function App() {
    const files = {};

    return (
        <SandpackProvider files={files} theme={nightOwl} template="react">
            <SandpackLayout>
                <SandpackFileExplorer />
                <SandpackCodeEditor showLineNumbers closableTabs showTabs />
                <SandpackPreview />
            </SandpackLayout>
        </SandpackProvider>
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
    );
}
