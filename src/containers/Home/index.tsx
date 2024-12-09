/**
 * @file Home index
 * @author zhaoyadong<zhaoyadong@baidu.com>
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./HomeIndex";

export default function Home() {
    return (
        <Routes>
            <Route index element={<Index />} />
        </Routes>
    );
}
