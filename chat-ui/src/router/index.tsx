import { createBrowserRouter } from "react-router-dom";
import GuestContainerTab from "@/components/auth/GuestContainerTab";
import { Home } from "../pages/Home";
import AuthenticationGuard from "./AuthenticationGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthenticationGuard>
        <Home />
      </AuthenticationGuard>
    ),
    children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "/specialty",
      //     element: <Specialty />,
      //   },
      //   {
      //     path: "/employees",
      //     element: <Employees />,
      //   },
      //   {
      //     path: "/doctor",
      //     element: <Doctor />,
      //   },
      //   {
      //     path: "/reception",
      //     element: <Reception />,
      //   },
      //   {
      //     path: "/create-booking/:id",
      //     element: <CreateBooking />,
      //   },
      //   {
      //     path: "/reports",
      //     element: <Reports />,
      //   },
    ],
  },
  {
    path: "/guest",
    element: <GuestContainerTab />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
