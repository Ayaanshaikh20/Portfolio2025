import { Routes, Route } from "react-router";
import Portfolio from "../pages/portfolio";
import About from "../pages/about";
import AuthLayout from "../pages/authLayout";

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<Portfolio />} path="/" />
        <Route element={<About />} path="/about" />
      </Route>
    </Routes>
  );
};

export default Router;
