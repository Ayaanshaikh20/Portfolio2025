import { Routes, Route } from "react-router";
import Layout from "../layout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/" />
    </Routes>
  );
};

export default Router;
