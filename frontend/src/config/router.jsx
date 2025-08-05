import { Routes, Route } from "react-router";
import Portfolio from "../pages/portfolio";

const Router = () => {
  return (
    <Routes>
      <Route element={<Portfolio />} path="/" />
    </Routes>
  );
};

export default Router;
