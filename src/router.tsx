import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductSelections from "./pages/ProductSelection";
import OurTeam from "./pages/OurTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/ProductSelection",
    element: <ProductSelections />,
  },
  {
    path: "/OurTeam",
    element: <OurTeam />,
  },
]);
export default router;
