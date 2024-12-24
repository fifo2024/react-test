import React, {
    useState,
    useEffect,
    useRef,
    CSSProperties,
    FC,
    ReactNode,
    // AnimatePresence,
} from "react";
import { motion } from "motion/react";

import _styles from "./style.module.less";

export interface OverlayProps {
    open: boolean;
    style?: CSSProperties;
    styles?: { content?: CSSProperties };
    children: ReactNode;
    draggable?: boolean;
    onToggle: (visible: boolean) => void;
}

const Overlay: FC<OverlayProps> = ({
    open,
    style = {},
    styles = { content: {} },
    children,
    draggable = false,
    onToggle,
}) => {
    const [visible, setVisible] = useState(open);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setVisible(open);
    }, [open]);

    const onToggleOverlay = () => {
        setVisible(!visible);
        onToggle && onToggle(!visible);
    };

    const wrap = {
        // backgroundColor: "#000",
    };

    const box = {
        marginTop: "12vh",
    };

    return visible ? (
        <motion.div
            className={_styles.overlay}
            ref={wrapRef}
            style={{ ...wrap, ...style }}
            onClick={onToggleOverlay}
        >
            <motion.div
                drag={draggable}
                // {draggable ? {dragConstraints: wrapRef} : {}}
                dragConstraints={wrapRef}
                style={{ ...box, ...styles.content }}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                // animate={{
                //     scale: 1,
                //     transition: {
                //         duration: 0.3,
                //         delay: 1,
                //         ease: ["easeIn", "easeOut"],
                //     },
                // }}
                className={_styles["overlay-content"]}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </motion.div>
    ) : null;
};

export default Overlay;
