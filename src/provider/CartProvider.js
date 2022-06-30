import React, { useEffect, useState } from "react"

export const CartContext = React.createContext({})

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem("cartMovies")
    if (userStorage) {
      setCart(JSON.parse(userStorage))
    } else {
        setCart([])
    }
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext)