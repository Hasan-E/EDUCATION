import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RouterProvider } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
