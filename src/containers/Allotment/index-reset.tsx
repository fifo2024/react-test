import { useRef } from "react";
import { Allotment } from "allotment";
import Content from "./Content";
import "allotment/dist/style.css";
import styles from "./style.module.less";

const AllotmentContainer = () => {
    const ref = useRef<any>(null);

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    ref.current.reset();
                }}
            >
                Reset
            </button>
            <div className={styles.allotment}>
                <Allotment ref={ref}>
                    <Content />
                    <Content />
                </Allotment>
            </div>
        </div>
    );
};

export default AllotmentContainer;
