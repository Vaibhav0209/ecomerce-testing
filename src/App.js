// import Search from "./components/searchBar/Search";
import {
  Route,
  Routes,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import Form from "./components/Form/Form";
import { Navbar } from "./components/navbar/Navbar";
import { Products } from "./pages/products";
import { Cart } from "./pages/cart";
import { Not } from "./pages/not-found";
import { Product } from "./pages/product";
import { CartContext } from "./context/context";
import { useContext } from "react";
function App() {
  const useCart = useContext(CartContext);
  const navigate = useNavigate();
  const onSearch = (search) => {
    navigate(`/?${createSearchParams({ q: search })}`);
  };
  return (
    <>
      {/* <Search /> */}
      <Navbar onSearch={onSearch} cartItem={useCart.cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </>
  );
}

export default App;
