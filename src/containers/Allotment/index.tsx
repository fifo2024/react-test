import { Allotment } from "allotment";
import Content from "./Content";
import "allotment/dist/style.css";
import styles from "./style.module.less";

const AllotmentContainer = () => {
    return (
        <div className={styles.allotment}>
            <Allotment>
                <Content />
                <Content />
            </Allotment>
        </div>
    );
};

export default AllotmentContainer;
