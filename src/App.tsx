import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/containers/Layout";

import "./App.css";

const Home = lazy(() => import("@/containers/Home"));
const About = lazy(() => import("@/containers/About"));
const Page404 = lazy(() => import("@/containers/Page404"));
const Allotment = lazy(() => import("@/containers/Allotment"));
const AllotmentNested = lazy(
    () => import("@/containers/Allotment/index-nested")
);
const AllotmentClosable = lazy(
    () => import("@/containers/Allotment/index-closable")
);
const AllotmentReset = lazy(() => import("@/containers/Allotment/index-reset"));
const AllotmentVisible = lazy(
    () => import("@/containers/Allotment/index-visible")
);
const CarAnimation = lazy(() => import("@/containers/CarAnimation"));
const TweakPane = lazy(() => import("@/containers/TweakPane"));
const SignIn = lazy(() => import("@/containers/SignIn"));

function App() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={"about"} element={<About />} />
                    <Route path={"allotment"} element={<Allotment />} />
                    <Route
                        path={"allotment-nested"}
                        element={<AllotmentNested />}
                    />
                    <Route
                        path={"allotment-closable"}
                        element={<AllotmentClosable />}
                    />
                    <Route
                        path={"allotment-reset"}
                        element={<AllotmentReset />}
                    />
                    <Route
                        path={"allotment-visible"}
                        element={<AllotmentVisible />}
                    />
                    <Route path={"car-animation"} element={<CarAnimation />} />
                    <Route path={"tweak-pane"} element={<TweakPane />} />
                    <Route path={"sign-in"} element={<SignIn />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
