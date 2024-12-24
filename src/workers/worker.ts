import * as Comlink from "comlink";

export const workerAPI = {
    add: (a: number, b: number): number => a + b,
    greet: (name: string): string => `Hello, World, ${name}!`,
};

Comlink.expose(workerAPI);
