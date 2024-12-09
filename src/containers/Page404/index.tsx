/**
 * @file Page404 UI
 * @author zhaoyadong<zhaoyadong@baidu.com>
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { RxCube, RxCross2 } from "react-icons/rx";
import { Empty } from "@/components";

import Styles from "./style.module.less";

const EmptyIcon = () => {
    return (
        <div className={Styles.emptyIcon}>
            <RxCube className={Styles.emptyIconGlobal} />
            <RxCross2 className={Styles.emptyIconClose} />
        </div>
    );
};

const Page404: React.FC<any> = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className={Styles.page404}>
            <Empty image={<EmptyIcon />} description={<span>页面不存在</span>}>
                <button onClick={goHome}>回首页</button>
            </Empty>
        </div>
    );
};

export default React.memo(Page404);
