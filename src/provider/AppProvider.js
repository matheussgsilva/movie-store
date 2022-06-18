import React, { useEffect, useState } from "react"

export const AppContext = React.createContext({})
export const CartContext = React.createContext({})

export const AppProvider = (props) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem("favoriteMovies")
    if (userStorage) {
      setFavoriteMovies(JSON.parse(userStorage))
    } else {
        setFavoriteMovies([])
    }
  }, [])

  return (
    <AppContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext)

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