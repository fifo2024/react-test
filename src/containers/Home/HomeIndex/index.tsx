/**
 * @file Main UI
 */
import React, { FC, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebStorage from "fifo-web-storage";
import { LeftOutlined, RightOutlined } from "fifo-icons";
import { Card } from "@/components";
import "fifo-icons/dist/index.css";
import styles from "./style.module.less";

interface MainProps {
    [index: string]: string;
}

const Main: FC<MainProps> = () => {
    const navigate = useNavigate();
    const store = new WebStorage({
        storage: "localStorage",
        key: "testKey",
        initialValue: { name: "Jane Doe", age: 28 },
    });

    store.onChange((newValue, oldValue) => {
        const current = (document as any).getElementById("currentValue");
        if (current) current.innerText = JSON.stringify(newValue);
    });

    store.onRemove((key, value) => {
        (document as any).getElementById("currentValue").innerText = "null";
    });

    // 更新用户信息
    store.set({ name: "Jane Doe", age: 29 });

    // 获取用户信息
    const userInfo = store.get();
    console.log(userInfo); // 输出: { name: 'John Doe', age: 30 }

    // 删除用户信息
    // store.remove();
    console.log(WebStorage);

    useEffect(() => {}, []);

    const onClick = () => {
        const userInfo = store.get();
        store.set({ name: "Jane Doe", age: (userInfo as any).age + 1 });
    };

    const onGotoNext = (nextUrl: string) => {
        navigate(nextUrl);
    };

    return (
        <div className={styles.main}>
            Home
            <div id="currentValue"></div>
            <button onClick={onClick}>change</button>
            <div>
                <LeftOutlined
                    style={{ color: "#f234ff" }}
                    onClick={() => {
                        console.log("leftoutlined clicked");
                    }}
                />
                <RightOutlined />
            </div>
            <div
                style={{ margin: "24px" }}
                className="flex align-middle gap-[16px] flex-row"
            >
                <Card {...{ title: "tweakpane", url: "/tweak-pane" }} />
                <Card {...{ title: "allotment", url: "/allotment" }} />
                <Card
                    {...{ title: "allotment nested", url: "/allotment-nested" }}
                />
                <Card
                    {...{
                        title: "allotment closable",
                        url: "/allotment-closable",
                    }}
                />
                <Card
                    {...{ title: "allotment reset", url: "/allotment-reset" }}
                />
                <Card
                    {...{
                        title: "allotment visible",
                        url: "/allotment-visible",
                    }}
                />
            </div>
        </div>
    );
};

export default Main;
