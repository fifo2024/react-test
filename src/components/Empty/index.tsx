/**
 * @file Empty UI
 * @author zhaoyadong (zhaoyadong@baidu.com)
 */
import React from "react";

import "./style.less";

const Empty = (props: any) => {
    const { description, image, imageStyle, textStyle, children } = props;

    return (
        <div className="fw-c-empty" style={imageStyle}>
            {image}
            <div className="fw-c-empty-text" style={textStyle}>
                {description}
            </div>
            {children || <></>}
        </div>
    );
};

export default React.memo(Empty);
