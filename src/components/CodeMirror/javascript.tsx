import { FC } from "react";
import { javascript } from "@codemirror/lang-javascript";

import CodeMirror from "./base";
import { CodeMirrorProps } from "./type";

const JavascriptEditor: FC<CodeMirrorProps> = (props) => {
    const { extensions = [] } = props;

    return (
        <CodeMirror
            {...props}
            extensions={[...extensions, javascript()]}
            lang="javascript"
        />
    );
};

export default JavascriptEditor;
