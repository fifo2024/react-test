import React from "react";
import classNames from "classnames";
import styles from "./style.module.less";

const SecretProject = () => {
    return (
        <div className={styles["mobile-wrap"]}>
            <div className={classNames(styles.mobile, styles.clearfix)}>
                <div className="header">12345678</div>
                <div className="sidebar">34567</div>
                <div className="content">345678</div>
                <div className="nav">
                    <a href="#profile" className="nav-item nav-count-1">
                        <i className="ion-ios-person-outline"></i>
                        <span className="invisible">Profile</span>
                    </a>
                    <a href="#compose" className="nav-item nav-count-2">
                        <i className="ion-ios-compose-outline"></i>
                        <span className="invisible">Compose</span>
                    </a>
                    <a href="#chats" className="nav-item nav-count-3">
                        <i className="ion-ios-chatboxes-outline"></i>
                        <span className="invisible">Chats</span>
                    </a>
                    <a href="#alarm" className="nav-item nav-count-4">
                        <i className="ion-ios-alarm-outline"></i>
                        <span className="invisible">Alarm</span>
                    </a>
                    <a href="#toggle" className="mask">
                        <i className="ion-ios-plus-empty"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SecretProject;
