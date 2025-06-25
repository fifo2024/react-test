import { CodeMirror } from "@/components";
import JavascriptEditor from "@/components/CodeMirror/javascript";
import JsonEditor from "@/components/CodeMirror/json";
import XmlEditor from "@/components/CodeMirror/xml";

const CodeMirrorContainer = () => {
    return (
        <>
            <CodeMirror
                {...{
                    minHeight: "480px",
                    lang: "javascript",
                    value: "console.log('hello world');",
                }}
            />
            <div>
                --------------------------分隔线--------------------------
            </div>
            <JavascriptEditor
                {...{
                    minHeight: "480px",
                    value: "console.log('hello Javascript');",
                    editable: false,
                }}
            />
            <div>
                --------------------------分隔线--------------------------
            </div>
            <JsonEditor
                {...{
                    minHeight: "480px",
                    value: "{a: 1, b: 2}",
                }}
            />
            <div>
                --------------------------分隔线--------------------------
            </div>
            <XmlEditor
                {...{
                    minHeight: "480px",
                    value: "<xml></xml>",
                    onChange: (value) => {
                        console.log(43, value);
                    },
                }}
            />
        </>
    );
};

export default CodeMirrorContainer;
