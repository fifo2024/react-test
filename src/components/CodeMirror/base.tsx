import React, { FC } from "react";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { lineNumbers, highlightActiveLine, EditorView } from "@codemirror/view";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

import { CodeMirrorProps } from "./type";

const CodeMirrorEditor: FC<CodeMirrorProps> = (props) => {
    const {
        value,
        lang,
        width = "100%",
        minWidth,
        maxWidth,
        height = "100%",
        minHeight,
        maxHeight,
        theme = githubDark,
        editable = true,
        readOnly = false,
        extensions = [],
        onChange,
    } = props;
    const [code, setCode] = React.useState(value);

    const onCodeMirrorChange = React.useCallback(
        (value: string, viewUpdate: ViewUpdate) => {
            console.log("viewUpdate", value, viewUpdate);
            setCode(value);
            onChange && onChange(value, viewUpdate);
        },
        []
    );

    // 居左展示的扩展
    const leftAlignExtension = EditorView.theme({
        "&": {
            textAlign: "left",
        },
        ".cm-content": {
            textAlign: "left",
            margin: "0 auto",
            // width: "100%",
        },
        ".cm-line": {
            textAlign: "left",
            padding: "0 4px",
        },
    });

    return (
        <CodeMirror
            value={code}
            width={width}
            minWidth={minWidth}
            maxWidth={maxWidth}
            height={height}
            minHeight={minHeight}
            maxHeight={maxHeight}
            theme={theme}
            lang={lang}
            editable={editable}
            readOnly={readOnly}
            extensions={[
                lineNumbers(),
                highlightActiveLine(),
                keymap.of([indentWithTab]),
                leftAlignExtension,
                ...extensions,
            ]}
            onChange={onCodeMirrorChange}
            basicSetup={{
                foldGutter: true,
                dropCursor: true,
                allowMultipleSelections: true,
                indentOnInput: true,
                tabSize: 2,
                syntaxHighlighting: true,
            }}
        />
    );
};

export default CodeMirrorEditor;
