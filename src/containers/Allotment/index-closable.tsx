import { useState } from "react";
import { Allotment } from "allotment";
import Content from "./Content";
import "allotment/dist/style.css";
import styles from "./style.module.less";

const AllotmentContainer = () => {
    const [panes, setPanes] = useState([0, 1, 2]);
    return (
        <div
            className={styles.allotment}
            style={{ minHeight: 200, minWidth: 200 }}
        >
            <Allotment vertical minSize={100}>
                <Allotment.Pane maxSize={400}>
                    <Allotment>
                        {panes.map((pane) => (
                            <Allotment.Pane key={pane}>
                                <Content />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setPanes((panes) => {
                                                    const newPanes = [...panes];
                                                    newPanes.splice(pane, 1);
                                                    return newPanes;
                                                })
                                            }
                                        >
                                            x
                                        </button>
                                    </div>
                                </div>
                            </Allotment.Pane>
                        ))}
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
