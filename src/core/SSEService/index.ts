export interface SSEOptions {
    onOpen: () => void;
    onMessage: (data: object) => void;
    onError: (error: Error) => void;
}

export default class SSEService {
    eventSource: EventSource | null;
    isClosing: boolean;

    constructor() {
        this.eventSource = null;
        this.isClosing = false;
    }

    connect(url: string, options: SSEOptions) {
        if (this.eventSource) {
            this.disconnect();
        }

        this.eventSource = new EventSource(url);

        // 处理连接打开
        this.eventSource.onopen = () => {
            console.log("SSE连接已建立");
            this.isClosing = false;

            const { onOpen } = options;
            onOpen && onOpen();
        };

        // 处理消息接收
        this.eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                const { onMessage } = options;

                onMessage && onMessage(data);

                // status，约定的最后一条消息的状态
                if (data.status === 1) {
                    this.isClosing = true;
                    this.disconnect();
                }
            } catch (err) {
                console.error("解析SSE消息失败:", err);
            }
        };

        // 处理错误
        this.eventSource.onerror = (event) => {
            if (this.isClosing) {
                return;
            }

            console.error("SSE连接错误:", event, new Date().toLocaleString());

            const { onError } = options;
            onError &&
                onError(
                    new Error("An error occurred while attempting to connect.")
                );

            this.disconnect();
        };
    }

    disconnect() {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
            console.log("SSE连接已关闭:", new Date().toLocaleString());
        }
    }
}
