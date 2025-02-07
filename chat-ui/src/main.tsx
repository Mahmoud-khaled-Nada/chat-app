import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
    <ToastContainer autoClose={3000} />
  </ReduxProvider>
);
