/**
 * @file Main UI
 */
import React, { FC, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
// import * as Comlink from "comlink";
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
import {
    Card,
    Tabs,
    Loading,
    Hot,
    SvgHover,
    Search,
    Overlay,
} from "@/components";
import ComlinkWorker from "@/workers/comlinkWorker";
import "fifo-icons/dist/index.css";
import styles from "./style.module.less";

// Define the worker API's type
interface WorkerAPI {
    add(a: number, b: number): number;
    greet(name: string): string;
}

interface MainProps {
    [index: string]: string;
}

const Main: FC<MainProps> = () => {
    const navigate = useNavigate();
    const [overlayOpen, setOverlayOpen] = useState(false);
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

    const testWork = async () => {
        const worker = new ComlinkWorker<
            typeof import("../../../workers/worker.ts")
        >(new URL("../../../workers/worker", import.meta.url), {
            type: "module",
        });

        console.log(await (worker as WorkerAPI).add(3, 8)); // Outputs: 7
        console.log(await (worker as WorkerAPI).greet("Alice")); // Outputs: Hello, Alice!
    };

    useEffect(() => {
        testWork();
    }, []);

    const onClick = () => {
        Loading.show();
        const userInfo = store.get();
        store.set({ name: "Jane Doe", age: (userInfo as any).age + 1 });

        setTimeout(() => {
            Loading.hide();
        }, 1000);
    };

    const onGotoNext = (nextUrl: string) => {
        navigate(nextUrl);
    };

    const onClick2 = () => {
        setOverlayOpen(true);
    };

    return (
        <div className={styles.main}>
            <h1>我是个H1标题</h1>
            <h3 className={classNames(styles["header-decoration"], "mb-3")}>
                我是个H3标题
            </h3>
            <div id="currentValue"></div>
            <button onClick={onClick}>change</button>
            <button onClick={onClick2}>show overlay</button>
            <Overlay
                open={overlayOpen}
                draggable
                onToggle={(visible) => setOverlayOpen(visible)}
            >
                <Search />
                {/* <></> */}
            </Overlay>
            <div>
                <LeftOutlined
                    style={{ color: "#f234ff" }}
                    onClick={() => {
                        console.log("leftoutlined clicked");
                    }}
                />
                <RightOutlined />
                <span style={{ position: "relative" }}>
                    <span>我是一个文本文件</span>
                    <Hot color="#30ff30" />
                </span>
                <div style={{ position: "relative" }}>
                    <span>我是一个文本文件-----------------</span>
                    <Hot color="#660f11" />
                </div>
                <div style={{ position: "relative" }}>
                    <span>我是一个文本文件-----------------</span>
                    <Hot color="#f03337" />
                </div>
                <div>
                    <SvgHover />
                </div>
            </div>
            <div
                style={{ margin: "24px" }}
                className="flex justify-end align-bottom gap-[16px] flex-row flex-wrap"
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
                <Card
                    {...{
                        tag: "layout",
                        title: "secret project",
                        url: "/secret-project",
                        icon: (
                            <HiMiniRectangleGroup
                                style={{ fontSize: "24px", color: "#FBBC05" }}
                            />
                        ),
                    }}
                />
            </div>
            <div style={{ width: "100%" }}>
                <iframe
                    src="https://codesandbox.io/embed/483nj2?view=preview&theme=dark&module=%2Fsrc%2FApp.tsx"
                    style={{
                        width: "100%",
                        height: "500px",
                        border: 0,
                        borderRadius: "4px",
                        overflow: "hidden",
                    }}
                    title="tweakpane-test"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
            <div className={styles.tabs}>
                <Tabs />
            </div>
        </div>
    );
};

export default Main;
