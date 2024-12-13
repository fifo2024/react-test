import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./style.less";

export interface CardProp {
    tag: string;
    title: string;
    url: string;
    icon: ReactNode;
}

const Card: FC<CardProp> = ({ tag, title, url, icon }) => {
    const navigate = useNavigate();

    const onGotoNext = (nextUrl: string) => {
        navigate(nextUrl);
    };

    return (
        // <div
        //     className="bg-gray-100 border-1 border-gray-200 px-[4px] py-[2px] hover:cursor-pointer"
        //     onClick={() => onGotoNext(url)}
        // >
        //     {title}
        // </div>
        <article className="card">
            <section className="card__hero">
                <header className="card__hero-header">
                    <span>{tag}</span>
                    <div className="card__icon">
                        <svg
                            height="20"
                            width="20"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </div>
                </header>

                <p className="card__job-title">{title}</p>
            </section>

            <footer className="card__footer">
                <div className="card__job-summary">
                    <div className="card__job-icon">{icon}</div>
                    <div className="card__job">
                        <p className="card__job-title">{title}</p>
                    </div>
                </div>

                <button className="card__btn" onClick={() => onGotoNext(url)}>
                    view
                </button>
            </footer>
        </article>
    );
};

export default Card;
