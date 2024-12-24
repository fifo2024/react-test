import React from "react";
import { styled, keyframes } from "styled-components";

const Search = () => {
    return (
        <div className="relative" style={{ zIndex: 1 }}>
            <div
                data-raycast="true"
                className="w-[750px] h-[475px] rounded-xl shadow flex flex-col relative select-none shrink-0 text-left overflow-hidden backdrop-blur-[72px]"
                style={
                    {
                        "--background-primary": "#282C3466",
                        "--background-secondary": "#282C3466",
                        "--border-100": "#BBC2CF1A",
                        "--border-200": "#BBC2CF33",
                        "--text": "#BBC2CF",
                        "--text-100": "#BBC2CF1A",
                        "--text-400": "#BBC2CF66",
                        "--text-600": "#BBC2CF99",
                        "--loader": "#BBC2CF",
                        "--selection": "#BBC2CF",
                        "--selection-100": "#BBC2CF1A",
                        "--green": "#98BE65",
                        "--green-100": "#98BE6526",
                        "--yellow": "#ECBE7B",
                        "--yellow-100": "#ECBE7B26",
                        "--red": "#FF5458",
                        "--red-100": "#FF545826",
                        "--orange": "#F88D4E",
                        "--orange-100": "#F88D4E26",
                        "--blue": "#51AFEF",
                        "--blue-100": "#51AFEF26",
                        "--purple": "#C678DD",
                        "--purple-100": "#C678DD26",
                        "--magenta": "#C678DD",
                        "--magenta-100": "#C678DD26",
                        zIndex: 2,
                        backgroundColor: "rgba(128, 128, 128, 0.2)",
                        backgroundImage:
                            "linear-gradient(to bottom, var(--backgroundPrimary) 0%, var(--backgroundSecondary) 70%)",
                        boxShadow: "inset 0 0 0 1px var(--border-200)",
                    } as React.CSSProperties
                }
            >
                <header className="h-[56px] px-4 border-b border-[--border-100] flex items-center gap-2 shrink-0 relative">
                    <div className="w-[24px] h-[24px] rounded-md flex items-center justify-center text-[--text] bg-[--text-100]">
                        <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M6.25 4.75L2.75 8M2.75 8L6.25 11.25M2.75 8H13.25"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <div className="w-full leading-none bg-transparent border-none outline-none text-base text-[--text-400]">
                        Search for apps and commands...
                    </div>
                    <div
                        className="absolute top-full w-[200px] h-[1px] "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255, 255, 255, 0), var(--loader), rgba(255, 255, 255, 0))",
                            animation: "nightRider 2s ease-in-out infinite",
                        }}
                    ></div>
                </header>
                <div className="flex-1 overflow-hidden py-1">
                    <div className="py-1 px-2 text-[--text]">
                        <div className="p-2 text-xs leading-none font-medium tracking-[0.1px] text-[--text-600]">
                            List
                        </div>
                        <div className="flex items-center gap-3 h-[40px] px-2 rounded-lg bg-[--selection-100]">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                    className="w-5 h-5"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-sm leading-none">
                                Primary Text
                            </div>
                            <div className="ml-auto flex gap-2 h-[22px] text-sm">
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    style={
                                        {
                                            "--color": "var(--red)",
                                            "--bg": "var(--red-100)",
                                        } as React.CSSProperties
                                    }
                                >
                                    Red
                                </span>
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    // style="--color:var(--orange);--bg:var(--orange-100)"
                                >
                                    Orange
                                </span>
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    // style="--color:var(--blue);--bg:var(--blue-100)"
                                >
                                    Blue
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 h-[40px] px-2 rounded-lg">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                    className="w-5 h-5"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className=" text-sm leading-none">
                                Primary Text
                            </div>
                            <div className="ml-auto flex gap-2 h-[22px] text-sm">
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    // style="--color:var(--green);--bg:var(--green-100)"
                                >
                                    Green
                                </span>
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    // style="--color:var(--yellow);--bg:var(--yellow-100)"
                                >
                                    Yellow
                                </span>
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    // style="--color:var(--purple);--bg:var(--purple-100)"
                                >
                                    Purple
                                </span>
                                <span
                                    className="inline-flex items-center px-2 rounded-md text-[--color] bg-[--bg]"
                                    // style="--color:var(--magenta);--bg:var(--magenta-100)"
                                >
                                    Magenta
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="py-1 px-2 text-[--text]">
                        <div className="p-2 text-xs leading-none font-medium tracking-[0.1px] text-[--text-600]">
                            Grid
                        </div>
                        <div className="grid grid-cols-5 gap-2 px-2">
                            <div>
                                <div
                                    className="rounded-lg w-[138px] h-[138px] mb-1"
                                    style={{
                                        backgroundImage:
                                            'url("/_next/static/media/grid-item-1-dark.42ee8c9f.jpg")',
                                        boxShadow:
                                            "inset 0 0 0 2px var(--selection)",
                                    }}
                                ></div>
                                <div className="text-sm">Troopie Loop</div>
                                <div className="text-xs text-[--text-600]">
                                    512×512
                                </div>
                            </div>
                            <div>
                                <div
                                    className="rounded-lg w-[138px] h-[138px] mb-1"
                                    style={{
                                        backgroundImage:
                                            'url("/_next/static/media/grid-item-2-dark.0d8a8236.jpg");',
                                    }}
                                ></div>
                                <div className="text-sm">Milkey Rave</div>
                                <div className="text-xs text-[--text-600]">
                                    512×512
                                </div>
                            </div>
                            <div>
                                <div
                                    className="rounded-lg w-[138px] h-[138px] mb-1"
                                    style={{
                                        backgroundImage:
                                            'url("/_next/static/media/grid-item-3-dark.6b72ae65.jpg");',
                                    }}
                                ></div>
                                <div className="text-sm">Gaze</div>
                                <div className="text-xs text-[--text-600]">
                                    512×512
                                </div>
                            </div>
                            <div>
                                <div
                                    className="rounded-lg w-[138px] h-[138px] mb-1"
                                    style={{
                                        backgroundImage:
                                            'url("/_next/static/media/grid-item-4-dark.4f4ca8ce.jpg");',
                                    }}
                                ></div>
                                <div className="text-sm">Burning Orbet</div>
                                <div className="text-xs text-[--text-600]">
                                    512×512
                                </div>
                            </div>
                            <div>
                                <div
                                    className="rounded-lg w-[138px] h-[138px] mb-1"
                                    style={{
                                        backgroundImage:
                                            'url("/_next/static/media/grid-item-5-dark.10193d9e.jpg");',
                                    }}
                                ></div>
                                <div className="text-sm">Moon</div>
                                <div className="text-xs text-[--text-600]">
                                    512×512
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="shrink-0 h-[40px] px-3 border-t border-[--text-100] flex items-center justify-between gap-2 z-10 bg-white/20 dark:bg-white/5">
                    <div className="flex gap-3 items-center text-sm text-[--text-600]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                            className="w-5 h-5"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M4.502 10.037v1.46L1 7.996l.734-.728 2.768 2.77Zm1.461 1.46h-1.46L8.004 15l.73-.73-2.772-2.772ZM14.27 8.73 15 8 8.002 1l-.73.73 2.765 2.77H8.365l-1.93-1.93-.73.73 1.201 1.202H6.07v5.431h5.43v-.84l1.203 1.203.73-.73-1.932-1.933V5.961l2.77 2.768ZM4.868 4.134l-.73.73.783.784.73-.73-.783-.784Zm6.215 6.215-.728.73.784.783.73-.73-.786-.783ZM3.3 5.701l-.73.73 1.931 1.933V6.902l-1.2-1.2Zm5.797 5.797H7.636l1.932 1.932.73-.731-1.2-1.201Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <div>Theme Explorer</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-3 items-center">
                            <div className="text-xs text-[--text] font-semibold">
                                Open Command
                            </div>
                            <div className="w-[24px] h-[24px] rounded-md flex items-center justify-center bg-[--text-100] text-[--text]">
                                <svg
                                    width="12"
                                    height="9"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3"
                                >
                                    <path
                                        d="M3.13477 7.53906L0.564453 5L3.13477 2.46094V7.53906ZM2.32227 5.57812V4.42187H9.4082V5.57812H2.32227ZM8.28711 5.57812V0.5H9.43164V5.57812H8.28711Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="w-[2px] h-[12px] bg-[--text-100]"></div>
                        <div className="flex gap-3 items-center">
                            <div className="text-xs font-semibold text-[--text-600]">
                                Actions
                            </div>
                            <div className="w-[24px] h-[24px] rounded-md flex items-center justify-center text-xs bg-[--text-100] text-[--text]">
                                ⌘
                            </div>
                            <div className="w-[24px] h-[24px] rounded-md flex items-center justify-center text-xs bg-[--text-100] text-[--text] -ml-2">
                                K
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Search;
