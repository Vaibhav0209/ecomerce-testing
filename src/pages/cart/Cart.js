import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";
import { useContext } from "react";

const SHIPPING_CHARGE = 25;
const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const Total = (cartTotal + SHIPPING_CHARGE).toFixed(2);
  return (
    <>
      {cart.length < 1 ? (
        <div className="flex w-screen h-screen justify-center md:mt-14 md:items-baseline items-center">
          <div className="shadow-md bg-white  h-auto p-10 w-1/2 flex justify-center items-center flex-col rounded-lg">
            <p className="text-gray-600 font-semibold text-2xl mb-5">
              Your cart is Empty
            </p>
            <Link to="/">
              <button className="bg-blue-500 mt-4 px-8 rounded-md text-lg py-2 text-white ">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className="w-1/2 bg-white mt-7 mx-auto text-center p-4 rounded text-2xl font-semibold">
            Order Summry
          </h2>
          <div className="flex justify-center items-center h-auto mt-4 ">
            <div className="grid place-content-center rounded-lg grid-cols-3 w-1/2 bg-white p-3">
              {cart?.map((item, index) => {
                return (
                  <>
                    <div className="col-span-1">
                      <img
                        src={item.product.image}
                        alt="product image"
                        className="h-28"
                      />
                    </div>
                    <div className="col-span-1">
                      <p className="text-gray-500 font-semibold">
                        {item.product.title}
                      </p>
                      <p className="font-semibold">${item.product.price}</p>
                    </div>
                    <div className="col-span-1 flex justify-center items-center flex-col">
                      <div className="flex gap-3 justify-center items-center">
                        <p
                          onClick={() => increaseQuantity(item.product)}
                          className="text-2xl rounded cursor-pointer bg-blue-500 text-white h-8 justify-center items-center w-8 flex"
                        >
                          +
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() => decreaseQuantity(item.product)}
                          className="text-2xl rounded cursor-pointer bg-blue-500 text-white h-8 justify-center items-center w-8 flex"
                        >
                          -
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product)}
                        className="bg-blue-500 mt-4 px-8 w-32 rounded-md text-lg py-2 text-white "
                      >
                        Remove
                      </button>
                    </div>
                    <hr className="col-span-4 mt-4 mb-5" />
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-80 fixed right-6 top-40 rounded-lg h-96  bg-white flex-col flex  justify-around">
            <h4 className="text-2xl font-semibold mt-5 self-start ml-6">
              Payment Summary
            </h4>
            <hr className="mx-5" />
            <div className="flex justify-between p-5">
              <p className="text-2xl">Cost</p>
              <p className="text-2xl">{cartTotal}</p>
            </div>
            <div className="flex justify-between p-5">
              <p className="text-2xl">Shipping </p>
              <p className="text-2xl"> {SHIPPING_CHARGE}</p>
            </div>
            <div className="flex justify-between p-5">
              <p className="text-2xl">Total</p>
              <p className="text-2xl">{Total}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export { Cart };
