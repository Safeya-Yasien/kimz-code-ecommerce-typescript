import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { MainLayout } from "@layouts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
