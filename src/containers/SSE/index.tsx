import { useState, useEffect, useRef } from "react";
import { SSEService } from "@/core";
import { useSSE } from "@/hooks";

const SSE = () => {
    const sseServiceRef = useRef<SSEService | null>(null);
    const [url, setUrl] = useState("");

    useSSE(url, {
        onMessage: (msg) => {
            console.log("onMessage", msg);
        },
        onError: () => {
            console.log("onError");
        },
        onOpen: () => {
            console.log("onOpen");
        },
    });

    useEffect(() => {
        const output = document.getElementById("output");
        output.innerHTML = "";
        // setTimeout(() => {
        //     setUrl("/api/chat/stream/21321321321321");
        // }, 2000);
        // 使用fetch API发送POST请求
        fetch("/api/chat/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: "我要生成一个sse",
                interval: 2000,
                duration: 20000,
            }),
        })
            .then((response) => {
                // 创建一个读取流
                const res = response.json();
                console.log(36, res);
                return res;
            })
            .then((res) => {
                console.log(24, res);
                setUrl(`/api/chat/stream/${res.token}`);

                // const sseService = new SSEService();
                // sseService.connect(`/api/chat/stream/${res.token}`, {
                //     onMessage: (msg) => {
                //         console.log("onMessage", msg);
                //     },
                //     onError: () => {
                //         console.log("onError");
                //     },
                //     onOpen: () => {
                //         console.log("onOpen");
                //     },
                // });

                // sseServiceRef.current = sseService;

                // return () => {
                //     sseService.disconnect();
                // };
            })
            .catch(function (error) {
                console.log(error);
                setUrl("/api/chat/stream/ddddddd");
            });
    }, []);

    return (
        <div>
            <div id="output">hello sse</div>
        </div>
    );
};

export default SSE;
