import React, { useEffect, useState } from "react"

export const PriceContext = React.createContext({})

export const PriceProvider = (props) => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem("price")
    if (userStorage) {
      setPrice(JSON.parse(userStorage))
    } else {
        setPrice([])
    }
  }, [])

  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {props.children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => React.useContext(PriceContext)