import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router";
import Router from "./config/router";
import "@fontsource/outfit";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
