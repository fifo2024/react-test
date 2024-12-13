import { scan } from "react-scan"; // import this BEFORE react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

if (typeof window !== "undefined") {
    scan({
        enabled: true,
        log: true, // logs render info to console (default: false)
    });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
