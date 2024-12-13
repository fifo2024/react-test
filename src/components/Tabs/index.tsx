import React from "react";
import styles from "./style.module.less";

const Tabs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <input type="radio" id="radio-1" name="tabs" checked />
                <label className={styles.tab} htmlFor="radio-1">
                    Hello<span className={styles.notification}>2</span>
                </label>
                <input type="radio" id="radio-2" name="tabs" />
                <label className={styles.tab} htmlFor="radio-2">
                    UI
                </label>
                <input type="radio" id="radio-3" name="tabs" />
                <label className={styles.tab} htmlFor="radio-3">
                    World
                </label>
                <span className={styles.glider}></span>
            </div>
        </div>
    );
};

export default Tabs;
