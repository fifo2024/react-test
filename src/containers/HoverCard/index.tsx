import { useEffect } from "react";
import "./style.less";

const HoverCard = () => {
    useEffect(() => {
        const info = [
            {
                text: "A calming and tranquil color, linked to serenity, trust, and stability. It often represents the sky, water, and feelings of peace or coolness.",
            },
            {
                text: "A rich, luxurious color that blends the calm of blue and the energy of red. It symbolizes royalty, mystery, spirituality, and creativity.",
            },
            {
                text: "A bold and intense color, often associated with passion, energy, love, and danger. It evokes strong emotions and symbolizes power and excitement.",
            },
            {
                text: "A refreshing, natural color that symbolizes growth, health, and harmony. It’s often associated with nature, renewal, and balance.",
            },
            {
                text: "A bright and cheerful color that represents happiness, optimism, and warmth. It often symbolizes sunshine, creativity, and positivity.",
            },
            {
                text: "A vibrant, energetic color that combines the warmth of red and the cheerfulness of yellow. It often signifies enthusiasm, fun, and vitality.",
            },
        ];

        //duplicate cards
        const grid: any = document.querySelector(".cards");
        const card: any = document.querySelector(".card");

        for (let i = 1; i < info.length; i++) {
            const newCard = card.cloneNode(true);
            grid.appendChild(newCard);
        }

        var cards: any = document.querySelectorAll(".card");

        cards.forEach((item: any, i: number) => {
            item.querySelector("h1").innerHTML = Number(i + 1);
            item.querySelector("p").innerHTML = info[i].text;
        });

        const cursorCont: any = document.querySelector(".cursor-container");
        const cursor: any = document.querySelector(".cursor");
        const root: any = document.documentElement;

        let x, y;

        document.addEventListener("mousemove", (event) => {
            x = event.pageX;
            y = event.pageY;

            cursorCont.style.transform = `translate(${x}px,${y}px) scale(1)`;
        });

        //hover
        var cardInner: any = document.querySelectorAll(".card .inner-shadow");
        var cardCursorWrapper: any = document.querySelectorAll(
            ".card .cursor-blur-wrapper"
        );
        var cardCursor = document.querySelectorAll(".card .cursor-blur");

        window.addEventListener("mousemove", (event) => {
            cards.forEach((item: any, i: number) => {
                const rect = item.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                let count = 0;

                if (x < 0) {
                    x = 0;
                    translate();
                } else if (x > rect.width) {
                    x = rect.width;
                    translate();
                }
                if (y < 0) {
                    y = 0;
                    translate();
                } else if (y > rect.height) {
                    y = rect.height;
                    translate();
                }
                function translate() {
                    cardCursorWrapper[
                        i
                    ].style.transform = `translate(${x}px,${y}px)`;
                }

                item.onmouseover = function () {
                    cursor.style.backgroundColor = `var(--animate${i + 1})`;
                    cardCursor[i].style.backgroundColor = `var(--animate${
                        i + 1
                    })`;
                    cardInner[i].style.color = `var(--animate${i + 1})`;
                };
                item.onmouseout = function () {
                    cursor.style.backgroundColor = "var(--initial)";
                    cardCursor[i].style.backgroundColor = "var(--initial)";
                    cardInner[i].style.color = "var(--initial)";
                };
            });
        });
    }, []);
    return (
        <div>
            <div className="content">
                <div className="cards">
                    <div className="card">
                        <div className="inner-shadow">
                            <div className="cursor-blur-wrapper">
                                <div className="cursor-blur"></div>
                            </div>
                        </div>
                        <h1></h1>
                        <div style={{ zIndex: 99 }}>
                            <p className="text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-container">
                <div className="cursor"></div>
            </div>
        </div>
    );
};

export default HoverCard;
