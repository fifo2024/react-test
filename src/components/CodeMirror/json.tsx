import { FC } from "react";
import { json } from "@codemirror/lang-json";

import CodeMirror from "./base";
import { CodeMirrorProps } from "./type";

const JsonEditor: FC<CodeMirrorProps> = (props) => {
    const { extensions = [] } = props;

    return (
        <CodeMirror
            {...props}
            extensions={[...extensions, json()]}
            lang="json"
        />
    );
};

export default JsonEditor;
