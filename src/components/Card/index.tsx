import { FC } from "react";
import { useNavigate } from "react-router-dom";

export interface CardProp {
    title: string;
    url: string;
}

const Card: FC<CardProp> = ({ title, url }) => {
    const navigate = useNavigate();

    const onGotoNext = (nextUrl: string) => {
        navigate(nextUrl);
    };

    return (
        <div
            className="bg-gray-100 border-1 border-gray-200 px-[4px] py-[2px] hover:cursor-pointer"
            onClick={() => onGotoNext(url)}
        >
            {title}
        </div>
    );
};

export default Card;
