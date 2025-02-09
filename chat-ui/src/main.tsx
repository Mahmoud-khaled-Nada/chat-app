import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "./components/ui/sonner";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </ReduxProvider>
);
