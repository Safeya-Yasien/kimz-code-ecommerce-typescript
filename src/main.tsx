import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
