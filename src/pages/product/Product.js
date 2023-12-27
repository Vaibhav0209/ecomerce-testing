import { useContext, useEffect, useState } from "react";
import FETCHAPI from "../../serivces/api";
import { useParams, Link } from "react-router-dom";
import Loading from "../../components/loader/Loading";
import { CartContext } from "../../context/context";
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const product = await FETCHAPI.fetchId(productId);
      setProduct(product);
      setLoading(false);
    } catch (error) {
      console.log("Error detected :-", error);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center items-center h-screen bg-slate-100">
          <div className="grid grid-cols-1 max-h-fit md:grid-cols-3 w-fit m-4 sm:w-4/6 md:w-4/5 py-7 lg:w-1/2 sm:p-10 place-items-center rounded-xl bg-white">
            <img
              src={product.image}
              // src=""
              alt="Product image"
              className="col-span-1 h-48 md:h-auto"
            />
            <div className="col-span-2 ml-6 mt-5 md:mt-0">
              <h4 className="sm:text-xl font-bold text-sm">{product.title}</h4>
              <p className="text-gray-500 mt-4">{product.description}</p>
              <div className="flex justify-between mt-5 px-10">
                <p className="font-medium text-lg self-baseline ">
                  $ {product.price}
                </p>
                <span
                  onClick={() => addToCart(product)}
                  className="cursor-pointer bg-[#0EA5E9] rounded-full shadow-lg flex justify-center items-center p-2"
                >
                  <box-icon name="cart" color="white" size="sm"></box-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export { Product };
