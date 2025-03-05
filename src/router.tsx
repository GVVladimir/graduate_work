import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ContactsAndMap from "./pages/Contacts";
import ProductSelections from "./pages/ProductSelection";

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
    element: <ProductSelections data={{
      id: 0,
      vendorСode: "",
      inStock: 0,
      title: "",
      description: "",
      imgUrl: "",
      stars: 0,
      sizes: [],
      price: 0,
      oldPrice: 0,
      gender: "",
      color: "",
      compound: "",
      country: ""
    }} />,
  },
  {
    path: "/OurTeam",
    element: <OurTeam />,
  },
  {
    path: "/Contacts",
    element: <ContactsAndMap />,
  },
]);
export default router;
