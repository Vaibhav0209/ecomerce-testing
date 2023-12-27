import { createContext, useState, useContext } from "react";
// const intialState = {
//   cart: [],
//   cartItemCount: () => 0,
//   addToCart: () => {},
//   removeFromCart: () => null,
//   increaseQuantity: () => null,
//   decreaseQuantity: () => null,
// };

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const addToCart = (product) => {
    const productExist = cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (productExist != -1) {
      increaseQuantity(product);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.product.id !== product.id));
  };

  const increaseQuantity = (product) => {
    const copy = cart.slice();
    const index = copy.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      copy[index].quantity += 1;
      setCart(copy);
    }
  };

  const decreaseQuantity = (product) => {
    const copy = cart.slice();
    const index = copy.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      if (copy[index].quantity == 1) {
        removeFromCart(product);
      } else {
        copy[index].quantity -= 1;
        setCart(copy);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        cartItemCount: cartItemCount,
        removeFromCart: removeFromCart,
        addToCart: addToCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
