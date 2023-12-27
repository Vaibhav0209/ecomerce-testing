import { useContext, useEffect, useState } from "react";
import Item from "../../components/item/Item";
import { useSearchParams } from "react-router-dom";
import FETCHAPI from "../../serivces/api";
import Loading from "../../components/loader/Loading";
import { CartContext } from "../../context/context";
const Products = () => {
  const cart = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q");

  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const products = searchQuery
        ? await FETCHAPI.fetchProduct(searchQuery)
        : await FETCHAPI.fetchAll();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!loading && searchQuery && products.length === 0 ? (
        <div className="md:container text-center mt-9">
          <p className="text-3xl">No data found </p>
        </div>
      ) : loading ? (
        <Loading />
      ) : (
        <div className="grid w-full bg-slate-50 place-items-center p-2 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(products)
            ? products?.map((product, index) => (
                <Item key={index} data={product} addToCart={cart.addToCart} />
              ))
            : null}
        </div>
      )}
    </>
  );
};
export { Products };
