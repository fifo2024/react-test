import React, { FC } from "react";

import CodeMirror from "./base";
import JavascriptEditor from "./javascript";
import { CodeMirrorProps } from "./type";

const CodeMirrorEditor: FC<CodeMirrorProps> = (props) => {
    const { lang } = props;
    let CodeEditor = null;

    switch (lang) {
        case "javascript":
            console.log("13");
            CodeEditor = JavascriptEditor;
            break;
        default:
            CodeEditor = CodeMirror;
            break;
    }

    console.log(20, CodeEditor, props);

    return <CodeEditor lang={lang} {...props} />;
};

export default CodeMirrorEditor;
