import React from "react";
import styles from "./style.module.less";

const Loading = () => {
    return (
        <span className={styles.loading}>
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </span>
    );
};

export default Loading;
