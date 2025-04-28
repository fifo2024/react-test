import React from "react";

const CodeSandbox = () => {
    return (
        <div style={{ width: "100%" }}>
            <iframe
                src="https://codesandbox.io/embed/483nj2?view=preview&theme=dark&module=%2Fsrc%2FApp.tsx"
                style={{
                    width: "100%",
                    height: "500px",
                    border: 0,
                    borderRadius: "4px",
                    overflow: "hidden",
                }}
                title="tweakpane-test"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
    );
};

export default CodeSandbox;
