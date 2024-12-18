import React, { CSSProperties, FC } from "react";
import { styled, keyframes } from "styled-components";
import styles from "./style.module.less";

export interface HotProps {
    color?: string;
}

const Hot: FC<HotProps> = ({ color = "#4285F4" }) => {
    const loop = keyframes<{ $color: string }>`
            0% {
                background-color: ${(props: any) => props.$color};
                width: 1px;
                height: 1px;
            }
            100% {
                background-color: rgba(0, 255, 0, 0);
                width: 30px;
                height: 30px;
            }
        `;

    const Span = styled.span<{ $color: string }>`
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 6px;
        height: 6px;
        background-color: ${(props: any) => props.$color};
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
            content: "";
            position: absolute;
            width: 1px;
            height: 1px;
            background-color: ${(props: any) => props.$color};
            border-radius: 25px;
            animation: ${loop} 1s 0s infinite;
        }
    `;

    return <Span $color={color} />;
};

export default Hot;
