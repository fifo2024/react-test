import { useCardAnimation } from "@/hooks";

const CarAnimation = () => {
    const {
        cardRef: cardRef1,
        lightRef: lightRef1,
        isShowLight: isShowLight1,
        pos: pos1,
    } = useCardAnimation();
    const {
        cardRef: cardRef2,
        lightRef: lightRef2,
        isShowLight: isShowLight2,
        pos: pos2,
    } = useCardAnimation();
    const {
        cardRef: cardRef3,
        lightRef: lightRef3,
        isShowLight: isShowLight3,
        pos: pos3,
    } = useCardAnimation();

    return (
        <main className="flex h-screen items-center justify-center gap-5 bg-black p-24">
            <div
                className="flex-center relative h-[400px] w-[400px] flex-col overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1C1C1F]"
                ref={cardRef1}
                style={{
                    willChange: "transform",
                    transform:
                        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
            >
                <div
                    className={`${
                        isShowLight1 ? "" : "hidden"
                    } absolute h-[200px] w-[200px] rounded-full bg-[#ff4132] blur-[150px] filter`}
                    ref={lightRef1}
                    style={pos1}
                ></div>
            </div>
            <div
                className="flex-center relative h-[400px] w-[400px] flex-col overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1C1C1F]"
                ref={cardRef2}
                style={{
                    willChange: "transform",
                    transform:
                        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
            >
                <div
                    className={`${
                        isShowLight2 ? "" : "hidden"
                    } absolute h-[200px] w-[200px] rounded-full bg-[#f9b613] blur-[150px] filter`}
                    ref={lightRef2}
                    style={pos2}
                ></div>
            </div>
            <div
                className="flex-center relative h-[400px] w-[400px] flex-col overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1C1C1F]"
                ref={cardRef3}
                style={{
                    willChange: "transform",
                    transform:
                        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
            >
                <div
                    className={`${
                        isShowLight3 ? "" : "hidden"
                    } absolute h-[200px] w-[200px] rounded-full bg-[#3191f7] blur-[150px] filter`}
                    ref={lightRef3}
                    style={pos3}
                ></div>
            </div>
        </main>
    );
};

export default CarAnimation;
