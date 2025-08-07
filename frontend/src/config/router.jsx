import { Routes, Route } from "react-router";
import Portfolio from "../pages/portfolio";
import About from "../pages/about";
import Layout from "../pages/Layout";
import Experience from "../pages/experience";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Portfolio />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Experience />} path="/experience" />
      </Route>
    </Routes>
  );
};

export default Router;
