import { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./style.module.less";

function Modal({ onClose }: any) {
    return (
        <div className={styles.modal}>
            <div>
                <p>This is a modal.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default function PortalDemo() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open modal.</button>
            {showModal &&
                createPortal(
                    <Modal onClose={() => setShowModal(false)} />,
                    document.body
                )}
        </div>
    );
}
