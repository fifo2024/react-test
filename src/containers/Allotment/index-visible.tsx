import { useState } from "react";
import { Allotment } from "allotment";
import Content from "./Content";
import "allotment/dist/style.css";
import styles from "./style.module.less";

const AllotmentContainer = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button
                className={styles.button}
                type="button"
                onClick={() => {
                    setVisible((visible) => !visible);
                }}
            >
                {visible ? "Hide" : "Show"}
            </button>
            <div className={styles.allotment}>
                <Allotment
                    snap
                    onVisibleChange={(_index, value) => {
                        setVisible(value);
                    }}
                >
                    <Content />
                    <Allotment.Pane visible={visible}>
                        <Content />
                    </Allotment.Pane>
                </Allotment>
            </div>
        </div>
    );
};

export default AllotmentContainer;
