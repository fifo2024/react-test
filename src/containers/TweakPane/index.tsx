import { useEffect, useState, useRef } from "react";
import { Pane } from "tweakpane";

const PARAMS = {
    factor: 123,
    title: "hello",
    color: "#ff0055",
};

const TweakPane = () => {
    const [params, setParams] = useState(PARAMS);
    const paramsRef = useRef<any>(null);
    paramsRef.current = params;

    useEffect(() => {
        const pane = new Pane();
        const f1 = pane.addFolder({
            title: "Basic",
        });
        f1.addBinding(params, "factor");
        f1.on("change", (ev) => {
            console.log(ev);
            console.log(`change: ${ev.value}`);
        });

        const f2 = pane.addFolder({
            title: "Advanced",
            expanded: false, // optional
        });
        f2.addBinding(params, "title");

        const f2b = f2.addBinding(params, "color");
        f2.on("change", (ev) => {
            console.log(ev);
            console.log(`change: ${(ev.target as any).key}::${ev.value}`);
            setParams({
                ...params,
                [(ev.target as any).key]: ev.value,
            });
        });
    }, []);

    return (
        <div>
            <span>TweakPane</span>
            <div>factor: {paramsRef.current.factor}</div>
            <div>title: {paramsRef.current.title}</div>
            <div>color: {paramsRef.current.color}</div>
        </div>
    );
};

export default TweakPane;
