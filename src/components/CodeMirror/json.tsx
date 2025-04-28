import { FC } from "react";
import { json } from "@codemirror/lang-json";

import CodeMirror from "./base";
import { CodeMirrorProps } from "./type";

const JavascriptEditor: FC<CodeMirrorProps> = (props) => {
    const { extensions = [] } = props;
    console.log(9, props);

    return (
        <CodeMirror
            {...props}
            extensions={[...extensions, json()]}
            lang="json"
        />
    );
};

export default JavascriptEditor;
