import { createBrowserRouter } from "react-router-dom";
import { Product } from "../pages/product";
import { Products } from "../pages/products";
import { Cart } from "../pages/cart";
import { Not } from "../pages/not-found";
const router = createBrowserRouter([
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/not-found",
    element: <Not />,
  },
]);
export default router;
