import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "@store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
