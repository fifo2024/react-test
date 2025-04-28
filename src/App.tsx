import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/containers/Layout";
import "@/styles/globals.scss";

import "@/styles/cmdk/vercel.scss";
import "@/styles/cmdk/linear.scss";
import "@/styles/cmdk/raycast.scss";
import "@/styles/cmdk/framer.scss";
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
const SecretProject = lazy(() => import("@/containers/SecretProject"));
const ReactCmdk = lazy(() => import("@/containers/ReactCmdk"));
const Cmdk = lazy(() => import("@/containers/Cmdk"));
const SandPack = lazy(() => import("@/containers/SandPack"));
const GridGallery = lazy(() => import("@/containers/GridGallery"));
const CodeSandbox = lazy(() => import("@/containers/CodeSandbox"));
const Html2Pdf = lazy(() => import("@/containers/Html2Pdf"));
const HoverCard = lazy(() => import("@/containers/HoverCard"));
const MovieSite = lazy(() => import("@/containers/MovieSite"));

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
                    <Route
                        path={"secret-project"}
                        element={<SecretProject />}
                    />
                    <Route path={"react-cmdk"} element={<ReactCmdk />} />
                    <Route path={"cmdk"} element={<Cmdk />} />
                    <Route path={"sand-pack"} element={<SandPack />} />
                    <Route path={"grid-gallery"} element={<GridGallery />} />
                    <Route path={"codesandbox"} element={<CodeSandbox />} />
                    <Route path={"html2pdf"} element={<Html2Pdf />} />
                    <Route path={"hover-card"} element={<HoverCard />} />
                    <Route path={"movie"} element={<MovieSite />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
