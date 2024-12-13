/**
 * @file Loading UI
 * @author zhaoyadong (zhaoyadong@baidu.com)
 */

import React, { PureComponent, ReactNode } from "react";

import styles from "./style.module.less";

class Loading extends PureComponent {
    constructor(props: any) {
        super(props);
        this.domNode = document.createElement("div");
        this.isExistNode = false;
    }

    domNode: HTMLDivElement;
    isExistNode: boolean;

    createNode() {
        const node = `
            <span className=${styles.loading}>
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </span>
        `;
        return node;
    }

    renderer(visible: boolean): ReactNode {
        if (!this.isExistNode && visible) {
            document.body.appendChild(this.domNode);
            this.domNode.innerHTML = this.createNode();
            this.isExistNode = true;
        }
        this.domNode.className = visible
            ? styles.loading
            : [styles.loading, styles.hide].join(" ");
        return null;
    }

    show() {
        this.renderer(true);
    }

    hide() {
        this.renderer(false);
    }
}

export default new Loading({});
