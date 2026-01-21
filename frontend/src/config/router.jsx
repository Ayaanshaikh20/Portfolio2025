import { Routes, Route } from "react-router";
import Layout from "../layout";
import Contact from "../pages/contact";
import AppShell from "../appShell";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppShell>
            <Layout />
          </AppShell>
        }
      />

      <Route
        path="/contact"
        element={
          <AppShell>
            <Contact />
          </AppShell>
        }
      />
    </Routes>
  );
};

export default Router;
