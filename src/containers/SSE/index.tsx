import { useEffect } from "react";
import axios from "axios";
import { useSSE } from "@/hooks";

const SSE = () => {
    useEffect(() => {
        const output = document.getElementById("output");
        output.innerHTML = "";
        // 使用fetch API发送POST请求
        fetch("http://chat.fifo.com/api/chat/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: "Custom message from client",
                interval: 2000,
                duration: 20000,
            }),
        })
            .then(function (response) {
                // 创建一个读取流
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                function readStream() {
                    reader.read().then(({ done, value }) => {
                        if (done) {
                            output.innerHTML += "<p>Stream ended</p>";
                            return;
                        }

                        const text = decoder.decode(value);
                        // 处理SSE格式数据
                        text.split("\n\n").forEach((event) => {
                            if (event.trim() === "") return;

                            let eventName = "message";
                            let data = event;

                            if (event.startsWith("event:")) {
                                const parts = event.split("\n");
                                eventName = parts[0]
                                    .replace("event:", "")
                                    .trim();
                                data = parts[1].replace("data:", "").trim();
                            } else if (event.startsWith("data:")) {
                                data = event.replace("data:", "").trim();
                            }

                            try {
                                const parsed = JSON.parse(data);
                                output.innerHTML += `<p><strong>${eventName}:</strong> ${JSON.stringify(
                                    parsed
                                )}</p>`;
                            } catch (e) {
                                output.innerHTML += `<p><strong>${eventName}:</strong> ${data}</p>`;
                            }
                        });

                        readStream();
                    });
                }

                readStream();

                // useSSE("http://chat.fifo.com/api/chat/completion", {
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
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    return (
        <div>
            <div id="output">hello sse</div>
        </div>
    );
};

export default SSE;
