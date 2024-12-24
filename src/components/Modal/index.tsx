import React, { useState, useEffect, FC, ReactNode } from "react";
import Overlay from "../Overlay";

import _styles from "./style.module.less";

export interface ModalProps {
    open: boolean;
    children: ReactNode;
    draggable?: boolean;
    onOk: () => void;
    onCancel: () => void;
}

const Modal: FC<ModalProps> = ({
    open = false,
    children,
    draggable = false,
    onOk,
    onCancel,
}) => {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        setVisible(open);
    }, [open]);

    const onToggle = () => {
        setVisible(!visible);
        onCancel && onCancel();
    };

    return (
        <Overlay open={visible} onToggle={onToggle} draggable={draggable}>
            <div className={_styles.modal}>{children}</div>
        </Overlay>
    );
};
