/**
 * @file App UI
 */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useUserStore, UserState } from "@/stores";

function App() {
    const userInfo = useUserStore((state: UserState) => state.user);

    return (
        <div className="App">
            <Outlet />
        </div>
    );
}

export default React.memo(App);
