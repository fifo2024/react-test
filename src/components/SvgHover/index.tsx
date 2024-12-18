import React from "react";
import styles from "./style.module.less";

const SvgHover = () => {
    return (
        <div className={styles.hov}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-6 h-6 text-gray-800 dark:text-white"
            >
                <path
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                ></path>
            </svg>
        </div>
    );
};

export default SvgHover;