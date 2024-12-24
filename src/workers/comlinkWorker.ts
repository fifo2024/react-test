import * as Comlink from "comlink";

export default class ComlinkWorker<T> {
    constructor(url: URL, options: any) {
        const worker = new Worker(url, options);
        Comlink.wrap<T>(worker);
    }
}
