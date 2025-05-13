import { useEffect } from "react";
import pLimit from "p-limit";

const PLimit = () => {
    const fetchSomething = (str) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(str + Math.random());
            }, 2000);
        });
    };

    const doSomething = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.random());
            }, 3000);
        });
    };

    const limitFun = async () => {
        const limit = pLimit(1);

        const input = [
            limit(() => fetchSomething("foo")),
            limit(() => fetchSomething("bar")),
            limit(() => doSomething()),
        ];

        // Only one promise is run at once
        const result = await Promise.all(input);
        console.log(32, result);
    };

    useEffect(() => {
        limitFun();
    }, []);

    return <div>pLimit</div>;
};

export default PLimit;
