import { Allotment } from "allotment";
import Content from "./Content";
import "allotment/dist/style.css";
import styles from "./style.module.less";

const AllotmentContainer = () => {
    return (
        <div className={styles.allotment}>
            <Allotment minSize={100}>
                <Allotment.Pane maxSize={400}>
                    <Allotment vertical>
                        <Allotment.Pane minSize={100}>
                            <Content />
                        </Allotment.Pane>
                        <Allotment.Pane snap>
                            <Content />
                        </Allotment.Pane>
                        <Allotment.Pane snap>
                            <Content />
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
                <Allotment.Pane>
                    <Content />
                </Allotment.Pane>
            </Allotment>
        </div>
    );
};

export default AllotmentContainer;
