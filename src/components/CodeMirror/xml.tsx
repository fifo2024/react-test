import { FC } from "react";
import { xml } from "@codemirror/lang-xml";

import CodeMirror from "./base";
import { CodeMirrorProps } from "./type";

const XmlEditor: FC<CodeMirrorProps> = (props) => {
    const { extensions = [] } = props;

    return (
        <CodeMirror {...props} extensions={[...extensions, xml()]} lang="xml" />
    );
};

export default XmlEditor;
