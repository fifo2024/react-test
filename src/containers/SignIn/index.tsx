import React from "react";
import styles from "./style.module.less";

const SignIn = () => {
    return (
        <div className={styles["sign-in"]}>
            <div className={styles.grid}>
                <div className={styles["video-wrapper"]}>
                    <video
                        className={styles.video}
                        // poster="https://static.tradingview.com/static/bundles/tablet.5ed26c209de7e1b5845d.webp"
                        autoPlay
                        loop
                        playsInline
                        disableRemotePlayback
                    >
                        <source
                            src="http://r.com/mp4/pashan.mp4"
                            type="video/mp4;codecs=hvc1.1.0.L150.b0"
                        />
                        <source
                            src="http://r.com/mp4/pashan.webm"
                            type="video/webm"
                        />
                        <source
                            src="http://r.com/mp4/pashan.mp4"
                            type="video/mp4;codecs=avc1"
                        />
                    </video>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <span
                            role="img"
                            className="icon-WChv8usc logo-U88gE00K isShowVideo-U88gE00K"
                            aria-hidden="true"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 158 28"
                                width="158"
                                height="28"
                            >
                                <path
                                    fill="currentColor"
                                    d="M127.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM127 21h-3V10h3v11ZM81.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM80 21h3V10h-3v11ZM43 21h-3V9h-4V6h11v3h-4v12ZM50 21l-3 .02V10h3v1.88c.36-1 1.34-1.75 2.53-1.75h.03c.3 0 .6 0 .94.1v2.84a4 4 0 0 0-1.31-.2c-1.38 0-2.19 1-2.19 2.7V21ZM88 21h-3V10.01l3-.01v1c.57-.82 1.53-1.21 2.9-1.21 2.57 0 4.1 1.8 4.1 4.45V21h-3v-6c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89V21ZM117 21l6-15h-3.5l-4 10.5L111 6h-3.5l6.5 15h3ZM153.45 21h-2.93l-2.02-6.25-2 6.25h-2.93L140 10h3.14l2.05 7.04 2.17-7.04h2.26l2.2 7.04 2.02-7.04H157l-3.55 11ZM58.92 21.24c1.52 0 2.57-.77 3.08-1.47V21h3V10h-3v1.23a3.78 3.78 0 0 0-3.08-1.47c-2.93 0-5.17 2.64-5.17 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM75 19.77c-.5.7-1.56 1.47-3.08 1.47-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.52 0 2.57.77 3.08 1.47V6h3v15h-3v-1.23Zm-5.22-4.27c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM102.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10h-3v1.23a3.6 3.6 0 0 0-3.06-1.47c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68a3.8 3.8 0 0 0 3.06-1.58v.74c0 1.76-1.04 3.02-2.82 3.02a4.84 4.84 0 0 1-3.43-1.37l-1.65 2.25c1.25 1.2 3.21 1.76 5.13 1.76Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM139.78 18.72a5.96 5.96 0 0 1-5.1 2.47c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a6.01 6.01 0 0 1-.04 1.13h-8.24c.18 1.47 1.48 2.19 2.93 2.19 1.39 0 2.33-.62 2.84-1.39l2.24 1.67Zm-5.23-6.53c-1.13 0-2.38.57-2.67 1.91h5.15c-.26-1.32-1.36-1.91-2.48-1.91ZM12 6H0v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                ></path>
                            </svg>
                        </span>
                        <div className="button-U88gE00K">
                            <button
                                className="nav-button-znwuaSC1 size-large-znwuaSC1 closeButton-U88gE00K isShowVideo-U88gE00K"
                                type="button"
                            >
                                <span className="background-znwuaSC1"></span>
                                <span
                                    role="img"
                                    className="icon-znwuaSC1"
                                    aria-hidden="true"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            d="m1.5 1.5 21 21m0-21-21 21"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.wrapper}></div>
                    <div className={styles.footer}>
                        <p className="description-qD3tmqQv">
                            Already have an account?{" "}
                            <a className="link-qD3tmqQv" href="#">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
