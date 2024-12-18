import React, { useState, useEffect } from "react";
import styles from "./style.module.less";

const Tabs = () => {
    const [checked, setChecked] = useState("radio-1");
    useEffect(() => {}, []);

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <input
                    type="radio"
                    id="radio-1"
                    name="tabs"
                    checked={checked === "radio-1"}
                    onChange={() => setChecked("radio-1")}
                />
                <label className={styles.tab} htmlFor="radio-1">
                    Upcoming<span className={styles.notification}>2</span>
                </label>
                <input
                    type="radio"
                    id="radio-2"
                    name="tabs"
                    checked={checked === "radio-1"}
                    onChange={() => setChecked("radio-2")}
                />
                <label className={styles.tab} htmlFor="radio-2">
                    Development
                </label>
                <input
                    type="radio"
                    id="radio-3"
                    name="tabs"
                    checked={checked === "radio-1"}
                    onChange={() => setChecked("radio-3")}
                />
                <label className={styles.tab} htmlFor="radio-3">
                    Completed
                </label>
                <span className={styles.glider}></span>
            </div>
        </div>
    );
};

export default Tabs;
