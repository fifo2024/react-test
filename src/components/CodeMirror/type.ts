import { Extension, ViewUpdate } from "@uiw/react-codemirror";

export interface CodeMirrorProps {
    /**
     * 宽度
     */
    width?: string;
    /**
     * 最小宽度
     */
    minWidth?: string;
    /**
     * 最大宽度
     */
    maxWidth?: string;
    /**
     * 最小高度
     */
    minHeight?: string;
    /**
     * 最大高度
     */
    maxHeight?: string;
    /**
     * 高度
     */
    height?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 传入不同的语言，该语言关键字高亮显示
     */
    lang?: string;
    /**
     * 主题
     */
    theme?: "light" | "dark" | "none";
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * 是否可编辑
     */
    editable?: boolean;
    /**
     * 扩展工具
     */
    extensions?: Extension[];
    /**
     * 输入值时的回调函数
     */
    onChange?: (value: string, viewUpdate?: ViewUpdate) => void;
}
