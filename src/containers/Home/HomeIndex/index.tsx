/**
 * @file Main UI
 */
import React, { FC, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebStorage from "fifo-web-storage";
import {
    HiRectangleStack,
    HiMiniRectangleGroup,
    HiMiniUsers,
    HiSparkles,
    HiSwatch,
    HiPhoto,
    HiSquare3Stack3D,
    HiWallet,
} from "react-icons/hi2";
import { LeftOutlined, RightOutlined } from "fifo-icons";
import { Card, Tabs, Loading } from "@/components";
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
        Loading.show();
        const userInfo = store.get();
        store.set({ name: "Jane Doe", age: (userInfo as any).age + 1 });

        setTimeout(() => {
            Loading.hide();
        }, 10000);
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
                className="flex justify-end align-bottom gap-[16px] flex-row"
            >
                <Card
                    {...{
                        tag: "pane",
                        title: "tweakpane",
                        url: "/tweak-pane",
                        icon: (
                            <HiSparkles
                                style={{ fontSize: "24px", color: "#EB4335" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "layout",
                        title: "allotment",
                        url: "/allotment",
                        icon: (
                            <HiWallet
                                style={{ fontSize: "24px", color: "#EB4335" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "layout",
                        title: "allotment nested",
                        url: "/allotment-nested",
                        icon: (
                            <HiRectangleStack
                                style={{ fontSize: "24px", color: "#4285F4" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "layout",
                        title: "allotment closable",
                        url: "/allotment-closable",
                        icon: (
                            <HiSquare3Stack3D
                                style={{ fontSize: "24px", color: "#c5c5c5" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "layout",
                        title: "allotment reset",
                        url: "/allotment-reset",
                        icon: (
                            <HiPhoto
                                style={{ fontSize: "24px", color: "#4285F4" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "layout",
                        title: "allotment visible",
                        url: "/allotment-visible",
                        icon: (
                            <HiSwatch
                                style={{ fontSize: "24px", color: "#4285F4" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "sign",
                        title: "sign in",
                        url: "/sign-in",
                        icon: (
                            <HiMiniUsers
                                style={{ fontSize: "24px", color: "#34A853" }}
                            />
                        ),
                    }}
                />
                <Card
                    {...{
                        tag: "card",
                        title: "car animation",
                        url: "/car-animation",
                        icon: (
                            <HiMiniRectangleGroup
                                style={{ fontSize: "24px", color: "#FBBC05" }}
                            />
                        ),
                    }}
                />
            </div>
            <div className={styles.tabs}>
                <Tabs />
            </div>
        </div>
    );
};

export default Main;
