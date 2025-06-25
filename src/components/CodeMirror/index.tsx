import React, { FC } from "react";

import CodeMirror from "./base";
import JavascriptEditor from "./javascript";
import XmlEditor from "./xml";
import JsonEditor from "./json";
import { CodeMirrorProps } from "./type";

const CodeMirrorEditor: FC<CodeMirrorProps> = (props) => {
    const { lang } = props;
    let CodeEditor = null;

    switch (lang) {
        case "javascript":
            CodeEditor = JavascriptEditor;
            break;
        case "xml":
            CodeEditor = XmlEditor;
            break;
        case "json":
            CodeEditor = JsonEditor;
            break;
        default:
            CodeEditor = CodeMirror;
            break;
    }

    return <CodeEditor lang={lang} {...props} />;
};

export default CodeMirrorEditor;
