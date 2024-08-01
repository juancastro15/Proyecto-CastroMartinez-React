import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega un producto al carrito
  const addToCart = (product) => {
    let exists = isInCart(product.id);
    if (exists) {
      let newArray = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity, // Acumulando la cantidad
          };
        } else {
          return item;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  // Limpia el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Verifica si el producto ya está en el carrito
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  // Elimina un producto del carrito
  const deleteProduct = (id) => {
    let newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  // Obtiene la cantidad de un producto por ID
  const getQuantityById = (id) => {
    let foundProduct = cart.find((product) => product.id === id);
    return foundProduct?.quantity;
  };

  // Obtiene el precio total de todos los productos en el carrito
  const getTotalPrice = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  // Obtiene el número total de productos únicos en el carrito
  const getTotalItems = () => {
    return cart.length;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
