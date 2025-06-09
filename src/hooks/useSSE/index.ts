import { useEffect, useRef } from "react";
import { SSEService } from "@/core";

export interface UseSSEOptions {
    onMessage: (data: object) => void;
    onError?: (error: Event) => void;
    onOpen?: () => void;
}

export default function useSSE(url: string, options: UseSSEOptions) {
    const sseServiceRef = useRef(null);

    useEffect(() => {
        if (!url) {
            return;
        }

        const sseService = new SSEService();
        sseService.connect(url, options);

        sseServiceRef.current = sseService;

        return () => {
            sseService.disconnect();
        };
    }, [url]);

    return () => sseServiceRef.current;
}
